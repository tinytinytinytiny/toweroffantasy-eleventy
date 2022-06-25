module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Staff of Scars',
				element: 'electric',
				resonance: 'support',
				shatter: 4,
				charge: 10,
				materials: [
					'green',
					'blue'
				]
			},
			skills: {
				normal: [
					'normal-attack',
					'soaring-barrage',
					'moonfall',
					'focused-assault'
				],
				dodge: [
					'dodge',
					'surge',
					'tesseract'
				],
				skill: ['sanctuary'],
				discharge: ['swift-deliverance']
			},
			recChips: [
				['coco-ritter', [2, 4]],
				['pepper', 4],
				['tenet-guard', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '160 cm',
				birthplace: 'Banges',
				horoscope: 'Cancer',
				birthday: 'Jul 9'
			},
			gifts: {
				categories: [
					'everyday-items',
					'decorations',
					'collectibles'
				],
				items: [
					[80, ['pepper-figure']],
					[60, ['seal', 'tata-cards', 'fox-figure', 'cat-figure', 'gold-coin', 'snowglobe', 'kitchenware', 'prince-tata-figure', 'linye-figure']],
					[30, ['suit', 'juice-pouch', 'necklace', 'perfume', 'spider-figure', 'elf-figure']],
					[15, ['photo-album', 'flowers', 'scarf', 'plant', 'strange-plant']]
				]
			}
		};
	},
	render({ name }) {
		return {
			awakening: [
				'Heal all teammates within **10** meters for **100%** of ATK after using a Dodge skill.',
				'Increase the current weapon’s base HP growth by **10%**.',
				'Normal attacks also fire two missiles, each dealing damage equal to **5%** of ATK to the target and restoring **5** weapon charge points.',
				'Increase the current weapon’s base HP growth by **20%**.',
				'Increase speed of obtaining weapon charge by **20%** (not applicable to missile attacks).',
				'Grant all teammates within range of the skill **60%** damage reduction and immunity to crowd control effects.'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When ${name} spends satiety to restore HP, increase restoration effect by **100%**.`
				},
				{
					affinity: 4000,
					effect: `When ${name} spends satiety to restore HP, increase restoration effect by **200%**.`
				}
			]
		};
	}
};
