class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = {};

        for (let word of strs) {
            let count = new Array(26).fill(0)

            for (let char of word) {
                let idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[idx]++
            }

            let key = count.join('#')

            if (ans[key] === undefined) ans[key] = []
            
            ans[key].push(word)
        }       
        return Object.values(ans)
    }  
}