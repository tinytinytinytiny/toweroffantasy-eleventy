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
				shatter: 4,
				charge: 12.5,
				materials: [
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
					'normal-attack',
					'focused-assault',
					'soaring-barrage',
					'moonfall'
				],
				dodge: [
					'dodge',
					'surge',
					'tesseract'
				],
				skill: ['sanctuary'],
				discharge: ['swift-deliverance']
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
					[60, ['fox-figure', 'cat-figure', 'present', 'ufo', 'mia-figure']],
					[30, ['tata-plush', 'spider-figure', 'vial', 'elf-figure', 'bunny-doll', 'cat-plush', 'robot-figure']],
					[15, ['photo-album', 'photo', 'plant', 'harmonica', 'pinwheel']]
				]
			}
		};
	}
};
