import { longestPalindrome } from "./longestPalindrome";

describe("5. Longest Palindromic Substring tests", () => {
  test("test case 1", () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });

  test("test case 2", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });

  test("test case 3", () => {
    expect(longestPalindrome("ccc")).toBe("ccc");
  });

  test("test case 4", () => {
    expect(longestPalindrome("bb")).toBe("bb");
  });

  test("test case 5", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  test("test case 6", () => {
    expect(longestPalindrome("ac")).toBe("a");
  });

  test("test case 7", () => {
    expect(longestPalindrome("abb")).toBe("bb");
  });
});
