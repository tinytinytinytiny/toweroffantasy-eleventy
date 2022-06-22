module.exports = {
	data() {
		return {
			name: 'Omnium Shield',
			isNew: false,
			isChina: false,
			rarity: 5
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Generate an Omnium shield that stops projectiles for **10** seconds, with starting energy equal to **200%** of the Wanderer’s max HP and **90**-second cooldown.',
			awakening: [
				'Slow enemies that pass through the shield by **50%** for **2** seconds.',
				'Reduce cooldown to **60** seconds.',
				'Extend duration to **20** seconds.',
				`Reduces ${element.ice.name} damage received by **2%**, even if not deployed. Unavailable in Apex League.`,
				'When wanderers or allies pass through the Omnium Shield, damage dealt increases by **25%** for **7** seconds.'
			]
		};
	}
};