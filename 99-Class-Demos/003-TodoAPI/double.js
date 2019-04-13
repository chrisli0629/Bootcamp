var doubleFunction = function (value) {
    if (typeof value !== "number") {
      throw "not a number";
    }
    return value * 2;
}
 
module.exports = doubleFunction