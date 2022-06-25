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
				set2: ['15%', '19%', '22.5%', '26%'],
				set4: ['10%', '12%', '13%', '15%']
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Hitting targets with dodge skills inflicts bleed, dealing damage equal to **${values.set2[i]}** of ATK every second for **5** seconds.`,
			`Reduce ATK of all targets within 8 meters that are taking damage over time by **${values.set4[i]}**.`
		]);
	}
};
