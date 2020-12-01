
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

module.exports = without;
