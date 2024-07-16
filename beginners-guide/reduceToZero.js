/**
 * 
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
Example 2:
 */

// Two approaches:
//  1st approach - recursive approach
// Base Case if (num === 0) return 1
// Check if num is even if so: Return the result of calling numOfSteps on half of num and add one
// else return the result of calling numOfSteps with num - 1 and add one.
const numberOfSteps = (num) => {
  if (num === 0) {
    return 0;
  }

  if (num % 2 === 0) {
    return numberOfSteps(num / 2) + 1;
  }

  return numberOfSteps(num - 1) + 1;
};

const numberOfStepsTwo = (num) => {
  let stepCount = 0;
  while (num > 0) {
    num = num % 2 === 0 ? num / 2 : num - 1;
    stepCount += 1;
  }

  return stepCount;
};

console.log(numberOfSteps(14));
console.log(numberOfStepsTwo(14));
