const takeUntil = function(array, callback) {
  let newArray = [];
  for (let value of array) {
    if (!callback(value)) {
      newArray.push(value);
    } else if (callback(value)) {
      return newArray;
    }
  }
};

 module.exports = takeUntil;