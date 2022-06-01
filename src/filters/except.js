module.exports = (arr=[], ...values) => {
	const data = new Set(arr);
	for (const item of values) {
		data.delete(item);
	}
	return [...data].sort();
}
