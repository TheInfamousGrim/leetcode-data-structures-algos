const numsExample = [1, 12, -5, -6, 50, 3];
const kExample = 4;

const numsTwoExample = [0,1,1,3,3];

const numsThreeExample = [5];
const kTwoExample = 1;

const findMaxAverage = (nums, k) => {
    // set the current total variable
    let currentTotal = 0;
    // set the current 
    let currentAverage = 0;

    for (let i = 0; i < k; i++) {
        currentTotal += nums[i];
    }

    // Get the average
    currentAverage = currentTotal / k;

    let answer = currentAverage;

    // Move the window 
    for (let i = k; i < nums.length; i++) {
        currentAverage = ((k * currentAverage) + nums[i] - nums[i - k]) / k;

        answer = Math.max(answer, currentAverage);
    }

    return answer;
}

console.log(findMaxAverage(numsExample, kExample));
console.log(findMaxAverage(numsTwoExample, kExample));
console.log(findMaxAverage(numsThreeExample, kTwoExample));