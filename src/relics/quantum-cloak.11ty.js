module.exports = {
	data() {
		return {
			name: 'Quantum Cloak',
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Enter a quantum state for **10** seconds, during which enemies cannot detect the wearer. The wearer exits quantum state after attacking once. **120**-second cooldown.',
			awakening: [
				'Quantum state lasts for **20** seconds.',
				'Reduce cooldown to **80** seconds.',
				'+**100%** damage in Quantum state, negated after **1** successful attack.',
				`Increase ${element.electric.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'+**100%** damage for **3** successful attacks in Quantum state.'
			]
		};
	}
};
