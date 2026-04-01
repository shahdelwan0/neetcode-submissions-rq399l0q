class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      let countToRemove = 0;
      for (let j = i; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          countToRemove++;
        }
      }
      nums.splice(i, countToRemove);
      console.log(nums);
    }
  }
      return nums.length

    }
}
