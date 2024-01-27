export const twoSum = (
  numbers: number[],
  target: number
): number[] | undefined => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) right--;
    else left++;
  }
  return undefined;
};

// [1, 2]
console.log(twoSum([2, 7, 11, 15], 9));
// [1, 3]
console.log(twoSum([2, 3, 4], 6));
// [1, 2]
console.log(twoSum([-1, 0], -1));
