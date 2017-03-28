"use strict";

var _ramda = require("ramda");

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var incrementAll = map(add(1));

// const { map, add } = require('ramda')

var out = incrementAll([1, 2, 3]);

// console.log(R.map(x => x + 1)([1, 2, 3]))
