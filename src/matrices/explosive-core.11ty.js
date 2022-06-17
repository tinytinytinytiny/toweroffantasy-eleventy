module.exports = {
	data() {
		return {
			name: 'Explosive Core',
			isNew: false,
			isChina: false,
			rarity: 3,
			sets: [3],
			values: ['6%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase damage dealt by flame weapons by **${value}**.`]);
	}
};
