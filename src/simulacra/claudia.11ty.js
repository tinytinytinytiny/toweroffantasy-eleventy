module.exports = {
	data() {
		return {
			name: 'Claudia',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Guren Blade',
				element: 'physical',
				resonance: 'damage',
				charge: 12,
				shatter: 7.5,
				materials: [
					'red',
					'blue'
				]
			},
			skills: {
				normal: [
					'quick-slash',
					'jumping-strike',
					'cyclone',
					'diving-edge',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'leap-attack'
				],
				skill: ['roam'],
				discharge: ['unbridled-fury']
			},
			recChips: [
				['claudia', [2, 4]],
				['samir', 2],
				['crow', 2],
				['pepper', 3],
				['provocateurs', 3]
			],
			traits: {
				gender: 'Female',
				height: '170 cm',
				birthplace: 'Hagarge',
				horoscope: 'Capricorn',
				birthday: 'Jan 16'
			},
			gifts: {
				categories: [
					'everyday-items',
					'rare-items',
					'decorations'
				],
				items: [
					[80, ['snowglobe', 'pepper-figure']],
					[60, ['seal', 'tata-cards', 'cat-figure', 'mia-figure', 'prince-tata-figure', 'ufo']],
					[30, ['suit', 'juice-pouch', 'vial', 'perfume', 'spider-figure', 'elf-figure']],
					[15, ['photo', 'photo-album', 'scarf', 'flowers', 'harmonica', 'plant']]
				]
			}
		};
	},
	render({ name, weapon }) {
		return {
			awakening: [
				'After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by **8%** for **25** seconds (stacks up to **3** times; each successful skill or discharge use can only grant a single stack).',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by **10%** for **15** seconds. Stack up to **1** time.',
				'Increase the current weapon’s base HP growth by **32%**.',
				'Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by **20%** for **15** seconds (cannot stack).',
				`Hitting the same target no longer reduces the damage dealt. After using ${weapon.name} or a discharge skill, applies **1** stack of War Wounds to all targets within 8 meters.`
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'Hide for **1** seconds upon dodging.'
				},
				{
					affinity: 4000,
					effect: 'Hide for **1.5** seconds upon dodging.'
				}
			]
		};
	}
};
