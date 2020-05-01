import isArrayLike from '../src/is-array-like'

isArrayLike([])
//=> true

isArrayLike(new Uint16Array())
//=> true

const fn = () => isArrayLike(arguments)

fn()
//=> true
