module.exports = {
	data() {
		return {
			name: 'Coco Ritter',
			isNew: false,
			isChina: false,
			rarity: 5,
			weapon: {
				name: 'Absolute Zero',
				element: 'ice',
				resonance: 'support',
				charge: 12.5,
				shatter: 4,
				materials: [
					'ice',
					'green',
					'blue'
				],
				awakening: [
					'After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within **15** meters. Heal for **25%** of ATK and restore **50** weapon charge points each time and last for **25** seconds. Cooldown: **25** seconds.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Use **Sanctuary** or discharge skills to remove debuffs from targets, can be used while being affect by control effects. Increase shatter and damage dealt for all teammates within range by **20%**, and grant them immunity to control effects and shatter.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Increase healing effect by **15%**, plus an additional **20%** when healing targets with less than **60%** HP.',
					'Whenever a healing bee is summoned or disappears from battle, heal all allies for **100%** of the user’s ATK. All allies within **6** meters of the healing bee also gain **10%** damage boost (cannot stack).'
				]
			},
			skills: {
				normal: [
					{
						name: 'Normal Attack',
						desc: 'While on the ground, swing the staff to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **41.9%** of ATK + **2**.',
							'Deal damage equal to **31.4%** of ATK + **2**.',
							'Deal damage equal to **50.6%** of ATK + **3**.',
							'Deal damage equal to **69%** of ATK + **4**.',
							'Deal damage equal to **122%** of ATK + **6**.'
						]
					},
					{
						name: 'Focused Assault',
						desc: 'After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.',
						breakdown: [
							'Pull in enemies in front of the user, knocking them **into the air** and dealing damage equal to **26.8%** of ATK + **1** every **0.3** seconds (up to **4** times).',
							'Deal damage equal to **31.1%** of ATK + **2** at the target location and to nearby enemies every **0.3** seconds.'
						]
					},
					{
						name: 'Soaring Barrage',
						desc: 'While airborne or after jumping once, tap normal attack to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **54.2%** of ATK + **3**',
							'Deal damage equal to **39.1%** of ATK + **2**.',
							'Deal damage equal to **42.4%** of ATK + **2**.',
							'Deal damage equal to **76.2%** of ATK + **4**.',
							'Deal damage equal to **79.4%** of ATK + **4**.'
						]
					},
					{
						name: 'Moonfall',
						desc: 'Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **95.2%** of ATK + **5** damage.'
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.'
					},
					{
						name: 'Surge',
						desc: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **35.3%** of ATK + **2** to targets. Grant **75** weapon charge points upon use.'
					},
					{
						name: 'Tesseract',
						desc: 'Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **51.1%** of ATK + **3** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.'
					}
				],
				skill: [
					{
						name: 'Sanctuary',
						desc: 'Create a healing zone that moves with the Wanderer and heals nearby allies for **95%** of ATK + **5** once every **0.5** seconds for **6** seconds. **60**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Swift Deliverance',
						desc: 'When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **118.8%** × ATK + **6** HP for **7** seconds.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Coco Ritter'
				},
				{
					affinity: 600,
					effect: 'Unlock communication [Some Memories]'
				},
				{
					affinity: 1200,
					effect: 'When Coco Ritter uses a support weapon, increase healing effects she inflicts on others and receives by **20%**.'
				},
				{
					affinity: 2000,
					effect: 'Unlock communication [Some Obsessions]'
				},
				{
					affinity: 3000,
					effect: 'Unlock communication [Some Companionship]'
				},
				{
					affinity: 4000,
					effect: 'When Coco Ritter uses a support type weapon, the effects of healing and receiving healing are increased by **20%**, and when the discharge skills or weapon skills of the support-type weapon are used, the ATK of the friendly armies around you will increase by **15%** and lasts for **5** seconds.'
				}
			],
			recChips: [
				['coco-ritter', [2, 4]],
				['meryl', 2],
				['zero', 4],
				['pepper', 3],
				['bullseye', 3]
			],
			traits: {
				gender: 'Female',
				height: '147 cm',
				birthplace: 'Hagarde',
				horoscope: 'Gemini',
				birthday: 'Jun 1'
			},
			gifts: {
				categories: [
					'toys',
					'decorations',
					'rare-items'
				],
				items: [
					// [60, ['fox-figure', 'cat-figure', 'present', 'ufo', 'mia-figure']],
					// [30, ['tata-plush', 'spider-figure', 'vial', 'elf-figure', 'bunny-doll', 'cat-plush', 'robot-figure', 'tata-plush', 'spider-figure', 'vial', 'elf-figure', 'bunny-doll', 'cat-plush', 'robot-figure']],
					// [15, ['photo-album', 'photo', 'plant', 'harmonica', 'pinwheel']]
					['fox-figure', 60],
					['cat-figure', 60],
					['present', 60],
					['ufo', 60],
					['mia-figure', 60],
					['tata-plush', 30],
					['spider-figure', 30],
					['vial', 30],
					['elf-figure', 30],
					['bunny-doll', 30],
					['cat-plush', 30],
					['robot-figure', 30],
					['photo-album', 15],
					['photo', 15],
					['plant', 15],
					['harmonica', 15],
					['pinwheel', 15]
				]
			}
		};
	}
};
