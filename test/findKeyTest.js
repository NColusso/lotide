const assert = require("chai" ).assert;
const findKey = require("../findKey");


const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}


describe("#findKey", () => {
  it("Returns noma in stars when passed the value of 2", () => {
    assert.strictEqual(findKey(stars, x => x.stars === 2), "noma")
  })
})
