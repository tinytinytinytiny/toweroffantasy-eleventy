module.exports = {
	data() {
		return {
			name: 'Marc',
			isNew: false,
			isChina: true,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['11%', '13%', '15%', '17%'],
				set4: [
					['6%', '7.5%', '9%', '11.5%'],
					['3%', '3.5%', '4.5%', '5.75%']
				]
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`Adds a life shield of **15%** of your current HP to all teammates after attacking an enemy for **15** seconds, resetting **10** seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **${values.set2[i]}** for **15** seconds and is not stackable. ${footnote('This effect is also active in the background, and is effective for multiple sets up to the maximum star level.', i)}`,
			`Increases attack power by **${values.set4[0][i]}** and teammates attack power by **${values.set4[1][i]}** for **15** seconds when life shield is granted, stacks up to **3** levels. ${footnote('This effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level.', i)}`
		]);
	}
};
