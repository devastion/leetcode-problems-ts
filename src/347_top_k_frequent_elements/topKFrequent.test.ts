import { topKFrequent } from "./topKFrequent";

describe("347_top_k_frequent_elements", () => {
  test("test case 1", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2]);
  });

  test("test case 2", () => {
    expect(topKFrequent([1], 1)).toStrictEqual([1]);
  });
});
