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
				set2: ['13%', '17%', '20%', '23%'],
				set4: [
					['1.5', '2', '2.5', '3'],
					['36%', '45%', '54%', '63%']
				]
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase damage by **${values.set2[i]}** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.`,
			`Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **${values.set4[0][i]}** seconds and increases the damage of discharge skills by **${values.set4[1][i]}** for **15** seconds.`
		]);
	}
};
