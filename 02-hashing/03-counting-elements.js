const inputOne = [1, 2, 3];
const inputTwo = [1, 1, 3, 3, 5, 5, 7, 7];
const inputThree = [1, 3, 2, 3, 5, 0];

function countElements(arr) {
    let ans = 0;
    const numSet = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        if (numSet.has(arr[i] + 1)) {
            ans += 1;
        }
    }

    return ans;
}

console.log(countElements(inputOne));
console.log(countElements(inputTwo));
console.log(countElements(inputThree));
