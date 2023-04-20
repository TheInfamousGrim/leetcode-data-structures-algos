// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

// Constraints:

//     The number of nodes in the list is n.
//     1 <= k <= n <= 105
//     0 <= Node.val <= 100

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? 0 : next;
}

function swapNodes(head, k) {
    // Set up a dummy linked list
    const dummy = new ListNode(0, head);

    // Current node pointer
    let node = dummy;
    // Length of the linked list
    let length = 0;
    // First value to be swapped
    let first = dummy;
    // Second value to be swapped
    let second = dummy;

    // Iterate through the linked list
    while (node) {
        // If we find the first node to be swapped
        if (length === k) {
            // Save the node before the nth from first node
            first = node;
        }
        // Increment the length of the linked list
        length++;
        // Move us to the next node
        node = node.next;
    }

    // Set the current node pointer back to the dummy
    node = dummy;

    // Iterate through the linked list to the nth from last node
    // When the iteration ends you will have the second node to be swapped
    for (let i = 0; i <= length - k; i++) {
        second = second.next;
    }

    // Swap the nodes values
    const temp = second.val;
    second.val = first.val;
    first.val = temp;

    return dummy.next;
}
