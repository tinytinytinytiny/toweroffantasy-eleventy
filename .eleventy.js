const { EleventyEdgePlugin } = require('@11ty/eleventy');

const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

const limitTo = require('./src/_11ty/filters/limit-to.js');
const stringifyDate = require('./src/_11ty/filters/stringify-date.js');
const sortBy = require('./src/_11ty/filters/sort-by.js');
const sortByDisplayOrder = require('./src/_11ty/filters/sort-by-display-order.js');
const groupBy = require('./src/_11ty/filters/group-by.js');
const groupByYear = require('./src/_11ty/filters/group-by-year.js');
const except = require('./src/_11ty/filters/except.js');

const htmlMinTransform = require('./src/_11ty/transforms/html-min-transform.js');

module.exports = (config) => {
	config.addPlugin(EleventyEdgePlugin);

	config.addPassthroughCopy('_redirects');
	config.addPassthroughCopy('service-worker.js');
	config.addPassthroughCopy('./src/assets/');
	config.addPassthroughCopy('./src/js/');

	config.addGlobalData('getCollection', () => (collection, fileSlug) => collection.find(i => i.fileSlug === fileSlug));
	config.addGlobalData('getData', () => (collection, fileSlug) => collection.find(i => i.fileSlug === fileSlug).data);

	config.addFilter('limitTo', limitTo);
	config.addFilter('stringifyDate', stringifyDate);
	config.addFilter('sortBy', sortBy);
	config.addFilter('sortByDisplayOrder', sortByDisplayOrder);
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
	config.addShortcode('china', require('./src/_11ty/shortcodes/china.js'));
	config.addShortcode('cum', require('./src/_11ty/shortcodes/cum.js'));
	config.addShortcode('kbd', require('./src/_11ty/shortcodes/kbd.js'));
	config.addPairedShortcode('markdown', (children) => {
		const content = md.render(children);
		return content;
	});
	config.addPairedShortcode('aside', require('./src/_11ty/shortcodes/aside.js'));
	config.addPairedShortcode('bigTable', require('./src/_11ty/shortcodes/big-table.js'));
	config.addPairedShortcode('sheet', require('./src/_11ty/shortcodes/sheet.js'));
	config.addPairedShortcode('details', require('./src/_11ty/shortcodes/details.js'));
	config.addPairedShortcode('detailsSheet', require('./src/_11ty/shortcodes/details-sheet.js'));

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
		return [...collection.getFilteredByGlob('./src/guides/*')].reverse();
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
