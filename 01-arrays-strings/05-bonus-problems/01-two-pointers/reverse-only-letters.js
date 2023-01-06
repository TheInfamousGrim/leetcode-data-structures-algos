/* -------------------------------------------------------------------------- */
/*    Given a string s, reverse the string according to the following rules   */
/* -------------------------------------------------------------------------- */

// -> All the characters that are not English letters remain in the same position.
// -> All the English letters (lowercase or uppercase) should be reversed.

// Return s after reversing it.

/* -------------------------------- Example 1 ------------------------------- */
// Input: s = "ab-cd"
// Output: "dc-ba"

/* -------------------------------- Example 2 ------------------------------- */
// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"

const reverseOnlyLetters = (s) => {
    const ans = [];
    const splitString = s.split('');
    let end = s.length - 1;

    const regex = /[A-Za-z]/;

    for (let i = 0; i < s.length; i++) {
        if (splitString[i].match(regex) !== null) {
            while (splitString[end].match(regex) === null) {
                end--;
            }
            ans.push(splitString[end--]);
        } else {
            ans.push(splitString[i]);
        }
    }

    return ans.join('');
};

const reverseOnlyLettersWhileLoop = (s) => {
    const split = s.split('');
    let start = 0;
    let end = s.length - 1;
    const regex = /[a-zA-Z]/g;
    while (start < end) {
        if (split[start].match(regex) === null) {
            // not a letter at the start, continue without swapping
            start++;
        }
        if (split[end].match(regex) === null) {
            // not a letter at the end, continue without swapping
            end--;
        }
        const tmp = s[start]; // we end up here when there are letters at 'start' and 'end' so we just swap them
        split[start] = split[end];
        split[end] = tmp;
        start++;
        end--;
    }

    return s.join('');
};
