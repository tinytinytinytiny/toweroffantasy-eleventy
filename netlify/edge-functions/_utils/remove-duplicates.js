import stripNumber from './strip-number.js';

/**
 * Converts an existing array into a new one with duplicates replaced with empty strings or removed entirely if 'fillWithEmptyStrings' is false.
 *
 * @param {Array} array no shit
 * @param {Boolean} fillWithEmptyStrings if set to 'true', duplicates are replaced with '' and the new array will have the same length as the original; if set to 'false', nothing will be pushed to the new array if duplicate items are encountered
 * @param {Boolean} compareNumbers if set to 'true', array entries will be compared based on numbers as well; if set to 'false' (default), array entries will only be compared based on alphabetical characters
 * @param {Function} filter filters out items according to a custom-defined filter rule; filtered items are replaced with '' if fillWithEmptyStrings is 'true'
 */

export default function ({ array, fillWithEmptyStrings = true, compareNumbers = false, filter } = {}) {
	return array.reduce((prev, curr) => {
		const duplicateFound = Boolean(
			(compareNumbers) ?
				[...prev].includes(curr)
				: prev
					.filter(i => stripNumber(i) === stripNumber(curr))
					.length
		);

		const empty = (fillWithEmptyStrings) ? [...prev, ''] : [...prev];

		if (duplicateFound) return empty;

		if (filter && filter(curr, array.indexOf(curr), array)) {
			return empty;
		} else {
			return [...prev, curr];
		}
	}, []);
}
