module.exports = {
	data() {
		return {
			name: 'Bai Ling',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Nightingale’s Feather',
				element: 'physical',
				resonance: 'damage',
				charge: 10,
				shatter: 6,
				materials: [
					'green',
					'blue'
				],
				awakening: [
					'Restore 1 dodge attempt every fifth normal attack or after using **Piercing Shot**.',
					'Increase the current weapon’s base ATK growth by **10%**.',
					'Increase headshot damage by **30%**.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					'Dodge skills inflict grievous on targets for **7** seconds.',
					'Increase crit rate by **30%** and crit damage by **50%** against grievous targets.'
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
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Bai Ling'
				},
				{
					affinity: 1200,
					effect: 'When Bai Ling puts the Glider or the Wayboard away, increase speed by **8%** for **12** seconds. Cooldown: **60** seconds.'
				},
				{
					affinity: 4000,
					effect: 'When Bai Ling puts the Glider or the Wayboard away, increase speed by **15%** for **12** seconds. Cooldown: **60** seconds.'
				}
			],
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
					// [80, ['snowglobe', 'seal']],
					// [60, ['mia-figure', 'gold-coin', 'fox-figure', 'cat-figure', 'ufo', 'pepper-figure', 'kitchenware', 'prince-tata-figure', 'linye-figure']],
					// [30, ['necklace', 'vial', 'spider-figure', 'elf-figure']],
					// [15, ['photo-album', 'harmonica', 'scarf', 'photo', 'plant', 'strange-plant']]
					['snowglobe', 80],
					['seal', 80],
					['mia-figure', 60],
					['gold-coin', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['ufo', 60],
					['pepper-figure',	60],
					['kitchenware', 60],
					['prince-tata-figure', 60],
					['linye-figure', 60],
					['necklace', 30],
					['vial', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo-album', 15],
					['harmonica', 15],
					['scarf', 15],
					['photo', 15],
					['plant', 15],
					['strange-plant', 15]
				]
			}
		};
	}
};
