/**
 * Create an array from start - 1 to end
 * @param  {} start
 * @param  {} end
 */
export function range(start, end) {
	let length = end - start + 1;
	return Array.from({ length }, (_, i) => start + i - 1);
}