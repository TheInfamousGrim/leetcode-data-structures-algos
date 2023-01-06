/* -------------------------------------------------------------------------- */
/*                            Reverse Prefix a Word                           */
/* -------------------------------------------------------------------------- */

// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// -> For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

// Return the resulting string

/* -------------------------------- Example 1 ------------------------------- */
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"

/* -------------------------------- Example 2 ------------------------------- */
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"

/* -------------------------------- Example 3 ------------------------------- */
// Input: word = "abcd", ch = "z"
// Output: "abcd"
const inputOne = "abcdefd";
const inputTwo = "xyxzxe";
const inputThree = "abcd";

const reversePrefix = (word, ch) => {
    const splitString = word.split('');
    let left = 0;
    let right = 0;

    for (let i = 0; i < word.length; i++) {
        if (splitString[i] === ch) {
            right = i;
            break;
        }
    }

    console.log(right);
    while (left < right) {
        let temp = splitString[left];
        splitString[left] = splitString[right];
        splitString[right] = temp;
        left++;
        right--;
    }

    return splitString.join('');
}

const reversePrefixChad = (word, ch) => {
    let wordLength = word.search(ch);
    let resultString = "";

    if (wordLength > 0) {
        for (let i = wordLength; i >= 0; i--) {
            resultString += word[i];
        }
        for (let j = wordLength + 1; j < word.length; j++) {
            resultString += word[j];
        }
        return resultString;
    } else {
        return word;
    }
}

console.log(reversePrefix(inputOne, "d"));
console.log(reversePrefix(inputTwo, "z"));
console.log(reversePrefix(inputThree, "z"));