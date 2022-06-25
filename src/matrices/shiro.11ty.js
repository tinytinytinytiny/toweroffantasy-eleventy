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
				set4: [
					['20%', '25%', '30%', '35%'],
					['20%', '25%', '30%', '35%']
				]
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase both damage and shatter to targets with more than **50%** HP by **${values.set2[i]}**.`,
			`Upon entering battle, gain a **${values.set4[0][i]}** damage boost for **20** seconds. Reset **5** seconds after exiting battle.\n\n${this.china()} Upon entering battle, gain a **${values.set4[1][i]}** damage boost for **35** seconds. Reset **5** seconds after exiting battle.`
		]);
	}
};
