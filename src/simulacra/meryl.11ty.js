module.exports = {
	data() {
		return {
			name: 'Meryl',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Rosy Edge',
				element: 'ice',
				resonance: 'tank',
				shatter: 12,
				charge: 4,
				materials: [
					'red',
					'black'
				],
				awakening: [
					'Increase shatter by **15%** and restore **10%** of HP after shattering the target’s shield.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Obtain Health Ice Shield with **10%** maximum health value when the weapon is switched; cooldown takes **20** seconds; Ice Shield lasts up to **10** seconds.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Increase damage and shatter by **50%** while the shield is active.',
					'Health Ice Shield with a health value of up to **20%** is obtained when switched to the weapon. The shield provides immunity to control effects; cooldown takes **20** seconds; Ice Shield lasts up to **10** seconds.'
				]
			},
			skills: {
				normal: [
					'heavy-cleave',
					'aerial-strike',
					'rising-slash',
					'moonset-slash',
					'sneak-attack',
					'whirlwind'
				],
				dodge: [
					'dodge',
					'devastate',
					'crescent-slash'
				],
				skill: ['blizzard'],
				discharge: ['frost-barrier']
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'Reduce frost damage received by Meryl by **20%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**.'
				},
				{
					affinity: 4000,
					effect: 'Reduce frost damage received by Meryl by **25%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**.\n\n<abbr title="China Exclusive" class="china-badge">CN</abbr> Meryl takes 25% less ice damage, is immune to frostbite, and is frozen for 50% less time. Meryl’s surroundings will freeze.'
				}
			],
			recChips: [
				['king', 2],
				['shiro', 2],
				['bullseye', 3],
				['offensive-logic', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '170 cm',
				birthplace: '???',
				horoscope: 'Libra',
				birthday: 'Oct 10'
			},
			gifts: {
				categories: ['metalware', 'rare-items'],
				items: [
					[80, ['seal']],
					[60, ['gold-coin', 'mia-figure', 'fox-figure', 'snowglobe', 'kitchenware', 'ufo', 'linye-figure']],
					[30, ['necklace', 'vial']],
					[15, ['photo', 'harmonica', 'strange-plant']]
				]
			}
		};
	}
};
