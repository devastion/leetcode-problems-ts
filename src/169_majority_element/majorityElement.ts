/**
 * Given an array nums of size n, return the majority
 * element.
 * The majority element is the element that appears more
 * than ⌊n / 2⌋ times. You may assume that the majority
 * element always exists in the array.
 */

// First Approach
// TODO: Optimize

export const majorityElement = (nums: number[]): number => {
  let hash: { [key: string]: number } = {};
  let total = 0;
  let output;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    hash[num] = (hash[num] || 0) + 1;
  }

  for (let val of Object.keys(hash)) {
    if (hash[val] > total) {
      total += hash[val];
      output = val;
    }
  }
  return Number(output);
};

console.log(majorityElement([3, 2, 3]));
