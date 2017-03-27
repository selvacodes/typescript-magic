// const R = require('ramda')
"use strict";
exports.__esModule = true;
var R = require("ramda");
var increment = R.add(1);
var average = R.converge(R.divide, [R.sum, R.length]);
var arr = R.map(increment)([1, 2, 3]);
average(["23", 2, 3, 4, 5]);
