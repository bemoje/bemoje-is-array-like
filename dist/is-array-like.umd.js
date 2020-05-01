(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array'), require('@bemoje/is-function'), require('@bemoje/is-window')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array', '@bemoje/is-function', '@bemoje/is-window'], factory) :
	(global = global || self, global['is-array-like'] = factory(global.isArray, global.isFunction, global.isWindow));
}(this, (function (isArray, isFunction, isWindow) { 'use strict';

	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;
	isFunction = isFunction && Object.prototype.hasOwnProperty.call(isFunction, 'default') ? isFunction['default'] : isFunction;
	isWindow = isWindow && Object.prototype.hasOwnProperty.call(isWindow, 'default') ? isWindow['default'] : isWindow;

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

	return isArrayLike;

})));
