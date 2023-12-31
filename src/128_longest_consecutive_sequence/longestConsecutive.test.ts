import { longestConsecutive } from "./longestConsecutive";

describe("128_longest_consecutive_sequence", () => {
  test("test case 1", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test("test case 2", () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  test("test case 3", () => {
    expect(longestConsecutive([1, 0, -1])).toBe(3);
  });
});
