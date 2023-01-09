/* 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character.

*/

const inputOne = ['h', 'e', 'l', 'l', 'o'];
const inputTwo = ['H', 'a', 'n', 'n', 'a', 'h'];

const reverseString = (stringArray) => {
    let left = 0;
    let right = stringArray.length - 1;

    while (left < right) {
        // swap the values
        const initialLeft = stringArray[left];
        const initialRight = stringArray[right];
        stringArray[left] = initialRight;
        stringArray[right] = initialLeft;
        // Increment the left pointer
        left++;
        // Decrement the right pointer
        right--;
    }

    return stringArray;
};

console.log(reverseString(inputOne));
console.log(reverseString(inputTwo));
