module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Nightingale’s Feather',
				element: 'physical',
				resonance: 'damage',
				charge: 10,
				shatter: 6,
				materials: [
					'green',
					'blue'
				]
			},
			skills: {
				normal: [
					'quickdraw',
					'charged-arrow',
					'arrow-rain',
					'air-volley'
				],
				dodge: [
					'dodge',
					'loaded-arrow'
				],
				skill: ['piercing-shot'],
				discharge: ['explosive-barrage']
			},
			recChips: [
				['samir', 2],
				['claudia', 2],
				['crow', 2],
				['pepper', 3],
				['provocateurs', 3]
			],
			traits: {
				gender: 'Female',
				height: '163 cm',
				birthplace: 'HT201 Sanctuary',
				horoscope: 'Taurus',
				birthday: 'May 8'
			},
			gifts: {
				categories: [
					'decorations',
					'collectibles',
					'rare-items'
				],
				items: [
					[80, ['snowglobe', 'seal']],
					[60, ['mia-figure', 'gold-coin', 'fox-figure', 'cat-figure', 'ufo', 'pepper-figure', 'kitchenware', 'prince-tata-figure', 'linye-figure']],
					[30, ['necklace', 'vial', 'spider-figure', 'elf-figure']],
					[15, ['photo-album', 'harmonica', 'scarf', 'photo', 'plant', 'strange-plant']]
				]
			}
		};
	},
	render({ getData, collections: { relics }, string: { skills }, name, page }) {
		return {
			awakening: [
				`Restore 1 dodge attempt every fifth normal attack or after using ***${skills[page.fileSlug]['piercing-shot'].name}***.`,
				'Increase the current weapon’s base ATK growth by **10%**.',
				'Increase headshot damage by **30%**.',
				'Increase the current weapon’s base ATK growth by **20%**.',
				'Dodge skills inflict grievous on targets for **7** seconds.',
				'Increase crit rate by **30%** and crit damage by **50%** against grievous targets.'
			],
			mimicEffects: [
				{
					affinity: 200,
					effect: `Unlock profile avatar ${name}`
				},
				{
					affinity: 1200,
					effect: `When ${name} puts the ${getData(relics, 'jetpack').name} or the ${getData(relics, 'jetboard').name} away, increase speed by **8%** for **12** seconds. Cooldown: **60** seconds.`
				},
				{
					affinity: 4000,
					effect: `When ${name} puts the ${getData(relics, 'jetpack').name} or the ${getData(relics, 'jetboard').name} away, increase speed by **15%** for **12** seconds. Cooldown: **60** seconds.`
				}
			]
		};
	}
};
