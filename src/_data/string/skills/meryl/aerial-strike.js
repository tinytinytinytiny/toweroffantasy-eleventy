module.exports = {
	name: 'Aerial Strike',
	input: ['Jump', 'Attack ×4'],
	desc: 'While airborne or after jumping once, tap normal attack to attack 4 times in a row.',
	breakdown: [
		['88.7%', '5', ''],
		['72.9%', '4', ''],
		['130%', '7', ''],
		['117.1%', '6', ' and deliver a **knockdown**, launch the target upon landing']
	].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}**${value[2]}.`)
};