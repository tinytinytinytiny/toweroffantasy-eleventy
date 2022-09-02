const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children) => {
	const content = md.render(children);
	return `<div class="overflow-x-auto">${content}</div>`;
};
