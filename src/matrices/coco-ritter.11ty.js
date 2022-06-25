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
				set2: ['8%', '10%', '12%', '14%'],
				set4: ['10%', '12.5%', '15%', '17.5%']
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase healing capability and healing received by **${values.set2[i]}**.`,
			`When you or your teammates are healed, increase ATK by **${values.set4[i]}** for **2** seconds.`
		]);
	}
};
