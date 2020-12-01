const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'] when passed the callback toUpperCase on the lower case string of the same value", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM'])
  })
})
