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
				set2: [
					['15%', '19%', '22.5%', '26%'],
					['20%', '26%', '32%', '40%']
				],
				set4: [
					['36%', '45%', '54%', '63%'],
					['30%', '38%', '44%', '50%'],
					['60%', '72%', '81%', '90%'],
					['60%', '75%', '90%', '105%'],
					['105%', '127.5%', '150%', '172.5%']
				]
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote, string: { skills } }) {
		return this.range(4).map(i => [
			`If HP is less than **30%** after being attacked, gain a shield equal to **${values.set2[0][i]}** of Max HP for **10** seconds. Cooldown: **120** seconds.\n\n${this.china()} If HP is less than **30%** after being attacked, gain a shield equal to **${values.set2[1][i]}** of Max HP for **10** seconds. Cooldown: **90** seconds.`,
			`Increase ${skills.meryl.whirlwind.name}’s damage by **${values.set4[0][i]}** and restore HP equal to **${values.set4[1][i]}** of the damage dealt while Whirlwind is active. The maximum HP restored every **0.5** seconds cannot exceed **${values.set4[2][i]}** of ATK.\n\n${this.china()} Converts **${values.set4[3][i]}* of damage dealth during shield to health, restores no more than **${values.set4[4][i]}** of attack power every 0.5 seconds.`
		]);
	}
};
