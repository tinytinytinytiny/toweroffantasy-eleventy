module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [3],
			values: ['60%', '75%', '90%']
		};
	},
	render({ values }) {
		return values.map(value => [`When dealing damage greater than **100%** of ATK, deal additional damage equal to **${value}** of ATK. Cooldown: **3** seconds.`]);
	}
};
