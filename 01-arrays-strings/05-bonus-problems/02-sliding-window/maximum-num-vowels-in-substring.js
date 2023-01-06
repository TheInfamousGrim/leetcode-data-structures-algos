/* -------------------------------------------------------------------------- */
/*           Maximum Number of Vowels in a Substring of Given Length          */
/* -------------------------------------------------------------------------- */

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

/* -------------------------------- Example 1 ------------------------------- */

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

/* -------------------------------- Example 2 ------------------------------- */

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

/* -------------------------------- Example 3 ------------------------------- */

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

const maxVowels = (s, k) => {
    let currvowels = 0;

    const voweltest = (ch) => {
        if (
            ch === 'a' ||
            ch === 'e' ||
            ch === 'i' ||
            ch === 'o' ||
            ch === 'u'
        ) {
            return true;
        }
        return false;
    };

    // build the first window with length k
    for (let i = 0; i < k; i++) {
        if (voweltest(s[i])) currvowels++;
    }

    let ans = currvowels;

    // slide the window of length k
    for (let i = 0; i < s.length - k; i++) {
        if (voweltest(s[i])) --currvowels;
        if (voweltest(s[i + k])) ++currvowels;
        ans = Math.max(ans, currvowels);
    }

    return ans;
};
