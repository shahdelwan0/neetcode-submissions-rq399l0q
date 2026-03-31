class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let str = "";
        if (s.length === 0 || s === "") {
          return true;
        } else if (s === t) {
          return true;
        }
        for (let i = 0; i < s.length; i++) {
          for (let j = 0; j < t.length; j++) {
            if (t[j] === s[i]) {
              str += t[j];
              i++
              if (s === str) return true;
            }
          }
        }

        return false;
    }
}
