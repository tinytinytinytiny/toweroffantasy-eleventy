const stringifyDate = require('./src/filters/stringify-date.js');

module.exports = (config) => {
	config.addPassthroughCopy('./src/assets/');

	config.addDataExtension('txt', contents => contents);

	config.addFilter('stringifyDate', stringifyDate);

	config.addShortcode('year', () => `${new Date().getFullYear()}`);

	config.addCollection('changes', (collection) => {
		return [...collection.getFilteredByGlob('./src/content/changes/*.md')].reverse();
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
