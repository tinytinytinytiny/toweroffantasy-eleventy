module.exports = (list) => {
	return list.sort((a, b) => {
		if (typeof(a.data.displayOrder) === 'undefined' && typeof(b.data.displayOrder) === 'undefined') {
			return 0;
		}

		if (typeof(a.data.displayOrder) === 'undefined') {
			return 1;
		}

		if (typeof(b.data.displayOrder) === 'undefined') {
			return -1;
		}

		return -1 * (Number(a.data.displayOrder) - Number(b.data.displayOrder));
	});
}