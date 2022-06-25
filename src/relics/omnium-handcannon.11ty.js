module.exports = {
	data() {
		return {
			name: 'Omnium Handcannon',
			rarity: 4
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Launch **1** Omnium bomb at target location and create a scalable energy pillar upon striking the ground or water surface for up to **20** seconds. Cooldown: **50** seconds. Maximum **2** charges.',
			awakening: [
				'Increase duration of energy pillars to **30** seconds.',
				`Increase endurance regen speed by 30% for **20** seconds after switching to the ${name}.`,
				'Stores up to **3** charges.',
				`Increase ${element.fire.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Reduce charge time to **40** seconds.'
			]
		};
	}
};
