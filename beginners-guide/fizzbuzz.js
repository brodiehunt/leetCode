/**
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
 */

var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = !(i % 3);
    const divisibleBy5 = !(i % 5);

    if (divisibleBy3 && divisibleBy5) {
      answer.push("FizzBuzz");
    } else if (divisibleBy3) {
      answer.push("Fizz");
    } else if (divisibleBy5) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }

  return answer;

  // Time complexity = 0(n) - (loop through each val from 1 -> n)
  // Space complexity = 0(1) - Memory allocation doesn't increase relative to input size N
};

// Modified more succient approach;

var fizzBuzz = function (n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    const divisibleBy3 = !(i % 3);
    const divisibleBy5 = !(i % 5);

    let string = "";

    if (divisibleBy3) {
      string += "Fizz";
    }

    if (divisibleBy5) {
      string += "Buzz";
    }

    // If String is empty - Convert i to a string and concatenate
    if (!string) {
      string += i.toString();
    }

    answer.push(string);
  }

  return answer;
};
