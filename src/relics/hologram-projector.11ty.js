module.exports = {
	data() {
		return {
			name: 'Hologram Projector',
			isNew: false,
			isChina: false,
			rarity: 5
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Project a hologram of the user that recreates their weapon attacks, dealing **50%** of the user’s damage. Lasts for **15** seconds. Cooldown: **180** seconds.',
			awakening: [
				'Extend duration to **20** seconds.',
				'Increase damage dealt by holograms to **75%** of the Wanderer’s damage.',
				'Tap again to transpose to the hologram’s position.',
				`Increase ${element.electric.name} damage by **2%**, even if not deployed. Unavailable in Apex League.`,
				'Increase damage dealt by the holograms to **100%** of the Wanderer’s damage. Transposing removes control effects.'
			]
		}
	}
};