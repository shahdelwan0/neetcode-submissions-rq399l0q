class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let count = 0;
        // let k =0;
        let expected = [...heights].sort((a,b) => a-b)
        // console.log(expected)
        // console.log(heights)
        for (let i=0; i<heights.length; i++) {
            // console.log(`heights[i] is ${heights[i]}, expected[i] is: ${expected[i]}`)
            if (heights[i] !== expected[i]) {
                count++
            }
        }
        return count
}
    }

