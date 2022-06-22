module.exports = {
	data() {
		return {
			name: 'Bai Ling',
			isNew: false,
			isChina: false,
			rarity: 4,
			sets: [3],
			values: ['12%', '15%', '18%']
		};
	},
	render({ values, string: { element } }) {
		return values.map(value => [`Increase damage dealt to ${element.physical.effectName.toLowerCase()} targets by **${value}**.`]);
	}
};
