class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;

        for (let i = 0; i < prices.length; i++) {
            let curr = prices[i]
            let j = i + 1;

            while (j < prices.length) {
                let nex = prices[j]
                let diff = nex - curr
                if (diff > max) {
                    max = diff
                } 
                j += 1
            }

        }

        return max;
    }
}
