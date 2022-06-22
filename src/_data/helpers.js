module.exports = {
	getLinkActiveState(itemUrl, pageUrl) {
		let response = '';

		if (itemUrl === pageUrl) {
		  response = ' aria-current="page"';
		}

		if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
		  response += ' data-state="active"';
		}

		return response;
  },
	getData(collection, fileSlug) {
		return collection.find(i => i.fileSlug === fileSlug).data;
	},
	getWeaponRating(value, data) {
		return data.find(i => value > i.threshold );
	},
	getFilteredByTag(collection, tag) {
		return collection.filter(i => i.data.tags.includes(tag));
	},
	getSiblingContent(collection, item, limit = 3, random = true) {
		let filteredItems = collection.filter(i => i.url !== item.url);

		if (random) {
			for (let i = 0; i < filteredItems.length; i++) {
				const j = Math.floor(Math.random() * (i + 1));
			  [filteredItems[i], filteredItems[j]] = [filteredItems[j], filteredItems[i]];
			}
		}

		if (limit > 0) {
			filteredItems = filteredItems.slice(0, limit);
		}

		return filteredItems;
	},
	isArray(array) {
		return Array.isArray(array);
	}
};
