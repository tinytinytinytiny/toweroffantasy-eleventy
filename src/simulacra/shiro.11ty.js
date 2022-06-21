module.exports = {
	data() {
		return {
			name: 'Shiro',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Chakram of the Seas',
				element: 'physical',
				resonance: 'damage',
				shatter: 10,
				charge: 6,
				materials: [
					'green',
					'black'
				],
				awakening: [
					'Increase damage dealt to and all elemental shattering effects on targets within **Full Bloom**’s range by **30%**.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Increase shatter by **15%** and reset all weapon skill cooldowns upon shattering the target’s shield. Can only be triggered once every **30** seconds.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Attacking a grievous target extends the duration of grievous by an additional **7** seconds (only take effect once for the same effect).',
					'After using **Full Bloom**, grant a 100% crit chance for the next **8** seconds.'
				]
			},
			skills: {
				normal: [
					'rapid-throw',
					'aerial-discharge',
					'scatter',
					'air-spin',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'waning-moon'
				],
				skill: ['full-bloom'],
				discharge: ['air-spirit']
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by **10%** and physical ATK by an additional **7%** for **8** seconds. Cooldown: **16** seconds.'
				},
				{
					affinity: 4000,
					effect: 'When Shiro uses a weapon skill/discharge skill, increase all kinds of ATK by **16%** and physical ATK by an additional **10%** for **8** seconds. Cooldown: **16** seconds.'
				}
			],
			recChips: [
				['king', 2],
				['shiro', 2],
				['samir', 2],
				['provocateurs', 3],
				['offensive-logic', 3]
			],
			traits: {
				gender: 'Female',
				height: '163 cm',
				birthplace: 'Warren',
				horoscope: 'Virgo',
				birthday: 'Sep 22'
			},
			gifts: {
				categories: ['metalware', 'collectibles', 'rare-items'],
				items: [
					[80, ['kitchenware', 'seal']],
					[60, ['mia-figure', 'gold-coin', 'fox-figure', 'ufo', 'bear-figure', 'snowglobe', 'present', 'pearl', 'linye-figure']],
					[30, ['vial', 'necklace', 'toolbox', 'strange-fragment']],
					[15, ['dumbbells', 'harmonica', 'photo', 'strange-plant']]
				]
			}
		};
	}
};
