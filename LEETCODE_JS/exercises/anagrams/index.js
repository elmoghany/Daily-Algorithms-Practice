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
        for(let string in stringA){
            if(!stringA_map[string]){
                stringA_map[string] = 1
            } else{
                stringA_map[string]++
            }
        }
        for(let string in stringB){
            if(!stringB_map[string]){
                stringB_map[string] = 1
            } else{
                stringB_map[string]++
            }
        }
        for(let string in stringA){
            if(stringA_map[string] == stringB_map[string]){
                continue
            }
            else{
                return false
            }
        }    
        return true 
    }
}

anagrams('RAIL. safety', 'fairy tales')
module.exports = anagrams;
