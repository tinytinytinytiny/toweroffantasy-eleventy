module.exports = {
	data() {
		return {
			name: 'Alternate Destiny',
			isNew: false,
			isChina: false,
			rarity: 5
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Generate a pocket dimension for **8** seconds. Allies gain immunity to hitstun effects in the dimension, and HP will not drop below **20%** from enemy attacks. Cooldown: **90** seconds.\n\nLeaving the dimension removes all buffs. Once you have spent **8** seconds in the dimension, you cannot be buffed by it for **45** seconds.',
			awakening: [
				'Allied Wanderers in the dimension recovers **15%** HP **8** seconds later.',
				'Friendly units in the dimension gain **25%** lifesteal.',
				'Allied Wanderers in the dimension gain immunity to all mind control.',
				`Increase ${element.ice.name} damage by **2%**, even if not deployed. Unavailable in Apex League.`,
				'Until the Relic disappears, allied Wanderers in the dimension double all lifesteal effects when HP drops to **40%** or below.'
			]
		}
	}
};