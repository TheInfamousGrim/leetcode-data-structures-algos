// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:

// Input: head = [1], n = 1
// Output: []

// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

//     The number of nodes in the list is sz.
//     1 <= sz <= 30
//     0 <= Node.val <= 100
//     1 <= n <= sz

// Follow up: Could you do this in one pass?

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function removeNthFromEnd(head, n) {
    // dummy node
    const dummy = new ListNode(0);
    dummy.next = head;
    // set the current node
    let node = head;
    // Set the current count
    let count = 1;

    // Loop through the linkedlist to get the length of the linked list
    while (node && node.next) {
        // Increment the count
        count++;
        // Move to the next node
        node = node.next;
    }

    // Set the current node to the head
    node = dummy;

    // Loop though the linked list to get the last node before the deleted node
    for (let i = 0; i < count - n; i++) {
        node = node.next;
        console.log('node before node to be removed: ', node);
    }

    // Set the next node of the node before the nth node to the node after the nth node
    node.next = node.next.next;

    return dummy.next;
}
