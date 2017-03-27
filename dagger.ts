import { tagged } from 'daggy'

const Point3D = tagged('x', 'y', 'z')
//console.log(Point3D.toString()) // 'Point3D'
const a = Point3D(1, 2, 3)
console.log(a) 