module.exports = {
	name: 'Normal Attack',
	input: ['Attack ×4'],
	desc: 'While on the ground, swing the hammer to attack 4 times in a row.',
	breakdown: [
		[
			['76.3%', '4', 'knock the target back a short distance'],
			['75.5%', '4', 'knock the target back a short distance']
		],
		[
			['62.1%', '3', 'knock the target back a short distance'],
			['65%', '3', 'knock the target back a short distance']
		],
		[
			['157.4%', '8', 'knock the target back a short distance'],
			['171.3%', '9', 'knock the target back a short distance']
		],
		[
			['263.8%', '14', 'launch the target'],
			['315.3%', '17', 'knock the target **into the air**']
		]
	].map(value => `Deal damage equal to **${value[0][0]}** of ATK + **${value[0][1]}** and ${value[0][2]}.  \nWhile Outburst is active, deal damage equal to **${value[1][0]}** of ATK + **${value[1][1]}** and ${value[1][2]}.`)
};