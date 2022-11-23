function filter(array, validate) {
  if (!Array.isArray(array)) {
    throw new SyntaxError("First argument must be an array");
  }
  if (typeof validate !== "function") {
    throw new SyntaxError("Second argument must be a function");
  }

  const result = [];
  for (let item of array) {
    if (validate(item)) {
      result.push(item);
    }
  }
  return result;
}

module.exports = filter;
