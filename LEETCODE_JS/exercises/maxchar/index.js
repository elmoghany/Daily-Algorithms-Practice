// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(characters) {4
    const char_map = {}
    for (let char of characters) {
        // char_map[char] = char_map[char] + 1 || 1
        if(!char_map[char]) {
            char_map[char] = 1 
        }
        char_map[char] += 1
    }
}

module.exports = maxChar;
