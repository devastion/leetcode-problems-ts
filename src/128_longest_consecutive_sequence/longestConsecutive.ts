// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9;

export const longestConsecutive = (nums: number[]): number => {
  let result = 0;

  const set = new Set(nums);

  for (const num of nums) {
    let length = 0;
    if (!set.has(num - 1)) {
      length = 0;
      while (set.has(num + length)) length++;
      result = Math.max(length, result);
    }
  }

  return result;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 0, -1]));
