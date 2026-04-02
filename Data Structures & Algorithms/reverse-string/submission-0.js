class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */

    reverseString(s) {
        let left = s.length-1;
    
    for (let i=0; i<s.length; i++){
      if (i < left) {
      [s[i], s[left]]=[s[left], s[i]]
      
      left--
      }}
    return s
    }
}