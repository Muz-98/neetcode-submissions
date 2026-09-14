class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prof = 0;

        for (let i = 0; i < prices.length; i++) {
            let j = i + 1;
            while ( j < prices.length) {
                if (prices[j] - prices[i] > prof ) {
                    prof = prices[j] - prices[i]
                }

                j++
            }
        }

        return prof;
    }
}
