// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:

//     1 <= nums1.length <= nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 104
//     All integers in nums1 and nums2 are unique.
//     All the integers of nums1 also appear in nums2.

// Follow up: Could you find an O(nums1.length + nums2.length) solution?

const nums1Input1 = [4, 1, 2];
const nums1Input2 = [2, 4];

const nums2Input1 = [1, 3, 4, 2];
const nums2Input2 = [1, 2, 3, 4];

function nextGreaterElement(nums1, nums2) {
    // Create our stack
    const stack = [];
    // Create our array of answers
    const map = new Map();

    // Loop through the nums2 array
    for (let i = 0; i < nums2.length; i++) {
        // while there is a stack
        // and the last item in the stack is less than the current number in nums 2
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            // pop the item from the stack
            // Set the popped item in hash map and map it to the current number in the nums2 array
            // This will map the popped number to the next number in the nums2 array that is larger than itself
            map.set(stack.pop(), nums2[i]);
        }

        // Push the current number into the nums2 array
        stack.push(nums2[i]);
    }

    // If a number in the nums1 array matches with a number in the hash map
    // It will return the value from the hash map
    // Otherwise if there isn't a number in the hash map it will return -1
    return nums1.map((n) => map.get(n) || -1);
}

console.log(nextGreaterElement(nums1Input1, nums2Input1));
