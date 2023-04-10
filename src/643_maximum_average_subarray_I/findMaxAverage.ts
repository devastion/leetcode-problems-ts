export const findMaxAverage = (nums: number[], k: number): number => {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  tempSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
