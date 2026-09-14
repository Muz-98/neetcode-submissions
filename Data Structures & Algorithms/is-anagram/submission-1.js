class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let obj = {};

        for (let char of s) {
            if (obj[char]) obj[char] ++
            else obj[char] = 1;
        }

        for (let char of t) {
            if (obj[char] === undefined || obj[char] <= 0) return false;
            else obj[char] --
        }

        for (let key in obj) {
            if (obj[key] > 0) return false
        }

        return true;   
    }
}
