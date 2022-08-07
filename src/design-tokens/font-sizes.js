/* @link https://utopia.fyi/type/calculator?c=320,17.5,1.2,1800,19.5,1.333,7,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,xs-m|s-l|s-xl|m-xl|m-2xl|l-2xl */

const css = `
	--step--2: clamp(0.69rem, calc(0.78rem + -0.08vw), 0.76rem);
	--step--1: clamp(0.91rem, calc(0.91rem + 0.00vw), 0.91rem);
	--step-0: clamp(1.09rem, calc(1.07rem + 0.14vw), 1.22rem);
	--step-1: clamp(1.31rem, calc(1.25rem + 0.34vw), 1.62rem);
	--step-2: clamp(1.58rem, calc(1.45rem + 0.64vw), 2.17rem);
	--step-3: clamp(1.89rem, calc(1.67rem + 1.08vw), 2.89rem);
	--step-4: clamp(2.27rem, calc(1.93rem + 1.71vw), 3.85rem);
	--step-5: clamp(2.72rem, calc(2.20rem + 2.60vw), 5.13rem);
	--step-6: clamp(3.27rem, calc(2.49rem + 3.86vw), 6.84rem);
	--step-7: clamp(3.92rem, calc(2.80rem + 5.62vw), 9.11rem);
`;

const generateTokens = () => {
	const tokens = {};

	css.split(';')
		.map(i => i.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '').trim().replace('--', ''))
		.filter(i => i)
		.forEach((i) => tokens[i.split(': ')[0]] = i.split(': ')[1]);

	return tokens;
};

module.exports = generateTokens();
