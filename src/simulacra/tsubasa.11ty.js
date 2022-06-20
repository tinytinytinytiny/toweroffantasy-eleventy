module.exports = {
	data() {
		return {
			name: 'Tsubasa',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Icewind Arrow',
				element: 'ice',
				resonance: 'damage',
				shatter: 4,
				charge: 11.5,
				materials: [
					'red',
					'blue'
				],
				awakening: [
					'Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by **8%** for **15** seconds. Stack up to **3**.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Launching a Dodge attack fires **3** Charged Arrows.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Double duration of Arrow Rain and slow targets by **25%**.',
					'Sharp Arrow stacks up to **5** times. Hitting a target with Charged Arrow immediately grants **3** stacks, headshots grant **5** stacks.'
				]
			},
			skills: {
				normal: [
					'quickdraw',
					'charged-arrow',
					'arrow-rain',
					'air-volley'
				],
				dodge: [
					'dodge',
					'loaded-arrow'
				],
				skill: ['piercing-arrow'],
				discharge: ['explosive-barrage']
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Tsubasa'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Natural Warmth]'
				},
				{
					affinity: 1200,
					effect: 'Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.5%** ATK, up to **15** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Cooling Alarm]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Hot and Cold]'
				},
				{
					affinity: 4000,
					effect: 'Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.6%** ATK, up to **30** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.'
				}
			],
			recChips: [
				['samir', 2],
				['claudia', 2],
				['crow', 2],
				['pepper', 3],
				['provocateurs', 3]
			],
			traits: {
				gender: 'Female',
				height: '169 cm',
				birthplace: 'Astra',
				horoscope: 'Aries',
				birthday: 'Mar 24'
			},
			gifts: {
				categories: [
					'figurines',
					'limited-time-items',
					'rare-items'
				],
				items: [
					[80, ['tata-plush']],
					[60, ['seal', 'mia-figure', 'tata-cards', 'bear-figure', 'cat-figure', 'ufo', 'psp', 'gold-coin', 'snowglobe', 'linye-figure']],
					[30, ['vial', 'pumpkin-figure', 'android-figure']],
					[15, ['harmonica', 'photo', 'snack-box']]
				]
			}
		};
	}
};
