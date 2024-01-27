import { MinStack } from "./minStack";

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);

describe("155_min_stack", () => {
  test("test case 1", () => {
    expect(minStack.getMin()).toBe(-3);
  });

  test("test case 2", () => {
    expect(minStack.top()).toBe(-3);
  });
});
