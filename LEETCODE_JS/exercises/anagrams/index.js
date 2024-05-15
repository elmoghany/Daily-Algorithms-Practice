// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const stringA_map = {}
    const stringB_map = {}

    stringA = stringA.toLowerCase().replace(/[^\w]/g,'')
    stringB = stringB.toLowerCase().replace(/[^\w]/g,'')

    if(stringA.length != stringB.length) return false
    else {
        stringA_map = buildStringMap(stringA)
        stringB_map = buildStringMap(stringB)
        if(stringA_map.length != stringB_map.length) return false
        else{
            for(let char of stringA){
                if(stringA_map[char] == stringB_map[char]){
                    continue
                }
                else{
                    return false
                }
            }    
            return true
        }
    }
}
function buildStringMap(str){
    const my_map = {}
    for(let char of str){
        if(!my_map[char]){
            my_map[char] = 1
        } else{
            my_map[char]++
        }
    }
    return my_map
}

module.exports = anagrams;
