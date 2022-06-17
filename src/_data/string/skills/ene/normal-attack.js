module.exports = {
	name: 'Normal Attack',
	input: ['Attack', 'Attack', 'Attack', 'Attack'],
	desc: 'While on the ground, swing the hammer to attack 4 times in a row.',
	breakdown: [
		[
			[['76.3%', '4'], ['75.5%', '4']],
			[['62.1%', '3'], ['65%', '3']],
			[['157.4%', '8'], ['171.3%', '9']],
		].map(value => `Deal damage equal to **${value[0][0]}** of ATK + **${value[0][1]}** and knock the target back a short distance.  \nWhile Outburst is active, deal damage equal to **${value[1][0]}** of ATK + **${value[1][1]}** and knock the target back a short distance.`),
		'Deal damage equal to **263.8** of ATK + **14** and launch the target.  \nWhile Outburst is active, deal damage equal to **315.3%** of ATK + **17** and knock the target **into the air**.'
	].flat()
};