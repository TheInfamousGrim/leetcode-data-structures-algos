const numsExample = [1,2,3,4];
const numsTwoExample = [1,1,1,1,1];
const numsThreeExample = [3,1,2,10,1];

const runningSum = (nums) => {
    // Create a variable that will initialize the prefix at nums[0]
    const prefix = [nums[0]];

    // Loop through the array creating new values for the prefix
    for (let i = 1; i < nums.length; i++) {
        // add the last element in the prefix array to the i element in the nums array
        // add this current value to the end of the prefix array
         prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    return prefix;
}

console.log(runningSum(numsExample));
console.log(runningSum(numsTwoExample));
console.log(runningSum(numsThreeExample));