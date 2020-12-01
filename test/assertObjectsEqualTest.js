const assertObjectsEqual = require("../assertObjectsEqual");
const assertEqual = require("../assertEqual");
const eqObjects = require("../eqObjects");



// tests:
 const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true); // => true
assertEqual(eqObjects(cd, dc), true);

assertObjectsEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects(cd, cd2), false)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false