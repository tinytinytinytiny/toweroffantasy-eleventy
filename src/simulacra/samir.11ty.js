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
				shatter: 6,
				charge: 10.7,
				materials: [
					'red',
					'black'
				]
			},
			skills: {
				normal: [
					'dual-fire',
					'bullet-rain',
					'energy-burst',
					'phantom-kick'
				],
				dodge: [
					'dodge',
					'rising-kick'
				],
				skill: ['electro-field'],
				discharge: ['thunder-domain']
			},
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
					[60, ['fox-figure', 'psp', 'present', 'ufo', 'pearl', 'prince-tata-figure']],
					[30, ['tata-plush', 'chess-set', 'cat-plush', 'diary', 'robot-figure', 'bunny-doll']],
					[15, ['trading-card', 'pinwheel']]
				]
			}
		};
	},
	render({ name, string: { skills } }) {
		return {
			awakening: [
				'Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to **30%** of ATK to the target and nearby enemies. Cooldown: **0.5** seconds.',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'Increase crit rate to electrified targets by **40%**. Electrical explosions extend the duration of electrified effects by **0.5** seconds, up to a maximum of **5** seconds.',
				'Increase the current weapon’s base ATK growth by **32%**.',
				`Double the duration of ${skills.samir['electro-field'].name} and pull targets into the center of the attack.`,
				'Triggering an electrical explosion reduces skill cooldowns by 1 second.'
			],
			mimicEffects: [
				{
					affinity: 200,
					effect: `Unlock profile avatar ${name}`
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Solo Dance]'
				},
				{
					affinity: 1200,
					effect: `Grant **1** stack of Concentration for every **4** seconds when ${name} receives no damage. Each stack increases damage dealt by **3%**, and can stack up to **4** times. After being hit, ${name} loses **1** stack of Concentration, up to **1** stack per **1** second.`
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
					effect: `Grant **1** stack of Concentration for every **4** seconds when ${name} receives no damage. Each stack increases damage dealt by **4%**, and can stack up to **5** times. After being hit, ${name} loses **1** stack of Concentration, up to **1** stack per **2** second.`
				}
			]
		};
	}
};
