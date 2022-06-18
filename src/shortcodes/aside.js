const md = require('markdown-it')({
	html: true,
	linkify: true,
	typographer: true
}).disable('code');

module.exports = (children) => {
	const content = md.render(children);
	return `<aside class="sheet stack" data-border="left" data-border-color="secondary">${content}</aside>`
};
