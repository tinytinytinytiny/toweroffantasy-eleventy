module.exports = {
	data() {
		return {
			name: 'Cleanup Agreement',
			isNew: false,
			isChina: false,
			rarity: 3,
			sets: [3],
			values: ['6%']
		};
	},
	render({ values }) {
		return values.map(value => [`Damage taken reduced by **${value}**.`]);
	}
};
