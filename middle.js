
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

module.exports = middle

