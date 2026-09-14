class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {};

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            let diff = target - num;

            if (obj[diff] !== undefined) return [obj[diff], i]
            else {
                obj[num] = i;
            }
        }
    }
}
