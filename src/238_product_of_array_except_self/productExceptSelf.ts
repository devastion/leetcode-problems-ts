// Input: nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6];
// Input: nums = [-1, 1, 0, -3, 3];
// Output: [0, 0, 9, 0, 0];

export const productExceptSelf = (nums: number[]): number[] => {
  const len = nums.length;
  const result: number[] = [];
  let product = 1;
  let zeroLength = 0;

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) zeroLength++;
    else product *= nums[i];
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      result.push(zeroLength === 0 ? product / nums[i] : 0);
    } else {
      if (zeroLength === 1) result.push(product);
      else result.push(0);
    }
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
