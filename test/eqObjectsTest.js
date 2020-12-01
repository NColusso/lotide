const assert = require('chai').assert;
const eqObjects = require("../eqObjects");


const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
const cd2 = { c: "1", d: ['2', 3, 4] };
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };


describe("#eqObjects", () => {
  it("returns true with {d: '1', d: ['2', 3]} & d: ['2', 3], c: '1'", () => {
    assert.isTrue(eqObjects(cd, dc));
  })

  it("returns false with { c: '1', d: ['2', 3] } & { c: '1', d: ['2', 3, 4] }", () => {
    assert.isFalse(eqObjects(cd, cd2));
  })

  it("returns true with { a: '1', b: '2' } & { b: '2', a: '1' }", () => {
    assert.isTrue(eqObjects(ab, ba));
  })

  it("returns false with { a: '1', b: '2' } & { a: '1', b: '2', c: '3' }", () => {
    assert.isFalse(eqObjects(ab, abc));
  })
});

