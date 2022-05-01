const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  let repeats = 1
  if(options.repeatTimes) {
    repeats = options.repeatTimes
  }
  let separators = '+'
  if(options.separator) {
    separators = options.separator
  }
  let addRepeats = 1
  let addSeparators = ''
  if(options.additionRepeatTimes) {
    addRepeats = options.additionRepeatTimes
    addSeparators = '|'
  }
  
  if(options.additionSeparator) {
    addSeparators = options.additionSeparator
  }
  let adds = ''
  let addsArr = []
  if(options.addition) {
    adds = options.addition
    for(let i = 0; i < addRepeats; i++) {
      addsArr.push(adds)
    }
    str += (addsArr.join(addSeparators))
  }

  let arr = []
  for(let i = 0; i < repeats; i++) {
    arr.push(str)
  }
  return arr.join(separators)
}

module.exports = {
  repeater
};

