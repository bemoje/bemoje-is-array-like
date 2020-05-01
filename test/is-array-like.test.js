import isArrayLike from '../src/is-array-like'

describe('is-array-like', function () {
	test('common test', function () {
		expect(isArrayLike()).toBe(false)

		expect(isArrayLike(1)).toBe(false)

		expect(isArrayLike('1')).toBe(true)

		expect(isArrayLike('abc')).toBe(true)

		expect(isArrayLike(true)).toBe(false)

		expect(isArrayLike(null)).toBe(false)

		expect(isArrayLike({})).toBe(false)

		expect(isArrayLike(function () {})).toBe(false)

		expect(isArrayLike([])).toBe(true)

		expect(isArrayLike([1, 2])).toBe(true)
	})

	test('isArrayLike(arguments)', function () {
		expect(isArrayLike(arguments)).toBe(true)
	})

	test('isArrayLike(nodeList)', function () {
		var nodeList = {}

		nodeList.nodeType = 1
		nodeList.length = 1

		expect(isArrayLike(nodeList)).toBe(true)
	})

	test('isArrayLike(arrayLike)', function () {
		var arrayLike = {}

		arrayLike['2'] = 'a'
		arrayLike.length = 3

		expect(isArrayLike(arrayLike)).toBe(true)
	})
	test('isArrayLike(window)', function () {
		expect(isArrayLike(window)).toBe(true)
	})
})
