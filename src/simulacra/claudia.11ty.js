module.exports = {
	data() {
		return {
			name: 'Claudia',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Guren Blade',
				element: 'physical',
				resonance: 'damage',
				charge: 12,
				shatter: 7.5,
				materials: [
					'physical',
					'red',
					'blue'
				],
				awakening: [
					'After hitting a target with a skill or discharge skill, grant a stack of damage boost, which increases damage dealt by **8%** for **25** seconds (stacks up to **3** times; each successful skill or discharge use can only grant a single stack).',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Hitting a target with a skill or discharge skill applies a stack of War Wounds to the target, increasing incoming physical damage and shatter effects from physical and elemental weapons taken by the target by **10%** for **15** seconds. Stack up to **1** time.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Hitting targets with discharge skills grants skill damage boost, which increases all weapon skill damage by **20%** for **15** seconds (cannot stack).',
					'Hitting the same target no longer reduces the damage dealt. After using Guren Blade or a discharge skill, applies **1** stack of War Wounds to all targets within 8 meters.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Quick slash',
						desc: 'While on the ground, swing the blade to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **39%** of ATK + **2** and knock the target back a short distance.',
							'Deal damage equal to **54.6%** of ATK + **3** and knock the target back a short distance.',
							'Deal damage equal to **49.4%** of ATK + **3** and knock the target back a short distance.',
							'Deal damage equal to **87%** of ATK + **5** and knock the target back a short distance.',
							'Deal damage equal to **148.1%** of ATK + **8** and **launch** the target.'
						]
					},
					{
						name: 'Jumping Strike',
						desc: 'While airborne, tap normal attack to attack 4 times in a row.',
						breakdown: [
							'Deal damage equal to **23.2%** of ATK + **1**.',
							'Deal damage equal to **40.3%** of ATK + **2**.',
							'Deal damage equal to **95.4%** of ATK + **5**.',
							'Deal damage equal to **115.8%** of ATK + **6** and deliver a **knockdown**.'
						]
					},
					{
						name: 'Cyclone',
						desc: 'Hold the normal attack button after normal attacks to trigger Cyclone. Knock the target, suspending them in mid-air and deal **39.8%** of ATK + **2** to a single target.'
					},
					{
						name: 'Diving Edge',
						desc: 'Tap and hold normal attack while airborne, or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Diving Edge. While falling, deal damage equal to **10%** of ATK + **1** each hit. Upon landing, deal damage equal to **63.6%** of ATK + **3** and knock the target back. The higher you are when cast, the higher the damage dealt, up to **600%** of ATK.'
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
						name: 'Leap Attack',
						desc: 'Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to **31.6%** of ATK + **2**, **knocking the target into the air** and becoming airborne, then deal additional damage equal to **47.3%** of ATK + **2**.'
					}
				],
				skill: [
					{
						name: 'Roam',
						desc: 'Dance through targets while swinging the blade, dealing damage equal to **348.5%** of ATK + **18** in total to up to **5** targets (attacks on the same target deal **20%** less damage). At the end of the ability, slash the space in front, dealing damage equal to **264%** of ATK + **14** to targets and knocking them into the air. Immune to crowd-control effects while ability is in use. Cooldown: **15** seconds.'
					}
				],
				discharge: [
					{
						name: 'Unbridled Flurry',
						desc: 'When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, who charges and **airbornes** a target to deal **436.2%** × ATK + **23** damage, leaving behind a bladestorm that deals **174.4%** x ATK + **9** damage to the target, while immunizing self to grievous/freeze/burn/electrify effects for **5** seconds.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'Hide for **1** seconds upon dodging.'
				},
				{
					affinity: 4000,
					effect: 'Hide for **1.5** seconds upon dodging.'
				}
			],
			recChips: [
				['claudia', [2, 4]],
				['samir', 2],
				['crow', 2],
				['pepper', 3],
				['provocateurs', 3]
			],
			traits: {
				gender: 'Female',
				height: '170 cm',
				birthplace: 'Hagarge',
				horoscope: 'Capricorn',
				birthday: 'Jan 16'
			},
			gifts: {
				categories: [
					'everyday-items',
					'rare-items',
					'decorations'
				],
				items: [
					['snowglobe', 80],
					['pepper-figure', 80],
					['seal', 60],
					['tata-cards', 60],
					['cat-figure', 60],
					['mia-figure', 60],
					['prince-tata-figure', 60],
					['ufo', 60],
					['suit', 30],
					['juice-pouch', 30],
					['vial', 30],
					['perfume', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo', 15],
					['photo-album', 15],
					['scarf', 15],
					['flowers', 15],
					['harmonica', 15],
					['plant', 15]
				]
			}
		};
	}
};
