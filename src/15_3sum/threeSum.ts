// export const threeSum = (nums: number[]): number[][] => {
//   const hash: { [key: string]: number } = {};
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     let left = 1 + i;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         hash[JSON.stringify([nums[i], nums[left], nums[right]])] =
//           hash[JSON.stringify([nums[i], nums[left], nums[right]])] || 0 + 1;
//         left++;
//       } else if (sum < 0) left++;
//       else right--;
//     }
//   }
//   const keys = Object.keys(hash);

//   return Array.from(keys, (k) => JSON.parse(k));
// };

// // [[-1,-1,2],[-1,0,1]]
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// // []
// console.log(threeSum([0, 1, 1]));
// // [[0,0,0]]
// console.log(threeSum([0, 0, 0]));
// // [[0,0,0]]
// console.log(threeSum([0, 0, 0, 0]));
// // []
// console.log(threeSum([3, -2, 1, 0]));
// // [[-2,-1,3],[-2,0,2],[-1,0,1]]
// console.log(threeSum([3, 0, -2, -1, 1, 2]));

export const threeSum = (nums: number[]): number[][] => {
  const result: Set<string> = new Set();

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let left = 1 + i;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.add(JSON.stringify([nums[i], nums[left], nums[right]]));
        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return Array.from(result, (res) => JSON.parse(res));
};

// [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// []
console.log(threeSum([0, 1, 1]));
// [[0,0,0]]
console.log(threeSum([0, 0, 0]));
// [[0,0,0]]
console.log(threeSum([0, 0, 0, 0]));
// []
console.log(threeSum([3, -2, 1, 0]));
// [[-2,-1,3],[-2,0,2],[-1,0,1]]
console.log(threeSum([3, 0, -2, -1, 1, 2]));
