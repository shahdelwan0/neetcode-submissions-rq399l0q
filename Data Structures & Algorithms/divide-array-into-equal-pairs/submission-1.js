class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
  let res =[]
        nums.sort((a, b) => a - b)
        if (nums.length % 2 == 0) {
            for (let i = 0; i < nums.length; i += 2) {
                if (nums[i] == nums[i + 1]) {
                    res.push([nums[i], nums[i+1]])
                    console.log(`@ ${i} => ${nums[i]} is equal @ ${i+1} => ${nums[i+1]}`)
                }

            }
            if(res.length == nums.length /2 ) {
              return true
              }
            return false
        }
    }
}
