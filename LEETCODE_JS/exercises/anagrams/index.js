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
        for(let char of stringA){
            console.log(char)
            if(!stringA_map[char]){
                stringA_map[char] = 1
            } else{
                stringA_map[char]++
            }
        }
        for(let char of stringB){
            if(!stringB_map[char]){
                stringB_map[char] = 1
            } else{
                stringB_map[char]++
            }
        }
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

module.exports = anagrams;
