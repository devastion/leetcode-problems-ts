import { validPalindrome } from "./validPalindrome";

describe("125_valid_palindrome", () => {
  test("test case 1", () => {
    expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("test case 2", () => {
    expect(validPalindrome("race a car")).toBe(false);
  });

  test("test case 3", () => {
    expect(validPalindrome(" ")).toBe(true);
  });
});
