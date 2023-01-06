/* -------------------------------------------------------------------------- */
/*                                 Move Zeroes                                */
/* -------------------------------------------------------------------------- */

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// NOTE: that you must do this in-place without making a copy of the array.

/* -------------------------------- Example 1 ------------------------------- */
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

/* -------------------------------- Example 2 ------------------------------- */
// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
    let low = 0;
    let high = low + 1;

    while (high <= nums.length - 1) {
        if (nums[low] !== 0) {
            low++;
            high++;
        } else {
            if (nums[high] !== 0) {
                let temp = nums[low];
                nums[low] = nums[high];
                nums[high] = temp;
                low++;
            }
            high++;
        }
    }

    return nums;
}