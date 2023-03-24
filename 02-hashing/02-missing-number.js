const inputOne = [3, 0, 1];
const inputTwo = [0, 1];
const inputThree = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function missingNumber(nums) {
    const arrayLength = nums.length;
    const expectedSum = (arrayLength * (arrayLength + 1)) / 2;

    const total = nums.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );

    return expectedSum - total;
}

console.log(missingNumber(inputOne));
console.log(missingNumber(inputTwo));
console.log(missingNumber(inputThree));
