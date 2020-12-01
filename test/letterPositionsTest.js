const assert = require("chai").assert;
const letterPositions = require("../letterPositions");
const eqArrays = require("../eqArrays");


const assertArraysEqual = function(array1, array2) {
  //  let result = eqArrays(array1, array2)
  //   console.log(result)
    if (eqArrays(array1, array2)) {
      console.log("🟢The arrays are equal");
    } else {
      console.log("🔴The arrays are not equal");
    }
  };

  // tests:
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);