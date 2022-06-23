module.exports = {
	data() {
		return {
			name: 'Freyja',
			permalink: '/simulacra/freyja/',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Balmung',
				element: 'ice',
				resonance: 'damage',
				exclusiveEffect: true,
				shatter: 8,
				charge: 8,
				materials: [
					'red',
					'black'
				]
			},
			recChips: [
				['samir', 4],
				['crow', 2],
				['frigg', 4],
				['bullseye', 3]
			],
			traits: {
				gender: 'Female',
				height: '190 cm',
				birthplace: '???',
				horoscope: 'Aquarius',
				birthday: 'Feb 1'
			},
			gifts: {
				categories: ['metalware', 'everyday-items'],
				items: [
					[60, ['present', 'tata-cards', 'pearl', 'pepper-figure', 'cat-figure', 'kitchenware']],
					[30, ['juice-pouch', 'suit', 'toolbox', 'perfume', 'strange-fragment']],
					[15, ['flowers', 'dumbbells', 'scarf']]
				]
			}
		};
	},
	render({ name, string: { element } }) {
		return {
			wepEffects: [
				{
					name: 'Bonus Effect',
					effect: `After using the Weapon Skill **Fimbulwinter**, a large ice field will be placed at your position, lasting  **25** seconds. Inside the ice field, dodges will not be consumed while using ${name}’s weapon, and gain the effect Frozen Domain I: when using ${element.ice.name} weapons, increase ${element.ice.name} ATK by **15%** and Shatter by **25%**.`
				}
			],
			awakening: [
				`Gain **1** point of Frost every time you deal **550%** of ${element.ice.name} ATK with any element while inside the ice field, up to **10** points. When the ice field expires, inflict burst damage for (Frost points × **95%** × ${element.ice.name} ATK) to all enemies within the area. Lose **1** Frost point every **3** seconds that you are outside of the field.`,
				'Increase the current weapon’s base HP growth by **16%**.',
				`Maximum Frost points increased to **15**. Using an ${element.ice.name} weapon’s Discharge Skill inside the ice field inflicts (Frost points + 5) × **25%** × ${element.ice.name} ATK to all enemies in the field.`,
				'Increase the current weapon’s base ATK growth by **32%**.',
				`Using an ${element.ice.name} weapon to break a shield inside the ice field will freeze the target for **2** seconds and deal an additional (Frost points × **35%** × ${element.ice.name} ATK) damage (doubled if the target cannot be frozen).`,
				`Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using ${element.ice.name} weapons, increase ${element.ice.name} ATK by **25%**.`
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When entering combat, gain **1.5%** ${element.ice.name} ATK every **3** seconds, stack up to **10** times for **5** seconds.'
				},
				{
					affinity: 4000,
					effect: 'When entering combat, gain **1.5%** ${element.ice.name} ATK every **3** seconds, stack up to **10** times for **5** seconds.'
				}
			]
		};
	}
};
