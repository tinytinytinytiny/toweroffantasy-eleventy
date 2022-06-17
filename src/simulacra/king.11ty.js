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
					'Increase shatter by **15%**. After shattering the target’s shield, deal damage equal to **120%** of ATK to the target every second for **15** seconds.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Increase damage dealt by **6%** for each enemy within **6** meters, up to a maximum of **30%**.',
					'Increase the current weapon’s base ATK growth by **32%**.',
					'Increase damage dealt against HP shields or shielded enemies by **100%**.',
					'Increase damage dealt by **10%** for each enemy slain for **30** seconds (stack up to **3** times).'
				]
			},
			skills: {
				normal: [
					'normal-attack',
					'rising-scythe',
					'asunder',
					'returning-chainblade',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'rapid-lunge',
					'bat-domain'
				],
				skill: ['mortal-coil'],
				discharge: ['flaming-scythe']
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
