const countOnly = require("../countOnly");
const assert = require('chai').assert;


// tests:

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


describe("#countOnly", () => {
  it("returns {Fang: 2, Jason: 1} when taking in firstNames and results1", () => {
    assert.deepEqual(countOnly(firstNames, result1), {Fang: 2, Jason: 1})
  })
});