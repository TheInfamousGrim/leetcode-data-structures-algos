// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const ransomNote1 = 'a';
const magazine1 = 'b';

const ransomNote2 = 'aa';
const magazine2 = 'ab';

const ransomNote3 = 'aa';
const magazine3 = 'aab';

const ransomNote4 = 'bg';
const magazine4 = 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj';

function canConstruct(ransomNote, magazine) {
    // Check for the obvious fail
    if (ransomNote.length > magazine.length) {
        return false;
    }

    // Create a map for the ransom note
    const ransomNoteMap = new Map();
    for (const char of ransomNote) {
        ransomNoteMap.set(char, (ransomNoteMap.get(char) || 0) + 1);
    }

    // Create a map for the magazine
    const magazineMap = new Map();
    for (const char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    // Iterate through the magazine and ransom note characters
    for (const [key, val] of ransomNoteMap) {
        // Return false if the number of chars for the magazine don't match the chars for the ransom
        if (val > magazineMap.get(key)) {
            return false;
        }
        // Return false if magazine doesn't contain a ransom character
        if (!magazineMap.has(key)) {
            return false;
        }
    }

    return true;
}

console.log(canConstruct(ransomNote1, magazine1));
console.log(canConstruct(ransomNote2, magazine2));
console.log(canConstruct(ransomNote3, magazine3));
console.log(canConstruct(ransomNote4, magazine4));
