import clamp from './clamp.js';

export default function (input, values) {
	const index = clamp(0, Number(input) || 0, input.length + 1);

	return values[index];
}