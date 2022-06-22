module.exports = {
	data() {
		return {
			name: 'Couant 2',
			isNew: false,
			isChina: true,
			rarity: 5
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Summon a droid and generate a shield for **5** seconds. The shield disappears after **5** seconds or after being struck once. When it disappears, it knocks back nearby enemies, dealing damage equal to **100%** of ATK + **50**. If broken within **1** second of being created, the shield will stun enemies for **2** seconds and you will receive a damage boost by a percentage of your current life for 10 seconds (up to 60%).',
			awakening: [
				'Immediately gain 100 energy if your HP is more than 90%. Immediately gain 50 energy if your HP is less than 90%. Immediately gain another 50 energy when the damage boost ends.',
				'Damage booster time is increased by 1 second.',
				'Increase the damage boost limit to 70%.',
				`Increases ${element.fire.name} damage by 2%, even if you are not in combat. Unavailable in Apex League.`,
				'If the HP loss is greater than the current HP loss, the damage increase is based on the percentage of HP lost (up to 70%).'
			]
		}
	}
};