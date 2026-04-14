class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
 /**
 * Encodes a list of strings to a single string.
 * @param {string[]} strs
 * @return {string}
 */
 encode(strs) {
    let encoded = "";
    for (let s of strs) {
        // Format: [length][#][string_content]
        encoded += s.length + "#" + s;
    }
    return encoded;
}

/**
 * Decodes a single string to a list of strings.
 * @param {string} str
 * @return {string[]}
 */
 decode(str) {
    let result = [];
    let i = 0;
    
    while (i < str.length) {
        // Step 1: Find the delimiter '#' to extract the length
        let j = i;
        while (j < str.length && str[j] !== '#') {
            j++;
        }
        
        // Step 2: Parse the length value
        let length = parseInt(str.slice(i, j));
        
        // Step 3: Extract exactly 'length' characters after the '#'
        let start = j + 1;
        let end = start + length;
        result.push(str.slice(start, end));
        
        // Step 4: Move pointer to the start of the next string's length field
        i = end;
    }
    
    return result;
}
}
