class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alpha = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let l = 0;
        let r = s.length - 1;

        while(l < r) {

            while(l < r && !alpha.includes(s[l].toLowerCase())) {
                l++
            } 

            while(r > l && !alpha.includes(s[r].toLowerCase())) {
                r--
            }

       
            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            l++
            r--
        }

        return true;
    }
}
