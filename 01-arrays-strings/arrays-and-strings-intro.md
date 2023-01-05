# Arrays and Strings

## Content

1. [Two Pointers](./01-two-pointers/two-pointers.md)
2. [Sliding Window](./02-sliding-window/sliding-window.md)
3. [Prefix Sum](./03-prefix-sum/prefix-sum.md)
4. More Common Patterns
5. Arrays and Strings Quiz

## Introduction

1 dimensional arrays and strings are both seen as very similar problems. Both represent ordered elements.
Most algorithm problems will include either an array or string so you gotta get used to working with them!

## Arrays

An "Array" can mean a very different thing across languages:

Python uses "lists" instead of arrays which are very lenient. Initialization is easy, and you don't have to worry about the size of the list or the type of data you are going to store in it.

```python
arr = []

```

Other languages like C++ require you to be more precise and specify the size of the data as well as the type of the data that will go into the array.

## Strings

Similarly strings are implemented differently in languages.

In Python and Java, they are immutable. In C++ they are mutable.

## Complexity of Array and String Operations

| Operation                  | Array/List | String(Immutable) |
| -------------------------- | ---------- | ----------------- |
| Appending to end           | \*O(1)     | O(n)              |
| Popping from end           | \*O(1)     | O(n)              |
| Insertion, not from end    | \*O(n)     | O(n)              |
| Deletion, not from end     | \*O(n)     | O(n)              |
| Modifying an element       | \*O(1)     | O(n)              |
| Random access              | \*O(1)     | O(1)              |
| Checking if element exists | \*O(n)     | O(n)              |
