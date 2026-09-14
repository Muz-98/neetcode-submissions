class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // for (let arr of matrix) {
        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr[i] === target) return true;
        //     }
        // }

        // return false;
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;

        while (top <= bot) {
            let m = Math.floor((top + bot) / 2)

            if (target > matrix[m][COLS - 1]) {
                top = m + 1;
            } else if (target < matrix[m][0]) {
                bot = m - 1;
            } else break;
        }

        if (!(top <= bot)) return false;
        let row = Math.floor((top + bot) / 2)
        let l = 0;
        let r = COLS - 1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

                if (target < matrix[row][m]) {
                    r = m - 1;
                } else if (target > matrix[row][m]) {
                    l = m + 1
                } else return true;
        }


        return false;
    }
}
