module.exports = {
	data() {
		return {
			name: 'Pepper',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Staff of Scars',
				element: 'electric',
				resonance: 'support',
				shatter: 4,
				charge: 10,
				materials: [
					'green',
					'blue'
				],
				awakening: [
					'Heal all teammates within **10** meters for **100%** of ATK after using a Dodge skill.',
					'Increase the current weapon’s base HP growth by **10%**.',
					'Normal attacks also fire two missiles, each dealing damage equal to **5%** of ATK to the target and restoring **5** weapon charge points.',
					'Increase the current weapon’s base HP growth by **20%**.',
					'Increase speed of obtaining weapon charge by **20%** (not applicable to missile attacks).',
					'Grant all teammates within range of the skill **60%** damage reduction and immunity to crowd control effects.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Normal Attack',
						desc: 'While on the ground, swing the staff to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **25.1%** of ATK + **1**.',
							'Deal damage equal to **18.8%** of ATK + **1**.',
							'Deal damage equal to **30.4%** of ATK + **2**.',
							'Deal damage equal to **41.4%** of ATK + **2**.',
							'Deal damage equal to **73.2%** of ATK + **4**.'
						]
					},
					{
						name: 'Soaring Barrage',
						desc: 'While airborne or after jumping once, tap normal attack to attack 5 times in a row.',
						breakdown: [
							'Deal damage equal to **32.5%** of ATK + **2**.',
							'Deal damage equal to **23.5%** of ATK + **1**.',
							'Deal damage equal to **25.5%** of ATK + **1**.',
							'Deal damage equal to **45.6%** of ATK + **2**',
							'Deal damage equal to **47.7%** of ATK + **3**.'
						]
					},
					{
						name: 'Moonfall',
						desc: 'Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **57.2%** of ATK + **3** damage.'
					},
					{
						name: 'Focused Assault',
						desc: 'After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.',
						breakdown: [
							'Pull in enemies in front of the user, knocking them **into the air** and dealing damage equal to **16.1%** of ATK + **1** every **0.3** seconds (up to **4** times).',
							'Deal damage equal to **18.6%** of ATK + **1** at the target location and to nearby enemies every **0.3** seconds.'
						]
					}
				],
				dodge: [
					{
						name: 'Dodge',
						desc: 'Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.'
					},
					{
						name: 'Surge',
						desc: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **22.6%** of ATK + **1** to targets. Grant **75** weapon charge points upon use.'
					},
					{
						name: 'Tesseract',
						desc: 'Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **32.1%** of ATK + **2** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.'
					}
				],
				skill: [
					{
						name: 'Sanctuary',
						desc: 'Create an energy shield at the Wanderer’s location. Heal allies within the shield for **81.7%** of ATK + **4** every second and reduce their damage taken by **3%** for **10** seconds. **60**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Swift Deliverance',
						desc: 'When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **79%** × ATK + **4** HP for **7** seconds.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 1200,
					effect: 'When Pepper spends satiety to restore HP, increase restoration effect by **100%**.'
				},
				{
					affinity: 4000,
					effect: 'When Pepper spends satiety to restore HP, increase restoration effect by **200%**.'
				}
			],
			recChips: [
				['coco-ritter', [2, 4]],
				['pepper', 4],
				['tenet-guard', 3],
				['cleanup-agreement', 3]
			],
			traits: {
				gender: 'Female',
				height: '160 cm',
				birthplace: 'Banges',
				horoscope: 'Cancer',
				birthday: 'Jul 9'
			},
			gifts: {
				categories: [
					'everyday-items',
					'decorations',
					'collectibles'
				],
				items: [
					['pepper-figure', 80],
					['seal', 60],
					['tata-cards', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['gold-coin', 60],
					['snowglobe',	60],
					['kitchenware', 60],
					['prince-tata-figure', 60],
					['linye-figure', 60],
					['suit', 30],
					['juice-pouch', 30],
					['necklace', 30],
					['perfume', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo-album', 15],
					['flowers', 15],
					['scarf', 15],
					['plant', 15],
					['strange-plant', 15]
				]
			}
		};
	}
};
