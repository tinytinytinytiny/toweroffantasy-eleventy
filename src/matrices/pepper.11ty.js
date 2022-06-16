module.exports = {
	data() {
		return {
			name: 'Pepper',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['10%', '12.5%', '15%']
		};
	},
	render({ values }) {
		return values.map(value => `Increase speed of obtaining weapon charge by **${value}**.`);
	}
};
