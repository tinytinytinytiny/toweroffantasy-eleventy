module.exports = {
	data() {
		return {
			name: 'Samir',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: [
					['10', '13', '16', '20'],
					['10', '13', '16', '20']
				],
				set4: [
					['16%', '22%', '30%', '40%'],
					['10%', '12.5%', '15%', '17.5%']
				]
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase damage progressively by **${values.set2[0][i]}** upon hitting a target. Stack up to **10** times. Lasts **1.5** seconds.\n\n${this.china()} Each hit increases attack by **1.5%**, up to **${values.set2[1][i]}** stacks, lasting **2** seconds and refreshing with each hit.`,
				`Increase Dual EM Stars’ electrical explosion damage by **${values.set4[0][i]}** of ATK.\n\n${this.china()} Adds an extra hit to every attack for **${values.set4[1][i]}** damage (can not crit).`
		]);
	}
};
