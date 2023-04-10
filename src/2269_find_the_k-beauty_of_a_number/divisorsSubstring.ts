/**
 * The k-beauty of an integer num is defined as the number
 * of substrings of num when it is read as a string that
 * meet the following conditions:
 * It has a length of k.
 * It is a divisor of num.
 * Given integers num and k, return the k-beauty of num.
 * Note:
 * Leading zeros are allowed.
 * 0 is not a divisor of any value.
 * A substring is a contiguous sequence of characters in a string
 */

export const divisorSubstrings = (num: number, k: number): number => {
  let result = 0;
  const nums = num.toString();

  for (let i = 0; i < nums.length - k + 1; i++) {
    let x = nums.slice(i, i + k);
    if (num % parseInt(x) === 0) result++;
  }

  return result;
};

// console.log(divisorSubstrings(2, 1)); // 1
console.log(divisorSubstrings(30003, 3)); // 1
