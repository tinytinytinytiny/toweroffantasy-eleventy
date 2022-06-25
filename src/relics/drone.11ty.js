module.exports = {
	data() {
		return {
			name: 'Drone',
			rarity: 5
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Summon a drone for **15** seconds, increase damage reduction by **5%** every **5** seconds. Cooldown: **120** seconds.',
			awakening: [
				'Grant immunity to control effects for the next **5** seconds.',
				'Extend duration to **25** seconds.',
				'Every **5** seconds, additionally grant Wanderers one stack of inspiration, increasing damage dealt by **5%** per stack.',
				`Reduce ${element.electric.name} damage received by **2%**, even if not deployed. Unavailable in Apex League.`,
				`Within ${name}’s duration, Wanderers gain an attack recovery effect that converts **20%** of damage dealt into HP.`
			]
		}
	}
};