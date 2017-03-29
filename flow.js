// @flow

import { map, add, converge, pipe, divide, sum, length } from 'ramda'

type gender = "M" | "F";

type Human = {
  name: string,
  age: number,
  gender: gender
};

const incrementAll = map(add(1));

const increment: (number) => number = add(1);

const average: number[] => number = converge(divide, [sum, length]);

const out = pipe(
  average,
  increment,
  increment,
  increment,
  increment,
  increment
);

console.log(increment(out([1, 2, 3])));
