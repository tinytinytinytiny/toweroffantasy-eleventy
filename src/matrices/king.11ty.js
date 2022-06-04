module.exports = {
	data() {
		return {
			name: 'KING',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'When a target is shattered, grant **8%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> For every 10% of shield broken, gain a 4% damage buff, up to 3 stacks, lasting 25 seconds.',
					'When there are more than 2 enemies around, hits restore HP equal to **10%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **30%** of ATK.'
				],
				[
					'When a target is shattered, grant **10%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> For every 10% of shield broken, gain a 5% damage buff, up to 3 stacks, lasting 25 seconds.',
					'When there are more than 2 enemies around, hits restore HP equal to **12%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **33%** of ATK.'
				],
				[
					'When a target is shattered, grant **12%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> For every 10% of shield broken, gain a 6% damage buff, up to 3 stacks, lasting 25 seconds.',
					'When there are more than 2 enemies around, hits restore HP equal to **13%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **34.5%** of ATK.'
				],
				[
					'When a target is shattered, grant **14%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> For every 10% of shield broken, gain a 7% damage buff, up to 3 stacks, lasting 25 seconds.',
					'When there are more than 2 enemies around, hits restore HP equal to **14%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **36%** of ATK.'
				]
			],
		};
	}
};
