// Problem 
// you are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. 
// you may assume the two numbers do not contain any leading zero, except the number 0 itself 

// example 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// example 2
// Input: l1 = [0], l2 = [0]
// Output: [0]

// example 3
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {
  // head of result list 
  let resultHead = null
  // current head reference 
  let current = null
  let carry = 0
  // iterate both lists
  while (l1 !== null || l2 !== null) {
    // adding carry from the last loop
    let sum = carry
    // check to see if the current node is null (the list lengths could be different - so a specified node may be empty)
    if (l1 !== null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      sum += l2.val
      l2 = l2.next
    }
    // add the total sum to the new node 
    let node = new ListNode(Math.floor(sum) % 10)
    // carry added to next iteration 
    carry = Math.floor(sum / 10)
    if (current == null) {
      current = resultHead = node
    } else {
      current.next = node
      current = current.next
    }
  }
  if (carry > 0) {
    current.next = new ListNode(carry)
  }
  return resultHead
}
// time complexity - O(m + n) where m and n are the number of nodes in each list
// space complexity - O(1), we aren't taking up any extra memory

// first node -> ones place
// second node -> tens place 
// third node -> hundreds place 
  // 2 -> 4 -> 3 makes 342

// linked list - linear structure of nodes chained together by pointers (order is not determined by locale in memory)
// each node contains a data field (# in this case) and a reference to the next and prior nodes
// linked lists - easily modified and have a dynamic size (easy to insert or delete)
  // disadvantages to linked lists - elements should be accessed in sequential order, extra memory needed for pointers, not cache friendly (no reference point to find a node, like index in array)



// Pseudocode 
// traverse two linked lists 
// each iteration - add the numbers in the nodes
// if nodes !== only the remaining nodes from larger list go in result 
// if sum of two numbers is greater than 9, we will find carry (added to next iteration)


// runtime on submit - 120ms (faster than 71.33% JS submissions)
// memory usage on submit - 47.6MB (less than 34.97% of JS submissions)