class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {
        let left = numbers[i] 
        let right = numbers[j]

        if (left + right < target) {
            i++
        } else if (left + right > target) {
            j--
        } else {
            return [i + 1, j + 1]
        }
    }
    }
}
