module.exports = {
	data() {
		return {
			name: 'Huma',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Molten Shield V2',
				element: 'fire',
				resonance: 'tank',
				shatter: 10,
				charge: 10,
				materials: [
					'green',
					'blue'
				]
			},
			skills: {
				normal: [
					'normal-attack',
					'aerial-strike',
					'anticipation',
					'valor'
				],
				dodge: [
					'dodge',
					'erupt'
				],
				skill: ['fission'],
				discharge: ['seething-rage']
			},
			recChips: [
				['king', 2],
				['shiro', 2],
				['huma', 4],
				['explosive-core', 3],
				['offensive-logic', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '167 cm',
				birthplace: '???',
				horoscope: 'Capricorn',
				birthday: 'Jan 12'
			},
			gifts: {
				categories: ['everyday-items', 'games', 'decorations'],
				items: [
					[80, ['pepper-figure']],
					[60, ['cat-figure', 'tata-cards', 'ufo', 'psp', 'pearl', 'snowglobe', 'prince-tata-figure']],
					[30, ['chess-set', 'diary', 'juice-pouch', 'suit', 'perfume', 'spider-figure', 'elf-figure']],
					[15, ['flowers', 'photo-album', 'scarf', 'trading-card', 'plant']]
				]
			}
		};
	},
	render({ name }) {
		return {
			awakening: [
				'Using a Dodge skill or branch skill while in shield form grants a stack of Strong Shield, which grants **10%** damage reduction for **15** seconds and stacks up to **3** times. Switching to axe form converts all Strong Shield stacks to Sharp Axe stacks, each of which increases damage dealt by **15%** for **15** seconds. Switching to a different weapon cancels this effect.',
				'Increase the current weapon’s base HP growth by **16%**.',
				'While in shield form, branch/dodge attacks deal additional damage to targets equal to **4%** of the user’s current HP.',
				'Increase the current weapon’s base ATK growth by **32%**.',
				'After switching to a shield axe, immediately grant **30%** damage reduction that diminishes by **10%** every **3** seconds, down to a minimum of **10%**. Switching weapons cancels this effect. Cooldown: **30** seconds.',
				'Enhance conversion skills.\n\nShield Enhancement: Increase damage dealt by **60%** and expand the radius of the flame zome by **30%**.\n\nAxe Enhancement: For the next **5** seconds after using this ability, turn all damage received into HP (up to a maximum of **15%** of the user’s Max HP).'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `Each time ${name} receives damage, gain **1** Fortitude mark and gain **1** more Fortitude mark if it is flame damage, up to **1** time per **1** second and **12** stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks × **0.4%** HP for **12** seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks × **0.6%** HP.`
				},
				{
					affinity: 4000,
					effect: `Each time ${name} receives damage, gain **1** Fortitude mark and gain **1** more Fortitude mark if it is flame damage, up to **1** time per **1** second and **12** stacks in total. Upon using a weapon skill, use all Fortitude marks and gain an HP shield equal to the number of marks × **0.6%** HP for **12** seconds. If Fortitude marks are used when the effect is stacked up to the maximum, then gain an HP shield equal to the number of marks × **0.9%** HP.`
				}
			]
		};
	}
};
