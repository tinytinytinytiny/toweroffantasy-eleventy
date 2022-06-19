module.exports = {
	data() {
		return {
			name: 'Frost Bot',
			bgImg: 'none',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['160%', '200%', '240%']
		};
	},
	render({ values }) {
		return values.map(value => [`When HP is below **40%**, using a discharge skill to switch to the current weapon restores HP equal to **${value}** of ATK.`]);
	}
};
