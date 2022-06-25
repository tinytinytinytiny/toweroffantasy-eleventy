module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [3],
			values: ['10%', '12.5%', '15%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase speed of obtaining weapon charge by **${value}**.`]);
	}
};
