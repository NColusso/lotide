const assert = require("chai").assert;
const without = require("../without");
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
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false