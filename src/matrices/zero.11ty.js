module.exports = {
	data() {
		return {
			name: 'Zero',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'Upon using a discharge skill to switch to the current weapon, gain a shield equal to **120%** of ATK for **4** seconds.',
					'While the shield is active, you and your teammates deal **16%** more damage.'
				],
				[
					'Upon using a discharge skill to switch to the current weapon, gain a shield equal to **150%** of ATK for **4** seconds.',
					'While the shield is active, you and your teammates deal **20%** more damage.'
				],
				[
					'Upon using a discharge skill to switch to the current weapon, gain a shield equal to **180%** of ATK for **4** seconds.',
					'While the shield is active, you and your teammates deal **24%** more damage.'
				],
				[
					'Upon using a discharge skill to switch to the current weapon, gain a shield equal to **210%** of ATK for **4** seconds.',
					'While the shield is active, you and your teammates deal **28%** more damage.'
				]
			],
		};
	}
};
