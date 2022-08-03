// @link https://utopia.fyi/space/calculator?c=320,17.5,1.2,1800,19.5,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,xs-m|s-l|s-xl|m-xl|l-2xl

module.exports = {
	'0': '0',

	'3xs': 'clamp(0.25rem, calc(0.23rem + 0.07vw), 0.31rem)',
	'2xs': 'clamp(0.56rem, calc(0.55rem + 0.07vw), 0.63rem)',
	'xs': 'clamp(0.81rem, calc(0.78rem + 0.14vw), 0.94rem)',
	's': 'clamp(1.13rem, calc(1.09rem + 0.14vw), 1.25rem)',
	'm': 'clamp(1.63rem, calc(1.58rem + 0.21vw), 1.81rem)',
	'l': 'clamp(2.19rem, calc(2.12rem + 0.28vw), 2.44rem)',
	'xl': 'clamp(3.31rem, calc(3.21rem + 0.42vw), 3.69rem)',
	'2xl': 'clamp(4.38rem, calc(4.24rem + 0.56vw), 4.88rem)',
	'3xl': 'clamp(6.56rem, calc(6.37rem + 0.84vw), 7.31rem)',
	
	/* One-up pairs */
	'3xs-2xs': 'clamp(0.25rem, calc(0.15rem + 0.42vw), 0.63rem)',
	'2xs-xs': 'clamp(0.56rem, calc(0.46rem + 0.42vw), 0.94rem)',
	'xs-s': 'clamp(0.81rem, calc(0.70rem + 0.49vw), 1.25rem)',
	's-m': 'clamp(1.13rem, calc(0.94rem + 0.77vw), 1.81rem)',
	'm-l': 'clamp(1.63rem, calc(1.41rem + 0.91vw), 2.44rem)',
	'l-xl': 'clamp(2.19rem, calc(1.79rem + 1.68vw), 3.69rem)',
	'xl-2xl': 'clamp(3.31rem, calc(2.90rem + 1.75vw), 4.88rem)',
	'2xl-3xl': 'clamp(4.38rem, calc(3.60rem + 3.30vw), 7.31rem)',
	
	/* Custom pairs */
	'xs-m': 'clamp(0.81rem, calc(0.55rem + 1.12vw), 1.81rem)',
	's-l': 'clamp(1.13rem, calc(0.78rem + 1.47vw), 2.44rem)',
	's-xl': 'clamp(1.13rem, calc(0.45rem + 2.88vw), 3.69rem)',
	'm-xl': 'clamp(1.63rem, calc(1.08rem + 2.32vw), 3.69rem)',
	'l-2xl': 'clamp(2.19rem, calc(1.48rem + 3.02vw), 4.88rem)'
};
