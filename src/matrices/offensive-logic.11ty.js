module.exports = {
	data() {
		return {
			name: 'Offensive Logic',
			rarity: 3,
			sets: [3],
			values: ['18%']
		};
	},
	render({ values }) {
		return values.map(value => [`Shield breaking efficiency increased by **${value}**.`]);
	}
};
