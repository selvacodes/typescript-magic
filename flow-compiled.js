"use strict";

var _ramda = require("ramda");

var incrementAll = (0, _ramda.map)((0, _ramda.add)(1));

var increment = (0, _ramda.add)(1);

var average = (0, _ramda.converge)(_ramda.divide, [_ramda.sum, _ramda.length]);

var out = (0, _ramda.pipe)(average, increment, increment, increment, increment, increment);

console.log(increment(out([1, 2, 3])));
