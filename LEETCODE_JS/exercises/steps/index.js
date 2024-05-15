// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let count = 1
    str = '#'
    while(count <= n){
        if(count == n){
            console.log(str.repeat(count))
        } else{
            console.log(str.repeat(count) + ' '.repeat(n-count))
        }
        count++
    }
    
}

  steps(4)
module.exports = steps;
