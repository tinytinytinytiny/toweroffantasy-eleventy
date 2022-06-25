module.exports = {
	data() {
		return {
			isNew: true,
			isChina: true,
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			sets: [2, 4],
			values: {
				set2: ['60%', '100%', '150%', '220%'],
				set4: ['25%', '28%', '31%', '34%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote, string: { element } }) {
		return this.range(4).map(i => [
			`While Ice Resonance is active: Every **3** seconds, deal **${values.set2[i]}** × ${element.ice.name} ATK to enemies within 10 meters of the surrounding area and apply [Frost] effect: 5% slowing effect for **3.5** seconds, after **3** stacks Freeze the target for 3 seconds (cannot freeze bosses) and increase the target’s ${element.ice.name} Damage by **12%** (lasts 18 seconds). ${footnote('These matrices work in the background, and for multiple sets the highest star set will be used.', i)}`,
			`Attack the target **10** times and add a 12-second [Frozen] mark: Attack the marked target to increase ${element.ice.name} damage by **${values.set4[i]}**. ${footnote('These matrices work in the background, and for multiple sets the highest star set will be used.', i)}`
		]);
	}
};
