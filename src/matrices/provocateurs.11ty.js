module.exports = {
	data() {
		return {
			name: 'Provocateurs',
			isNew: false,
			isChina: false,
			rarity: 3,
			sets: [3],
			values: ['6%']
		};
	},
	render({ values, string: { element } }) {
		return values.map(value => [`Increase damage dealt by ${element.physical.name} weapons by **${value}**.`]);
	}
};
