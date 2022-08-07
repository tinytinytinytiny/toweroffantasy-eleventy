/* @link https://utopia.fyi/space/calculator?c=320,17.5,1.2,1800,19.5,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,xs-m|s-l|s-xl|m-xl|m-2xl|l-2xl */

const css = `
	--space-3xs: clamp(0.25rem, calc(0.24rem + 0.07vw), 0.31rem);
	--space-2xs: clamp(0.56rem, calc(0.55rem + 0.07vw), 0.63rem);
	--space-xs: clamp(0.81rem, calc(0.79rem + 0.14vw), 0.94rem);
	--space-s: clamp(1.13rem, calc(1.10rem + 0.14vw), 1.25rem);
	--space-m: clamp(1.63rem, calc(1.58rem + 0.20vw), 1.81rem);
	--space-l: clamp(2.19rem, calc(2.13rem + 0.27vw), 2.44rem);
	--space-xl: clamp(3.31rem, calc(3.23rem + 0.41vw), 3.69rem);
	--space-2xl: clamp(4.38rem, calc(4.27rem + 0.54vw), 4.88rem);
	--space-3xl: clamp(6.56rem, calc(6.40rem + 0.81vw), 7.31rem);

	/* One-up pairs */
	--space-3xs-2xs: clamp(0.25rem, calc(0.17rem + 0.41vw), 0.63rem);
	--space-2xs-xs: clamp(0.56rem, calc(0.48rem + 0.41vw), 0.94rem);
	--space-xs-s: clamp(0.81rem, calc(0.72rem + 0.47vw), 1.25rem);
	--space-s-m: clamp(1.13rem, calc(0.98rem + 0.74vw), 1.81rem);
	--space-m-l: clamp(1.63rem, calc(1.45rem + 0.88vw), 2.44rem);
	--space-l-xl: clamp(2.19rem, calc(1.86rem + 1.62vw), 3.69rem);
	--space-xl-2xl: clamp(3.31rem, calc(2.97rem + 1.69vw), 4.88rem);
	--space-2xl-3xl: clamp(4.38rem, calc(3.74rem + 3.18vw), 7.31rem);

	/* Custom pairs */
	--space-xs-m: clamp(0.81rem, calc(0.60rem + 1.08vw), 1.81rem);
	--space-s-l: clamp(1.13rem, calc(0.84rem + 1.42vw), 2.44rem);
	--space-s-xl: clamp(1.13rem, calc(0.57rem + 2.77vw), 3.69rem);
	--space-m-xl: clamp(1.63rem, calc(1.18rem + 2.23vw), 3.69rem);
	--space-m-2xl: clamp(1.63rem, calc(0.92rem + 3.51vw), 4.88rem);
	--space-l-2xl: clamp(2.19rem, calc(1.61rem + 2.91vw), 4.88rem);
`;

const generateTokens = () => {
	const tokens = {
		'0': '0'
	};

	css.split(';')
		.map(i => i.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '').trim().replace('--space-', ''))
		.filter(i => i)
		.forEach((i) => tokens[i.split(': ')[0]] = i.split(': ')[1]);

	return tokens;
};

module.exports = generateTokens();
