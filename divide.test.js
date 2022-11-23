const divide = require('./divide');
const test = require('node:test');
const assert = require('node:assert');

test('must run with two numbers as arguments', () => {
    assert.throws(() => {
        divide(null, 1);
    });
    assert.throws(() => {
        divide("hgf", 1);
    });
    assert.throws(() => {
        divide(1, null);
    });
    assert.throws(() => {
        divide(1, "hgf");
    });
});

test('must return a number', () => {
    const result = divide(1, 1);
    assert.strictEqual(typeof result, 'number');
});

test('must return the correct result', () => {
    const result = divide(1, 1);
    assert.strictEqual(result, 1);
});