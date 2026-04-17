class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
  let freq = new Map();
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) +1)
    }
    
  let maxOddFreq=0;
  let minEvenFreq=Infinity;
  
  
  freq.forEach((value, key)=>{
    console.log(`${value}, ${key}`)
    if(value % 2 == 0 && value < minEvenFreq) {
      minEvenFreq = value
      }
    else if (value % 2 !== 0 && value > maxOddFreq){
      maxOddFreq = value
    } 
    })
    
  let diff = maxOddFreq - minEvenFreq
  return diff




    }
}
