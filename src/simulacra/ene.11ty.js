module.exports = {
	data() {
		return {
			name: 'Ene',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Pummeler',
				element: 'ice',
				resonance: 'tank',
				shatter: 10,
				charge: 6,
				materials: [
					'green',
					'black'
				]
			},
			skills: {
				normal: [
					'normal-attack',
					'focus-smash',
					'furious-strikes',
					'pummel',
					'shockwave',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'jumping-smash',
					'worldsplitter'
				],
				skill: ['outburst'],
				discharge: ['overwhelming-maul']
			},
			recChips: [
				['king', 2],
				['shiro', 2],
				['bullseye', 3],
				['offensive-logic', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '145 cm',
				birthplace: 'Crown',
				horoscope: 'Leo',
				birthday: 'Aug 17'
			},
			gifts: {
				categories: [
					'games',
					'decorations',
					'toys'
				],
				items: [
					[80, ['prince-tata-figure']],
					[60, ['pepper-figure', 'ufo', 'fox-figure', 'cat-figure', 'present', 'psp', 'pearl', 'snowglobe']],
					[30, ['chess-set', 'diary', 'cat-plush', 'tata-plush', 'spider-figure', 'elf-figure', 'robot-figure', 'bunny-doll']],
					[15, ['photo-album', 'trading-card', 'pinwheel', 'plant']]
				]
			}
		};
	},
	render({ name, string: { element } }) {
		return {
			awakening: [
				'Taunt nearby targets after switching to this weapon, preventing **1** instance of damage in the next **8** seconds and granting hyperbody for the next **8** seconds. Cooldown: **15** seconds.',
				'Increase the current weapon’s base HP growth by **10%**.',
				'After taking damage, reduce all damage received by **50%** for the next **6** seconds. Cooldown: **20** seconds.',
				'Increase the current weapon’s base HP growth by **20%**.',
				'Normal attacks **stun** targets for **2.5** seconds. Cooldown: **20** seconds.',
				`Discharge skills deal an additional **10%** damage to targets and increase ${element.ice.name} damage by an additional **10%** for **25** seconds.`
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When ${name} swims, climbs, or glides, reduce endurance consumption by **12%**.`
				},
				{
					affinity: 4000,
					effect: `When ${name} swims, climbs, or glides, reduce endurance consumption by **20%**.`
				}
			]
		};
	}
};
