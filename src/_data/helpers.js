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
	getObjectValues(object) {
		return Object.values(object);
	},
	findCollection(collection, fileSlug) {
		if (collection === undefined || collection === null) {
			return false;
		}
		return collection.filter(i => i.fileSlug === fileSlug)[0];
	},
	sortIngredientsByRarity(ingredients, pathToIngredients) {
		return ingredients.sort((a, b) => pathToIngredients[a[0]].rarity - pathToIngredients[b[0]].rarity);
	},
	getWeaponRating(value, data) {
		return data.filter(i => value > i.threshold )[0];
	}
};
