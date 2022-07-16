module.exports = (value) => {
	const options = {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC'
	};

	return value.toLocaleDateString('en-US', options).split(',').join('');
};
