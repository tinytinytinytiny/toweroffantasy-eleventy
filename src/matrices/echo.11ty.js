module.exports = {
	data() {
		return {
			name: 'Echo',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['80', '100', '120']
		};
	},
	render({ values }) {
		return values.map(value => [`Using a discharge skill to switch to the current weapon grants **${value}** weapon charge.`]);
	}
};
