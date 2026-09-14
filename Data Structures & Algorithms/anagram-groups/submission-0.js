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

    isAnagram(str1, str2) {
        let obj = {}

        for (let char of str1) {
            if (obj[char] !== undefined) {
                obj[char] += 1
            } else {
                obj[char] = 1;
            }
        }

        for (let char of str2) {
            if (obj[char] === undefined) return false
            else obj[char]--
        }

        for (let char in obj) {
            if (obj[char] !== 0) return false
        }

        return true;
    }


    
}