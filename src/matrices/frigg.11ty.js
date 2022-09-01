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
				set4: ['60%', '75%', '90%', '105%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote, string: { element }, getData, collections: { simulacra } }) {
		return this.range(4).map(i => [
			`When switching from a ${element.ice.name} weapon to another ${element.ice.name} weapon, the ${element.ice.name} attack power is increased by **${values.set2[i]}** for **10** seconds. ${footnote('This set also works in the background (when not using the weapon where this set is equipped on), but only the set with the highest star rating will work when multiple sets are equipped.', i)}`,
			`When the ice field is released by the weapon ${getData(simulacra, 'frigg').weapon.name}, the enemy targets within the ice field take **${values.set4[i]}** ${element.ice.name} damage per second.`
		]);
	}
};
