// @link https://utopia.fyi/space/calculator?c=320,17.5,1.2,1800,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l|s-xl|m-xl|l-2xl

module.exports = {
	'0': '0',

	'3xs': 'clamp(0.25rem, calc(0.24rem + 0.07vw), 0.31rem)',
  '2xs': 'clamp(0.56rem, calc(0.55rem + 0.07vw), 0.63rem)',
  'xs': 'clamp(0.81rem, calc(0.79rem + 0.14vw), 0.94rem)',
  's': 'clamp(1.13rem, calc(1.10rem + 0.14vw), 1.25rem)',
  'm': 'clamp(1.63rem, calc(1.57rem + 0.27vw), 1.88rem)',
  'l': 'clamp(2.19rem, calc(2.12rem + 0.34vw), 2.50rem)',
  'xl': 'clamp(3.31rem, calc(3.22rem + 0.47vw), 3.75rem)',
  '2xl': 'clamp(4.38rem, calc(4.24rem + 0.68vw), 5.00rem)',
  '3xl': 'clamp(6.56rem, calc(6.36rem + 1.01vw), 7.50rem)',

  /* One-up pairs */
  '3xs-2xs': 'clamp(0.25rem, calc(0.17rem + 0.41vw), 0.63rem)',
  '2xs-xs': 'clamp(0.56rem, calc(0.48rem + 0.41vw), 0.94rem)',
  'xs-s': 'clamp(0.81rem, calc(0.72rem + 0.47vw), 1.25rem)',
  's-m': 'clamp(1.13rem, calc(0.96rem + 0.81vw), 1.88rem)',
  'm-l': 'clamp(1.63rem, calc(1.44rem + 0.95vw), 2.50rem)',
  'l-xl': 'clamp(2.19rem, calc(1.85rem + 1.69vw), 3.75rem)',
  'xl-2xl': 'clamp(3.31rem, calc(2.95rem + 1.82vw), 5.00rem)',
  '2xl-3xl': 'clamp(4.38rem, calc(3.70rem + 3.38vw), 7.50rem)',

  /* Custom pairs */
  's-l': 'clamp(1.13rem, calc(0.83rem + 1.49vw), 2.50rem)',
  's-xl': 'clamp(1.13rem, calc(0.56rem + 2.84vw), 3.75rem)',
  'm-xl': 'clamp(1.63rem, calc(1.17rem + 2.30vw), 3.75rem)',
  'l-2xl': 'clamp(2.19rem, calc(1.58rem + 3.04vw), 5.00rem)'
};
