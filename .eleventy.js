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

const cum = require('./src/shortcodes/cum.js');

const htmlMinTransform = require('./src/transforms/html-min-transform.js');

module.exports = (config) => {
	config.addPassthroughCopy('_redirects');
	config.addPassthroughCopy('./src/assets/');
	config.addPassthroughCopy('./src/js/');

	config.addFilter('limitTo', limitTo);
	config.addFilter('stringifyDate', stringifyDate);
	config.addFilter('sortBy', sortBy);
	config.addFilter('groupBy', groupBy);
	config.addFilter('groupByYear', groupByYear);
	config.addFilter('except', except);
	config.addFilter('keys', obj => Object.keys(obj));
	config.addFilter('values', obj => Object.values(obj));
	config.addFilter('markdown', (value) => {
		return md.render(value);
	});

	config.addShortcode('year', () => `${new Date().getFullYear()}`);
	config.addShortcode('china', () => `<abbr title="China exclusive" class="china-badge">CN</abbr>`);
	config.addShortcode('cum', cum);
	config.addPairedShortcode('markdown', (children) => {
		const content = md.render(children);
		return content;
	});
	config.addPairedShortcode('aside', (children) => {
		const content = md.render(children);
		return `<aside class="sheet font-bold stack" data-border="left" data-border-color="secondary">${content}</aside>`
	});
	config.addPairedShortcode('bigTable', (children, stretch) => {
		const content = md.render(children);
		return `<div class="big-table wrapper" ${(stretch) ? 'data-width="stretch"' : ''}>${content}</div>`;
	});
	config.addPairedShortcode('sheet', (children, border = 'top', borderColor = 'primary') => {
		const content = md.render(children);
		return `<div class="sheet copy stack" data-border="${border}" data-border-color="${borderColor}">${content}</div>`;
	});
	config.addPairedShortcode('details', (children, summary) => {
		const content = md.render(children);
		return `<details class="stack copy"><summary class="chip">${summary}</summary>${content}</details>`;
	});

	config.addCollection('changelog', (collection) => {
		return [...collection.getFilteredByGlob('./src/changelog/*.md')].reverse();
	});
	config.addCollection('simulacra', (collection) => {
		return collection.getFilteredByGlob('./src/simulacra/*.11ty.js');
	});
	config.addCollection('matrices', (collection) => {
		return collection.getFilteredByGlob('./src/matrices/*.11ty.js');
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
