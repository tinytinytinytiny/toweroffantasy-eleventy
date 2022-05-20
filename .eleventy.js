const stringifyDate = require('./src/filters/stringify-date.js');
// const groupByYear = require('./src/utils/group-by-year.js');
const groupByYear = require('./src/filters/group-by-year.js');

module.exports = (config) => {
	config.addPassthroughCopy('./src/assets/');

	config.addDataExtension('txt', contents => contents);

	config.addFilter('stringifyDate', stringifyDate);
	config.addFilter('groupByYear', groupByYear);	

	config.addShortcode('year', () => `${new Date().getFullYear()}`);

	config.addCollection('changelog', (collection) => {
		return [...collection.getFilteredByGlob('./src/content/changelog/*.md')].reverse();
	});

	// config.addCollection('changesByYear', (collection) => {
	// 	return groupByYear([...collection.getFilteredByGlob('./src/content/changelog/*.md')].reverse());
	// });

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
