module.exports = {
	name: 'Normal Attack',
	input: ['Attack ×4'],
	desc: 'While on the ground, swing the shield axe to attack 4 times in a row.',
	breakdown: [
		[['70.6%', '4', 'back a short distance'], ['122.9%', '6', 'back a short distance']],
		[['51.7%', '3', 'back a short distance'], ['72.2%', '4', 'back a short distance']],
		[['57.1%', '3', 'back a short distance'], ['109%', '6', 'back a short distance']],
		[['167.3%', '9', 'into the air'], ['201.1%', '11', 'back']]
	].map(value => `Shield Form: Deal damage equal to **${value[0][0]}** of ATK + **${value[0][1]}** and knock the target ${value[0][2]}.  \nAxe Form: Deal damage equal to **${value[1][0]}** of ATK + **${value[1][1]}** and knock the target ${value[1][2]}.`)
};
