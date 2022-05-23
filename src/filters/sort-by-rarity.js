module.exports = (list) => {
	const checkForKey = (key, objects) => {
		let hasKey = false;

		for (let i = 0; i < objects.length; i++) {
		  if (key in objects[i]) {
		  	hasKey = true;
		  } else {
		  	hasKey = false;
				break;
		  }
		}

		return hasKey;
	};

	return list.sort((a, b) => {
		if (checkForKey('rarity', [a, b]) && a.rarity - b.rarity !== 0) {
			return a.rarity - b.rarity;
		}

		if (checkForKey('stars', [a, b])) {
			return a.stars - b.stars;
		}
	});
};
