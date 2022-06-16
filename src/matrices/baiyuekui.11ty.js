module.exports = {
	data() {
		return {
			name: 'Baiyuekui',
			isNew: false,
			isChina: true,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['15%', '18%', '21%', '25%'],
				set4: [
					['106%', '122%', '140%', '160%'],
					['530%', '610%', '700%', '800%'],
					['7%', '14%', '21%', '28%']
				]
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`If you have **200~999** charge when switching to this weapon, use **200** points to gain a **${values.set2[i]}** attack boost for **15** seconds, cooldown **5** seconds, does not stack.`,
			`For every **0.6** seconds that a combo is released, the **next** combo will hit the **first** enemy for **${values.set4[0][i]}** ranged damage (5m radius), up to **${values.set4[1][i]}**; shatter increases by **${values.set4[2][i]}** for **4** seconds, does not stack. ${footnote('This effect works in the background, and if multiple sets are used, the highest star set will take effect.', i)}`
		]);
	}
};
