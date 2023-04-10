import { findMaxAverage } from "./findMaxAverage";

describe("643. Maximum Average Subarray I", () => {
  test("test case 1", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  test("test case 2", () => {
    expect(findMaxAverage([5], 1)).toBe(5.0);
  });
});
