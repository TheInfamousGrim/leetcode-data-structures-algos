// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

// Constraints:

//     The number of nodes in the list is in the range [0, 300].
//     -100 <= Node.val <= 100
//     The list is guaranteed to be sorted in ascending order.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function deleteDuplicates(head) {
    if (head === null) return head;
    // Set our sentinel
    const sentinel = new ListNode(0, head);

    // Set our predecessor
    let predecessor = sentinel;

    // Iterate through the linked list
    while (head) {
        // If there is a next node
        // And if the current node value is === to the next node value
        if (head.next && head.val === head.next.val) {
            // Move till the end of the duplicate set
            while (head.next && head.val === head.next.val) {
                head = head.next;
            }
            // Skip all duplicates
            predecessor.next = head.next;
        } else {
            // If there are no duplicates go to the next predecessor node
            predecessor = predecessor.next;
        }
        // Move to the next node
        head = head.next;
    }

    // Return the transformed linked list
    return sentinel.next;
}
