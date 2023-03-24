const inputOne = 'thequickbrownfoxjumpsoverthelazydog';

const inputTwo = 'leetcode';

function checkIfPangram(sentence) {
    if (sentence.length < 26) {
        return false;
    }

    const map = new Map();

    // loop over the string
    for (let i = 0; i < sentence.length; i++) {
        if (!map.has(sentence[i])) {
            map.set(sentence[i], i);
        }
    }

    if (map.size < 26) {
        return false;
    }

    return true;
}

console.log('input one: ', checkIfPangram(inputOne));

console.log('input two: ', checkIfPangram(inputTwo));
