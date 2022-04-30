const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  
  if(!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  } else {
    let arrM = arr.slice()
    for (let i = 0; i < arrM.length; i++) {
      if (arrM[i] == '--discard-next') {
        if (i == arrM.length - 1) {
          arrM.splice(i, 1)
        } else if (arrM[i+2] == '--double-prev' || arrM[i+2] == '--discard-prev') {
          arrM.splice(i, 3)
        } else {
          arrM.splice(i, 2)
        }
      } else if (arrM[i] == '--discard-prev') {
        if (i == 0) {
          arrM.splice(i, 1)
        } else {
          arrM.splice(i-1, 2)
        }
      } else if (arrM[i] == '--double-next') {
        if (i == arrM.length - 1) {
          arrM.splice(i, 1)
        } else {
          arrM[i] = arrM[i+1]
        }
      } else if (arrM[i] == '--double-prev') {
        if (i == 0) {
          arrM.splice(i, 1)
        } else {
        arrM[i] = arrM[i-1]
        }
      }
    }
    return arrM
  }
}

module.exports = {
  transform
};
