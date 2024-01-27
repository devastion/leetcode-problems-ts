import { twoSum } from "./twoSum";

describe("167_two_sum_II", () => {
  test("test case 1", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test("test case 2", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test("test case 3", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
