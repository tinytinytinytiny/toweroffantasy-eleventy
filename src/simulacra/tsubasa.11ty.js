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
				awakening: [
					'Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by **8%** for **15** seconds. Stack up to **3**.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Launching a Dodge attack fires **3** Charged Arrows.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Double duration of Arrow Rain and slow targets by **25%**.',
					'Sharp Arrow stacks up to **5** times. Hitting a target with Charged Arrow immediately grants **3** stacks, headshots grant **5** stacks.'
				],
				charge: 11.5,
				shatter: 4,
				materials: [
					'ice',
					'red',
					'blue'
				]
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
					['tata-plush', 80],
					['seal', 60],
					['mia-figure', 80],
					['tata-cards', 60],
					['bear-figure', 60],
					['cat-figure', 60],
					['ufo', 60],
					['psp', 60],
					['gold-coin',	60],
					['snowglobe', 60],
					['linye-figure', 60],
					['vial', 30],
					['pumpkin-figure', 30],
					['android-figure', 30],
					['harmonica', 15],
					['photo', 15],
					['snack-box', 15]
				]
			}
		};
	}
};
