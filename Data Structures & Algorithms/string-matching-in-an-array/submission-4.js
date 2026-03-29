class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let res =[]
        for (let i=0; i<words.length; i++) {
            for (let j=0; j<words.length; j++) {
                if (words[i] !== words[j]){
                    if (words[j].includes(words[i])){
                        res.push(words[i])
                    }
                }
            }
        }
            return Array.from(new Set(res))
    }
}
