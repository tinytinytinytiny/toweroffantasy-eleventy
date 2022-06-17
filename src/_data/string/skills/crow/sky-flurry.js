module.exports = {
	name: 'Sky Flurry',
	input: ['Jump', 'Attack', 'Attack', 'Attack', 'Attack'],
	desc: 'While airborne or after jumping once, tap normal attack to attack 4 times in a row.',
	breakdown: [
		['46.8%', '2'],
		['27.5%', '1'],
		['65.8%', '3'],
		['98.5%', '5']
	].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}**.`)
};