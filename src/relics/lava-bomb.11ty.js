module.exports = {
	data() {
		return {
			name: 'Lava Bomb',
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Toss a Lava Bomb at a target location, dealing damage equal to **567%** of ATK and launching the target **into the air**. Cooldown: **45** seconds.',
			awakening: [
				'**Stun** targets for **2** seconds on hit, and ignite them.',
				'Increase blast radius by **50%**.',
				'Reduce cooldown to **30** seconds.',
				`Increase ${element.fire.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'**Stun** targets for **3** seconds on hit and burn their endurance for **10** seconds, causing targets to lose **100** endurance after every ability use.'
			]
		};
	}
};
