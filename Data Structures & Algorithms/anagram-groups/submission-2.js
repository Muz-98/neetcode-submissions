class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {}

        for (let word of strs) {
            let sortedW = word.split("").sort().join("")

            if (!group[sortedW]) group[sortedW] = []

            group[sortedW].push(word)

        }

        return Object.values(group)
    }

}


