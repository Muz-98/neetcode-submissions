class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let brack = { 
            '(' : ")",
            "[" : ']',
            '{' : '}'
        }

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (brack[char]) stack.unshift(brack[char])
            else if (stack[0] === char) stack.shift()
            else return false;
        }

        return stack.length === 0;
    }
}
