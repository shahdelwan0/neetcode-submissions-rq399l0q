class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

    if (!nums || nums.length === 0) return 0;
    
    const numSet = new Set(nums);
    let maxLength = 0;
    
    for (let num of numSet) {
        // Only start counting if this is the beginning of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            
            // Count consecutive numbers forward
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            maxLength = Math.max(maxLength, currentStreak);
        }
    }
    
    return maxLength;
    }    }

