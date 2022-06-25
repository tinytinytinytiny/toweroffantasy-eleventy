module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [2, 4],
			values: {
				set2: [
					['24%', '30%', '36%', '42%'],
					['33%', '42%', '50%', '58%']
				],
				set4: [
					['18%', '22%', '26%', '30%'],
					['12%', '15%', '18%', '21%']
				]
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase crit damage to targets with less than **60%** HP by **${values.set2[0][i]}**.\n\n${this.china()} Increase crit damage to targets with less than **60%** HP by **${values.set2[1][i]}**.`,
				`Crits deal additional damage over time equal to **${values.set4[0][i]}** of ATK every second for **5** seconds. Does not stack.\n\n${this.china()} Crits deal additional damage over time equal to **${values.set4[1][i]}** of ATK every second for **5** seconds. Does not stack.`
		]);
	}
};
