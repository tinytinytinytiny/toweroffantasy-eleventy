module.exports = {
	data() {
		return {
			name: 'Pepper',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Staff of Scars',
				element: 'electric',
				resonance: 'support',
				shatter: 4,
				charge: 10,
				materials: [
					'green',
					'blue'
				],
				awakening: [
					'Heal all teammates within **10** meters for **100%** of ATK after using a Dodge skill.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'Normal attacks also fire two missiles, each dealing damage equal to **5%** of ATK to the target and restoring **5** weapon charge points.',
					'Increase the current weapon’s base HP growth by **20%**.',
					'Increase speed of obtaining weapon charge by **20%** (not applicable to missile attacks).',
					'Grant all teammates within range of the skill **60%** damage reduction and immunity to crowd control effects.'
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
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Pepper spends satiety to restore HP, increase restoration effect by **100%**.'
				},
				{
					affinity: 4000,
					effect: 'When Pepper spends satiety to restore HP, increase restoration effect by **200%**.'
				}
			],
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
					['pepper-figure', 80],
					['seal', 60],
					['tata-cards', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['gold-coin', 60],
					['snowglobe',	60],
					['kitchenware', 60],
					['prince-tata-figure', 60],
					['linye-figure', 60],
					['suit', 30],
					['juice-pouch', 30],
					['necklace', 30],
					['perfume', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo-album', 15],
					['flowers', 15],
					['scarf', 15],
					['plant', 15],
					['strange-plant', 15]
				]
			}
		};
	}
};
