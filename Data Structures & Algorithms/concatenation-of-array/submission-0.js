class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let count = 0;
        let res = [];

        while (count < 2) {
            for (let i = 0; i < nums.length; i++) {
                res.push(nums[i])
            }
            count++
        }

        return res;
    }
}
