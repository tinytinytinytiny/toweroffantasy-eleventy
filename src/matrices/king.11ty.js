module.exports = {
	data() {
		return {
			name: 'KING',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: [
					['8%', '10%', '12%', '14%'],
					['4%', '5%', '6%', '7%']
				],
				set4: [
					['10%', '12%', '13%', '14%'],
					['30%', '33%', '34.5%', '36%'],
					['14%', '18%', '22%', '26%'],
					['36%', '42%', '48%', '54%']
				]
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`When a target is shattered, grant **${values.set2[0][i]}** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.\n\n${this.china()} For every **10%** of shield broken, gain a **${values.set2[1][i]}** damage buff, up to 3 stacks, lasting 25 seconds.`,
			`When there are more than 2 enemies around, hits restore HP equal to **${values.set4[0][i]}** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **${values.set4[1][i]}** of ATK.\n\n${this.china()} When there are more than 2 enemies around, hits restore HP equal to **${values.set4[2][i]}** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **${values.set4[3][i]}** of ATK.`
		]);
	}
};
