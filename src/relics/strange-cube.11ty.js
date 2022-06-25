module.exports = {
	data() {
		return {
			name: 'Strange Cube',
			rarity: 4
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Use the cube to alter the surrounding gravity, dealing damage equal to **100%** of ATK to enemies and suspending them in midair. Afterwards, dealing damage equal to **120%** of ATK. Cooldown: **30** seconds.',
			awakening: [
				`Activating the ${name} increases damage dealt by **10%** for **10** seconds.`,
				`After activating a ${name}, reduce weapon charge of nearby enemies by **200**.`,
				`Increase ${name}’s uses to **2**.`,
				`Increase ${element.electric.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				`After activating the ${name}, gain weapon charge based on HP lost. For every **1%** of HP lost, gain **10** weapon charge.`
			]
		};
	}
};
