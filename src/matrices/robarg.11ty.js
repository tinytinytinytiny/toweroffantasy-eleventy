module.exports = {
	data() {
		return {
			eleventyComputed: {
				name: (data) => data.characters[data.page.fileSlug].name
			},
			bgImg: 'none',
			rarity: 4,
			sets: [3],
			values: ['45%', '56%', '67.5%']
		};
	},
	render({ values }) {
		return values.map(value => [`When a target is shattered, poison the target and deal damage equal to **${value}** of ATK every second for **10** seconds.`]);
	}
};
