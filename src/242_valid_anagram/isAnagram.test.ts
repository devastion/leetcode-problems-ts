import { isAnagram } from "./isAnagram";

describe("242. Valid Anagram", () => {
  test("test case 1", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  test("test case 2", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
