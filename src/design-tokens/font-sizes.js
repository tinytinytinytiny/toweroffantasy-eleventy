/* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1800,19,1.333,7,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,xs-m|s-l|s-xl|m-xl|m-2xl|l-2xl&g=s,l,xl,12 */

const css = `
	--step--2: clamp(0.6683rem, 0.7001rem + -0.0283vw, 0.6944rem);
	--step--1: clamp(0.8333rem, 0.8209rem + 0.0622vw, 0.8908rem);
	--step-0: clamp(1rem, 0.9595rem + 0.2027vw, 1.1875rem);
	--step-1: clamp(1.2rem, 1.1172rem + 0.414vw, 1.5829rem);
	--step-2: clamp(1.44rem, 1.2951rem + 0.7244vw, 2.1101rem);
	--step-3: clamp(1.728rem, 1.4935rem + 1.1727vw, 2.8127rem);
	--step-4: clamp(2.0736rem, 1.7113rem + 1.8116vw, 3.7493rem);
	--step-5: clamp(2.4883rem, 1.9457rem + 2.713vw, 4.9979rem);
	--step-6: clamp(2.986rem, 2.1911rem + 3.9742vw, 6.6622rem);
	--step-7: clamp(3.5832rem, 2.4378rem + 5.727vw, 8.8806rem);
`;

const getNumbers = (str) => str.match(/(\-*\d*\d\.\d+)*(\d)/g).map(num => Number(num));

const average = (...args) => args.reduce((prev, curr) => Number(prev) + Number(curr)) / args.length;

const generateIntermediateStep = (step1, step2) => {
	const step1Numbers = getNumbers(step1);
	const step2Numbers = getNumbers(step2);

	const numbers = step1Numbers.map((num, index) => average(num, step2Numbers[index]));

	return `clamp(${numbers[0]}rem, ${numbers[1]}rem + ${numbers[2]}vw, ${numbers[3]}rem);`;
};

const generateTokens = () => {
	const tokens = {};

	css.split(';')
		.map(i => i.replace(/\/\*((?!\*\/).|\n)+\*\/+/g, '').trim().replace('--', ''))
		.filter(i => i)
		.forEach((i) => tokens[i.split(': ')[0]] = i.split(': ')[1]);

	tokens['step--0.5'] = generateIntermediateStep(tokens['step--1'], tokens['step-0']);
	tokens['step--1.5'] = generateIntermediateStep(tokens['step--2'], tokens['step--1']);

	return tokens;
};

module.exports = generateTokens();
