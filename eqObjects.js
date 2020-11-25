const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have idential keys with identical values
// Otherwise you get back false

const eqObjects = function(object1, object2) {
  let valueExists = true
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let keys1 in object1) {
      for (let keys2 in object2) {
        if (keys1 === keys2) {
          if (object1[keys1] === object2[keys2]) {
            valueExists = true;
          } else {
            return false;
          }
        }
      }
    }
  } else {
    return false;
  }
  return valueExists;
};


// Tests:
// const ab = { a: "1", b: "2", c: "3", x: 7 };
// const ba = { b: "2", a: "1", c: "3"};
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "4", v: 7 };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd2), false)