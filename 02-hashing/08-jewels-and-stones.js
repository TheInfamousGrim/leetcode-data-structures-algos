// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

const jewels1 = 'aA';
const stones1 = 'aAAbbbb';

const jewels2 = 'z';
const stones2 = 'ZZ';

function numJewelsInStones(jewels, stones) {
    // create a set for the jewels
    const jewelsMap = new Set(jewels);

    let ans = 0;

    // Loop through the stones
    for (const stone of stones) {
        if (jewelsMap.has(stone)) {
            ans++;
        }
    }

    return ans;
}

console.log(numJewelsInStones(jewels1, stones1));
console.log(numJewelsInStones(jewels2, stones2));
