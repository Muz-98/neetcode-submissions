class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};

        for (let i =0; i < nums.length; i++) {
            let num = nums[i];

            if (obj[num]) obj[num]++
            else obj[num] = 1;
        }

        let freq = new Array(nums.length + 1).fill(0) 

        for (let num in obj) {
            let fre = obj[num]

            if (freq[fre] === 0) {
                freq[fre] = [num]
            } else {
                freq[fre].push(num)
            }
        }

        let res = [];

        for (let i = freq.length - 1; i > 0; i--) {
            if (freq[i] !== 0 && res.length < k) {
                for (let sub of freq[i]) res.push(sub)
            }
        }

        return res;
    }
}
