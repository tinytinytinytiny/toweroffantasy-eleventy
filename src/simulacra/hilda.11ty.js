module.exports = {
	data() {
		return {
			name: 'Hilda',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'The Terminator',
				element: 'ice',
				resonance: 'damage',
				charge: 10,
				shatter: 10,
				materials: [
					'red',
					'blue'
				],
				awakening: [
					'Every successful normal attack increases damage by **1%** for **2** seconds (stack up to **15** times). Increase ammo count to **60**.',
					'Increase the current weapon’s base ATK growth by **10%**.',
					'Within **10** seconds of switching to the weapon, increase damage of normal attacks and shatter by **30%**. Cooldown: **25** seconds. Increase ammo to **80**.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					'Reduce cooldown of normal attacks while in turret mode to **2** seconds.',
					'Within **10** seconds upon switching to the weapon, increase damage of normal attacks and shatter by **60%**. Cooldown: **25** seconds.'
				]
			},
			skills: {
				normal: ['normal-attack'],
				dodge: ['dodge'],
				skill: ['turret'],
				discharge: ['arctic-beam']
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Hilda uses a vehicle, increase speed by **7%**.'
				},
				{
					affinity: 4000,
					effect: 'When Hilda uses a vehicle, increase speed by **10%**.'
				}
			],
			recChips: [
				['samir', 2],
				['king', 2],
				['shiro', 2],
				['pepper', 3],
				['bullseye', 3],
				['offensive-logic', 3]
			],
			traits: {
				gender: 'Female',
				height: '165 cm',
				birthplace: '???',
				horoscope: 'Aries',
				birthday: 'Apr 11'
			},
			gifts: {
				categories: ['toys', 'figurines', 'limited-time-items'],
				items: [
					[80, ['tata-figure']],
					[60, ['gold-coin', 'tata-cards', 'fox-figure', 'cat-figure', 'bear-figure', 'mia-figure', 'present', 'psp', 'prince-tata-figure', 'linye-figure']],
					[30, ['tata-plush', 'cat-plush', 'robot-figure', 'pumpkin-figure', 'android-figure', 'bunny-doll']],
					[15, ['pinwheel', 'snack-box']]
				]
			}
		};
	}
};
