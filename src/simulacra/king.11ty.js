module.exports = {
	data() {
		return {
			name: 'KING',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Scythe of the Crow',
				element: 'fire',
				resonance: 'damage',
				shatter: 12.5,
				charge: 5,
				materials: [
					'green',
					'blue'
				],
				awakening: [
					'Increase shatter by <strong>15%</strong>. After shattering the target’s shield, deal damage equal to <strong>120%</strong> of ATK to the target every second for <strong>15</strong> seconds.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Increase damage dealt by **6%** for each enemy within **6** meters, up to a maximum of **30%**.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Increase damage dealt against HP shields or shielded enemies by **100%**.',
					'Increase damage dealt by **10%** for each enemy slain for **30** seconds (stack up to **3** times).'
				]
			},
			skills: {
				normal: [
					{
						name: 'Normal Attack',
						desc: 'While on the ground, swing the scythe to launch 5 consecutive attacks.',
						breakdown: [
							'Deal damage equal to **51.9%** of ATK + **3** and knock the target back a short distance.',
							'Deal damage equal to **44.7%** of ATK + **2** and knock the target back a short distance.',
							'Deal damage equal to **97.2%** of ATK + **5** and knock the target back a short distance.',
							'Deal damage equal to **99.6%** of ATK + **5** and knock the target back a short distance.',
							'Deal damage equal to **94.7%** of ATK + **5**, knock the target **into the air**, and cause the Wanderer to go airborne.'
						]
					},
					{
						name: 'Rising Scythe',
						desc: 'While airborne or after jumping once, attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **57.6%** of ATK + **3**.',
							'Deal damage equal to **62.6%** of ATK + **3**.',
							'Deal damage equal to **173%** of ATK + **9**.',
							'Deal damage equal to **194.4%** of ATK + **10**.',
							'Deal damage equal to **158.1%** of ATK + **8** and knock the target down. The higher the target is from the ground, the more damage is dealt, up to **600%** of ATK.'
						]
					},
					{
						name: 'Asunder',
						desc: 'Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Asunder. While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **65.4%** of ATK + **3** and deliver a **knockdown**. The higher the location is when triggered, the higher the damage dealt, up to **600%** of ATK.'
					},
					{
						name: 'Returning Chainblade',
						desc: 'After the fourth normal attack, hold the normal attack button to trigger Returning Chainblade. Transform into a chainblade, dealing damage equal to **124.9%** of ATK + **7** to nearby targets and pulling them in.'
					},
					{
						name: 'Sneak Attack',
						desc: 'Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.'
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.'
					},
					{
						name: 'Rapid Lunge',
						desc: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Rapid Lunge. Deal up to **115.5%** of ATK + **6** damage and pull in nearby enemies.'
					},
					{
						name: 'Domain of the Bat',
						desc: 'When dodging, summon a group of bats that pulls the target into the center. Tap normal attack during the short period after dodging to swing the scythe, dealing up to **103.8%** of ATK + **5** damage to the target.'
					}
				],
				skill: [
					{
						name: 'Mortal Coil',
						desc: 'Swing the scythe, dealing damage equal to **284%** of ATK + **15**. **45** second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Flaming Scythe',
						desc: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and create a Flaming Scythe upon switching to this weapon, dealing damage equal to **277%** of ATK + **15** and lasts for **10** seconds. Additionally, spawn Flaming Scythes every **2** seconds. The scythes summon volcanic eruptions from the ground, which deal damage equal to **60%** of ATK + **3** to targets and knock them into the air.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar KING'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Trading Fiction]'
				},
				{
					affinity: 1200,
					effect: 'Every **7** enemies killed by KING restores HP equal to **8%** of Max HP.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Peer-to-peer Contract]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Betting]'
				},
				{
					affinity: 4000,
					effect: 'Every **5** enemies killed by KING restores HP equal to **10%** of Max HP.'
				}
			],
			recChips: [
				['king', 2],
				['shiro', 2],
				['explosive-core', 3],
				['offensive-logic', 3]
			],
			traits: {
				gender: 'Male',
				height: '190 cm',
				birthplace: 'Crown',
				horoscope: 'Scorpio',
				birthday: 'Nov 3'
			},
			gifts: {
				categories: [
					'collectibles',
					'rare-items',
					'limited-time-items'
				],
				items: [
					['seal', 60],
					['gold-coin', 60],
					['kitchenware', 60],
					['tata-cards', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['mia-figure', 60],
					['tata-figure', 60],
					['ufo', 60],
					['psp', 60],
					['snowglobe', 60],
					['linye-figure', 60],
					['necklace', 30],
					['vial', 30],
					['photo', 15],
					['snack-box', 15],
					['harmonica', 15],
					['strange-plant', 15]
				]
			}
		};
	}
};
