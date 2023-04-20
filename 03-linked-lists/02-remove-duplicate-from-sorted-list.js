// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const input1 = [1, 1, 2];
const input2 = [1, 1, 2, 3, 3];

function deleteDuplicates(head) {
    // If there is nothing in the linked list immediately return the head
    if (head === null) return head;

    // Make our node equal to the head
    let node = head;

    // While there is a node and a next node
    while (node && node.next) {
        // if the current nodes value is equal to the next nodes value
        if (node.val === node.next.val) {
            // Set the next of the current node equal to next of the next node
            node.next = node.next.next;
        } else {
            // Otherwise move to the next node
            node = node.next;
        }
    }

    return head;
}
