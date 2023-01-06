// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2
// Input: s = "God Ding"
// Output: "doG gniD"

const input1 = "Let's take LeetCode contest";
const input2 = 'God Ding';

const reverseWordsNaughty = (s) =>
    // using the naughty higher order functions
    s.split('').reverse().join('').split(' ').reverse().join(' ');

console.log('Reverse words naughty 😈');
console.log(reverseWordsNaughty(input1));
console.log(reverseWordsNaughty(input2));
console.log('----------------------------');

// Two pointers method
const reverseWordsTwoPointers = (string) => {
    let lastSpaceIndex = -1;
    const stringLength = string.length;
    const splitString = string.split('');

    for (let i = 0; i <= stringLength; i++) {
        if (i === stringLength || string[i] === ' ') {
            let startIndex = lastSpaceIndex + 1;
            let endIndex = i - 1;

            while (startIndex < endIndex) {
                const startInitial = splitString[startIndex];
                const endInitial = splitString[endIndex];

                splitString[startIndex] = endInitial;
                splitString[endIndex] = startInitial;

                startIndex++;
                endIndex--;
            }
            lastSpaceIndex = i;
        }
    }

    return splitString.join('');
};

console.log('Gigachad two pointer method 💪');
console.log(reverseWordsTwoPointers(input1));
console.log(reverseWordsTwoPointers(input2));
