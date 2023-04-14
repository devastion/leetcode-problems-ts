import { addTwoNumbers, l1, l2, l3 } from "./addTwoNumbers";

describe("2. Add Two Numbers", () => {
  test("test case 1", () => {
    expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
  });
});
