/* -------------------------------------------------------------------------- */
/*                          Minimum Size Subarray Sum                         */
/* -------------------------------------------------------------------------- */

// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

/* -------------------------------- Example 1 ------------------------------- */
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2

/* -------------------------------- Example 2 ------------------------------- */
// Input: target = 4, nums = [1,4,4]
// Output: 1

/* -------------------------------- Example 3 ------------------------------- */
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

const numsOne = [2, 3, 1, 2, 4, 3];
const targetOne = 7;

const numsTwo = [1, 4, 4];
const targetTwo = 1;

const numsThree = [1, 1, 1, 1, 1, 1, 1, 1];
const targetThree = 0;

const minSubArrayLen = (target, nums) => {
    let left = 0;
    let currentTotal = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === target) return 1;

        currentTotal += nums[right];

        while (currentTotal >= target) {
            const len = right - left + 1;
            if (answer === 0 || len < answer) answer = len;
            currentTotal -= nums[left];
            left++;
        }
    }

    return answer;
};

console.log(minSubArrayLen(targetOne, numsOne));
console.log(minSubArrayLen(targetTwo, numsTwo));
console.log(minSubArrayLen(targetThree, numsThree));
