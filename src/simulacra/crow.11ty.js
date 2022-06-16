module.exports = {
	data() {
		return {
			name: 'Crow',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Thunderblades',
				element: 'electric',
				resonance: 'damage',
				shatter: 6,
				charge: 8,
				materials: [
					'red',
					'blue'
				],
				awakening: [
					'Attacking targets from behind increases crit rate of all dual blades attacks by **40%**. Attacking an electrified target from behind increases crit rate by **100%** and crit damage by **30%**.',
					'Increase the current weapon’s base ATK growth by **16%**.',
					'Increase damage by **30%** to targets with less than **60%** HP.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Triggering a Back Attack grants a 100% crit chance for the next **4** seconds and increases crit damage by **50%**. Cooldown: **10** seconds.',
					'After using a skill, increase volt damage dealt to the target by **20%** for **20** seconds.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Twin Blades',
						desc: 'While on the ground, swing the blades to attack 5 times in a row.',
						breakdown: [
							['42.9%', '2'],
							['52.2%', '3'],
							['64.8%', '3'],
							['69.2%', '4'],
							['144.3%', '8']
						].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}** and knock the target back a short distance.`)
					},
					{
						name: 'Sky Flurry',
						desc: 'While airborne or after jumping once, tap normal attack to attack 4 times in a row.',
						breakdown: [
							['46.8%', '2'],
							['27.5%', '1'],
							['65.8%', '3'],
							['98.5%', '5']
						].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}**.`)
					},
					{
						name: 'Rapid Lunge',
						desc: 'After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them **into the air**, dealing total damage equal to **83.4%** of ATK + **4**.'
					},
					{
						name: 'Spiral Drive',
						desc: 'Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to **42%** of ATK + **2** each hit.'
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
						name: 'Flying Blades',
						desc: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target **5** times, each dealing damage equal to **18.8%** of ATK + **1**. Grant immunity to control effects while phasing.'
					}
				],
				skill: [
					{
						name: 'Returning Blades',
						desc: 'Fires 6 returning blades, each dealing damage equal to **20.7%** of ATK + **1**. Gains **hyperbody** for up to **8** seconds, and the effect is removed when the blades return. **45**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Orbiting Blades',
						desc: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and blink to the target location upon switching to this weapon and attack, dealing damage equal to **62.1%** of ATK + **3** and electrocuting the target (after **5** seconds, deals volt damage equal to **15%** of damage dealt, up to **350%** of the Wanderer’s ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to **46.5%** of ATK + **2** to those that touch them.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Crow is not in team play, increase damage dealt by **6%** and reduce damage received by **4%**.'
				},
				{
					affinity: 4000,
					effect: 'When Crow is not in team play, increase damage dealt by **10%** and reduce damage received by **6%** When Crow enters combat, increase damage dealt by **12%** for **12** seconds.'
				}
			],
			recChips: [
				['samir', [2, 4]],
				['claudia', 2],
				['crow', 2],
				['pepper', 3],
				['tenet-guard', 3]
			],
			traits: {
				gender: 'Male',
				height: '162 cm',
				birthplace: 'Astra',
				horoscope: 'Sagittarius',
				birthday: 'Dec 17'
			},
			gifts: {
				categories: [
					'everyday-items',
					'figurines',
					'limited-time-items'
				],
				items: [
					['tata-cards', 80],
					['tata-figure', 80],
					['gold-coin', 60],
					['cat-figure', 60],
					['mia-figure', 60],
					['pepper-figure', 60],
					['bear-figure', 60],
					['psp', 60],
					['linye-figure', 60],
					['suit', 30],
					['juice-pouch', 30],
					['perfume', 30],
					['pumpkin-figure', 30],
					['android-figure', 30],
					['flowers', 15],
					['snack-box', 15],
					['scarf', 15]
				]
			}
		};
	}
};
