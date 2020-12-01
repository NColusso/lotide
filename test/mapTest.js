const assert = require("chai").assert;
const map = require("../map");
const eqArrays = require("../eqArrays");


const assertArraysEqual = function(array1, array2) {
  //  let result = eqArrays(array1, array2)
  //   console.log(result)
    if (eqArrays(array1, array2)) {
      console.log("🟢The arrays are equal");
    } else {
      console.log("🔴The arrays are not equal");
    }
  }



const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word.toUpperCase());
console.log(results1);
// tests:

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])