const sum = require("./sum.js");
const test = require("node:test");
const assert = require("node:assert");
var almostEqual = require("almost-equal");


test("failing example",{skip: true},  () => {
  throw new Error("Test failed");
});

test("failing example 2",{skip: true}, () => {
  const undef = undefined;
  undef.hola();
});

test("passing example", () => {
  // do not throw an error
});

test("adds 1 + 2 to equal 3", () => {
  if (sum(1, 2) !== 3) {
    throw new Error("Test failed");
  }
});

test("adds .1 + .2 to equal .3", () => {
    almostEqual(sum(0.1, 0.2), 0.3);
});

test("adds over MAX_SAFE_INTEGER",{skip:true}, () => {
  const a = 9007199254740991;
  assert.notEqual(sum(a, 1), sum(a, 2));
});

test("comparing objects", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  assert.deepStrictEqual(obj1, obj2);
});


test('sum must throw a error if called with a non number', () => {
    assert.throws(() => {
        sum(1, 'a');
    });
})