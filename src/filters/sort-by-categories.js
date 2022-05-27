module.exports = (list, categories) => {
	return list.sort((a, b) => {
		let result = 0;

		if (typeof categories === 'string') {
			categories = Array.of(categories);
		}
		
		for (cat of categories) {
			if (a[cat] - b[cat] !== 0) {
				result = a[cat] - b[cat];
				break;
			}
		}

		return result;
	});
};
