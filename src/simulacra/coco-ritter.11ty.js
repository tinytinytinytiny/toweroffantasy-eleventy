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
				awakening: [
					'After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within **15** meters. Heal for **25%** of ATK and restore **50** weapon charge points each time and last for **25** seconds. Cooldown: **25** seconds.',
					'Increase the current weapon’s base HP growth by **16%**.',
					'Use **Sanctuary** or discharge skills to remove debuffs from targets, can be used while being affect by control effects. Increase shatter and damage dealt for all teammates within range by **20%**, and grant them immunity to control effects and shatter.',
					'Increase the current weapon’s base HP growth by **32%**.',
					'Increase healing effect by **15%**, plus an additional **20%** when healing targets with less than **60%** HP.',
					'Whenever a healing bee is summoned or disappears from battle, heal all allies for **100%** of the user’s ATK. All allies within **6** meters of the healing bee also gain **10%** damage boost (cannot stack).'
				],
				charge: 12.5,
				shatter: 4,
				materials: [
					'ice',
					'green',
					'blue'
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
