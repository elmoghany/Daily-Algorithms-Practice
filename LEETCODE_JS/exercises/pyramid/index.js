// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2) => n=rows 
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4) => 1,3,5,7,9
// n-count , count, n-count
// count = 2
// 3, 1, 3
// count = 2
// 2, 2, 2
// count = 3
// 1, 3, 1
//       '   #   ' 3. 1. 3
//       '  ###  ' 2. 3. 2
//       ' ##### ' 1. 5. 1
//       '#######' 0. 7. 0

function pyramid(n) {
    let str = ''
    let count=1
    let odd_cntr = 1
    while( count <= n ){
        if(count < n){
            str = (' ').repeat(n-count)
            str = str + ('#').repeat(odd_cntr)
            str = str + (' ').repeat(n-count)
        } 
        else {
            str = ('#').repeat(odd_cntr)
        }
        console.log(str)
        count++
        odd_cntr+=2
    }
}

pyramid(5)
module.exports = pyramid;
