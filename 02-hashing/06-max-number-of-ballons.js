// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:

// Input: text = "leetcode"
// Output: 0

const input1 = 'nlaebolko';
const input2 = 'loonbalxballpoon';
const input3 = 'leetcode';
const input4 = 'balon';
const input5 = 'ballon';
const input6 =
    'mbetypbpefxvviadqaodrbjeoacfomepmzymiudltgnvnpbowwmjgpzzhtiismearuwocsgbiimiqqzaozgeizikrlxmupfzjzmlfttqqbpfblqfkecsdfbsceqjhubfxksivrfwvukapxmuciybfhzlmpeamdxziptxregymqtmgcsujmugissgnlbhxbcxxeoumcqyulvahuianbaaxgzrtmshjguqdaxvxndzoqvwmcjfhpevavnrciqbymnlylbrfkkiceienoarfrzzxtuaqapaeqeqolozadmtgjyhfqzpuaskjuawxqkdqyjqcmbxtvshzrquvegcuyuckznspmrxvqdassidcmrajedsnuuumfwqzvasljlyvfefktiqgvzvdzojtjegsyhbepdkuwvgrfscezvswywmdavpxlekbrlkfnbyvlobazmvgulxrfdranuhomkrlpbfeagfxxxuhjuqhbkhznixquxrxngwimdxdhqbdaouitsvcdmbwxbbaomkgxsqwnexbjjyhtxvkjfqkrrxjghvzqsattubphryqxxdyjkihfnzvjhohnhdlfwoqiwtmwzfgcyhyqtcketvgnbchcxvnhcsoosirfqgdgcsitegzlxdfijzmxnvhrulmgvoqfpzesootscnxenokmmozmoxpaverydbsnimwacjqhrtxkqtvghjyushoctxphxzztukgmnoeycqaeukymvwxcsyvvctflqjhtcvjtxncuvhkptkjnzaetwbzkwnseovewuhpkaxiphdicgacszzdturzgjkzwgkmzzavykancvvzaafgzjhcyicorrblmhsnnkhfkujttbkuuedhwguuaapojmnjdfytdhrepjwcddzsoeutlbbljlikghxefgbqenwamanikmynjcupqpdjnhldaixwygcvsgdkzszmsptqqnroflgozblygtiyaxudwmooiviqcosjfksnevultrf';

function maxNumberOfBalloons(text) {
    // Create an empty hash map for the balloon text
    const balloonMap = new Map();

    // Loop through the balloon text and add it to the map
    const balloonCharArray = ['b', 'a', 'l', 'o', 'n'];
    for (let i = 0; i < balloonCharArray.length; i++) {
        balloonMap.set(balloonCharArray[i], 0);
    }

    for (const char of text) {
        if (balloonMap.has(char)) {
            balloonMap.set(char, balloonMap.get(char) + 1);
        }
    }

    // Placeholder answer
    let answer = balloonMap.get('b');

    for (const [key, val] of balloonMap) {
        if (key === 'o') {
            console.log(key, val);
            answer = Math.floor(Math.min(answer, val / 2));
            console.log(answer);
        }
        if (key === 'l') {
            answer = Math.floor(Math.min(answer, val / 2));
        } else {
            answer = Math.floor(Math.min(answer, val));
            console.log(key, answer);
        }
    }

    return answer;
}

console.log(maxNumberOfBalloons(input1));
console.log(maxNumberOfBalloons(input2));
console.log(maxNumberOfBalloons(input3));
console.log(maxNumberOfBalloons(input4));
console.log(maxNumberOfBalloons(input5));
console.log(maxNumberOfBalloons(input6));
