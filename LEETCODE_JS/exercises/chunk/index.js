// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let array_chunks = []
    let chunk_cnt = 0
    let sub_array_cnt = 0
    let index = 0 
    while(index < array.length){
        array_chunks.push(array.slice(index , index + size))
        index = index + size
    }
    console.log(array_chunks)
    return array_chunks
}


//     for(let i=0; i<array.length; i++){
//         if(sub_array_cnt == 0){
//             array_chunks[chunk_cnt] = []
//         }
        
//         array_chunks[chunk_cnt][sub_array_cnt] = array[i]
//         sub_array_cnt++

//         if(sub_array_cnt >= size){
//             sub_array_cnt = 0
//             chunk_cnt++
//         }
//     }
//     console.log(array_chunks)
//     return array_chunks
// }

chunk([1, 2, 3, 4], 2)
module.exports = chunk;
