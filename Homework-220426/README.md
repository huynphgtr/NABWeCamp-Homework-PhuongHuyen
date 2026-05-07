# Homework: Basic Algorithms

This session focuses on implementing and understanding **3 fundamental algorithms** that form the foundation of computer science and programming.

## Overview

In this homework, I will implement and master three essential algorithms:
1. **Find Max** - Locate the maximum value in a collection
2. **Binary Search** - Efficiently search a sorted collection
3. **Bubble Sort** - Sort elements through repeated comparisons

These algorithms are core building blocks for problem-solving and are commonly asked in technical interviews.

---

## 1. Find Max Algorithm

### What is it?
The Find Max algorithm scans through a collection of elements and identifies the element with the highest value.

### Time Complexity: O(n)
- Must check every element at least once

### How it works:
1. Initialize `max` to the first element
2. Compare `max` with each remaining element
3. If an element is larger, update `max`
4. Return `max`

---

## 2. Binary Search Algorithm

### What is it?
Binary Search is an efficient algorithm that finds a target value in a **sorted array** by repeatedly dividing the search space in half.

### Time Complexity: O(log n)
- Much faster than linear search for large datasets

### Prerequisites:
- Array must be **sorted**

### How it works:
1. Set `left` pointer to start, `right` pointer to end
2. Find the middle element
3. If middle equals target, return index
4. If target is smaller, search left half
5. If target is larger, search right half
6. Repeat until found or search space is empty

---

## 3. Bubble Sort Algorithm

### What is it?
Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. Larger elements "bubble" to the end of the array.

### Time Complexity: O(n²)
- Simple but inefficient for large datasets

### How it works:
1. Compare first two elements
2. If first > second, swap them
3. Move to next pair and repeat
4. After each pass, the largest unsorted element is in place
5. Repeat until no swaps occur

---
**Last Updated**: 07th May 2026  
**Session**: 2 - DSA - Data Structure and Algorithm
