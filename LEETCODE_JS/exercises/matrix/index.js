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

    //1st row
    for(let j = 0; j < n; j++){
        sub_mat[0][j] = last_count
        last_count++
    }
    
    //last column
    for(let i = 1; i < n; i++){
        sub_mat[i][n-1] = last_count
        last_count++
    }

    //last row
    for(let j = n-2; j >= 0; j--){
        sub_mat[n-1][j] = last_count
        last_count++
    }

    //first column
    for ( let i = n-2; i > 0; i--){
        sub_mat[i][0] = last_count
        last_count++
    }
}

module.exports = matrix;
