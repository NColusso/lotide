const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const eqObjects = require("../eqObjects");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Tests:

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true
// // assertEqual(eqObjects((cd, dc) true)

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false ** GETTING TRUE

// assertEqual(eqObjects(cd, cd2), false)

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

