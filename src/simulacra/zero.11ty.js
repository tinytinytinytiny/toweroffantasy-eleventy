module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Negating Cube',
				element: 'fire',
				resonance: 'support',
				shatter: 5,
				charge: 13,
				materials: [
					'green',
					'blue'
				]
			},
			skills: {
				normal: [
					'normal-attack',
					'energy-overflow',
					'omnium-missile',
					'omnium-shock',
					'energy-sentinel',
					'energy-missile'
				],
				dodge: ['soul-surge'],
				skill: ['omnium-shield'],
				discharge: ['omnium-wave']
			},
			recChips: [
				['samir', 4],
				['coco-ritter', [2, 4]],
				['pepper', 3],
				['explosive-core', 3]
			],
			traits: {
				gender: 'Male',
				height: '155 cm',
				birthplace: 'Banges',
				horoscope: 'Gemini',
				birthday: 'Jun 6'
			},
			gifts: {
				categories: [
					'limited-time-items',
					'games'
				],
				items: [
					[80, ['psp']],
					[60, ['gold-coin', 'tata-cards', 'pearl', 'cat-figure', 'ufo', 'tata-figure']],
					[30, ['chess-set', 'diary']],
					[15, ['trading-card', 'snack-box']]
				]
			}
		};
	},
	render({ name }) {
		return {
			awakening: [
				'Deal damage and produce a healing orb, which lasts for **20** seconds and restore HP of any teammate who picks it up equal to **60%** of ATK. **2**-second cooldown.',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'Reduce skill cooldown from **60** seconds to **30** seconds. Restore HP equal to **30%** of ATK every second while the shield is active.',
				'Increase the current weapon’s base HP growth by **32%**.',
				`Deal damage and produce a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **1.5%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.\n\n${this.china()} Deal damage and produce a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **2%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.`,
				'Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes.'
			],
			mimicEffects: [
				{
					affinity: 200,
					effect: `Unlock profile avatar ${name}`
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Unintelligible Dialogue]'
				},
				{
					affinity: 1200,
					effect: `When ${name} uses a weapon skill, reduce cooldown time for Relics in cooldown by **1.5** seconds. Can only activate for the same weapon **1** time every **5** seconds.`
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Rules]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Zero]'
				},
				{
					affinity: 4000,
					effect: `When ${name} uses a weapon skill, reduce cooldown time for Relics in cooldown by **3** seconds. Can only activate for the same weapon **1** time every **5** seconds.`
				}
			]
		};
	}
};
