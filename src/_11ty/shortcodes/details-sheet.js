const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children, summary, attr = '') => {
	const content = md.render(children);
	return `<details class="stack copy" ${attr}><summary class="chip">${summary}</summary><div class="sheet stack copy p-s-m"  >${content}</div></details>`;
};
