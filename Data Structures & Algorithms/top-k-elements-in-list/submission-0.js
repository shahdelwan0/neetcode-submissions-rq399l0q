class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let result = [];
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }

        while (k > 0) {
            let keyReturn;
            let max = 0;
            map.forEach((value, key) => {
                if (value > max) {
                    max = value
                    keyReturn = key
                }
            })
            result.push(keyReturn)
            k--
            map.delete(keyReturn)
        }
        return result
    }
}