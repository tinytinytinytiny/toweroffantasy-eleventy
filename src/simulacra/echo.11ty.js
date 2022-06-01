module.exports = {
	data() {
		return {
			name: 'Echo',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Thunderous Halberd',
				element: 'electric',
				resonance: 'damage',
				awakening: [
					'Increase shatter by **15%**. After shattering the target’s shield, increase all teammates’ ATK by **15%** for **30** seconds. This cannot be stacked.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'After hitting a target with **Moonchase**, reduce their ATK by **5%** and increase the user’s ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to grievous targets.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					`Double stun duration from dodge skills.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> Double stun duration from forward dodge skills.`,
					'Discharge deals more damage the further it travels, up to **100%** more damage.'
				],
				charge: 7,
				shatter: 11,
				materials: [
					'electric',
					'red',
					'black'
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Echo'
				},
				// {
				// 	affinity: 600,
				// 	effect: 'Unlock communication []'
				// },
				{
					affinity: 1200,
					effect: 'When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **4%** (excluding Echo).'
				},
				// {
				// 	affinity: 2000,
				// 	effect: 'Unlock communication []'
				// },
				// {
				// 	affinity: 3000,
				// 	effect: 'Unlock communication []'
				// },
				{
					affinity: 4000,
					effect: 'When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **6%** (excluding Echo).'
				}
			],
			recChips: [
				['samir', 2],
				['king', 2],
				['shiro', 2],
				['tenet-guard', 2],
				['offensive-logic', 2]
			],
			traits: {
				gender: 'Female',
				height: '162 cm',
				birthplace: 'Warren',
				horoscope: 'Leo',
				birthday: 'Aug 14'
			},
			gifts: {
				categories: [
					'everyday-items',
					'limited-time-items',
					'games'
				],
				items: [
					['psp', 80],
					['tata-cards', 80],
					['gold-coin', 60],
					['ufo', 60],
					['pepper-figure', 60],
					['cat-figure', 60],
					['pearl', 60],
					['chess-set',	30],
					['suit', 30],
					['juice-pouch', 30],
					['diary', 30],
					['perfume', 30],
					['tata-figure', 60],
					['flowers', 15],
					['snack-box', 15],
					['trading-card', 15],
					['harmonica', 15],
					['scarf', 15]
				]
			}
		};
	}
};
