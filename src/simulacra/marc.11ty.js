module.exports = {
	data() {
		return {
			name: 'Marc',
			isNew: false,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Breaking Dawn',
				element: 'physical',
				resonance: 'tank',
				exclusiveEffect: [
					{
						name: 'Group Play [Guardian]',
						effect: 'When using Re-entry, Form Switch, or Full Shot, inflict **40%** damage to the lowest HP ally for **10** seconds, afterwards restoring **10%** of lost HP, only triggered while using Perseverance Resonance, the effect will not be removed and cannot be triggered again until the end of time.'
					},
					{
						name: 'Solo Play [Amplify]',
						effect: 'Mecha Form gains **50%** physical damage reduction.'
					},
					{
						name: 'Omni Shield',
						effect: 'Mecha basic attack/Double Smash/Impact Slash will give **1** point of Mecha Energy. At **20** points, convert **20%** of your current HP into a [Omni Shield] with **1.5×** your max HP (cannot exceed 1.5× max HP and healing is reduced by 50% while active). The shield lasts for **15** seconds and cannot be gained if you are below **10%** HP.\n\nAfter the duration, **66.7%** of the remaining shield value is converted to HP, and hitting a weak target nets **2** points of energy.\n\nWhen triggering the effect, convert active HP shields into [Omni Shield]. Other HP shields cannot be obtained while active.'
					}
				],
				shatter: 9,
				charge: 12,
				materials: [
					'red',
					'black'
				],
				awakening: [
					'Activating Re-entry, Form Switch, or Full Shot will instantly grant [Omni Shield].',
					'Increase the current weapon’s base HP growth by **16%**.',
					'When [Omni Shield] breaks or refreshes, increase final damage by **35%** for **20** seconds, does not stack.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'When [Omni Shield] breaks or refreshes, inflict **160%** of ATK + **5%** of lost HP to nearby targets and gains **50** weapon charge points on hit.',
					'While [Omni Shield] is active, Physical Resistance is **doubled** and provides Dominance effect. [Omni Shield] can be obtained when another Weapon Skill or Discharge Skill hits the target while the shield is active.'
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Marc'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Doomsday Hunters]'
				},
				{
					affinity: 1200,
					effect: 'When Marc takes lethal damage from an enemy, he does not die and obtains a buff: “Revived” and taunts the surrounding enemies for **5** seconds. While “Revived”, you do not take damage, but you cannot perform actions, while recovering **1%** of his maximum life every second and healing received is increased by **20%**. This effect has a cooldown of **10** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Reality and the Law]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Thinking about the present]'
				},
				{
					affinity: 4000,
					effect: 'When Marc takes lethal damage from an enemy, he does not die and obtains a buff: “Nirvana” and taunts the surrounding enemies for **5** seconds. While in “Nirvana”, you do not take damage, but you cannot perform actions, while recovering **2%** of his maximum life every second and healing received is increased by **50%**. This effect has a cooldown of **5** minutes. Damage from Stinging Eel and Ground Roar is reduced by **50%**.'
				}
			],
			recChips: [
				['marc', [2, 4]],
				['king', 2],
				['shiro', 2],
				['provocateurs', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Male',
				height: '192 cm',
				birthplace: '???',
				horoscope: '???',
				birthday: '???'
			},
			gifts: {
				categories: ['metalware'],
				items: [
					[80, ['kitchenware']],
					[60, ['present', 'pearl', 'bear-figure']],
					[30, ['toolbox', 'strange-fragment']],
					[15, ['dumbbells']]
				]
			}
		};
	}
};
