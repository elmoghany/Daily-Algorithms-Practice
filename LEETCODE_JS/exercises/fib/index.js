// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function memoize(fn){
//     const cache = {}
//     return function(...args){
//         if(cache[args]){
//             return cache[args]
//         }
//         const result = fn.apply(this, args)
//         cache[args] = result

//         return result
//     }
// }
let memoizedValue = []
function fib(n) {
    if(memoizedValue[n]){
        return memoizedValue[n]
    }
    let result
    if(n <= 0) {
        result = 0
    }
    else if(n == 1) {
            result = 1
        } else {
                // result = memoizedFib(n-1, memoizedValue) + memoizedFib(n-2, memoizedValue) 
                result = fib(n-1) + fib(n-2) 
    }
    memoizedValue[n] = result
    return result
}

// function fib(n) {
//     let prior_1 = 1
//     let prior_2 = 0
//     let current = 0
//     for(i = 0; i <= n; i++){
//         if(i == 0) {
//             prior_2 = 0
//             current = 0
//         }
//         else if(i == 1) {
//             prior_1 = 1
//             current = 1
//         } else if (i >= 2){
//             current = prior_1 + prior_2
//             console.log(i)
//             console.log(current)
//             prior_2 = prior_1
//             prior_1 = current
//         }
//     }
//     return current
// }

// function fib(n) {
//     if(n == 0) return 0
//     if(n == 1) return 1
//     sum = fib(n-1) + fib(n-2)
//     console.log(sum)
//     return sum
// }
// fib(1000)

// module.exports = memoizedFib;
module.exports = fib;
