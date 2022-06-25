module.exports = {
	data() {
		return {
			name: 'Missile Barrage',
			rarity: 4
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Place a missile launcher behind the user for **8** seconds. Fire multiple missiles at nearby enemies, dealing damage equal to **34.8%** of ATK with each strike. Cooldown: **60** seconds.',
			awakening: [
				'Fire more missiles every second.',
				`Increase ${name} damage by **20%**.`,
				`${name} lasts for **12** seconds.`,
				`Increase ${element.physical.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Launch more missiles after every second.'
			]
		};
	}
};
