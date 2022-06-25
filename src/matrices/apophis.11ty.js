module.exports = {
	data() {
		return {
			eleventyComputed: {
				name: (data) => data.characters[data.page.fileSlug].name
			},
			bgImg: 'none',
			rarity: 4,
			sets: [3],
			values: ['20%', '25%', '30%']
		};
	},
	render({ values }) {
		return values.map(value => [`Deal higher damage at lower HP. Deal maximum damage when HP is **20%**. The damage can be increased by up to **${value}**.`]);
	}
};
