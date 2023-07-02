export const containsDuplicates = (nums: number[]): boolean => {
  const hash: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = 1;
  }

  return false;
};
