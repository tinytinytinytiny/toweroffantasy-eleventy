module.exports = {
	data() {
		return {
			name: 'Ene',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['60%', '75%', '90%']
		};
	},
	render({ values }) {
		return values.map(value => [`When dealing damage greater than **100%** of ATK, deal additional damage equal to **${value}** of ATK. Cooldown: **3** seconds.`]);
	}
};
