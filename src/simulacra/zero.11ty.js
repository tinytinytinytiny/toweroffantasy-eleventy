module.exports = {
	data() {
		return {
			name: 'Zero',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Negating Cube',
				element: 'fire',
				resonance: 'support',
				shatter: 5,
				charge: 13,
				materials: [
					'green',
					'blue'
				],
				awakening: [
					'Deal damage and produce a healing orb, which lasts for **20** seconds and restore HP of any teammate who picks it up equal to **60%** of ATK. **2**-second cooldown.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Reduce skill cooldown from **90** seconds to **45** seconds. Restore HP equal to **30%** of ATK every second while the shield is active.',
					'Increase the current weapon’s base HP growth by **32%**.',
					`Deal damage and produce a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **1.5%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.\n\n<abbr title="China exclusive" class="china-badge">CN</abbr> Deal damage and produce a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **2%**. Stacks up to **10** times and lasts for **45** seconds. **2.5**-second cooldown.`,
					'Using an ability grants allies healing orbs and damage orbs equal to the number of Omnium Cubes.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Normal Attack',
						desc: 'While on the ground, manipulate the cube to attack 5 times in a row.  \n*If normal attacks hit targets 6 times, gain 1 cube. Up to 5 cubes can be stored*.',
						breakdown: [
							'Deal damage equal to **35.9%** of ATK + **2**.',
							'Deal damage equal to **29.4%** of ATK + **2**.',
							'Deal damage equal to **91.5%** of ATK + **5**.',
							'Deal damage equal to **61.2%** of ATK + **3**.',
							'Deal damage equal to **62.3%** of ATK + **3** up to 3 times and **launch** the target.'
						]
					},
					{
						name: 'Omnium Missile',
						desc: 'While airborne, tap normal attack to activate the energy within the cube, firing up to **5** missiles and dealing total damage equal to **45.6%** of ATK + **2**. Consume up to **250** endurance.  \n*If the Wanderer has any stored cubes, consume all cubes to fire Omnium Missiles at targets to deal damage*.'
					},
					{
						name: 'Energy Overflow',
						desc: 'While airborne or after jumping once, tap normal attack to trigger Energy Overflow. Upon landing, fire a shockwave that travels forward, dealing up to **18%** of ATK + **1** damage to targets in its path.'
					},
					{
						name: 'Omnium Shock',
						desc: 'On the third normal attack, hold the normal attack button to trigger Omnium Shock. A pillar of energy launches nearby targets into the air, dealing damage equal to **52.8%** of ATK + **3**. The pillar lasts 5 seconds and deals damage equal to **22%** of ATK + **1** to nearby targets every second.'
					},
					{
						name: 'Energy Sentinel',
						desc: 'Cubes orbiting the Wanderer deal damage equal to **7.5%** of ATK + **1** to enemies.'
					},
					{
						name: 'Energy Missile',
						desc: 'When the Wanderer casts Omnium Missiles and Energy Overflow, their orbiting cubes are fired as well, dealing damage equal to **37.3%** of ATK + **2** to the target.'
					}
				],
				dodge: [
					{
						name: 'Soul Surge',
						desc: 'Dodge right before getting hit to trigger a Phantasia, which reduces speed of enemies within range and grants hitstun immunity for **0.5** seconds. If the Wanderer has less than **5** cubes, each successful dodge has a **40%** chance to restore 1 dodge attempt. Successful dodges do not interrupt normal attack combos.  \n*Gain a cube for every successful aerial dodge*.'
					}
				],
				skill: [
					{
						name: 'Omnium Shield',
						desc: 'Create shielding for self and nearby allies to block up to **800%** × ATK in damage for **10** seconds, and deal **109.9%** x ATK + **6** damage to nearby targets and **launch** them. Each cube in possession when this skill is used adds **160%** of ATK to max shielding and exhaust the cube. Cooldown: **90** seconds.'
					}
				],
				discharge: [
					{
						name: 'Omnium Wave',
						desc: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and gain 5 cubes upon switching to this weapon, then unleash the **5** cubes along with a Shockwave. This Shockwave deals damage equal to **131.5%** of ATK + **7** to nearby targets, and **launches** them into the air. Each cube also deals damage equal to **37.3%** of ATK + **2**. If allies are in the vicinity, they gain damage immunity for **3** seconds.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Zero'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Unintelligible Dialogue]'
				},
				{
					affinity: 1200,
					effect: 'When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **1.5** seconds. Can only activate for the same weapon **1** time every **5** seconds.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Rules]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Zero]'
				},
				{
					affinity: 4000,
					effect: 'When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **3** seconds. Can only activate for the same weapon **1** time every **5** seconds.'
				}
			],
			recChips: [
				['samir', 4],
				['coco-ritter', [2, 4]],
				['pepper', 3],
				['explosive-core', 3]
			],
			traits: {
				gender: 'Male',
				height: '155 cm',
				birthplace: 'Banges',
				horoscope: 'Gemini',
				birthday: 'Jun 6'
			},
			gifts: {
				categories: [
					'limited-time-items',
					'games'
				],
				items: [
					['psp', 80],
					['gold-coin', 60],
					['tata-cards', 60],
					['pearl', 60],
					['cat-figure', 60],
					['ufo', 60],
					['tata-figure', 60],
					['chess-set',	30],
					['diary', 30],
					['trading-card', 15],
					['snack-box', 15]
				]
			}
		};
	}
};
