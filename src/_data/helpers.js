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
	sortIngredientsByRarity(ingredients, pathToIngredients) {
		return ingredients.sort((a, b) => pathToIngredients[a[0]].rarity - pathToIngredients[b[0]].rarity);
	}
};
