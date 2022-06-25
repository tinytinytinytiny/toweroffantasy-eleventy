module.exports = {
	data() {
		return {
			name: 'Magnetic Pulse',
			rarity: 4
		};
	},
	render({ string: { element } }) {
		return {
			description: 'Detonate a Magnetic Bomb, dealing volt damage equal to **38.8%** of ATK and **launching** targets. Grant the user immunity to hitstun for **5** seconds, Cooldown: **35** seconds.',
			awakening: [
				'Can be used while under control effects.',
				'Grant immunity to control effects for the next **5** seconds.',
				'Hitting the target and planting a **7**-second Magnetic Bomb detonates if the target uses normal attacks/dodges/skills, causing **40%** slowdown for **5** seconds, and disappears after detonation.',
				`Reduce ${element.electric.name} damage by **1.5%**, even if not deployed. Unavailable in Apex League.`,
				'Detonating the Magnetic Bomb removes all current buffs from the target.'
			]
		};
	}
};
