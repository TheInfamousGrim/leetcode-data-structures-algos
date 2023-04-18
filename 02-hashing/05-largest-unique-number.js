// Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

// Example 1:

// Input: nums = [5,7,3,9,4,9,8,3,1]
// Output: 8
// Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the

// Example 2:

// Input: nums = [9,9,8,8]
// Output: -1
// Explanation: There is no number that occurs only once.

const input1 = [5, 7, 3, 9, 4, 9, 8, 3, 1];

const input2 = [9, 9, 8, 8];

function largestUniqueNumber(nums) {
    // Create the map
    const uniqueOccurrences = new Map();
    const commonOccurrences = new Map();

    // Loop through the nums array
    for (let i = 0; i < nums.length; i++) {
        // If the number exists in the unique occurrences map
        if (uniqueOccurrences.has(nums[i])) {
            // Delete it from the unique occurrences map
            uniqueOccurrences.delete(nums[i]);
            // Set it in the common occurrences map
            commonOccurrences.set(nums[i], 1);
        }
        // If the number doesn't exist in the hash map
        // And if the number doesn't exist in the common occurrences map
        if (
            !uniqueOccurrences.has(nums[i]) &&
            !commonOccurrences.has(nums[i])
        ) {
            // Set the number in the unique occurrences map
            uniqueOccurrences.set(nums[i], 1);
        }
    }

    // If there is nothing in the unique occurrences map
    if (uniqueOccurrences.size === 0) {
        // Return - 1
        return -1;
    }

    // Sort the numberOccurence hash map
    const sortedNumbers = [];
    // Loop over the uniqueOccurrences map
    for (const [key] of uniqueOccurrences) {
        // Add the numbers to the sorted array
        sortedNumbers.push(key);
    }
    // Use the sort function
    sortedNumbers.sort((a, b) => a - b);

    return sortedNumbers[sortedNumbers.length - 1];
}

console.log(largestUniqueNumber(input1));
console.log(largestUniqueNumber(input2));
