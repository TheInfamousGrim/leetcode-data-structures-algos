const numsExample = [1,1,1,0,0,0,1,1,1,1,0];
const kExample = 2;

// example inputs two
const numsTwoExample = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const kTwoExample = 3;

const longestOne = (nums, k) => {
    // Set the left pointer
    let left = 0;
    // Set the current number of zeroes that have been flipped
    let currentZeros = 0;
    // Set the current length of the answer
    let answer = 0;
    
    // create the sliding window starting the right pointer at the zero index
    // slide the right pointer to the next index at the end of each loop
    for (let right = 0; right < nums.length; right++) {
        // if the right pointer is on a zero increment the current number of zeroes
        if (nums[right] === 0) currentZeros++;

        // whilst the current number of zeroes is greater than k
        // This of course means this code will only run if there are more than k number of zeroes
        while (currentZeros > k) {
            // if the left pointer is on a zero decrement the number of zeroes
            if (nums[left] === 0) currentZeros--;
            // move the left pointer to the next index (or to the right)
            left++;
        }

        // Find the maximum between the current answer and the length between the two pointers
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

console.log(longestOne(numsExample, kExample));
console.log(longestOne(numsTwoExample, kTwoExample));