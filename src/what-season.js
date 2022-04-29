const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    let month = date.getMonth()
    let time = date.getTime()
  } catch {
    if(date == null) {
      throw new Error('Unable to determine the time of year!')
    } else {
      throw new Error("Invalid date!")
    }
  }
  console.log(date)
  let m = date.getMonth()

  switch (m) {
    case 11:
    case 0:
    case 1:
      console.log('winter')
      return 'winter'
    case 2:
    case 3:
    case 4:
      console.log('spring')
      return 'spring'
    case 5:
    case 6:
    case 7:
      console.log('summer')
      return 'summer'
    case 8:
    case 9:
    case 10:
      console.log('autumn')
      return 'autumn'
    default:
      console.log('false')
      return false
  }
}


// getSeason()


module.exports = {
  getSeason
};
