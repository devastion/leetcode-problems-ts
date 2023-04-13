/**
 * Given an array of positive integers nums and a positive
 * integer target, return the minimal length of a subarray
 * whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
 */

/** DRAFT
 * 2 3 1 2 4 3
 * 0 1 2 3 4 5
 */

export const minSubArrayLen = (target: number, nums: number[]): number => {
  let total = 0;
  let minLen = Infinity;
  let start = 0;
  let end = 0;

  while (start < nums.length) {
    if (total < target && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= target) {
      total -= nums[start];
      minLen = Math.min(minLen, end - start);
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0
