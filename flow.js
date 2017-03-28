// @flow

const { map, add, converge } = require('ramda')
const R = require('ramda')

type gender = "M" | "F"

type Human = {
    name: string,
    age: number,
    gender: gender
}

const incrementAll = map(add(1))

const increment = R.add(1)

const average: (list: number[]) => number = R.converge(R.divide, [R.sum, R.length])

const out = incrementAll([1, 2, 3])

console.log(average([1,2,3]))

    // console.log(R.map(x => x + 1)([1, 2, 3]))