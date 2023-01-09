import clamp from './clamp.js';

export default (input) => clamp(0, Number(input) || 0, 100) * 0.01;
export const toPercentOver100 = (input) => Math.max(0, Number(input) || 0) * 0.01;