import { threeSum } from "./threeSum";

describe("15_3sum", () => {
  test("test case 1", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  test("test case 2", () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  test("test case 3", () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
