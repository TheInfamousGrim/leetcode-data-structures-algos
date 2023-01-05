# Prefix Sum

A prefix sum is a technique that can be used with integer arrays. The idea is to create an array `prefix` where `prefix[i]` is the sum of all elements up to the index `i` (inclusive). For example, given `nums = [5, 2, 1, 6, 3, 8]`, we would have `prefix = [5, 7, 8, 14, 17, 25]`.

Prefix sums allow us to find the sum of any subarray in
$$O(1)$$
If we want the sum of the subarray from `i` to `j` (inclusive), then the answer is `prefix[j] - prefix[i - 1]`, or `prefix[j] - prefix[i] + nums[i]` if you don't want to deal with the out of bounds case when `i = 0`.

Here's the pseudocode for building a prefix sum:

```

Given an integer array nums,

prefix = [nums[0]]
for i in [1, len(nums) - 1]:
    prefix.append(nums[i] + prefix[prefix.length - 1])

```

A prefix sum is a great tool whenever a problem involves sums of a subarray. It only costs
$$O(n)$$
to build but allows all future subarray queries to be
$$O(1)$$
so it can usually improve an algorithm's time complexity by a factor of
$$O(n)$$
where _n_ is the length of the array.

## Example 1

> Given an integer array `nums`, an array `queries` where `queries[i] = [x, y]` and an integer `limit`, return a boolean array that represents the answer to each query. A query is `true` if the sum of the subarray from `x` to `y` is less than `limit`, or `false` otherwise.
>
> For example, given `nums = [1, 6, 3, 2, 7, 2]` and `queries = [[0, 3], [2, 5], [2, 4]]` and `limit = 13`, the answer is `[true, false, true]`. For each query, the subarray sums are `[12, 14, 12]`.

Let's code it up bby 🙌!

```JavaScript
const numsExample = [1, 6, 3, 2, 7, 2];
// Queries are points on the index to get summed subarrays
const queriesExample = [[0, 3], [2, 5], [2, 4]];
const limit = 13;

const answerQueries = (nums, queries, limit) => {
    // This sets up the prefix with the first index of an array
    let prefix = [nums[0]];
    // Loop through the parent array and create the prefix
    for (let i = 1; i < nums.length; i++) {
        // For each element after the first index
        // push a new element to the end of array
        // The element is equal to the current element of nums with index of i
        // Plus the last element in the prefix array.
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    // prefix = [1, 7, 10, 12, 19, 21]

    let ans = [];
    // Loop through each query pair in the queries array
    for (const [x, y] of queries) {
        // the current value is equal to:
        // prefix element at y index - prefix element at x index + nums element at x index
        let curr = prefix[y] - prefix[x] + nums[x];
        // e.g. [2, 5]
        // curr = 21 - 10 + 3 = 14

        // pushing the current boolean to the answer array
        ans.push(curr < limit);
    }

    return ans;
};

```

# Example 2

> Number of Ways to Split Array
>
> Given an ineger array `nums`, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.

```JavaScript
const numsExample = [10, 4, -8, 7];

const waysToSplitArray = (nums) => {
    // Create the initial element for the prefix sum
    let prefix = [nums[0]];
    // Create the prefix sum array
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }
    // e.g. prefix = [10, 14, 6, 13]

    // Create the initial number subarrays that meet the condition of the left section >= right section
    let ans = 0;
    // Loop through the numbers array
    for (let i = 0; i < nums.length - 1; i++) {
        // the left section is equal to the prefix element at index i
        let leftSection = prefix[i];
        // right = prefix element at the end - (prefix element at index i)
        let rightSection = prefix[prefix.length - 1] - prefix[i];
        // if the left section is greater than or equal to the right section
        if (leftSection >= rightSection) {
            // increment the answer by one
            ans++;
        }
    }

    return ans;
}

```

We can improve to
$$O(1)$$
space while still leveraging the idea of a prefix sum by simply calculating leftSection on the fly. The right section's sum must be the total sum minus the left section.

```JavaScript

const waysToSplitArray = (nums) => {
    let ans = 0, leftSection = 0, total = 0;
    for (const num of nums) {
        total += num;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        let rightSection = total - leftSection;
        if (leftSection >= rightSection) {
            ans++;
        }
    }

    return ans;
}

```

We can avoid using an array for the prefix sum because we are only concerned about the sums from the edges in this problem (one sum starts from the left edge, the other one ends at the right edge). It's a good improvement for the space complexity and something to look out for.
