
// const R = require('ramda')

import * as R from 'ramda'

const increment = R.add(1)

const average = R.converge(R.divide, [R.sum, R.length])

const arr = R.map(increment)([1, 2, 3])
average([23, 2, 3, 4, 5])