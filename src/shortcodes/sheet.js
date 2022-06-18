const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children, border = 'top', borderColor = 'primary') => {
	const content = md.render(children);
	return `<div class="sheet copy stack" data-border="${border}" data-border-color="${borderColor}">${content}</div>`;
};
