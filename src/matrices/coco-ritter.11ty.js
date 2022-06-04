module.exports = {
	data() {
		return {
			name: 'Coco Ritter',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'Increase healing capability and healing received by **8%**.',
					'When you or your teammates are healed, increase ATK by **10%** for **2** seconds.'
				],
				[
					'Increase healing capability and healing received by **10%**.',
					'When you or your teammates are healed, increase ATK by **12.5%** for **2** seconds.'
				],
				[
					'Increase healing capability and healing received by **12%**.',
					'When you or your teammates are healed, increase ATK by **15%** for **2** seconds.'
				],
				[
					'Increase healing capability and healing received by **14%**.',
					'When you or your teammates are healed, increase ATK by **17.5%** for **2** seconds.'
				]
			],
		};
	}
};
