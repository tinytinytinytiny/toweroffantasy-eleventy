module.exports = {
	data() {
		return {
			name: 'Explosive Core',
			rarity: 3,
			sets: [3],
			values: ['6%']
		};
	},
	render({ values, string: { element } }) {
		return values.map(value => [`Increase damage dealt by ${element.fire.name} weapons by **${value}**.`]);
	}
};
