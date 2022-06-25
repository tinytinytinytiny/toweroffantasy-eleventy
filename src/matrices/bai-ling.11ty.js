module.exports = {
	data() {
		return {
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [3],
			values: ['12%', '15%', '18%']
		};
	},
	render({ values, string: { element } }) {
		return values.map(value => [`Increase damage dealt to ${element.physical.effectName.toLowerCase()} targets by **${value}**.`]);
	}
};
