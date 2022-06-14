import createUniqueArray from './_utils/create-unique-array.js';
import clamp from './_utils/clamp.js';
import buffs from './_data/buffs.js';

export default async(request, context) => {
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
		const critRate = clamp(0, Number(params.get('critical-rate') || 0), 100) * 0.01;
		const critDmg = Math.max(0, Number(params.get('critical-dmg') || 0)) * 0.01;
		let dmgFromNonCrit = 1 - critRate;
		let dmgFromCrit = (1 + critDmg) * critRate;
		const arcCore = 1 + (clamp(0, Number(params.get('arc-core-dmg')), 100) * 0.01);
		const enemyEleResist = [0, 0.5, 0.65][clamp(0, params.get('elemental-resistance') || 0, 2)];
		const enemyEleWeakness = [0, 0.3, 0.5, 0.75][clamp(0, params.get('elemental-weakness') || 0, 3)];
		const otherMultipliers = clamp(0, Number(params.get('other-multipliers')), 100) * 0.01;
		const resoBuff = buffs.resonance[params.get('resonance')] || 0;
		const mimicBuff = buffs.mimic[params.get('mimic-passive')] || 0;
		// i will forget how all code below this line works the day after i write it
		const wepBuff = createUniqueArray({
			array: [
				params.get('wep1'),
				params.get('wep2'),
				params.get('wep3')
			],
			alphaOnly: true,
			filter(item) {
				return item in buffs.bonusWeapon;
			}
		}).map(wep => 1 + (buffs.weapon[wep] || 0))
		.reduce((prev, curr) => prev * curr, 1);
		const bonusWepEffect = buffs.bonusWeapon[
			[
				params.get('wep1'),
				params.get('wep2'),
				params.get('wep3')
			].find(wep => wep in buffs.bonusWeapon)
		] || 0;
		const chips = createUniqueArray({
			array: [params.get('chip1') || '', params.get('chip2') || ''],
			filter(item, index) {
				return Boolean(item.index > 0 && item.endsWith('4'));
			}
		});
		const chipBuffs = [
			buffs.chip[chips[0]]?.multipliers[params.get('chip1-star')] || 0,
			buffs.chip[chips[1]]?.multipliers[params.get('chip2-star')] || 0
		];

		chips.forEach((item, i) => {
			switch (item) {
				case 'crow2':
				dmgFromCrit = ((1 + critDmg) * critRate * 0.4) + ((1 + critDmg + chipBuffs[i]) * critRate * 0.6);
				chipBuffs[i] = 0;
				break;
				case 'samir4':
				dmgFromNonCrit *= (1 + chipBuffs[i]);
				chipBuffs[i] = buffs.chip.samir2.multipliers[params.get(`chip${i + 1}-star`)];
				break;
				case 'shiro2':
				chipBuffs[i] *= 0.5;
				break;
				default:
			}
		});

		const totalDmg = 1 * (dmgFromNonCrit + dmgFromCrit) * (1 - enemyEleResist) * (1 + enemyEleWeakness) * wepBuff * (1 + bonusWepEffect) * arcCore * (1 + mimicBuff) * (1 + resoBuff) * (1 + chipBuffs[0]) * (1 + chipBuffs[1]) * heavilyWounded * (1 + otherMultipliers);
		const totalDmgPercent = Math.round(totalDmg * 10000) / 100;
		const footnote = chips
			.map(chip => buffs.chip[chip]?.footnote || '')
			.filter(footnote => footnote.length)
			.join(' ');

		setCookie('criticalRate', clamp(0, Number(params.get('critical-rate')), 100));
		setCookie('criticalDmg', Math.max(0, Number(params.get('critical-dmg'))));
		setCookie('mimicPassive', params.get('mimic-passive'));
		setCookie('resonance', params.get('resonance'));

		let wepWithBonusEffect;
		const weps = createUniqueArray({
			array: [
				params.get('wep1'),
				params.get('wep2'),
				params.get('wep3')
			],
			alphaOnly: true
		});
		weps.forEach((wep, i) => {
			if (wep in buffs.bonusWeapon) {
				if (wepWithBonusEffect) {
					wep = '';
				} else {
					wepWithBonusEffect = wep;
				}
			}

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
