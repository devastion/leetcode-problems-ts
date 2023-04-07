import { isPalindrome } from "./isPalindrome";

describe("9. Palindrome Number", () => {
  test("test case 1", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test("test case 2", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test("test case 3", () => {
    expect(isPalindrome(10)).toBe(false);
  });
});
