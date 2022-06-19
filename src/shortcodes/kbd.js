module.exports = (...keys) => {
	return `<kbd>${keys.map(key => `<kbd>${key}</kbd>`).join(' + ')}</kbd>`;
};
