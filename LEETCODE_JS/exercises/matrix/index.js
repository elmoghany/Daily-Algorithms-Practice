// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let sub_mat = []
    let last_count = 1
    
    //Sub Matrix creation
    for(let i = 0; i < n; i++){
        sub_mat[i] = []
    }

    /////////////////////////////

    //i=0 row
    for(let j = 0; j < n; j++){
        sub_mat[0][j] = last_count
        last_count++
    }
    
    //j=n-1 column
    for(let i = 1; i < n; i++){
        sub_mat[i][n-1] = last_count
        last_count++
    }

    //i=n-1 row
    for(let j = n-2; j >= 0; j--){
        sub_mat[n-1][j] = last_count
        last_count++
    }

    //j=0 column
    for ( let i = n-2; i > 0; i--){
        sub_mat[i][0] = last_count
        last_count++
    }

    //i=1 row
    for( let j = 1; j <= n-2; j++){
        sub_mat[1][j] = last_count
        last_count++
    }

    //i=2 row
    for( let j = n-2; j >= 1; j--){
        sub_mat[2][j] = last_count
        last_count++
    }

    return sub_mat
}

matrix(4)
module.exports = matrix;
