const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children, summary) => {
	const content = md.render(children);
	return `<details class="stack copy"><summary class="chip">${summary}</summary>${content}</details>`;
};
