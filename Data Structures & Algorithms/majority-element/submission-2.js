class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
    let result=0; 
    let freq = new Map();
    for(const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    freq.forEach((value, key)=> {
      if(value > nums.length/2) {
        result = key
        }
      })
      
    return result
    }
}
