module.exports = {
	data() {
		return {
			name: 'Tenet Guard',
			isNew: false,
			isChina: false,
			rarity: 3,
			sets: [3],
			values: ['6%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase damage dealt by volt weapons by **${value}**.`]);
	}
};
