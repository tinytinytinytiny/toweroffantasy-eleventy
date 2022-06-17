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
					'normal-attack',
					'focus-smash',
					'furious-strikes',
					'pummel',
					'shockwave',
					'sneak-attack'
				],
				dodge: [
					'dodge',
					'jumping-smash',
					'worldsplitter'
				],
				skill: ['outburst'],
				discharge: ['overwhelming-maul']
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
