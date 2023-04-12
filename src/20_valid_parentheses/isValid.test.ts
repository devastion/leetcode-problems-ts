import { isValid } from "./isValid";

describe("20. Valid Parentheses", () => {
  test("test case 1", () => {
    expect(isValid("()")).toBe(true);
  });

  test("test case 2", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("test case 3", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("test case 4", () => {
    expect(isValid("{[]}")).toBe(true);
  });
});
