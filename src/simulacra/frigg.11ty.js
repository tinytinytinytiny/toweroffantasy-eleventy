module.exports = {
	data() {
		return {
			name: 'Frigg',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Balmung',
				element: 'ice',
				resonance: 'damage',
				shatter: 8,
				charge: 8,
				materials: [
					'red',
					'black'
				],
				exclusiveEffect: [
					{
						name: 'Bonus Effect',
						effect: 'After using the Weapon Skill **Fimbulwinter**, a large ice field will be placed at your position, lasting  **25** seconds. Inside the ice field, dodges will not be consumed while using Frigg’s weapon, and gain the effect Frozen Domain I: when using Ice weapons, increase Ice ATK by **15%** and Shatter by **25%**.'
					}
				],
				awakening: [
					'Gain **1** point of Frost every time you deal **550%** of Ice ATK with any element while inside the ice field, up to **10** points. When the ice field expires, inflict burst damage for (Frost points × **95%** c Ice ATK) to all enemies within the area. Lose **1** Frost point every **3** seconds that you are outside of the field.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Maximum Frost points increased to **15**. Using an Ice weapon’s Discharge Skill inside the ice field inflicts ( Frost points + 5 ) × **25%** × Ice ATK to all enemies in the field.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Using an Ice weapon to break a shield inside the ice field will freeze the target for **2** seconds and deal an additional (Frost points × **35%** × Ice ATK) damage (doubled if the target cannot be frozen).',
					'Reaching **15** Frost points while inside the ice field will grant the additional effect Frozen Domain II: when using Ice weapons, increase Ice ATK by **25%**.'
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When entering combat, gain **1.5%** ice ATK every **3** seconds, stack up to **10** times for **5** seconds.'
				},
				{
					affinity: 4000,
					effect: 'When entering combat, gain **1.5%** ice ATK every **3** seconds, stack up to **10** times for **5** seconds.'
				}
			],
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
	}
};
