
const flatten = function(array) {
  let flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (secondElement of element) {
        flattenedArray.push(secondElement)
      }
    } else {
      flattenedArray.push(element)
    }
  }
  return flattenedArray;
};

module.exports = flatten;