module.exports = {
	data() {
		return {
			name: 'Tsubasa',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'Increase damage dealt by **10%** when there are no enemies within 4 meters.',
					'Upon a headshot, increase ATK by **12%** for 8 seconds.'
				],
				[
					'Increase damage dealt by **12.5%** when there are no enemies within 4 meters.',
					'Upon a headshot, increase ATK by **15%** for 8 seconds.'
				],
				[
					'Increase damage dealt by **15%** when there are no enemies within 4 meters.',
					'Upon a headshot, increase ATK by **18%** for 8 seconds.'
				],
				[
					'Increase damage dealt by **17.5%** when there are no enemies within 4 meters.',
					'Upon a headshot, increase ATK by **21%** for 8 seconds.'
				]
			],
		};
	}
};
