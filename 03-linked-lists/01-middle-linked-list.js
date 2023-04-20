// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const head1 = [1, 2, 3, 4, 5];
const head2 = [1, 2, 3, 4, 5, 6];

function middleNote(head) {
    // Assign the head to the pointers
    let slow = head;
    let fast = head;

    // Whilst the node at the fast pointer and the node next to the fast pointer exist
    while (fast && fast.next) {
        // Move the slow pointer to the next node
        slow = slow.next;
        // Move the fast pointer to the node after that
        fast = fast.next.next;
    }

    // Return the nodes at the slow pointer
    return slow;
}

console.log(middleNote(head1));
console.log(middleNote(head2));
