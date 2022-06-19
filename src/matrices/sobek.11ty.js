module.exports = {
	data() {
		return {
			name: 'Sobek',
			bgImg: 'none',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['6%', '7.5%', '9%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase damage dealt by **${value}** for each enemy nearby. Up to 3 stacks.`]);
	}
};
