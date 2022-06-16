module.exports = {
	data() {
		return {
			name: 'Bai Ling',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['12%', '15%', '18%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase damage dealt to grievous targets by **${value}**.`]);
	}
};
