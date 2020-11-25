const eqArrays = function(array1, array2) {
  let matching = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        matching = false;
      }
    }
  } else {
    matching = false;
  }
  return matching;
};

const assertArraysEqual = function(array1, array2) {
//  let result = eqArrays(array1, array2)
//   console.log(result)
  if (eqArrays(array1, array2)) {
    console.log("🟢The arrays are equal");
  } else {
    console.log("🔴The arrays are not equal");
  }
};

const without = function(array, remove) {
  let newArray = [...array];
  for (let i = 0; i < array.length; i ++) {
    for (let x = 0; x < remove.length; x ++) {
      if (array[i] === remove[x]) {
        newArray.splice(i,1);
      }
    }
  } return newArray;
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