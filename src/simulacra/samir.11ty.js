module.exports = {
	data() {
		return {
			name: 'Samir',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Dual EM Stars',
				element: 'electric',
				resonance: 'damage',
				awakening: [
					'Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to **30%** of ATK to the target and nearby enemies. Cooldown: **0.5** seconds.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Increase crit rate to electrified targets by **40%**. Electrical explosions extend the duration of electrified effects by **0.5** seconds, up to a maximum of **5** seconds.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Double the duration of Electro Field and pull targets into the center of the attack.',
					'Triggering an electrical explosion reduces skill cooldowns by 1 second.'
				],
				charge: 10.7,
				shatter: 6,
				materials: [
					'electric',
					'red',
					'black'
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Samir'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Solo Dance]'
				},
				{
					affinity: 1200,
					effect: 'Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **3%**, and can stack up to **4** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **1** second.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Resonance]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Concerto]'
				},
				{
					affinity: 4000,
					effect: 'Grant **1** stack of Concentration for every **4** seconds when Samir receives no damage. Each stack increases damage dealt by **4%**, and can stack up to **5** times. After being hit, Samir loses **1** stack of Concentration, up to **1** stack per **2** second.'
				}
			],
			recChips: [
				['samir', [2, 4]],
				['claudia', 2],
				['crow', 2],
				['tenet-guard', 3],
				['pepper', 3]
			],
			traits: {
				gender: 'Female',
				height: '171 cm',
				birthplace: '???',
				horoscope: 'Taurus',
				birthday: 'May 20'
			},
			gifts: {
				categories: [
					'games',
					'toys'
				],
				items: [
					['fox-figure', 60],
					['psp', 60],
					['present', 60],
					['ufo', 60],
					['pearl', 60],
					['prince-tata-figure', 60],
					['tata-plush', 30],
					['chess-set', 30],
					['cat-plush', 30],
					['diary', 30],
					['robot-figure', 30,],
					['bunny-doll', 30],
					['trading-card', 15],
					['pinwheel', 15]
				]
			}
		};
	}
};
