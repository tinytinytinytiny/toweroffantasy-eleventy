module.exports = {
	data() {
		return {
			name: 'Ruby',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Sparky',
				element: 'fire',
				resonance: 'damage',
				exclusiveEffect: true,
				shatter: 11.5,
				charge: 8,
				materials: [
					'green',
					'blue'
				]
			},
			recChips: [
				['ruby', [2, 4]],
				['samir', 2],
				['tsubasa', 2],
				['crow', 2],
				['sobek', 3]
			],
			traits: {
				gender: 'Female',
				height: '140 cm',
				birthplace: '???',
				horoscope: 'Cancer',
				birthday: 'Jul 15'
			},
			gifts: {
				categories: ['games', 'toys', 'vera'],
				items: [
					[80, ['prince-tata-figure']],
					[60, ['linye-figure']],
					[40, ['bunny-doll']],
					[30, ['strange-fragment']],
					[15, ['strange-plant']]
				]
			}
		};
	},
	render({ name, weapon, string: { element } }) {
		return {
			awakening: [
				`[Scorching Heat] Increases ${weapon.name}’s basic attack damage to **182%**. Weapon Skill cooldown reduced to **24** seconds.`,
				'Increase the current weapon’s base ATK growth by **16%**.',
				'[Scorching Heat] Incidental fire damage increased by **18%**; scorch settlement multiplier increased to **150%**.',
				'Increase the current weapon’s base ATK growth by **32%**.',
				`Each time ${weapon.name}’s basic attack hits an enemy unit **75** weapon charge is restored, cooldown 0.9 seconds. During [Ultimate Heat], Shatter is increased by **25%**.`,
				`[Scorching Heat] Increases ${weapon.name}’s basic attack damage to **240%** and doubles the effectiveness of [Heat]. Weapon Skill cooldown reduced to **16** seconds.`
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'Within **5** meters of Dolly, monsters receive **8%** more fire damage. This effect is not stackable.'
				},
				{
					affinity: 4000,
					effect: `Within **5** meters of Dolly, monsters receive **8%** more fire damage. This effect is not stackable.\n\nAfter throwing Dolly, increase ${element.fire.name} ATK by **12%** for **10** seconds. This effect is not stackable.`
				}
			]
		};
	}
};
