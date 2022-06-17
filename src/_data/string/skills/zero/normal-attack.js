module.exports = {
	name: 'Normal Attack',
	input: ['Attack', 'Attack', 'Attack', 'Attack', 'Attack'],
	desc: 'While on the ground, manipulate the cube to attack 5 times in a row.\n\n*If normal attacks hit targets 6 times, gain 1 cube. Up to 5 cubes can be stored.*',
	breakdown: [
		'Deal damage equal to **35.9%** of ATK + **2**.',
		'Deal damage equal to **29.4%** of ATK + **2**.',
		'Deal damage equal to **91.5%** of ATK + **5**.',
		'Deal damage equal to **61.2%** of ATK + **3**.',
		'Deal damage equal to **62.3%** of ATK + **3** up to 3 times and **launch** the target.'
	]
};