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
// class DepthCalculator {
//   constructor() {
//     this.depth = 0
//     this.result = 0
//   }
//   calculateDepth(arr) {
//     for(let el of arr) {
//       if(Array.isArray(el)) {
//         this.result++
//         if(this.result > this.depth) {
//           this.depth = this.result
//         }
//         this.calculateDepth(el)
//       }
//     }
//     this.result = 0
//     return this.depth + 1
//   }
// }

// const depthCalc = new DepthCalculator();

// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]))            // 1
// console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]))          // 2
// console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))  // 2
// console.log(depthCalc.calculateDepth([[[]]]))                     // 3
// console.log(depthCalc.calculateDepth([[[[[[[[[]]]]]]]]]))         // 9
// console.log(depthCalc.calculateDepth([[[[[[[]]]]]]]))             // 7

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

module.exports = {
  DepthCalculator
};
