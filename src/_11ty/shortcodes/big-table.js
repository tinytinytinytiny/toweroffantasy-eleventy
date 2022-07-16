const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children, stretch) => {
	const content = md.render(children);
	return `<div class="big-table wrapper" ${(stretch) ? 'data-width="stretch"' : ''}>${content}</div>`;
};
