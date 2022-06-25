module.exports = {
	data() {
		return {
			isChina: true,
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [2, 4],
			values: {
				set2: ['15%', '18%', '21%', '25%'],
				set4: ['4%', '5%', '6%', '7%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`After releasing weapon skill, fire attack is increased by **${values.set2[i]}** for **25** seconds. ${footnote('The effect is triggered by different star levels and is not stackable.', i)}`,
			`After releasing the weapon skill, gain (mastery) for **15** seconds, cooldown **15** seconds (different of levels (mastery) shares the cooldown), (mastery) cannot be stacked. Each time the basic attack hits the target, the fire damage is increased by **${values.set4[i]}** which lasts until the end of (mastery), stacks up to **6** levels, adding up to **1** level every **0.2** seconds, after **6** levels are added, you get a shield to resist **1** damage.`
		]);
	}
};
