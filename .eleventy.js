const md = require('markdown-it')({
	html: true
});

const limitTo = require('./src/filters/limit-to.js');
const stringifyDate = require('./src/filters/stringify-date.js');
const groupByYear = require('./src/filters/group-by-year.js');
const sortByRarity = require('./src/filters/sort-by-rarity.js');

module.exports = (config) => {
	config.addPassthroughCopy('./src/assets/');
	config.addPassthroughCopy('./src/js/');

	config.addFilter('limitTo', limitTo);
	config.addFilter('stringifyDate', stringifyDate);
	config.addFilter('groupByYear', groupByYear);
	config.addFilter('sortByRarity', sortByRarity);
	config.addFilter('markdown', (value) => {
		return md.render(value);
	});

	config.addShortcode('year', () => `${new Date().getFullYear()}`);
	config.addShortcode('china', () => `<abbr title="China exclusive" class="china-badge">CN</abbr>`);

	config.addCollection('changelog', (collection) => {
		return [...collection.getFilteredByGlob('./src/changelog/*.md')].reverse();
	});
	config.addCollection('simulacra', (collection) => {
		return collection.getFilteredByGlob('./src/simulacra/*.11ty.js');
	});
	config.addCollection('matrices', (collection) => {
		return collection.getFilteredByGlob('./src/matrices/*.11ty.js');
	});

	config.setUseGitIgnore(false);

  return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
	dir: {
	  input: 'src',
	  output: 'dist'
	}
  };
};
