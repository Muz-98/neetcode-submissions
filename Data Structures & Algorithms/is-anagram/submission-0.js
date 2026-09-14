class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {};

        for (let i =0; i < s.length; i++) {
            let char = s[i];

            if (count[char] === undefined) count[char] = 1;
            else count[char] += 1;
        }

        for (let i = 0; i < t.length; i++) {
            let char = t[i];

            if (count[char] === undefined) return false;
            else count[char] -= 1;
        }

        return Object.values(count).every(j => j===0)
    }
}
