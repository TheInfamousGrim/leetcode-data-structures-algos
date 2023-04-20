// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

function reverseBetween(head, left, right) {
    // If there are no nodes in the linked list or the linked list has only one node
    if (!head || !head.next) {
        return head;
    }

    // Set the current node to point at the head
    let curr = head;
    // Set the starting node to point at the head
    let start = head;
    // Set the current position to the first node
    let position = 1;

    // While the pointer position is less than the left pointer
    while (position < left) {
        // Set the start pointer ot the current node
        start = curr;
        // Set the current node to the next node
        curr = curr.next;
        // Increment the position pointer
        position++;
    }

    // Set the reversed LinkedList to null
    let reversedList = null;
    // Set the tail of the reversed linked list to the current node
    const tail = curr;

    // While the position is >= the value at the left node and <= the value at the right node
    while (position >= left && position <= right) {
        // Save the node next to the current node
        const nextNode = curr.next;
        // Set the next node to the reversedList
        curr.next = reversedList;
        // The reversedList is set to the current node
        reversedList = curr;
        // Set the current node to the next node
        curr = nextNode;
        // Increment the position pointer
        position++;
    }
    // Set the next node for the start node to be the reversed list
    start.next = reversedList;
    // Update the tail so that the next node is pointing to the current node after the reversal
    tail.next = curr;

    // If the left pointer has a value greater than 1
    // Set the return to the head

    // Otherwise return the reversedList
    // This is because there's no start value if the left pointer is equal or less than 1
    return left > 1 ? head : reversedList;
}
