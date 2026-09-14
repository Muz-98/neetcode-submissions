class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = new Set();

        for (let ele of nums) {
            if (obj.has(ele)) return true;

            obj.add(ele)
        }

        return false;
    }
}
