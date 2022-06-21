module.exports = {
	name: 'Heavy Cleave',
	input: ['Attack ×4'],
	desc: 'While on the ground, swing a greatsword to attack 4 times in a row.',
	breakdown: [
		['60.7%', '3', 'back a short distance'],
		['50.1%', '3', 'back a short distance'],
		['87.9%', '5', 'back a short distance'],
		['130.3%', '7', '**into the air**, then launch them upon landing']
	].map(value => `Deal damage equal to **${value[0]}** of ATK + **${value[1]}** and knock the target ${value[2]}.`)
};