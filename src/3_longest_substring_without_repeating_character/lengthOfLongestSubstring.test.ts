import { lengthOfLongestSubstring } from "./lengthOfLongestSubstring";

describe("3. lengthOfLongestSubstring tests", () => {
  test("test case 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  test("test case 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  test("test case 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
});
