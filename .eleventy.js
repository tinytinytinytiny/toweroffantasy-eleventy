const { EleventyEdgePlugin } = require('@11ty/eleventy');

const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

const limitTo = require('./src/filters/limit-to.js');
const stringifyDate = require('./src/filters/stringify-date.js');
const sortBy = require('./src/filters/sort-by.js');
const groupBy = require('./src/filters/group-by.js');
const groupByYear = require('./src/filters/group-by-year.js');
const except = require('./src/filters/except.js');

const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = (config) => {
	config.addPlugin(EleventyEdgePlugin);

	config.addPassthroughCopy('_redirects');
	config.addPassthroughCopy('service-worker.js');
	config.addPassthroughCopy('./src/assets/');
	config.addPassthroughCopy('./src/js/');

	config.addFilter('limitTo', limitTo);
	config.addFilter('stringifyDate', stringifyDate);
	config.addFilter('sortBy', sortBy);
	config.addFilter('groupBy', groupBy);
	config.addFilter('groupByYear', groupByYear);
	config.addFilter('except', except);
	config.addFilter('entries', obj => Object.entries(obj));
	config.addFilter('keys', obj => Object.keys(obj));
	config.addFilter('values', obj => Object.values(obj));
	config.addFilter('markdown', (value) => {
		return md.render(value);
	});

	config.addShortcode('range', (limit) => [...new Array(limit).keys()]);
	config.addShortcode('year', () => `${new Date().getFullYear()}`);
	config.addShortcode('china', require('./src/shortcodes/china.js'));
	config.addShortcode('cum', require('./src/shortcodes/cum.js'));
	config.addPairedShortcode('markdown', (children) => {
		const content = md.render(children);
		return content;
	});
	config.addPairedShortcode('aside', require('./src/shortcodes/aside.js'));
	config.addPairedShortcode('bigTable', require('./src/shortcodes/big-table.js'));
	config.addPairedShortcode('sheet', require('./src/shortcodes/sheet.js'));
	config.addPairedShortcode('details', require('./src/shortcodes/details.js'));

	config.addCollection('changelog', (collection) => {
		return [...collection.getFilteredByGlob('./src/changelog/*.md')].reverse();
	});
	config.addCollection('simulacra', (collection) => {
		return collection.getFilteredByGlob('./src/simulacra/*.11ty.js');
	});
	config.addCollection('matrices', (collection) => {
		return collection.getFilteredByGlob('./src/matrices/*.11ty.js');
	});
	config.addCollection('relics', (collection) => {
		return collection.getFilteredByGlob('./src/relics/*.11ty.js');
	});
	config.addCollection('guides', (collection) => {
		return collection.getFilteredByGlob('./src/guides/*');
	});

	config.addTransform('htmlmin', htmlMinTransform);

	config.setLibrary('md', md);

	config.setUseGitIgnore(false);

  return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		templateEngineOverride: 'njk, md',
		dir: {
		  input: 'src',
		  output: '_site'
		}
  };
};
