// Given the head of a singly linked list, return true if it is a
// palindrome
// or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true

// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

//     The number of nodes in the list is in the range [1, 105].
//     0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function isPalindrome(head) {
    if (!head.next) {
        return true;
    }
    // Create an array list for the values
    const vals = [];

    // Set the current node
    let node = head;

    // Iterate through the linked list
    while (node) {
        // Add the node values to the array list
        vals.push(node.val);
        // Move to the next node
        node = node.next;
    }

    // Set the first pointer
    let left = 0;
    let right = vals.length - 1;
    // iterate through the array
    while (left < right) {
        if (!(vals[left] === vals[right])) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
