// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(characters) {4
    const char_map = {}
    let prior_char = -1
    let max = -1
    let max_char = null
    for (let char of characters) {
        // char_map[char] = char_map[char] + 1 || 1
        if(!char_map[char]) {
            char_map[char] = 1
        } else {
            char_map[char] += 1
        }
        if(!max_char) {
            max_char = char
            max = char_map[char]
        } else if(char_map[char] > max) {
            max_char = char
            max = char_map[char]
        }
    }
    return max_char
}

module.exports = maxChar;
