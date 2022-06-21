module.exports = {
	data() {
		return {
			name: 'Nemesis',
			isNew: false,
			isChina: true,
			rarity: 5,
			sets: [2, 4],
			values: {
				set2: ['15%', '18%', '21%', '25%'],
				set4: ['15%', '18%', '21%', '25%']
			},
			footnote(content, i) {
				return (i === 0) ? `\n\n${content}` : '';
			}
		};
	},
	render({ values, footnote }) {
		return this.range(4).map(i => [
			`When healing a target, the healed target's Volt ATK is increased by **${values.set2[i]}** for **20** seconds. ${footnote('The effect does not stack, and only the highest level will take effect when using multiple sets.', i)}`,
			`When healing yourself or your own electrodes, the healed target gains a chance to Lightning Strike; the next attack within **30** seconds deals **${values.set4[i]}** of Volt ATK (half for electrodes) as Volt damage to the first target hit. Can only be triggered again after **10** seconds. ${footnote('Lightning Strike is not stackable, and only the highest level will take effect when using multiple sets.', i)}`
		]);
	}
};
