class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let obj = {}
        let max = 0;

        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r] 
          while(obj[char] !== undefined) {
            delete obj[s[l]]
            l++
          }

          obj[char] = r
          max = Math.max(max, r - l + 1)
        }

        return max;
    }
}
