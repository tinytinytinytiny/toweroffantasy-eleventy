module.exports = {
  plugins: [
		require('postcss-import-ext-glob'),
		require('postcss-import'),
		require('tailwindcss'),
		require('@fullhuman/postcss-purgecss')({
			content: [
				'./src/*.{html,js,njk,md}',
				'./src/**/*.{html,js,njk,md}'
			],
			defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/\!\[\]]+/g) || [],
			variables: true
		}),
		require('cssnano')
  ]
};
