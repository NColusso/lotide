// Will count how many times a letter appears in a given sentence and return the counts as an object

const countletters = function(sentence) {
  const letterCount = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  } return letterCount;
};


module.exports = countletters;