/**
 * 
Given a binary array nums, return the maximum number of consecutive 1's in the array.
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
 */

// How I completed it.
/**

  // Initiate a variable for highestStreak
  // Initiate a varaible for currentCount
  // Loop through the array
  // If val = 1 -> add one to current count
  // else check to see if current count is greater than highestStreak
  // If so -> assign highestStreak var the value of count and reset the count 
  // Otherwise reset the count
 */

const findMaxConsecutiveOnes = (nums) => {
  let highestStreak = 0;
  let currentCount = 0;

  for (const num of nums) {
    if (num) {
      currentCount++;
      if (currentCount > highestStreak) {
        highestStreak = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  return highestStreak;

  // Time: O(n)
  // Space: O(1)
};
