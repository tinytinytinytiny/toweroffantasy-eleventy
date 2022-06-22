module.exports = {
	data() {
		return {
			name: 'Magnetic Storm',
			isNew: false,
			isChina: false,
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Warp the magnetic field to unleash **1** electric tornado that travels through the battlefield at random for **10** seconds, throwing nearby enemies into the air and dealing damage equal to **186.3%** of ATK every second. Cooldown: **100** seconds.',
			awakening: [
				'Unleash **2** electric tornadoes.',
				'Increase tornado damage by **20%**.',
				'Unleash **3** electric tornadoes.',
				`Increase ${element.electric.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Those caught in tornadoes have a **50%** chance to be disoriented for **3** seconds each time they take damage. Movement direction inputs will also be swapped.'
			]
		};
	}
};
