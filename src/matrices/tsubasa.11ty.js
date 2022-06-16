module.exports = {
	data() {
		return {
			name: 'Tsubasa',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['10%', '12.5%', '15%', '17.5%'],
				set4: ['12%', '15%', '18%', '21%']
			}
		};
	},
	render({ values }) {
		return this.range(4).map(i => [
			`Increase damage dealt by **${values.set2[i]}** when there are no enemies within 4 meters.`,
			`Upon a headshot, increase ATK by **${values.set4[i]}** for 8 seconds.`
		]);
	}
};
