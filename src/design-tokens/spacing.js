// @link https://utopia.fyi/space/calculator?c=320,16,1.2,1800,19.5,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|l-2xl|s-xl

module.exports = {
	'0': '0',

	'3xs': 'clamp(0.25rem, calc(0.24rem + 0.07vw), 0.31rem)',
	'2xs': 'clamp(0.50rem, calc(0.47rem + 0.14vw), 0.63rem)',
	'xs': 'clamp(0.75rem, calc(0.71rem + 0.20vw), 0.94rem)',
	's': 'clamp(1.00rem, calc(0.95rem + 0.27vw), 1.25rem)',
	'm': 'clamp(1.50rem, calc(1.43rem + 0.34vw), 1.81rem)',
	'l': 'clamp(2.00rem, calc(1.91rem + 0.47vw), 2.44rem)',
	'xl': 'clamp(3.00rem, calc(2.85rem + 0.74vw), 3.69rem)',
	'2xl': 'clamp(4.00rem, calc(3.81rem + 0.95vw), 4.88rem)',
	'3xl': 'clamp(6.00rem, calc(5.72rem + 1.42vw), 7.31rem)',

	// One-up pairs
	'3xs-2xs': 'clamp(0.25rem, calc(0.17rem + 0.41vw), 0.63rem)',
	'2xs-xs': 'clamp(0.50rem, calc(0.41rem + 0.47vw), 0.94rem)',
	'xs-s': 'clamp(0.75rem, calc(0.64rem + 0.54vw), 1.25rem)',
	's-m': 'clamp(1.00rem, calc(0.82rem + 0.88vw), 1.81rem)',
	'm-l': 'clamp(1.50rem, calc(1.30rem + 1.01vw), 2.44rem)',
	'l-xl': 'clamp(2.00rem, calc(1.64rem + 1.82vw), 3.69rem)',
	'xl-2xl': 'clamp(3.00rem, calc(2.59rem + 2.03vw), 4.88rem)',
	'2xl-3xl': 'clamp(4.00rem, calc(3.28rem + 3.58vw), 7.31rem)',

	// Custom pairs
	's-l': 'clamp(1.00rem, calc(0.69rem + 1.55vw), 2.44rem)',
	's-xl': 'clamp(2.00rem, calc(1.38rem + 3.11vw), 4.88rem)',
	'l-2xl': 'clamp(1.00rem, calc(0.42rem + 2.91vw), 3.69rem)'
};
