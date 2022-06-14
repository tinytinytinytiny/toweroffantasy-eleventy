module.exports = {
	data() {
		return {
			name: 'Bai Ling',
			isNew: false,
			isChina: false,
			rarity: 4,
			weapon: {
				name: 'Nightingale’s Feather',
				element: 'physical',
				resonance: 'damage',
				charge: 10,
				shatter: 6,
				materials: [
					'physical',
					'green',
					'blue'
				],
				awakening: [
					'Restore 1 dodge attempt every fifth normal attack or after using **Piercing Shot**.',
					'Increase the current weapon’s base ATK growth by **10%**.',
					'Increase headshot damage by **30%**.',
					'Increase the current weapon’s base ATK growth by **20%**.',
					'Dodge skills inflict grievous on targets for **7** seconds.',
					'Increase crit rate by **30%** and crit damage by **50%** against grievous targets.'
				]
			},
			skills: {
				normal: [
					{
						name: 'Quickdraw',
						desc: 'While on the ground, draw the bow repeatedly to attack 5 times.',
						breakdown: [
							'Deal damage equal to **33.7%** of ATK + **2**.',
							'Deal damage equal to **30.2%** of ATK + **2**.',
							'Deal damage equal to **54.3%** of ATK + **3**.',
							'Deal damage equal to **83.5%** of ATK + **4**.'
						]
					},
					{
						name: 'Charged Arrow',
						desc: 'Tap and hold normal attack to charge the weapon. Deal basic damage equal to **60.5%** of ATK + **3**, and **50%** more for each **1** second spent charging, up to **3** seconds. Deal double damage when scoring a headshot or when hitting an enemy’s weakness, knocking them down (headshots are ineffective against Wanderers).'
					},
					{
						name: 'Arrow Rain',
						desc: 'After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to **198.7%** of ATK + **10** area damage to targets.'
					},
					{
						name: 'Air Volley',
						desc: 'While airborne, tap normal attack to attack 4 times in a row in the air.',
						breakdown: [
							'Deal damage equal to **38.8%** of ATK + **2**.',
							'Deal damage equal to **51%** of ATK + **3**.',
							'Deal damage equal to **77.7%** of ATK + **4**.',
							'Deal damage equal to **117%** of ATK + **6**.'
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
						desc: 'Tap attack after dodging to trigger Loaded Arrow, knocking the target back by a short distance and dealing damage equal to **85.5%** of ATK + **5**.'
					}
				],
				skill: [
					{
						name: 'Piercing Shot',
						desc: 'Backflips and fires **1** piercing arrow forward, dealing damage equal to **154.8%** of ATK + **8** and knocking the target back. **12**-second cooldown.'
					}
				],
				discharge: [
					{
						name: 'Explosive Barrage',
						desc: 'When ***weapon charge*** is full or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and unleashes Explosive Barrage on the target upon switching to this weapon, dealing damage equal to **486.6%** of ATK + **26**.'
					}
				]
			},
			mimicEffects: [
				{
					affinity: 200,
					effect: 'Unlock profile avatar Bai Ling'
				},
				{
					affinity: 1200,
					effect: 'When Bai Ling puts the Glider or the Wayboard away, increase speed by **8%** for **12** seconds. Cooldown: **60** seconds.'
				},
				{
					affinity: 4000,
					effect: 'When Bai Ling puts the Glider or the Wayboard away, increase speed by **15%** for **12** seconds. Cooldown: **60** seconds.'
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
				height: '163 cm',
				birthplace: 'HT201 Sanctuary',
				horoscope: 'Taurus',
				birthday: 'May 8'
			},
			gifts: {
				categories: [
					'decorations',
					'collectibles',
					'rare-items'
				],
				items: [
					// [80, ['snowglobe', 'seal']],
					// [60, ['mia-figure', 'gold-coin', 'fox-figure', 'cat-figure', 'ufo', 'pepper-figure', 'kitchenware', 'prince-tata-figure', 'linye-figure']],
					// [30, ['necklace', 'vial', 'spider-figure', 'elf-figure']],
					// [15, ['photo-album', 'harmonica', 'scarf', 'photo', 'plant', 'strange-plant']]
					['snowglobe', 80],
					['seal', 80],
					['mia-figure', 60],
					['gold-coin', 60],
					['fox-figure', 60],
					['cat-figure', 60],
					['ufo', 60],
					['pepper-figure',	60],
					['kitchenware', 60],
					['prince-tata-figure', 60],
					['linye-figure', 60],
					['necklace', 30],
					['vial', 30],
					['spider-figure', 30],
					['elf-figure', 30],
					['photo-album', 15],
					['harmonica', 15],
					['scarf', 15],
					['photo', 15],
					['plant', 15],
					['strange-plant', 15]
				]
			}
		};
	}
};
