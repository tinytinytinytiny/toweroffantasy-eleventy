module.exports = {
	data() {
		return {
			eleventyComputed: {
				name: (data) => data.characters[data.page.fileSlug].name
			},
			bgImg: 'none',
			rarity: 4,
			sets: [3],
			values: ['6%', '7.5%', '9%']
		};
	},
	render({ values }) {
		return values.map(value => [`Increase damage dealt by **${value}** for each enemy nearby. Up to 3 stacks.`]);
	}
};
