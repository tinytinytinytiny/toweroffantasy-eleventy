module.exports = {
	data() {
		return {
			name: 'Baiyuekui',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Eighth Consciousness',
				element: 'electric',
				resonance: 'damage',
				exclusiveEffect: true,
				charge: 8,
				shatter: 12.5,
				materials: [
					'green',
					'blue'
				]
			},
			recChips: [
				['king', 2],
				['shiro', 2],
				['samir', 2],
				['crow', 2],
				['tenet-guard', 3],
				['offensive-logic', 3]
			],
			traits: {
				gender: 'Female',
				height: '172 cm',
				birthplace: '???',
				horoscope: '???',
				birthday: '???'
			},
			gifts: {
				categories: ['collectibles', 'limited-time-items', 'decorations'],
				items: [
					[80, ['gold-coin', 'cat-figure']],
					[60, ['kitchenware', 'tata-figure', 'tata-cards', 'pepper-figure', 'snowglobe', 'psp', 'fox-figure', 'seal', 'prince-tata-figure', 'linye-figure']],
					[30, ['necklace', 'elf-figure', 'spider-figure']],
					[15, ['photo-album', 'snack-box', 'plant', 'strange-plant']]
				]
			}
		};
	},
	render({ name }) {
		return {
			wepEffects: [
				{
					name: 'Bonus Effect',
					effect: 'When entering combat, trigger War Intent, increasing your final damage by **15%** but accelerating your cellular aging (lose **1%** of your current HP every **5** seconds). The effect disappears when leaving battle or switching weapons. If your HP drops below **50%**, cellular aging stops but the damage boost from War Intent remains (switching weapons causes the effect to disappear).'
				}
			],
			awakening: [
				'**Dodge attacks** gain an additional hit dealing **80%** of ATK + **2.5%** of HP lost.  \nThe **Weapon Skill** explodes for an additional **160%** of ATK + **5%** of HP lost.  \nThe **Discharge Skill** deals an additional **160%** of ATK + **5%** of lost HP (does not apply to the DoT).',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'Increase shatter by **15%**. Breaking a shield releases an instant burst of damage at the target’s location, dealing **680%** of ATK to targets within range, or **1500%** of ATK if there is only one target within range.',
				'Increase the current weapon’s base HP growth by **32%**.',
				'When attacked, automatically trigger a **1** second block (immediately negates crowd control), blocking one hit up to **20%** of your max HP. Performing a basic attack during the block period will initiate a **counter attack**, dealing **240%** of ATK and **launching the target airborne**, cooldown **18** seconds.',
				'While inside the area of the **Discharge Skill** or **Phantasia**, trigger War Intent for **7** seconds, increasing your final damage by **40%** and halting cellular aging (switching weapons causes the effect to disappear).'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When ${name} enters combat, the electric attack power is increased by **21%**, the effect decays over time and lasts for **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`
				},
				{
					affinity: 4000,
					effect: `When ${name} enters combat, the electric attack power is increased by **33%**, the effect decays over time and lasts for **120** seconds. The effect can be reset after **5** seconds out of combat. Damage dealt to Stinging Eels and Earth Roar is increased by **50%**.`
				}
			]
		};
	}
};
