const numsExample = [1, 12, -5, -6, 50, 3];
const kExample = 4;

const numsTwoExample = [0,1,1,3,3];

const numsThreeExample = [5];
const kTwoExample = 1;

const findMaxAverage = (nums, k) => {
    // set the current total variable
    let currentTotal = 0;

    for (let i = 0; i < k; i++) {
        currentTotal += nums[i];
    }

    let answer = currentTotal;

    // Move the window 
    for (let i = k; i < nums.length; i++) {
        currentTotal += nums[i] - nums[i - k];
        answer = Math.max(answer, currentTotal);
    }

    return answer / k;
}

console.log(findMaxAverage(numsExample, kExample));
console.log(findMaxAverage(numsTwoExample, kExample));
console.log(findMaxAverage(numsThreeExample, kTwoExample));