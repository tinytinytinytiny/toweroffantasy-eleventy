module.exports = {
	data() {
		return {
			name: 'Saki Fuwa',
			isNew: true,
			isChina: true,
			rarity: 5,
			weapon: {
				name: 'Ryusen Toshin',
				element: 'ice',
				resonance: 'tank',
				exclusiveEffect: [
					{
						"name": "Ice Resonance",
						"effect": "When equipped with **2** or more Ice weapons, increase Ice ATK by **20%** and Ice Resistance by **40%**, taking effect in the background."
					}
				],
				awakening: [
					'When Ice Resonance is active, release any weapon skill **5** times in total to clear the cooldown of all weapon skills, and **double** the damage of [Circulation] and [Counterattack] for **25** seconds.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Flowing Heart: Sword Shadow [Surge] damage increased to **900%** of Ice ATK.\n\nSilent Flow: Sword Shadow [Surge] cooldown reduced to **5** seconds.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Sword Shadow’s [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.',
					'Sword Shadow’s [Surge] increases your ice damage by **20%** for **15** seconds upon hitting a target. Activating Sword Shadow’s block reduces surrounding enemies’ ice damage by **25%** for **12** seconds.'
				],
				charge: 8,
				shatter: 13.9,
				materials: [
					'ice',
					'red',
					'black'
				]
			},
			mimicEffects: [
				// {
				// 	affinity: 200,
				// 	effect: 'Unlock profile avatar Marc'
				// },
				// {
				// 	affinity: 600,
				// 	effect: 'Unlock communication [Doomsday Hunters]'
				// },
				{
					affinity: 1200,
					effect: 'When health is below **70%**, gain **40%** all-element resistance.'
				},
				// {
				// 	affinity: 2000,
				// 	effect: 'Unlock communication [Reality and the Law]'
				// },
				// {
				// 	affinity: 3000,
				// 	effect: 'Unlock communication [Thinking about the present]'
				// },
				{
					affinity: 4000,
					effect: 'When health is below **70%**, gain **40%** all-element resistance and an additional **60%** ice resistance.<br>When blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself). Lasting **10** seconds, the block amount will not exceed **15%** of the teammate’s maximum health.'
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
				gender: 'Female',
				height: '???',
				birthplace: '???',
				horoscope: '???',
				birthday: '???'
			},
			gifts: {
				categories: ['metalware'],
				items: [
					['kitchenware', 80],
					['present', 60],
					['pearl', 60],
					['bear-figure', 60],
					['toolbox', 30],
					['strange-fragment', 30],
					['dumbbells', 15]
				]
			}
		};
	}
};
