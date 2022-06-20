module.exports = {
	name: 'Aerial Strike',
	input: ['Jump', 'Attack ×3'],
	desc: 'While airborne or after jumping once, attack 3 times in a row.',
	breakdown: [
		[['69%', '4'], ['107.8%', '6']],
		[['72.9%', '4'], ['82.8%', '4']],
		[['93.7%', '5'], ['252.7%', '13']]
	].map(value => `Shield Form: Deal damage equal to **${value[0][0]}** of ATK + **${value[0][1]}**.  \nAxe Form: Deal damage equal to **${value[1][0]}** of ATK + **${value[1][1]}**.`)
};
