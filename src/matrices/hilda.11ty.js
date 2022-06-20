module.exports = {
	data() {
		return {
			name: 'Hilda',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['15%', '19%', '22.5%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase ATK by **${value}** when there are no enemies within 6 meters.`]);
	}
};
