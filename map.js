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
}

const assertArraysEqual = function(array1, array2) {
//  let result = eqArrays(array1, array2)
//   console.log(result)
  if (eqArrays(array1, array2)) {
    console.log("🟢The arrays are equal");
  } else {
    console.log("🔴The arrays are not equal");
  }
}



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// tests:
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])