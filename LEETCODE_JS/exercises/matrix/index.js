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
        // sub_mat.push([])
    }

    /////////////////////////////
        //i
        let start_row = 0
        let end_row = n - 1
        //j
        let start_col = 0
        let end_col = n - 1

    let loop = 0
    //1
    //i=0 1st row forward
    function recursive_funct(n){


        for(let j = start_col; j <= end_col; j++){
            sub_mat[start_row][j] = last_count
            last_count++
        }
        start_row++
        
        //2
        //j=n-1 last column down
        for(let i = start_row; i <= end_row; i++){
            sub_mat[i][end_col] = last_count
            last_count++
        }
        end_col--

        //3
        //i=n-1 last row backwards
        for(let j = end_col; j >= start_col; j--){
            sub_mat[end_row][j] = last_count
            last_count++
        }
        end_row--
        
        //4
        //j=0 1st column up
        for ( let i = end_row; i >= start_row; i--){
            sub_mat[i][start_col] = last_count
            last_count++
        }
        start_col++
        console.log(sub_mat)
        loop++
        console.log(loop)
    }
    return recursive_funct(n-2)
}
matrix(4)

// function matrix(n) {
//     let sub_mat = []
//     let last_count = 1
    
//     //Sub Matrix creation
//     for(let i = 0; i < n; i++){
//         sub_mat[i] = []
//         // sub_mat.push([])
//     }

//     /////////////////////////////

//     //i
//     let start_row = 0
//     let end_row = n - 1
//     //j
//     let start_col = 0
//     let end_col = n - 1
//     let loop = 0
//     while(start_col <= end_col && start_row <= end_row){
//         //1
//         //i=0 1st row forward
//         for(let j = start_col; j <= end_col; j++){
//             sub_mat[start_row][j] = last_count
//             last_count++
//         }
//         start_row++
        
//         //2
//         //j=n-1 last column down
//         for(let i = start_row; i <= end_row; i++){
//             sub_mat[i][end_col] = last_count
//             last_count++
//         }
//         end_col--

//         //3
//         //i=n-1 last row backwards
//         for(let j = end_col; j >= start_col; j--){
//             sub_mat[end_row][j] = last_count
//             last_count++
//         }
//         end_row--
        
//         //4
//         //j=0 1st column up
//         for ( let i = end_row; i >= start_row; i--){
//             sub_mat[i][start_col] = last_count
//             last_count++
//         }
//         start_col++
//         loop++
//     }
    
//     console.log(sub_mat)
//     return sub_mat
// }


module.exports = matrix;
