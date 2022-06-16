module.exports = {
	data() {
		return {
			name: 'Zero',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['120%', '150%', '180%', '210%'],
				set4: ['16%', '20%', '24%', '28%']
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Upon using a discharge skill to switch to the current weapon, gain a shield equal to **${values.set2[i]}** of ATK for **4** seconds.`,
			`While the shield is active, you and your teammates deal **${values.set4[i]}** more damage.`
		]);
	}
};
