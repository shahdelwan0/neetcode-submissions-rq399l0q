class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        const arr = new Array(nums.length).fill(0).map((_, i) => i + 1);
        // [1,2,3,4,5,6,7,8]
        let k=0;
        for(let i=0; i<nums.length; i++){
          for(let j=0; j<arr.length; j++){
            if(nums[i]==arr[j]) {
              arr.splice(j,1)
              console.log("fdsfdsg")
              }
            }
          }
          return arr
        
        }
}
