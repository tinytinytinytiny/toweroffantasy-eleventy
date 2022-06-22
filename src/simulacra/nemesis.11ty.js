module.exports = {
	data() {
		return {
			name: 'Nemesis',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Enlightenment',
				element: 'electric',
				resonance: 'support',
				exclusiveEffect: true,
				shatter: 6,
				charge: 8,
				materials: [
					'green',
					'blue'
				]
			},
			recChips: [
				['nemesis', [2, 4]],
				['coco-ritter', [2, 4]],
				['tenet-guard', 4]
			],
			traits: {
				gender: 'Female',
				height: '165 cm',
				birthplace: '???',
				horoscope: 'Gemini',
				birthday: 'May 25'
			},
			gifts: {
				categories: ['toys', 'everyday-items', 'decorations'],
				items: [
					[80, ['pepper-figure', 'prince-tata-figure']],
					[60, ['tata-cards', 'present', 'snowglobe', 'fox-figure', 'cat-figure']],
					[30, ['tata-plush', 'suit', 'perfume', 'spider-figure', 'elf-figure', 'robot-figure', 'bunny-doll']],
					[15, ['flowers', 'photo-album', 'plant', 'scarf', 'pinwheel']]
				]
			}
		};
	},
	render({ name, string: { element } }) {
		return {
			wepEffects: [element.electric.resonance],
			awakening: [
				'Activating the **Weapon Skill** or **Discharge Skill** creates **1** Electrode, immediately grants **5** levels of Chain Heal Enhancement, and releases a healing chain that heals nearby friendly units for **135%** of ATK.',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'Electrodes release an **electric current** every **6** seconds, dealing up to **389%** of ATK within its range.',
				'Increase the current weapon’s base ATK growth by **32%**.',
				`After using the **Weapon Skill**, increase ${element.electric.name} ATK by (**10** + Your Electrode Count × **10**)% for **25** seconds.`,
				'Up to **2** Electrodes can be created. When a new electrode appears, it replaces the one furthest from you.'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When an electrode is summoned, all enemies within **30** metres of the electrode take **60%** ${element.electric.name} damage and all allies (including yourself) are healed for **120%** of their attack power.`
				},
				{
					affinity: 4000,
					effect: `When an electrode is summoned, all enemies within **30** metres of the electrode take **100%** ${element.electric.name} damage and all allies (including yourself) are healed for **200%** of their attack power.`
				}
			]
		};
	}
};
