module.exports = {
	data() {
		return {
			name: 'Marc',
			isNew: false,
			isChina: true,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'Adds a life shield of 15% of your current HP to all teammates after attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **11%** for 15 seconds and is not stackable.\n\nThis effect is also active in the background, and is effective for multiple sets up to the maximum star level.',
					'Increases attack power by **6%** and teammates attack power by **3%** for 15 seconds when life shield is granted, stacks up to 3 levels.\n\nThis effect is also active in the background, with multiple sets of equipment taking effect up to the maximum star level.'
				],
				[
					'Adds a life shield of 15% of your current HP to all teammates after attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **13%** for 15 seconds and is not stackable.',
					'Increases attack power by **7.5%** and teammates attack power by **3.5%** for 15 seconds when life shield is granted, stacks up to 3 levels.'
				],
				[
					'Adds a life shield of 15% of your current HP to all teammates after attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **15%** for 15 seconds and is not stackable.',
					'Increases attack power by **9%** and teammates attack power by **4.5%** for 15 seconds when life shield is granted, stacks up to 3 levels.'
				],
				[
					'Adds a life shield of 15% of your current HP to all teammates after attacking an enemy for 15 seconds, resetting 10 seconds after you leave the battle. If other life shields are present, all shield values are combined. Damage is reduced by **17%** for 15 seconds and is not stackable.',
					'Increases attack power by **11.5%** and teammates attack power by **5.75%** for 15 seconds when life shield is granted, stacks up to 3 levels.'
				]
			],
		};
	}
};
