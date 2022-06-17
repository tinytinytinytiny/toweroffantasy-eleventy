module.exports = {
	name: 'Twin Blades',
	input: ['Attack', 'Attack', 'Attack', 'Attack', 'Attack'],
	desc: 'While on the ground, swing the blades to attack 5 times in a row.',
	breakdown: [
		['42.9%', '2'],
		['52.2%', '3'],
		['64.8%', '3'],
		['69.2%', '4'],
		['144.3%', '8']
	].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}** and knock the target back a short distance.`)
};