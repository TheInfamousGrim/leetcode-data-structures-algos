# Two Pointers

Two-Pointers is an extremely common technique to solve array and string problems. It involves having two integer values that both move along an iterable. Because we're just looking at 1D arrays and strings then generally there are just two integers:

- `i` and `j` or **left** and **right** which each represent an index of the array or string.

## Edge Pointers

The most common method of using pointers is the following:

> Start the pointers at the edge of the input. Move them towards each other until they meet.

Converting these ideas into instructions.

1. Start one pointer at the first index of `0` and the other pointer at the last index of `input.length - 1`.
2. Use a while loop until the pointers are equal to each other.
3. At each iteration of the loop, move the pointers towards each other. Meaning increment the pointer that starts at index `0` and decrement the pointer at the last index, or move just one pointer. Moving pointers depends on the problem your trying to solve.

Here's the pseudocode showing the concept:

```

function fn(arr):
    left = 0
    right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--

```

The beauty of this technique is that we will never have more than O(n) iterations for the while loop. Therefore if we can keep the work inside each iteration at O(1), this technique will result in linear runtime.

## Example 1

> Return `true` if a given string is a palindrome, `false` otherwise.
>
> A string is a palindrome if it reads the same forwards as backwards. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

If a string is the same after being reversed, that means the first character is the same as the last character, and the second character is the same as the last character, and so on. We can use the two pointers technique here to check that all corresponding

$$(i^{th} \& (n - i - 1)^{th})$$

characters are equal.

> `n` is the total number of characters, so `n - i - 1` corresponds to the last, second last, third last etc. character. The `-1` is necessary since the inputs are 0-indexed.

### Example 1 Javascript Solution

```JavaScript
function checkIfPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        if (string[left] != string[right]) {
            return false;
        }

        left++;
        right++;
    }

    return true;
}
```

This Algorithm is highly efficient as not only does it run in O(n), but it also uses only O(1) space. No matter how big the input is, we always only use two integer variables.

## Example 2

> Example 2: Given a sorted array of unique integers and a target integer, return `true` if there exists a pair of numbers that sum to target, `false` otherwise. This problem is similar to Two Sum.
>
> For example, given `nums = [1, 2, 4, 6, 8, 9, 14, 15]` and `target = 13`, return true because `4 + 9 = 13`.

```JavaScript
const checkForTarget = (nums, target) => {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let currentvalue = nums[left] + nums[right];

        if (currentvalue === target) return true;

        (currentValue > target) ? right-- : left++;
    }


   return false;
}
```

The reason this algorithm works is because the numbers are sorted. Moving the left pointer permanently increases the value the left pointer points to `nums[left] = x`. Similarly, moving the right pointer permanently decreases the value the right pointer points to `nums[right] = y`. If we have `x + y > target`, then we can never have a solution with `y` because `x` can only increase. So if a solution exists, we can only find it by decreasing `y`. The same logic can be applied to `x` if `x + y < target`.

## Simultaneous Pointers

> Move along both inputs simultaneously until all elements have been visited.

Converting this idea into pseudocode:

```
function fn(arr1, arr2):
    i = j = 0
    while i < arr1.length AND j < arr2.length:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. i++
            2. j++
            3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
```

Similar to the first method we looked at, this method will have a linear time complexity of O(n+m), where n = arr1.length and m = arr2.length if the work inside the while loop is O(1).

### Example 3

> Example 3: Given two sorted integer arrays, return an array that combines both of them and is also sorted.

```JavaScript
const combine = (arr1, arr2) => {
    let resultArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            resultArray.push;
        }
    }

    while (i < arr1.length) {
        resultArray.push(arr1[i]);
    }

    while (j < arr2.length) {
        resultArray.push(arr2[j]);
    }

    return resultArray;
}
```

We can build the answer array ans one element at a time. Start two pointers at the first index of each array, and compare their elements. At each iteration, we have 2 values. Whichever value is lower needs to come first in the answer, so add it to the answer and move the respective pointe

## Example 4

> Example 4: 392. Is Subsequence.
>
> Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
>
> A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

We can use two pointers to solve this in linear time. If we find that s[i] == t[j], that means we "found" the letter at position i for s, and we can move on to the next one by incrementing i. We should increment j at each iteration no matter what (which means we could also implement this algorithm using a for loop). s is a subsequence of t if we can "find" all the letters of s, which means that i == s.length at the end of the algorithm.

```JavaScript



const isSubSequence = (s, t) {
    // create two pointers for each string that start at the beginning
    let i = 0;
    let j = 0;

    // Use a while loop to iterate over both strings at the same time
    while (i < s.length && j < t.length) {
        // if an element of the s string at the i index is === to an element of the t string at the j index
        // increment i by one
        // else increment j by one
        (s[i] === t[j]) ? i++ : j++;
    }
    // if i is equal to the length of the substring then return true
    return i === s.length;
}

```
