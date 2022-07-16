module.exports = (list, category) => {
	const isCollection = Boolean(!Object.keys(list[0]).includes(category) && Object.keys(list[0]).includes('data'));

	const categoryValues = list.map(i => (isCollection) ? i.data[category] : i[category]);
	const categories = [...new Set(categoryValues)];

	return categories.reduce((prev, current) => {
		const filteredList = list.filter((i) => (isCollection) ? Boolean(i.data[category] === current) : Boolean(i[category] === current));

		return [
			...prev,
			[current, filteredList]
		]
	}, []);
};
