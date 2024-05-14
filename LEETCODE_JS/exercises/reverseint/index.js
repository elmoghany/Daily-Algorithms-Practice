// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if(n==0) return 0
    let int_sign = Math.sign(n)
    console.log(int_sign)
    let rev_str = Math.abs(n).toString().split('').reverse().join('')
    console.log(rev_str)
    rev_str = parseInt(rev_str) * int_sign
    return rev_str
}

reverseInt(12)
module.exports = reverseInt;
