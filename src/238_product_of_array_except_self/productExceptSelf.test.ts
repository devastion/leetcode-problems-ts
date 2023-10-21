import { productExceptSelf } from "./productExceptSelf";

describe("238_product_of_array_except_self", () => {
  test("test case 1", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });

  test("test case 2", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
  });
});
