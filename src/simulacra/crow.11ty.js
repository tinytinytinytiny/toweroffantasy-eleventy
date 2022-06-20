module.exports = {
	data() {
		return {
			name: 'Crow',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Thunderblades',
				element: 'electric',
				resonance: 'damage',
				shatter: 6,
				charge: 8,
				materials: [
					'red',
					'blue'
				],
				awakening: [
					'Attacking targets from behind increases crit rate of all dual blades attacks by **40%**. Attacking an electrified target from behind increases crit rate by **100%** and crit damage by **30%**.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Increase damage by **30%** to targets with less than **60%** HP.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Triggering a Back Attack grants a 100% crit chance for the next **4** seconds and increases crit damage by **50%**. Cooldown: **10** seconds.',
					'After using a skill, increase volt damage dealt to the target by **20%** for **20** seconds.'
				]
			},
			skills: {
				normal: [
					'twin-blades',
					'sky-flurry',
					'rapid-lunge',
					'spiral-drive',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'flying-blades'
				],
				skill: ['returning-blades'],
				discharge: ['orbiting-blades']
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Crow is not in team play, increase damage dealt by **6%** and reduce damage received by **4%**.'
				},
				{
					affinity: 4000,
					effect: 'When Crow is not in team play, increase damage dealt by **10%** and reduce damage received by **6%** When Crow enters combat, increase damage dealt by **12%** for **12** seconds.'
				}
			],
			recChips: [
				['samir', [2, 4]],
				['claudia', 2],
				['crow', 2],
				['pepper', 3],
				['tenet-guard', 3]
			],
			traits: {
				gender: 'Male',
				height: '162 cm',
				birthplace: 'Astra',
				horoscope: 'Sagittarius',
				birthday: 'Dec 17'
			},
			gifts: {
				categories: [
					'everyday-items',
					'figurines',
					'limited-time-items'
				],
				items: [
					[80, ['tata-cards', 'tata-figure']],
					[60, ['gold-coin', 'cat-figure', 'mia-figure', 'pepper-figure', 'bear-figure', 'psp', 'linye-figure']],
					[30, ['suit', 'juice-pouch', 'perfume', 'pumpkin-figure', 'android-figure']],
					[15, ['flowers', 'snack-box', 'scarf']]
				]
			}
		};
	}
};
