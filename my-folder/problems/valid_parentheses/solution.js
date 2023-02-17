/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length %2 != 0) return false
    const stack = []
    const parens = '() {} []'
    let i=0;
    while(i<s.length){
        stack.push(s[i]);
        i++;
        let open =stack[stack.length - 2];
        let close=stack[stack.length - 1];
        let potentialParens = open + close
        if(parens.includes(potentialParens)){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length == 0;
};