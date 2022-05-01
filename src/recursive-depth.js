const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  n = 1
  calculateDepth(arr) {
    for(let el of arr) {
      if (Array.isArray(el)) {
        this.n++
        this.calculateDepth(el)
      }
    }
    return this.n
  }
}

const depthCalc = new DepthCalculator();
let d = depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]])

console.log(d)



module.exports = {
  DepthCalculator
};
