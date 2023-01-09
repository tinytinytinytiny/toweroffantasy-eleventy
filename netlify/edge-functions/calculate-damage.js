import removeDuplicates from './_utils/remove-duplicates.js';
import clamp from './_utils/clamp.js';
import map from './_utils/map.js';
import toPercent, { toPercentOver100 } from './_utils/to-percent.js';
import BUFFS from './_data/buffs.js';

export default async (request, context) => {
	let url = new URL(request.url);

	const setCookie = (name, value) => {
		context.cookies.set({
			name,
			value,
			path: '/',
			httpOnly: true,
			secure: true,
			sameSite: 'Lax'
		});
	};

	if (request.method === 'POST') {
		const body = await request.clone().formData();
		const params = new Map(body);

		const heavilyWounded = (params.get('wounded')) ? 1.2 : 1;

		const critRate = toPercent(params.get('critical-rate'));
		const critDmg = toPercentOver100(params.get('critical-dmg'));
		let dmgFromNonCrit = 1 - critRate;
		let dmgFromCrit = (1 + critDmg) * critRate;

		const arcCore = 1 + toPercent(params.get('arc-core-dmg'));

		const enemyEleResist = map(
			params.get('elemental-resistance'),
			[0, 0.5, 0.65]
		);
		const enemyEleWeakness = map(
			params.get('elemental-weakness'),
			[0, 0.3, 0.5, 0.75]
		);

		const otherMultipliers = toPercent(params.get('other-multipliers'));
		const resoBuff = BUFFS.resonance[params.get('resonance')] || 0;
		const mimicBuff = BUFFS.mimic[params.get('mimic-passive')] || 0;

		// i will forget how all code below this line works the day after i write it
		const selectedWeps = [
			params.get('wep1'),
			params.get('wep2'),
			params.get('wep3')
		];
		const selectedChips = [
			params.get('chip1') || '',
			params.get('chip2') || ''
		];

		const wepBuff = removeDuplicates({
			array: selectedWeps,
			filter: (item) => item in BUFFS.bonusWeapon
		})
			.map(wep => 1 + (BUFFS.weapon[wep] || 0))
			.reduce((prev, curr) => prev * curr, 1);

		const bonusWepEffect = BUFFS.bonusWeapon[selectedWeps.find(wep => wep in BUFFS.bonusWeapon)] || 0;

		const chips = removeDuplicates({
			array: selectedChips,
			compareNumbers: true,
			filter: (_, index, array) => index > 0 && array.find(entry => entry.endsWith('4'))
		});

		const chipBuffs = [
			BUFFS.chip[chips[0]]?.multipliers[params.get('chip1-star')] || 0,
			BUFFS.chip[chips[1]]?.multipliers[params.get('chip2-star')] || 0
		];

		chips.forEach((item, i) => {
			switch (item) {
				case 'crow2':
					dmgFromCrit = ((1 + critDmg) * critRate * 0.4) + ((1 + critDmg + chipBuffs[i]) * critRate * 0.6);
					chipBuffs[i] = 0;
					break;
				case 'samir4':
					dmgFromNonCrit *= (1 + chipBuffs[i]);
					chipBuffs[i] = BUFFS.chip.samir2.multipliers[params.get(`chip${i + 1}-star`)];
					break;
				case 'shiro2':
					chipBuffs[i] *= 0.5;
					break;
				default:
			}
		});

		const totalDmg = 1
			* (dmgFromNonCrit + dmgFromCrit)
			* (1 - enemyEleResist)
			* (1 + enemyEleWeakness)
			* wepBuff
			* (1 + bonusWepEffect)
			* arcCore
			* (1 + mimicBuff)
			* (1 + resoBuff)
			* (1 + chipBuffs[0])
			* (1 + chipBuffs[1])
			* heavilyWounded
			* (1 + otherMultipliers);
		const totalDmgPercent = Math.round(totalDmg * 10000) / 100;

		const footnote = chips
			.map(chip => BUFFS.chip[chip]?.footnote || '')
			.filter(footnote => footnote.length)
			.join(' ');

		setCookie(
			'criticalRate',
			clamp(0, Number(params.get('critical-rate')), 100)
		);
		setCookie(
			'criticalDmg',
			Math.max(0, Number(params.get('critical-dmg')))
		);
		setCookie('mimicPassive', params.get('mimic-passive'));
		setCookie('resonance', params.get('resonance'));

		removeDuplicates({
			array: selectedWeps,
			filter(item, _, array) {
				const wepsWithBonusEffect = array.filter(entry => entry in BUFFS.bonusWeapon);
				return Boolean(wepsWithBonusEffect.indexOf[item]);
			}
		}).forEach((wep, i) => {
			setCookie(`wep${i + 1}`, wep);
		});

		setCookie('chip1', chips[0]);
		setCookie('chip1Star', params.get('chip1-star') || 0);
		setCookie('chip2', chips[1]);
		setCookie('chip2Star', params.get('chip2-star') || 0);
		setCookie('arcCore', params.get('arc-core-dmg'));
		setCookie('otherMultipliers', params.get('other-multipliers'));
		setCookie('wounded', params.get('wounded') || '');
		setCookie('elementalResistance', params.get('elemental-resistance'));
		setCookie('elementalWeakness', params.get('elemental-weakness'));
		setCookie('totalDmg', totalDmgPercent);
		setCookie('totalDmgFootnote', encodeURIComponent(footnote));

		return new Response(null, {
			status: 302,
			headers: {
				location: url.pathname
			}
		});
	}

	return context.next();
};
