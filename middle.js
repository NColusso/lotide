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

const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    middle = [];
  } else if (array.length % 2 !== 0) {
    middle = [array[Math.floor(array.length / 2)]];
  } else {
    middle = [array[Math.floor(array.length / 2 - 1)], array[Math.floor(array.length / 2)]];
  }
  return middle;
};

// tests:
// console.log(middle([1])) // => []
// console.log(middle([1, 2])) // => []
// console.log(middle([1, 2, 3])) // => [2]
// console.log(middle([1, 2, 3, 4, 5])) // => [3]
// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]