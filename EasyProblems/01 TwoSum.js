// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3
// Input: nums = [3,3], target = 6
// Output: [0,1]


// SOLUTION 1
var twoSum = function(nums, target) {
  // nested for loop to access two difference indices in the array
  for (let i=0; i<nums.length; i++) {
    // j does not start at 0 (begins at i+1) if started at 0, these loops would compare an element to itself (at same index)
    for (let j= i + 1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
// time complexity - O(N^2)
  // looping through the array twice (i, j)
// space complexity - 0(1)
  // this is because no extra memory is needed to solve the problem (there is one function occuring)


// ---------------------------------------------------------------------------------------------// 

// SOLUTION 2
// hashmap 
// hashmap starts at 0 index, takes target minus number at i, checks the hashmap to see if we have seen this value before. If not, the value will be added to the map and move to next index. Once compliment pair is found, looping stops.
var twoSumHash = function(nums, target) {
  // define empty hashmap
  map = {}
  for (let i=0; i<nums.length; i++) {
    // value that the hashmap is currently evaluating
    let value = nums[i]
    // compliment pair = target - current (to check for pairing)
    let pair = target - value
    // if pair is present, return 
    if(map[pair] !== undefined) {
      return [map[pair], i]
      // if pair not found, continue
    } else {
      map[value] = i
    }
  }
}

// time complexity - O(N)
  // looping through the array once (thus faster than prior solution)
// space complexity - O(N)
  // space complexity suffers a bit here, there is extra memory being take by using map