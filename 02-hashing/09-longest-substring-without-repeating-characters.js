// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const input1 = 'abcabcbb';
const input2 = 'bbbbb';
const input3 = 'pwwkew';

function lengthOfLongestSubstring(s) {
    // Create a map of the unique characters in a substring
    const uniqueChars = new Map();
    // Create a placeholder for the answer
    let ans = 0;
    // Create the left pointer
    let left = 0;

    // loop through the string
    // i is acting as the right pointer
    for (let i = 0; i < s.length; i++) {
        // If the char is in the unique characters
        if (uniqueChars.has(s[i])) {
            // Move the left pointer to the right of the last matched character
            left = Math.max(uniqueChars.get(s[i]) + 1, left);
        }

        // The answer is the maximum of the answer or the distance between the left and right pointer
        ans = Math.max(ans, i - left + 1);
        // Set the unique chars in the map
        uniqueChars.set(s[i], i);
    }

    return ans;
}

console.log(lengthOfLongestSubstring(input1));
console.log(lengthOfLongestSubstring(input2));
console.log(lengthOfLongestSubstring(input3));
