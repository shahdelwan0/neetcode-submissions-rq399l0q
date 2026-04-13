class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
          let maxScore =0;
  
  let k=1;
  
  while(k<=s.length-1){
    let left = s.slice(0,k)
    let right= s.slice(k, s.length)
    
    let zeros = left.split("").filter((char)=>char==0).length
    let ones = right.split("").filter((char)=>char==1).length
    // console.log(ones)
    
    let score = zeros + ones;
    
    if(score>maxScore){
      maxScore=score
      }
    k++
    }
  return maxScore
    }
}
