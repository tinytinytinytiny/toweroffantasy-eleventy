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
					{
						name: 'Quickdraw',
						desc: 'While on the ground, draw the bow repeatedly to attack 5 times.',
						breakdown: [
							'Deal damage equal to **48.8%** of ATK + **3**.',
							'Deal damage equal to **43.7%** of ATK + **2**.',
							'Deal damage equal to **78.6%** of ATK + **4**.',
							'Deal damage equal to **121.2%** of ATK + **6**.',
							'Deal damage equal to **112.5%** of ATK + **6** and knock the target back a short distance.'
						]
					},
					{
						name: 'Charged Arrow',
						desc: 'Tap and hold normal attack to charge the weapon. Deal basic damage equal to **87.8%** of ATK + **5**, and **50%** more for each 1 second spent charging, up to **3** seconds. Deal double damage when scoring a headshot or when hitting an enemy’s weakness, knocking them down (headshots are ineffective against Wanderers).'
					},
					{
						name: 'Arrow Rain',
						desc: 'After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to **287.2%** of ATK + **15** area damage to targets.'
					},
					{
						name: 'Air Volley',
						desc: 'While airborne, tap normal attack to attack 4 times in a row in the air.',
						breakdown: [
							'Deal damage equal to **56.3%** of ATK + **3**.',
							'Deal damage equal to **74%** of ATK + **4**.',
							'Deal damage equal to **112.7%** of ATK + **6**.',
							'Deal damage equal to **169.8%** of ATK + **9**.'
						]
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.'
					},
					{
						name: 'Loaded Arrow',
						desc: 'Tap attack after dodging to trigger a Loaded Arrow, which **knocking the target back** and dealing damage equal to **124%** of ATK + **7**.'
					}
				],
				skill: [
					{
						name: 'Piercing Arrow',
						desc: 'Perform a backflip and fire **3** piercing arrows, with the main arrow deals damage equal to **224.6%** of ATK + **12**, and the other two arrows deal 60% damage. In addition, **knock targets back** and stun them for **5** seconds if they collide with an obstacle. Cooldown: **12** seconds.'
					}
				],
				discharge: [
					{
						name: 'Explosive Barrage',
						desc: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to **570%** of ATK + **30**. The storm has a **10%** chance to inflict a **2** seconds **freeze effect**. Gain cold front, increasing damage dealt by **15%**, and speed by **45%** for **7** seconds.'
					}
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
