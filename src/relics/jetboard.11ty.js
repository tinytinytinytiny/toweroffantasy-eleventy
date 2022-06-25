module.exports = {
	data() {
		return {
			name: 'Jetboard',
			rarity: 4
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Dash forward a set distance before gradually slowing down to a halt, dealing damage equal to **380%** of ATK to targets along the way and **launching** them. Can be used **while swimming**. Cooldown: **90** seconds.',
			awakening: [
				'Gain **10** weapon charge points ever second while gliding.',
				'Recude charge time to **60** seconds.',
				`${name} collision damage is increased by **100%**, and charge time is reduced to **45** seconds.`,
				`Reduce ${element.ice.name} damage received by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				`Immune to control effects while using ${name}. Using the ${name} to attack and hit targets **stuns** them for **5** seconds. Charge time is reduced to **30** seconds.`
			]
		}
	}
};