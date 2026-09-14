class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            if (obj[num] !== undefined) return true;
            obj[num] = i
        }

        return false;
    }
}
