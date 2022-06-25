module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Thunderous Halberd',
				element: 'electric',
				resonance: 'damage',
				shatter: 11,
				charge: 7,
				materials: [
					'red',
					'black'
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
	},
	render({ name, string: { skills, element }, page }) {
		return {
			awakening: [
				'Increase shatter by **15%**. After shattering the target’s shield, increase all teammates’ ATK by **15%** for **30** seconds. This cannot be stacked.',
				'Increase the current weapon’s base HP growth by **10%**.',
				`After hitting a target with ***${skills[page.fileSlug].moonchaser.name}***, reduce their ATK by **5%** and increase the user’s ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to ${element.physical.effectName.toLowerCase()} targets.`,
				'Increase the current weapon’s base ATK growth by **20%**.',
				`Double stun duration from dodge skills.\n\n${this.china()} Double stun duration from forward dodge skills.`,
				'Discharge deals more damage the further it travels, up to **100%** more damage.'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When teamed up with ${name}, allies within **10** meters around ${name} gain a damage boost of **4%** (excluding ${name}).`
				},
				{
					affinity: 4000,
					effect: `When teamed up with ${name}, allies within **10** meters around ${name} gain a damage boost of **6%** (excluding ${name}).`
				}
			]
		};
	}
};
