class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
          let arr =[];
  
  arr[0]=[1]; arr[1]=[1,1];
  
  for(let i=2; i<numRows; i++){
    let inner= [];
    for(let j=1; j<i; j++){
      inner[0]=inner[i]=1;
      inner[j]=arr[i-1][j-1]+arr[i-1][j]
      }
      arr.push(inner)
    }
    return arr.splice(0, numRows);
    }
}
