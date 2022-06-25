module.exports = {
	data() {
		return {
			eleventyComputed: {
				name: (data) => data.characters[data.page.fileSlug].name
			},
			bgImg: 'none',
			rarity: 4,
			sets: [3],
			values: [
				['50%', '62.5%', '75%'],
				['20%', '25%', '30%']
			]
		};
	},
	render({ values }) {
		return this.range(3).map(i => [`Upon switching to the weapon, gain **${values[0][i]}** damage reflection for **3** seconds. Cooldown: **30** seconds. Upon switching to another weapon, gain a **${values[1][i]}** damage boost for **5** seconds. Cooldown: **30** seconds.`]);
	}
};
