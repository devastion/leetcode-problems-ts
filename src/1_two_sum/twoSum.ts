/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up
 * to target.
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

const twoSumSlow = (nums: number[], target: number): number[] | undefined => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// DONE: Make it less than O(n^2)

const twoSumOptimized = (
  nums: number[],
  target: number
): number[] | undefined => {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash.hasOwnProperty(diff) && hash[diff] !== i) {
      return [hash[diff], i];
    }

    hash[nums[i]] = i;
  }

  return undefined;
};

// console.log(twoSumOptimized([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSumOptimized([3, 2, 4], 6)); // [1, 2]
// console.log(twoSumOptimized([3, 3], 6)); // [0, 1]

export const twoSum = twoSumOptimized;
