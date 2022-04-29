const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  
  if(!Array.isArray(members)) {
    console.log('break')
    return false
  } else {
    let validMembers = []
    for(i = 0; i<members.length; i++) {
      if(typeof members[i] == 'string')
      validMembers.push(members[i].trim()[0].toUpperCase())
    }
    validMembers.sort()
    
    console.log(validMembers.join(''))
    return validMembers.join('')
  }
}

module.exports = {
  createDreamTeam
};
