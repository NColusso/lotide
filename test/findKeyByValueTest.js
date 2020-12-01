const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#findKeyByValue", () => {
  it("returns drama when looking for The Wire in bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })

  it("returns undefined when looking for That '70s show in bestTVShowsByGenre", () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))
  })
});
