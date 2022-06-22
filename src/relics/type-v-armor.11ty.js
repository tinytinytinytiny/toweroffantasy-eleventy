module.exports = {
	data() {
		return {
			name: 'Type V Armor',
			isNew: false,
			isChina: false,
			rarity: 5
		};
	},
	render({ name, string: { element } }) {
		return {
			description: 'Pilot a droid to fight for **30** seconds. Cooldown: **200** seconds. Immune to hitstun. Tap again to exit and blow up the droid. Skill: ***Aimed Shot***.\n\n***Aimed Shot***: Shoot rapidly to deal damage equal to **44.4%** of ATK per hit.',
			awakening: [
				`When piloting mecha, gain immunity to ${element.fire.name} damage and control effects.`,
				'Gain the ***Artillery Fire*** skill.\n\n***Artillery Fire***: Fire 6 times at the locked-on target. Each hit deals damage equal to **155.2%** of ATK.',
				'When piloting the armor, dealing damage also inflicts burn.',
				`Increase ${element.fire.name} damage by **2%**, even if not deployed. Unavailable in Apex League.`,
				'Gain ***Flame Domain*** skill.\n\n***Flame Domain***: Erect ( ͡° ͜ʖ ͡°) a wide-range Flame Domain at the current location, dealing damage equal to a maximum of **1,146.8%** of ATK.'
			]
		}
	}
};