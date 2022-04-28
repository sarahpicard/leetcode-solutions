// Given an integer x, return true if x is palindrome integer
// An integer is a palindrome when it reads the same backward and forward
  // ex: 121 is a palindrome, while 123 is not

// Example 1
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// solution 1 - generates a new array (using String operator)
// O(N) time complexity - dependent upon characters in string
// O(1) space complexity - one function 
var isPalindrome = function(x) {
  return x == String(x).split('').reverse().join('')
}

// solution 2 - O(N^2) complexity 
// using nested for loop
var isPalindrome2 = function(x) {
  const string = String(x)
  for (let i=0; i < j; i++ ) {
    for (let j= string.length; j> i; j--) {
      if (string[i] !== string[j]){
        return false
      }
    }
    return true
  }
}
