module.exports = {
	data() {
		return {
			name: 'Hovering Cannon',
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Summon a Hovering Cannon for **20** seconds. **240**-second cooldown. The Hovering Cannon has the skill: Laser Beam, which deals **5.6%** ATK damage to the target each time.',
			awakening: [
				'Hovering Cannon lasts for **24** seconds.',
				'Grant the ***Laser Array*** skill: Freeze targets after dealing damage to them **4** times in a row. Deal up to **93.2%** ATK damage to the target.',
				'Reduce cooldown to **150** seconds.',
				`Increase ${element.ice.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Grant the ***Crash*** skill: Deal damage to the target equal to **55.9%** of ATK and stun them for **0.5** seconds.'
			]
		};
	}
};
