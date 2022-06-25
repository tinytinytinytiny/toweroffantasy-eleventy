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
				set2: ['13%', '17%', '21%', '25%'],
				set4: ['13%', '17%', '21%', '25%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`Restore 1 dodge every **4** dodges. Dodge attacks add burn to the target, dealing **${values.set2[i]}** attack damage per second for **10** seconds.`,
			`Increases damage by **${values.set4[i]}** to targets with abnormal statuses.`
		]);
	}
};
