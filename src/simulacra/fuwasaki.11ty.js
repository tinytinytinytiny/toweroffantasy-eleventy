module.exports = {
	data() {
		return {
			isNew: true,
			isChina: true,
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Ryusen Toshin',
				element: 'ice',
				resonance: 'tank',
				exclusiveEffect: true,
				shatter: 13.9,
				charge: 8,
				materials: [
					'red',
					'black'
				]
			},
			recChips: [
				['fuwasaki', [2, 4]],
				['frigg', 2],
				['crow', 2],
				['samir', 2],
				['bullseye', 3]
			],
			traits: {
				gender: 'Female',
				height: '157 cm',
				birthplace: 'Mirror City',
				horoscope: 'Libra',
				birthday: 'October 11'
			},
			gifts: {
				categories: ['metalware', 'everyday-items', 'vera'],
				items: [
					[60, ['prince-tata-figure', 'linye-figure']],
					[40, ['strange-fragment']],
					[15, ['strange-plant']]
				]
			}
		};
	},
	render({ name, string: { element } }) {
		return {
			wepEffects: [element.ice.resonance],
			awakening: [
				`When ${element.ice.resonance.name} is active, release any weapon skill **5** times in total to clear the cooldown of all weapon skills, and **double** the damage of [Circulation] and [Counterattack] for **25** seconds.`,
				'Increase the current weapon’s base ATK growth by **16%**.',
				`Flowing Heart: Sword Shadow [Surge] damage increased to **900%** of ${element.ice.name} ATK.\n\nSilent Flow: Sword Shadow [Surge] cooldown reduced to **5** seconds.`,
				'Increase the current weapon’s base HP growth by **32%**.',
				'Sword Shadow’s [Surge] triggers Phantasia upon hitting a target, shares cooldown with Phantasia trigged by dodging.',
				`Sword Shadow’s [Surge] increases your ${element.ice.name} damage by **20%** for **15** seconds upon hitting a target. Activating Sword Shadow’s block reduces surrounding enemies’ ${element.ice.name} damage by **25%** for **12** seconds.`
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When health is below **70%**, gain **40%** all-element resistance.'
				},
				{
					affinity: 4000,
					effect: `When health is below **70%**, gain **40%** all-element resistance and an additional **60%** ${element.ice.name} resistance.\n\nWhen blocking with Silent Flow [Surge], provide 3 blocks to the teammate with the lowest health (excluding yourself). Lasting **10** seconds, the block amount will not exceed **15%** of the teammate’s maximum health.`
				}
			]
		};
	}
};
