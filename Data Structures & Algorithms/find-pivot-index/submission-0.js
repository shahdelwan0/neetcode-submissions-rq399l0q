class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
    let leftSum = 0;
    let rightSum = 0;
    const sum = (start, end, arr) => {
        let sum = 0;
        while (start <= end) {
            sum += arr[start]
            start++
        }
        return sum
    }
    for (let pivot = 0; pivot < nums.length; pivot++) {
        leftSum = sum(0, pivot - 1, nums)
        rightSum = sum(pivot + 1, nums.length - 1, nums)
        console.log(`for index ${pivot}, leftSum is ${leftSum}, rightSum is ${rightSum}`)
        
        if(rightSum === leftSum) {
          return pivot
        }
    }
    return -1

}
// pivotIndex([1, 7, 3, 6, 5, 6])
}
