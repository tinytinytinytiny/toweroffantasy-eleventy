module.exports = {
	data() {
		return {
			name: 'Zero',
			rarity: 5,
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
					['psp', 80],
					['gold-coin', 60],
					['tata-cards', 60],
					['pearl', 60],
					['cat-figure', 60],
					['ufo', 60],
					['tata-figure', 60],
					['chess-set',	30],
					['diary', 30],
					['trading-card', 15],
					['snack-box', 15]
				]
			},
			weapon: {
				name: 'Negating Cube',
				element: 'fire',
				resonance: 'support',
				awakening: [
					'Deal damage and produce a healing orb, which lasts for **20** seconds and restore HP of any teammate who picks it up equal to **60%** of ATK. **2**-second cooldown.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Reduce skill cooldown from **90** seconds to **45** seconds. Restore HP equal to **30%** of ATK every second while the shield is active.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Deal damage and produce a damage orb, which lsts for **20** seconds and increases ATK of any teammate who picks it up by **1.5%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> Deal damage and produce a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **2%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.',
					'Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes.'
				],
				charge: 13,
				shatter: 5,
				materials: [
					'fire',
					'green',
					'blue'
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Zero'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Unintelligible Dialogue]'
				},
				{
					affinity: 1200,
					effect: 'When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **1.5** seconds. Can only activate for the same weapon **1** time every **5** seconds.'
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
					effect: 'When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **3** seconds. Can only activate for the same weapon **1** time every **5** seconds.'
				}
			],
			recChips: [
				['samir', 4],
				['coco', 2],
				['coco', 4],
				['peppa', 3],
				['burstingcore', 3]
			]
		};
	}
};
