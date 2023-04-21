// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:

//     The path starts with a single slash '/'.
//     Any two directories are separated by a single slash '/'.
//     The path does not end with a trailing '/'.
//     The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')

// Return the simplified canonical path.

// Example 1:

// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.

// Example 2:

// Input: path = "/../"
// Output: "/"
// Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.

// Example 3:

// Input: path = "/home//foo/"
// Output: "/home/foo"
// Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.

const input1 = '/home/';
const input2 = '/../';
const input3 = '/home//foo/';

// The path starts with a single /
// Any two directories are separated by a single slash
// The path does not end with a trailing /
// The path only contains the directories on the path from the root directory to thea target file or directory (i.e., no period '.' or double period '..')

function simplifyPath(path) {
    // Create a stack
    const stack = [];

    // Split the input string on / as the delimiter
    const splitPath = path.split('/');

    // Loop through the components of the path
    for (let i = 0; i < splitPath.length; i++) {
        // If there is a '..' component we pop the stack if it's not empty
        if (splitPath[i] === '..') {
            // If there is something in the stack
            if (stack.length > 0) {
                // Go up the path
                stack.pop();
            }
            // If there is a period or an empty string in the path
        } else if (splitPath[i] === '.' || !splitPath[i]) {
            continue;
        } else {
            // Finally we have a legit directory
            // Add it to our stack
            stack.push(splitPath[i]);
        }
    }

    // stitch the string back together and return it
    return `/${stack.join('/')}`;
}

console.log(simplifyPath(input1));
console.log(simplifyPath(input2));
console.log(simplifyPath(input3));
