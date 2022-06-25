module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [3],
			values: ['80', '100', '120']
		};
	},
	render({ values }) {
		return values.map(value => [`Using a discharge skill to switch to the current weapon grants **${value}** weapon charge.`]);
	}
};
