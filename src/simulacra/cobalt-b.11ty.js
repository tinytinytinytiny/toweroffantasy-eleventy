module.exports = {
	data() {
		return {
			isChina: true,
			eleventyComputed: {
				character: (data) => data.characters[data.page.fileSlug],
				name: (data) => data.character.name,
				rarity: (data) => data.character.rarity
			},
			weapon: {
				name: 'Blazing Revolver',
				element: 'fire',
				resonance: 'damage',
				shatter: 6.5,
				charge: 10,
				materials: [
					'red',
					'black'
				]
			},
			recChips: [
				['cobalt-b', 4],
				['samir', [2, 4]],
				['crow', 2],
				['explosive-core', 3]
			],
			traits: {
				gender: 'Female',
				height: '157 cm',
				birthplace: 'Crown',
				horoscope: 'Cancer',
				birthday: 'Jun 26'
			},
			gifts: {
				categories: ['metalware', 'collectibles', 'limited-time-items'],
				items: [
					[80, ['kitchenware', 'gold-coin']],
					[60, ['seal', 'tata-cards', 'fox-figure', 'cat-figure', 'bear-figure', 'tata-figure', 'present', 'psp', 'linye-figure', 'pearl']],
					[30, ['necklace', 'toolbox', 'strange-fragment']],
					[15, ['dumbbells', 'snack-box', 'strange-plant']]
				]
			}
		};
	},
	render({ name }) {
		return {
			awakening: [
				'Each hit of the skill returns **2%** of damage dealt as health, up to **200%** of ATK.',
				'Increase the current weapon’s base ATK growth by **16%**.',
				'The skill Blast Grenade and dodge attack Melee Break will apply ***Ionic Burn*** to targets, dealing **90%** of ATK every second for **10** seconds.',
				'Increase the current weapon’s base ATK growth by **32%**.',
				'***Ionic Burn*** damage increased to **140%** and dodge attacks from any weapon will refresh the burn’s duration.',
				'The skill ***Barrage*** has a burning effect that lasts for **15** seconds. Hitting a target with any weapon’s dodge attack reduces the cooldown of ***Barrage*** by **4** seconds, up to once every **1.5** seconds. Damage over time effects trigged from a dodge attack can also trigger the effect.'
			],
			mimicEffects: [
				{
					affinity: 1200,
					effect: `When ${name} releases a combo, it restores **50**–**120** points of energy charge at random.`
				},
				{
					affinity: 4000,
					effect: `When ${name} releases a combo, it restores **90**–**180** points of energy charge at random.`
				}
			]
		};
	}
};
