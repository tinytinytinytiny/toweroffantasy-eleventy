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
				shatter: 11,
				charge: 7,
				materials: [
					'red',
					'black'
				],
				awakening: [
					'Increase shatter by **15%**. After shattering the target’s shield, increase all teammates’ ATK by **15%** for **30** seconds. This cannot be stacked.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'After hitting a target with **Moonchase**, reduce their ATK by **5%** and increase the user’s ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to grievous targets.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					`Double stun duration from dodge skills.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> Double stun duration from forward dodge skills.`,
					'Discharge deals more damage the further it travels, up to **100%** more damage.'
				]
			},
			skills: {
				normal: [
					'thrust',
					'jumping-strike',
					'crashing-drive',
					'spear-flurry',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'flying-kick',
					'lunging-smash'
				],
				skill: ['moonchaser'],
				discharge: ['thunderclap']
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **4%** (excluding Echo).'
				},
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
					[80, ['psp', 'tata-cards']],
					[60, ['gold-coin', 'ufo', 'pepper-figure', 'cat-figure', 'pearl', 'tata-figure']],
					[30, ['chess-set', 'suit', 'juice-pouch', 'diary', 'perfume']],
					[15, ['flowers', 'snack-box', 'trading-card', 'harmonica', 'scarf']]
				]
			}
		};
	}
};
