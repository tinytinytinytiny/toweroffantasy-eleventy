module.exports = {
	data() {
		return {
			name: 'Claudia',
			isNew: false,
			isChina: false,
			rarity: 5,
			sets: [2, 4],
			chipEffects: [
				[
					'Increase damage by **13%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.',
					'Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **1.5** seconds and increases the damage of discharge skills by **36%** for **15** seconds.'
				],
				[
					'Increase damage by **17%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.',
					'Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **2** seconds and increases the damage of discharge skills by **45%** for **15** seconds.'
				],
				[
					'Increase damage by **20%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.',
					'Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **2.5** seconds and increases the damage of discharge skills by **54%** for **15** seconds.'
				],
				[
					'Increase damage by **23%** when hitting a target in mid-air or initiating an aerial attack. Reset double jump upon hitting the target in mid-air.',
					'Hitting an enemy with a skill reduces the cooldowns of all weapon skills by **3** seconds and increases the damage of discharge skills by **63%** for **15** seconds.'
				]
			],
		};
	}
};
