module.exports = {
	data() {
		return {
			name: 'Confinement',
			rarity: 5
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Create an area of confinement with a radius of **7** meters for **10** seconds. Energy pulses within the area, dealing elemental damage equal to **73.4%** of ATK every second, based on the current weapon’s element. Targets that touch the edge of the area are afflicted with a **2**-second **stun** effect. **240**-second cooldown.',
			awakening: [
				'Stun targets for **3** seconds and reduce cooldown to **180** seconds.',
				'Increase damage dealt by energy pulses by **30%**.',
				'Reduce cooldown to **120** seconds.',
				`Increase ${element.physical.name} damage by **2%**, even if not deployed. Unavailable in Apex League.`,
				'Trigger an earthquake every **3** seconds, **launching targets into the air**. The waves can be dodged by jumping.'
			]
		}
	}
};