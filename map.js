function map(array, func) {
    if (!Array.isArray(array)) {
        throw new SyntaxError("First argument must be an array");
    }
    if (typeof func !== "function") {
        throw new SyntaxError("Second argument must be a function");
    }
    const result = [...array];
    
    return result;
}

module.exports = map;