import { divisorSubstrings } from "./divisorsSubstring";

describe("2269. Find the K-Beauty of a Number", () => {
  test("test case 1", () => {
    expect(divisorSubstrings(240, 2)).toBe(2);
  });

  test("test case 2", () => {
    expect(divisorSubstrings(430043, 2)).toBe(2);
  });

  test("test case 3", () => {
    expect(divisorSubstrings(30003, 3)).toBe(1);
  });

  test("test case 4", () => {
    expect(divisorSubstrings(2, 1)).toBe(1);
  });
});
