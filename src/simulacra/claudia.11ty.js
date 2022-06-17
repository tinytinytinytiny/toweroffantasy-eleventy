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
				],
				awakening: [
					'After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by **8%** for **25** seconds (stacks up to **3** times; each successful skill or discharge use can only grant a single stack).',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by **10%** for **15** seconds. Stack up to **1** time.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by **20%** for **15** seconds (cannot stack).',
					'Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies **1** stack of War Wounds to all targets within 8 meters.'
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
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'Hide for **1** seconds upon dodging.'
				},
				{
					affinity: 4000,
					effect: 'Hide for **1.5** seconds upon dodging.'
				}
			],
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
					['snowglobe', 80],
					['pepper-figure', 80],
					['seal', 60],
					['tata-cards', 60],
					['cat-figure', 60],
					['mia-figure', 60],
					['prince-tata-figure', 60],
					['ufo', 60],
					['suit', 30],
					['juice-pouch', 30],
					['vial', 30],
					['perfume', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo', 15],
					['photo-album', 15],
					['scarf', 15],
					['flowers', 15],
					['harmonica', 15],
					['plant', 15]
				]
			}
		};
	}
};
