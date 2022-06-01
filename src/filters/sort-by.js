module.exports = (list, categories, data, index) => {

	return list.sort((a, b) => {
		let result = 0;

		const _a = (data) ? data[(typeof(index) !== 'undefined') ? a[index] : a] : a;
		const _b = (data) ? data[(typeof(index) !== 'undefined') ? b[index] : b] : b;

		if (typeof categories === 'string') {
			categories = Array.of(categories);
		}

		for (cat of categories) {
			const isCollection = Boolean(!Object.keys(list[0]).includes(cat) && Object.keys(list[0]).includes('data'));
			const first = (isCollection) ? _a.data[cat] : _a[cat];
			const second = (isCollection) ? _b.data[cat] : _b[cat];

			if (typeof(first) === 'undefined' && typeof(second) === 'undefined') {
				result = 0;
			} else {
				if (typeof(first) === 'undefined') {
					result = -1;
				}

				if (typeof(second) === 'undefined') {
					result = 1;
				}
			}

			if (typeof(first) === 'string' && typeof(second) === 'string') {
				result = -1 * first.localeCompare(second, 'en', { sensitivity: 'base' });
			} else {
				result = first - second;
			}

			if (result !== 0) {
				break;
			}
		}

		return result;
	});
};
