module.exports = {
	data() {
		return {
			name: 'Echo',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Thunderous Halberd',
				element: 'electric',
				resonance: 'damage',
				shatter: 11,
				charge: 7,
				materials: [
					'red',
					'black'
				],
				awakening: [
					'Increase shatter by **15%**. After shattering the target’s shield, increase all teammates’ ATK by **15%** for **30** seconds. This cannot be stacked.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'After hitting a target with **Moonchase**, reduce their ATK by **5%** and increase the user’s ATK by **5%** for **15** seconds (effect can be stacked up to **3** times by hitting multiple targets). Effect is doubled to grievous targets.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					`Double stun duration from dodge skills.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> Double stun duration from forward dodge skills.`,
					'Discharge deals more damage the further it travels, up to **100%** more damage.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Thrust',
						desc: 'While on the ground, swing the spear to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **24.7%** of ATK + **1** and knock the target back a short distance.',
							'Deal damage equal to **22.6%** of ATK + **1** and knock the target back a short distance.',
							'Deal damage equal to **47.2%** of ATK + **2** and knock the target back a short distance.',
							'Deal damage equal to **65.2%** of ATK + **3** and knock the target back a short distance.',
							'Deal damage equal to **114.95%** of ATK + **6** and knock the target back a significant distance.'
						]
					},
					{
						name: 'Jumping Strike',
						desc: 'While airborne, tap normal attack to attack 4 times in a row in the air.',
						breakdown: [
							'Deal damage equal to **27.4%** of ATK + **1**',
							'Deal damage equal to **23.2%** of ATK + **1**',
							'Deal damage equal to **45.8%** of ATK + **2**',
							'Deal damage equal to **110%** of ATK + **6**.'
						]
					},
					{
						name: 'Crashing Drive',
						desc: 'Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Crashing Drive. While falling, deal damage equal to **8%** of ATK + **1** each hit. Upon landing, deal damage equal to **48.5%** of ATK + **3** and knock the target down. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.'
					},
					{
						name: 'Spear Flurry',
						desc: 'After the third normal attack, hold the normal attack button to trigger Spear Flurry. Strike the target and knock them **into the air**, dealing damage equal to **49.2%** of ATK + **3**. Tap again to continue attacking the airborne target, dealing up to **98%** of ATK + **5** damage to a single target.'
					},
					{
						name: 'Sneak Attack',
						desc: 'Thrust the spear forward, dealing damage equal to **570%** of ATK + **30**.'
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.'
					},
					{
						name: 'Flying Kick',
						desc: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Kick. Once hit the target, deal damage equal to **72%** of ATK + **4**, knock the target back significantly, and stun them for **1** second (non-Wanderer targets) or **0.5** seconds (Wanderers).'
					},
					{
						name: 'Lunging Smash',
						desc: 'Tap normal attack during the short period after dodging to trigger Lunging Smash. Slam the long spear into the ground, dealing damage equal to **52.8%** of ATK + **3** and knocking targets **into the air**.'
					}
				],
				skill: [
					{
						name: 'Moonchaser',
						desc: 'Launch the target into the air and go airborne, dealing damage equal to **127.5%** of ATK + **7**. **25**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Thunderclap',
						desc: 'When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, who jumps in the air and throws a lightning spear that causes area explosion to deal **296.7%** × ATK + **16** damage plus **paralyzing** the target for **1** second.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **4%** (excluding Echo).'
				},
				{
					affinity: 4000,
					effect: 'When teamed up with Echo, allies within **10** meters around Echo gain a damage boost of **6%** (excluding Echo).'
				}
			],
			recChips: [
				['samir', 2],
				['king', 2],
				['shiro', 2],
				['tenet-guard', 2],
				['offensive-logic', 2]
			],
			traits: {
				gender: 'Female',
				height: '162 cm',
				birthplace: 'Warren',
				horoscope: 'Leo',
				birthday: 'Aug 14'
			},
			gifts: {
				categories: [
					'everyday-items',
					'limited-time-items',
					'games'
				],
				items: [
					['psp', 80],
					['tata-cards', 80],
					['gold-coin', 60],
					['ufo', 60],
					['pepper-figure', 60],
					['cat-figure', 60],
					['pearl', 60],
					['chess-set',	30],
					['suit', 30],
					['juice-pouch', 30],
					['diary', 30],
					['perfume', 30],
					['tata-figure', 60],
					['flowers', 15],
					['snack-box', 15],
					['trading-card', 15],
					['harmonica', 15],
					['scarf', 15]
				]
			}
		};
	}
};
