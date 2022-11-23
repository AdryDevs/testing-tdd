const filter = require("./filter.js");
const test = require("node:test");
const assert = require("node:assert");

test("filter must return an array with the same length", () => {
  const original = [1, 2, 3, 4];
  const result = filter(original, () => true);
  assert.strictEqual(result.length, original.length);
});

test("array returned must be a different one", () => {
  const original = [1, 2, 3, 4];
  const result = filter(original, () => true);
  assert.notStrictEqual(result, original);
});

test("array returned must same array alike", () => {
  const original = [1, 2, 3, 4];
  const result = filter(original, () => true);
  assert.deepStrictEqual(result, original);
});

test("array returned an empty array", () => {
  const original = [1, 2, 3, 4];
  const result = filter(original, () => false);
  assert.deepStrictEqual([], result);
});

test("must throw if first arg is not and array", () => {
  assert.throws(() => {
    filter(null, () => true);
  });
  assert.throws(() => {
    filter("hgf", () => true);
  });
  assert.throws(() => {
    filter(1, () => true);
  });
  assert.throws(() => {
    filter({}, () => true);
  });
});

test("must throw if second arg is not a function", () => {
  assert.throws(() => {
    filter([1], null);
  }, SyntaxError, "Second argument must be a function");

});
