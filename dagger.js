"use strict";
exports.__esModule = true;
var daggy_1 = require("daggy");
var Point3D = daggy_1.tagged('x', 'y', 'z');
//console.log(Point3D.toString()) // 'Point3D'
var a = Point3D(1, 2, 3);
console.log(a);
