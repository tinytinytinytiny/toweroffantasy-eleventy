const plugin = require('tailwindcss/plugin');
const postcss = require('postcss');
const postcssJs = require('postcss-js');

const colors = require('./src/design-tokens/colors.js');
const fontFamily = require('./src/design-tokens/fonts.js');
const fontSize = require('./src/design-tokens/font-sizes.js');
const spacing = require('./src/design-tokens/spacing.js');

module.exports = {
	content: [
		'./src/*.{html,js,njk,md}',
		'./src/**/*.{html,js,njk,md}'
	],
	theme: {
		colors,
		fontFamily,
		fontSize,
		spacing,
		backgroundColor: ({ theme }) => theme('colors'),
		textColor: ({ theme }) => theme('colors'),
		margin: ({ theme }) => ({
			auto: 'auto',
			...theme('spacing')
		}),
		padding: ({ theme }) => theme('spacing'),
		extend: {
			opacity: {
				'25': '.25'
			},
			letterSpacing: {
				wide: '0.035em',
				wider: '0.06em',
				widest: '0.085em'
			},
			maxWidth: {
				copy: '46rem'
			},
			minWidth: {
				copy: '46rem'
			},
			width: {
				copy: '46rem'
			}
		}
	},
	safelist: [
		'text-step-3'
	],
	variantOrder: [
		'first',
		'last',
		'odd',
		'even',
		'visited',
		'checked',
		'empty',
		'read-only',
		'group-hover',
		'group-focus',
		'focus-within',
		'hover',
		'focus',
		'focus-visible',
		'active',
		'disabled'
	],

	// Disables Tailwind's reset etc
	corePlugins: {
		preflight: false
	},
	plugins: [
		// Generates custom property values from tailwind config
		plugin(function ({ addComponents, config }) {
			if (process.env.NODE_ENV === 'production') return;

			let result = '';

			const currentConfig = config();

			const groups = [
				{
					key: 'colors',
					prefix: 'color'
				},
				{
					key: 'spacing',
					prefix: 'space'
				},
				{
					key: 'fontSize',
					prefix: 'size'
				},
				{
					key: 'fontFamily',
					prefix: 'font'
				}
			];

			groups.forEach(({ key, prefix }) => {
				const group = currentConfig.theme[key];

				if (!group) {
					return;
				}

				Object.keys(group).forEach(key => {
					const isObject = Boolean(
						typeof group[key] === 'object' &&
						group[key] !== null &&
						!Array.isArray(group[key])
					);

					if (isObject) {
						Object.keys(group[key]).forEach((subKey) => {
							result += `--${prefix}-${key}-${subKey}: ${group[key][subKey]};`;
						});
					} else {
						result += `--${prefix}-${key}: ${group[key]};`;
					}
				});
			});

			addComponents({
				':root': postcssJs.objectify(postcss.parse(result))
			});
		}),

		// Generates custom utility classes
		plugin(function ({ addUtilities, config }) {
			const currentConfig = config();
			const customUtilities = [{
				key: 'spacing',
				prefix: 'stack-space',
				property: '--stack-space'
			},
			{
				key: 'spacing',
				prefix: 'gutter',
				property: '--gutter'
			}
			];

			customUtilities.forEach(({
				key,
				prefix,
				property
			}) => {
				const group = currentConfig.theme[key];

				if (!group) {
					return;
				}

				Object.keys(group).forEach(key => {
					addUtilities({
						[`.${prefix}-${key}`]: postcssJs.objectify(
							postcss.parse(`${property}: ${group[key]}`)
						)
					});
				});
			});
		})
	]
}
