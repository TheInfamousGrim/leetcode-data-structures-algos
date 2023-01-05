const numsExample = [-3,2,-3,4,2];
const numsTwoExample = [1, 2];
const numsThreeExample = [1, -2, -3];

const minStartValue = (nums) => {
    // Initialize the minimum start value
    let minVal = 0;
    // Initialize the current total for the prefix sum
    let total = 0;

    // Iterate through the prefix sum array
    for (let i = 0; i < nums.length; i++) {
        // increment through the prefix sum array adding each previous value
        total += nums[i];
        // Take the smallest value so that the lowest valued element in the prefix array is returned as the minVal
        minVal = Math.min(minVal, total);
    }

    // Prefix sum example = [-3, -1, -4, 0, 2]

    return 1 - minVal;
}

console.log(minStartValue(numsExample));
console.log(minStartValue(numsTwoExample));
console.log(minStartValue(numsThreeExample));