const map = require("./map.js");
const test = require("node:test");
const assert = require("node:assert");

test("must be run with an array as first argument", () => {
  assert.throws(() => {
    map(null, () => true);
  });
  assert.throws(() => {
    map("hgf", () => true);
  });
  assert.throws(() => {
    map(1, () => true);
  });
  assert.throws(() => {
    map({}, () => true);
  });
});

test("must be run with a function as second argument", () => {
  assert.throws(
    () => {
      map([1], null);
    },
    SyntaxError,
    "Second argument must be a function",
  );
});

test("must return an array with the same length", () => {
  const original = Array.from(
    { length: parseInt(Math.random() * 20) },
    (_, i) => i,
  );
  const result = map(original, () => true);
  assert.strictEqual(result.length, original.length);
});

test("array returned must be a different one", () => {
  const original = [1, 2, 3, 4];
  const result = map(original, () => true);
  assert.notStrictEqual(result, original);
});

test("array returned must be a mapped one", () => {
  const original = [1, 2, 3, 4];
  const result = map(original, (i) => i * 2);
  assert.deepStrictEqual([2, 4, 6, 8], result);
});

test("array returned must be a mapped one", () => {
  const original = ["1", "2", "3", "4"];
  const result = map(original, (i) => i + "n");
  assert.deepStrictEqual(["1n", "2n", "3n", "4n"], result);
});
