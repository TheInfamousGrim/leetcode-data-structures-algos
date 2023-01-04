# Sliding Window

In order to understand how a sliding window works, we need to grapple how a sub array works.

An example to elucidate the concept:

Given an array `[1, 2, 3, 4]` the subarrays (grouped by length) are:

- `[1]`, `[2]`, `[3]`, `[4]`
- `[1, 2]`, `[3, 4]`
- `[1, 2, 3]`, `[2, 3, 4]`
- `[1, 2, 3, 4]`

**A subarray can be defined by two indices, the start and end**. For example, with `[1, 2, 3, 4]`, the subarray `[2, 3]` has a starting index of `1` and an ending index of `2`. Let's call the starting index the **left bound** and the ending index the **right bound**. Another name for the subarray context is "window", which we will use from now on.

The idea behind the sliding window technique is to efficiently find the "best" window that fits some constraint. Usually, the problem description will define what makes a window "better" (shorter length, larger sum etc.) and the constraint. Imagine that a problem wanted **the length of the longest subarray with a sum less than or equal to k** for an array with positive numbers. In this case, the constraint is `sum(window) <= k`, and the longer the window, the better it is. The general algorithm behind sliding window is:The idea

```
function fn(arr):
    left = 0
    for right in [0, arr.length - 1]:
        Do some logic to "add" element at arr[right] to window

        while left < right AND condition from problem not met:
            Do some logic to "remove" element at arr[left] from window
            left++

        Do some logic to update the answer
```

With our "sum less than `k`" example, we can use a variable `curr` that keeps track of the current sum of the window. That way, we know when the sum exceeds `k` without needing to calculate the window sum from scratch every iteration. We can "add" elements by doing `curr += arr[right]` and "remove" elements by doing `curr -= arr[left]`. The data and logic needed to maintain information about a window will vary between problems.

For any array, how many subarrays are there? If the array has a length `n`, then there are `n` subarrays of length `1`. Then there are `n - 1` subarrays of length `2` (you can verify this easily by looking at a small array). Then there are `n - 2` subarrays of length `3` and so on until there is only `1` subarray of length `n`. This means there are
$$\sum_{i=1}^{n} = \dfrac{n \cdot (n + 1)}{2} $$
subarrays.

This means that in terms of time complexity, any algorithm that looks at every subarray will be at least
$$O(n^2)$$
, which is usually too slow. A sliding window guarantees a maximum of
$$2n$$
window iterations - the right pointer can move nn times and the left pointer can move nn times. This means if the logic done for each window is O(1)
$$O(1)$$
, sliding window algorithms run in linear time.

## Example 1

> Given an array of positive integers `nums` and an integer `k`, find the length of the longest subarray whose sum is less than or equal to `k`.

Let's use an integer `curr` that tracks the sum of the current window. Since the problem wants subarrays whose sum is less than or equal to `k`, we want to maintain `curr <= k`. Let's look at an example where `nums = [3, 1, 2, 7, 4, 2, 1, 1, 5]` and `k = 8`.`

```JavaScript

const findLength = (nums, k) {
    // set the left points
    let left = 0;
    // set the current value to zero
    let currentValue = 0;
    // set the answer to the default of zero if there are no subarrays present
    let answer = 0;

    // loop through the sub arrays using a right pointer starting at the first index
    for (let right = 0; right < nums.length; right++) {
        // Add the current value of the right pointer to the current value
        currentValue += nums[right];
        // check if the current value is greater than k
        while (currentValue > k) {
            // If the current value is greater than k remove the left pointers value
            currentValue -= nums[left];
            // Move the left pointer to the right
            left++;
        }

        ans = Math.max(ans, right - left + 1)
    }
}

```

Give a subarray at `left` and ending at `right`, the length is `right - left + 1`. As mentioned before, this algorithm has a time complexity of $$O(n)$$ since all work done inside the for loop is $$O(1)$$, where n is the length of `nums`. The space complexity is constant because we are only using 3 integers variables.

## Example 2

> You are given a binary substring `s` (a string containing only `"0`" and `"1"`). An operation involves flipping a `"0"` into a `"1"`. What is the length of the longest substring containing only `"1"` after performing at most one operation?
>
> For example, given `s = "1101100111"`, the answer is `5`. If you perform the operation at index `2`, the string becomes `1111100111`.

```JavaScript
const exampleString = "1101100111"

const findLength = (s) {
    // Assign the left pointer to the first index
    let left = 0;
    // Set the current length to zero
    let currentZeroes = 0;
    // Set the current answer to a default of zero
    let answer = 0;

    // Loop through the subarrays starting at zero
    for (let right = 0; right < s.length; right++) {
        // If the value at the right pointer is === zero increment the length by one
        if (s[right] === "0") currentZeroes++;

        // If the current length is greater than one loop through values
        while (currentZeroes > 1) {
            // If the left pointer value is zero decrement the current length by one until it's less than 1
            if (s[left] === "0") currentZeroes -= 1;

            // move the left pointer to the right
            left ++;
        }

        // The answer is the maximum of either the current answer or the sum of the right - left pointer plus 1
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
}

```

## Number of subarrays

If a problem asks for **the number of subarrays** that fit some constraint, we can still use a sliding window, but we need to use a neat math trick to calculate the number of subarrays.

### Example 3

> 713. Subarray Product Less Than K.
>
> Given an array of positive integers `nums` and an integer `k`, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than `k`.
>
> For example, given the input `nums = [10, 5, 2, 6], k = 100`, the answer is `8`. The subarrays with products less than k are:
>
> `[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]`
>
> **Key idea**: Whenever you see a problem asking for the number of subarrays, think of this: at each index, how many valid subarrays **end** at this index? Let's split the 8 subarrays by their ending indices:

- `[10]`
- `[5]`, `[10, 5]`
- `[2]`, `[5, 2]`
- `[6]`, `[2, 6]`, `[5, 2, 6]`

```JavaScript

const exampleNums = [10, 5, 2, 6];
const k = 100;

const numSubArrayProductLessThanK = (nums, k) {
    // If K is less than or equal to 1 return 0 as we're only looking at positive integers
    if (k <= 1) return 0;

    let ans = 0;
    let left = 0;
    // Current product of numbers in array
    let currentProduct = 1;

    // Loop through the subarrays
    for (let right = 0; right < nums.length; right++) {
        // Get the product of the current product and right pointer value
        currentProduct *= nums[right];

        // while the left pointer is less than or equal to the right
        // AND the current product is greater than or equal to k
        while (left <= right && currentProduct >= k) {
            // Divide the currentProduct by the left pointer value
            currentProduct /= nums[left];
            // Move the left pointer to the right
            left++;
        }

        ans += right - left + 1;
    }

    return ans;
}

```

## Fixed Window Size

Here's some pseudocode to show the difference between a variable window size or a fixed window size.

```

// first approach
function fn(arr, k):
    curr = some data type to track the window

    // build the first window
    for i in [0, k - 1]:
        Do something with curr or other variables to build first window

    ans = answer variable, might be equal to curr here depending on the problem
    for i in [k, arr.length - 1]:
        Add arr[i] to window
        Remove arr[i - k] from window
        Update ans

    return ans

// second approach
function fn(arr, k):
    curr = some data type to track the window
    ans = answer variable
    for i in range(len(arr)):
        if i >= k:
            Update ans
            Remove arr[i - k] from window
        Add arr[i] to window

    Update ans
    return ans // Alternatively, you could do something like return max(ans, curr) if the problem is asking for a maximum value and curr is tracking that.

```

### Example 4

> Given an integer array nums and an integer k, find the sum of the subarray with the largest sum whose length is k.

```JavaScript
const kExample = 4;
const numsExample = [3, -1, 4, 12, -8, 5, 6];

const findBestSubarray = (nums, k) => {
    // Setting the current total to zero
    let curr = 0;

    // Creating the first window of length k
    for (let i = 0; i < k; i++) {
        // create the sum of the first window of length k
        curr += nums[i];
    }

    // The answer is === to the current summation from the first window
    let ans = curr;
    // loop through the rest of the array and shift the window for each subarray of length k
    for (let i = k; i < nums.length; i++) {
        // we're adding the last element of the next window and removing the first element of the previous window
        curr += nums[i] - nums[i - k];
        // We are comparing the current answer to the current value and seeing which is larger
        ans = Math.max(ans, curr);
    }

    return ans;
}

```
