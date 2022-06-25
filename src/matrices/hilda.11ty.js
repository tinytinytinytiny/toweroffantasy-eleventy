module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [3],
			values: ['15%', '19%', '22.5%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase ATK by **${value}** when there are no enemies within 6 meters.`]);
	}
};
