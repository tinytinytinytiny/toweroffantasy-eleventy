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
	render({ values }) {
		return values.map(value => [`Increase damage dealt by physical weapons by **${value}**.`]);
	}
};
