import isArray from '@bemoje/is-array';
import isFunction from '@bemoje/is-function';
import isWindow from '@bemoje/is-window';

/**
 * Determine if a value is array-like. Fork of https://github.com/gearcase/is-array-like.
 * @param {*} value - The value
 * @returns {boolean}
 */
function isArrayLike(value) {
	if (isArray(value)) {
		return true
	}

	if (!value) {
		return false
	}

	if (isFunction(value)) {
		return false
	}

	if (isWindow(value)) {
		value = Object(value);
	}

	const len = value.length;

	if (value.nodeType === 1 && len) {
		return true
	}

	if (len === 0 || (typeof len === 'number' && len > 0)) {
		return true
	}

	return false
}

export default isArrayLike;
