/* @link https://utopia.fyi/space/calculator?c=320,16,1.2,1800,19,1.333,7,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,xs-m|s-l|s-xl|m-xl|m-2xl|l-2xl&g=s,l,xl,12 */

const css = `
	--space-3xs: clamp(0.25rem, 0.2365rem + 0.0676vw, 0.3125rem);
	--space-2xs: clamp(0.5rem, 0.473rem + 0.1351vw, 0.625rem);
	--space-xs: clamp(0.75rem, 0.723rem + 0.1351vw, 0.875rem);
	--space-s: clamp(1rem, 0.9595rem + 0.2027vw, 1.1875rem);
	--space-m: clamp(1.5rem, 1.4324rem + 0.3378vw, 1.8125rem);
	--space-l: clamp(2rem, 1.9189rem + 0.4054vw, 2.375rem);
	--space-xl: clamp(3rem, 2.8784rem + 0.6081vw, 3.5625rem);
	--space-2xl: clamp(4rem, 3.8378rem + 0.8108vw, 4.75rem);
	--space-3xl: clamp(6rem, 5.7568rem + 1.2162vw, 7.125rem);

	/* One-up pairs */
	--space-3xs-2xs: clamp(0.25rem, 0.1689rem + 0.4054vw, 0.625rem);
	--space-2xs-xs: clamp(0.5rem, 0.4189rem + 0.4054vw, 0.875rem);
	--space-xs-s: clamp(0.75rem, 0.6554rem + 0.473vw, 1.1875rem);
	--space-s-m: clamp(1rem, 0.8243rem + 0.8784vw, 1.8125rem);
	--space-m-l: clamp(1.5rem, 1.3108rem + 0.9459vw, 2.375rem);
	--space-l-xl: clamp(2rem, 1.6622rem + 1.6892vw, 3.5625rem);
	--space-xl-2xl: clamp(3rem, 2.6216rem + 1.8919vw, 4.75rem);
	--space-2xl-3xl: clamp(4rem, 3.3243rem + 3.3784vw, 7.125rem);

	/* Custom pairs */
	--space-xs-m: clamp(0.75rem, 0.5203rem + 1.1486vw, 1.8125rem);
	--space-s-l: clamp(1rem, 0.7027rem + 1.4865vw, 2.375rem);
	--space-s-xl: clamp(1rem, 0.4459rem + 2.7703vw, 3.5625rem);
	--space-m-xl: clamp(1.5rem, 1.0541rem + 2.2297vw, 3.5625rem);
	--space-m-2xl: clamp(1.5rem, 0.7973rem + 3.5135vw, 4.75rem);
	--space-l-2xl: clamp(2rem, 1.4054rem + 2.973vw, 4.75rem);
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
