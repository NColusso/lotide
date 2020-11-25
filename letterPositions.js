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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


// tests:
// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);