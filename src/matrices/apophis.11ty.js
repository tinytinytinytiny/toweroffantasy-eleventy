module.exports = {
	data() {
		return {
			name: 'Apophis',
			bgImg: 'none',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['20%', '25%', '30%']
		};
	},
	render({ values }) {
		return values.map(value => [`Deal higher damage at lower HP. Deal maximum damage when HP is **20%**. The damage can be increased by up to **${value}**.`]);
	}
};
