// @link https://utopia.fyi/space/calculator?c=320,16,1.2,1280,19.5,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|s-xl|m-xl|l-2xl

module.exports = {
	'0': '0',

	'3xs': 'clamp(0.25rem, calc(0.23rem + 0.10vw), 0.31rem)',
	'2xs': 'clamp(0.50rem, calc(0.46rem + 0.21vw), 0.63rem)',
	'xs': 'clamp(0.75rem, calc(0.69rem + 0.31vw), 0.94rem)',
	's': 'clamp(1.00rem, calc(0.92rem + 0.42vw), 1.25rem)',
	'm': 'clamp(1.50rem, calc(1.40rem + 0.52vw), 1.81rem)',
	'l': 'clamp(2.00rem, calc(1.85rem + 0.73vw), 2.44rem)',
	'xl': 'clamp(3.00rem, calc(2.77rem + 1.15vw), 3.69rem)',
	'2xl': 'clamp(4.00rem, calc(3.71rem + 1.46vw), 4.88rem)',
	'3xl': 'clamp(6.00rem, calc(5.56rem + 2.19vw), 7.31rem)',

	// One-up pairs
	'3xs-2xs': 'clamp(0.25rem, calc(0.13rem + 0.63vw), 0.63rem)',
	'2xs-xs': 'clamp(0.50rem, calc(0.35rem + 0.73vw), 0.94rem)',
	'xs-s': 'clamp(0.75rem, calc(0.58rem + 0.83vw), 1.25rem)',
	's-m': 'clamp(1.00rem, calc(0.73rem + 1.35vw), 1.81rem)',
	'm-l': 'clamp(1.50rem, calc(1.19rem + 1.56vw), 2.44rem)',
	'l-xl': 'clamp(2.00rem, calc(1.44rem + 2.81vw), 3.69rem)',
	'xl-2xl': 'clamp(3.00rem, calc(2.38rem + 3.13vw), 4.88rem)',
	'2xl-3xl': 'clamp(4.00rem, calc(2.90rem + 5.52vw), 7.31rem)',

	// Custom pairs
	's-l': 'clamp(1.00rem, calc(0.52rem + 2.40vw), 2.44rem)',
	's-xl': 'clamp(1.00rem, calc(0.10rem + 4.48vw), 3.69rem)',
	'm-xl': 'clamp(1.50rem, calc(0.77rem + 3.65vw), 3.69rem)',
	'l-2xl': 'clamp(2.00rem, calc(1.04rem + 4.79vw), 4.88rem)'
};
