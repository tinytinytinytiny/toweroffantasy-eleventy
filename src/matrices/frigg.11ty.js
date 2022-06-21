module.exports = {
	data() {
		return {
			name: 'Frigg',
			isNew: false,
			isChina: true,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['15%', '18%', '21%', '25%'],
				set4: ['60%', '75%', '90%', '105%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`When switching from ice weapon to ice weapon, the ice attack power is increased by **${values.set2[i]}** for **10** seconds. ${footnote('This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when  multiple sets are equipped.', i)}`,
			`When the ice field is released by the weapon Balmung, the enemy targets within the ice field take **${values.set4[i]}** ice damage per second.`
		]);
	}
};
