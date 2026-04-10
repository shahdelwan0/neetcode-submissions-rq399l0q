class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    // 1. Count frequencies
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // 2. Create buckets: index = frequency, value = array of numbers
    const buckets = Array.from({
        length: nums.length + 1
    }, () => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // 3. Collect from highest frequency down
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }
    return result;

}}
