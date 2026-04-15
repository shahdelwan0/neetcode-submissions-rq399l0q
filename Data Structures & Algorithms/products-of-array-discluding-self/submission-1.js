class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let output = []
  let res=1
  for(let i=0; i<nums.length; i++){
    let arr =[]
    for(let j =0; j<nums.length; j++){
      if(i !== j){
        arr.push(nums[j])
        }
      res = arr.reduce((acc, curr) => acc * curr, 1);
      
      }
      output.push(res)
    }
    return output
    }
}
