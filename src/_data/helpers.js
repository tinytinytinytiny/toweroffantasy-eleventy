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
	findCollection(collection, fileSlug) {
		if (collection === undefined || collection === null) {
			return false;
		}
		return collection.filter(i => i.fileSlug === fileSlug)[0];
	},
	sortIngredientsByRarity(ingredients, ingredientsDataObject) {
		return ingredients.sort((a, b) => ingredientsDataObject[a[0]].rarity - ingredientsDataObject[b[0]].rarity);
	},
	getWeaponRating(value, data) {
		return data.filter(i => value > i.threshold )[0];
	}
};
