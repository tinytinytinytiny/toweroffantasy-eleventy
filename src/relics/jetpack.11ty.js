module.exports = {
	data() {
		return {
			name: 'Jetpack',
			isNew: false,
			isChina: false,
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Tap and hold to dash in the direction of the arrow for a short distance before becoming airborne and gliding. Reduce endurance by **10** every second. Cooldown: **120** seconds (gliding is not affected by the cooldown timer). Jetpack can hold up to **2** charges.',
			awakening: [
				'Replenish 1 charge every **100** seconds. Gliding no longer expends endurance.',
				'Gliding for longer than 3 seconds empowers the user’s next gliding attack to stun the target for 2 seconds.',
				'Replenish **1** charge every 60 seconds.',
				`Reduces ${element.physical.name} damage received by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Store up to **3** charges.'
			]
		}
	}
};