import { groupAnagrams } from "./groupAnagrams";

describe("49. Group Anagrams", () => {
  test("test case 1", () => {
    expect(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    ).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  });

  test("test case 2", () => {
    expect(groupAnagrams([""])).toStrictEqual([[""]]);
  });

  test("test case 3", () => {
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]]);
  });
});
