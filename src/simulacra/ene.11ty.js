module.exports = {
	data() {
		return {
			name: 'Ene',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Pummeler',
				element: 'ice',
				resonance: 'tank',
				shatter: 10,
				charge: 6,
				materials: [
					'green',
					'black'
				],
				awakening: [
					'Taunt nearby targets after switching to this weapon, preventing **1** instance of damage in the next **8** seconds and granting hyperbody for the next **8** seconds. Cooldown: **15** seconds.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'After taking damage, reduce all damage received by **50%** for the next **6** seconds. Cooldown: **20** seconds.',
					'Increase the current weapon’s base HP growth by **20%**.',
					'Normal attacks **stun** targets for **2.5** seconds. Cooldown: **20** seconds.',
					'Discharge skills deal an additional **10%** damage to targets and increase frost damage by an additional **10%** for **25** seconds.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Normal Attack',
						desc: 'While on the ground, swing the hammer to attack 4 times in a row.',
						breakdown: [
							[
								[['76.3%', '4'], ['75.5%', '4']],
								[['62.1%', '3'], ['65%', '3']],
								[['157.4%', '8'], ['171.3%', '9']],
							].map(value => `Deal damage equal to **${value[0][0]}** of ATK + **${value[0][1]}** and knock the target back a short distance.  \nWhile Outburst is active, deal damage equal to **${value[1][0]}** of ATK + **${value[1][1]}** and knock the target back a short distance.`),
							'Deal damage equal to **263.8** of ATK + **14** and launch the target.  \nWhile Outburst is active, deal damage equal to **315.3%** of ATK + **17** and knock the target **into the air**.'
					 ].flat()
					},
					{
						name: 'Focus Smash',
						desc: 'Tap and hold normal attack to trigger Focus Smash (can be charged up to 3 stacks). Grant immunity to all control effects and hyperbody while charging.',
						breakdown: [
							'First Stack: Deal damage equal to **110%** of ATK + **6** and knock the target into the air.',
							'Second Stack: Deal damage equal to **276%** of ATK + **15** and knock the target **into the air**.',
							'Third Stack: Deal damage equal to **518%** of ATK + **27** and knock the target **into the air**.',
						]
					},
					{
						name: 'Furious Strikes',
						desc: 'While Outburst is active, tap and hold normal attack to trigger Furious Strikes, dealing damage equal to **501.6%** of ATK + **26** and knocking the target **into the air**.'
					},
					{
						name: 'Pummel',
						desc: 'While airborne or after jumping once, tap normal attack to trigger Jumping Blast. Deal damage equal to **121.7%** of ATK + **6** and knock the target into the air.  \nWhile Outburst is active, deal damage equal to **133.9%** of ATK + **7** and knock the target **into the air**. Deal greater damage depending on the user’s altitude when the ability is triggered, up to **600%** of ATK.'
					},
					{
						name: 'Shockwave',
						desc: 'Tapping and holding while airborne, Double-jumping, short tapping in the air when there are targets nearby, climbing, jumping backward, or attacking while using the Jetpack will trigger a Shockwave. Knock the target **into the air 4** times, dealing damage equal to **34.8%** of ATK + **2** each time. Cost **250** endurance.  \nWhile Outburst is active, Shockwave knocks the target **into the air 5** times, dealing damage equal to **38.3%** of ATK + **2** each time. Deal greater damage depending on the user’s altitude when the ability is triggered, up to **600%** of ATK.'
					},
					{
						name: 'Sneak Attack',
						desc: 'Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **427.5%** of ATK + **23**.'
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.'
					},
					{
						name: 'Jumping Smash',
						desc: 'Use the arrow buttons and the dodge button to trigger Jumping Smash, unleashing a Shockwave that knocks the enemy into the air **4** times, dealing damage equal to **161.6%** of ATK + **9**.'
					},
					{
						name: 'Worldsplitter',
						desc: 'Tap normal attack during the short period of time after a dodge to trigger Worldsplitter, unleashing **3** shockwaves forward, each dealing damage equal to **52.4%** of ATK + **3**, and knocking enemies into the air.  \nWhile in Outburst mode, fire **5** shockwaves forward, each dealing damage equal to **52.4%** of ATK + **3** and knocking the target into the air.'
					}
				],
				skill: [
					{
						name: 'Outburst',
						desc: 'Switch to activate Outburst, increasing damage dealt for **25** seconds. While Outburst is active, skills trigger Windfury, dealing damage equal to **219%** of ATK + **12**, knock the target **into the air**, and create an air current on the ground. While standing in the current, dodging has no cost. Cooldown: **45** seconds (Windfury’s cooldown: **10** seconds).'
					}
				],
				discharge: [
					{
						name: 'Overwhelming Maul',
						desc: 'When a ***weapon is fully charged*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and knock nearby targets **into the air** upon switching to this weapon, dealing damage equal to **153.3%** of ATK + **8**. Also summon a hammer to fall on nearby targets, dealing damage equal to **153.3%** of ATK + **8**.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Ene swims, climbs, or glides, reduce endurance consumption by **12%**.'
				},
				{
					affinity: 4000,
					effect: 'When Ene swims, climbs, or glides, reduce endurance consumption by **20%**.'
				}
			],
			recChips: [
				['king', 2],
				['shiro', 2],
				['bullseye', 3],
				['offensive-logic', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '145 cm',
				birthplace: 'Crown',
				horoscope: 'Leo',
				birthday: 'Aug 17'
			},
			gifts: {
				categories: [
					'games',
					'decorations',
					'toys'
				],
				items: [
					['prince-tata-figure', 80],
					['pepper-figure', 60],
					['ufo', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['present', 60],
					['psp', 60],
					['pearl', 60],
					['snowglobe', 60],
					['chess-set', 30],
					['diary', 30],
					['cat-plush', 30],
					['tata-plush', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['robot-figure', 30],
					['bunny-doll', 30],
					['photo-album', 15],
					['trading-card', 15],
					['pinwheel', 15],
					['plant', 15]
				]
			}
		};
	}
};
