import stripNumber from './strip-number.js';

/**
 * Converts an existing array into a new one with duplicates replaced with empty strings or removed entirely if 'fillWithEmptyStrings' is false.
 *
 * @param {Array} array no shit
 * @param {Boolean} fillWithEmptyStrings if set to 'true', duplicates are replaced with '' and the new array will have the same length as the original; if set to 'false', nothing will be pushed to the new array if duplicate items are encountered
 * @param {Boolean} alphaOnly if set to 'true', array entries will be compared based on alphabetical characters only
 * @param {Function} filter filters out items according to a custom-defined filter rule; filtered items are replaced with '' if fillWithEmptyStrings is 'true'
 */

export default function({ array, fillWithEmptyStrings = true, alphaOnly, filter } = {}) {
	const newArray = [];

	array.forEach((item, index, array) => {
		let isDuplicate = false;

		if (alphaOnly) {
			isDuplicate = Boolean(newArray.filter(i => stripNumber(i) === stripNumber(item)).length);
		} else {
			isDuplicate = Boolean(newArray.includes(item));
		}

		if (isDuplicate) {
			if (fillWithEmptyStrings) newArray.push('');
		} else {
			if (filter && filter(item, index, array)) {
				if (fillWithEmptyStrings) newArray.push('');
			} else {
				newArray.push(item);
			}
		}
	});

	return newArray;
}
