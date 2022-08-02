// @link https://utopia.fyi/space/calculator?c=320,17.25,1.2,1800,19.5,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|s-xl|m-xl|l-2xl

module.exports = {
	'0': '0',

	'3xs': 'clamp(0.25rem, calc(0.24rem + 0.07vw), 0.31rem)',
	'2xs': 'clamp(0.56rem, calc(0.55rem + 0.07vw), 0.63rem)',
	'xs': 'clamp(0.81rem, calc(0.79rem + 0.14vw), 0.94rem)',
	's': 'clamp(1.06rem, calc(1.02rem + 0.20vw), 1.25rem)',
	'm': 'clamp(1.63rem, calc(1.58rem + 0.20vw), 1.81rem)',
	'l': 'clamp(2.19rem, calc(2.13rem + 0.27vw), 2.44rem)',
	'xl': 'clamp(3.25rem, calc(3.16rem + 0.47vw), 3.69rem)',
	'2xl': 'clamp(4.31rem, calc(4.19rem + 0.61vw), 4.88rem)',
	'3xl': 'clamp(6.50rem, calc(6.32rem + 0.88vw), 7.31rem)',

	/* One-up pairs */
	'3xs-2xs': 'clamp(0.25rem, calc(0.17rem + 0.41vw), 0.63rem)',
	'2xs-xs': 'clamp(0.56rem, calc(0.48rem + 0.41vw), 0.94rem)',
	'xs-s': 'clamp(0.81rem, calc(0.72rem + 0.47vw), 1.25rem)',
	's-m': 'clamp(1.06rem, calc(0.90rem + 0.81vw), 1.81rem)',
	'm-l': 'clamp(1.63rem, calc(1.45rem + 0.88vw), 2.44rem)',
	'l-xl': 'clamp(2.19rem, calc(1.86rem + 1.62vw), 3.69rem)',
	'xl-2xl': 'clamp(3.25rem, calc(2.90rem + 1.76vw), 4.88rem)',
	'2xl-3xl': 'clamp(4.31rem, calc(3.66rem + 3.24vw), 7.31rem)',

	/* Custom pairs */
	's-l': 'clamp(1.06rem, calc(0.77rem + 1.49vw), 2.44rem)',
	's-xl': 'clamp(1.06rem, calc(0.49rem + 2.84vw), 3.69rem)',
	'm-xl': 'clamp(1.63rem, calc(1.18rem + 2.23vw), 3.69rem)',
	'l-2xl': 'clamp(2.19rem, calc(1.61rem + 2.91vw), 4.88rem)'
};
