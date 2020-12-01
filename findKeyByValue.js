

const findKeyByValue = function(givenObject, givenValue) {
  for (let key in givenObject) {
    if (givenObject[key] === givenValue)
      return key;
  }
};


module.exports = findKeyByValue;