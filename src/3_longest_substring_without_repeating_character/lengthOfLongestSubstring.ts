// Given a string s, find the length of the
// longest substring without repeating characters.

export const lengthOfLongestSubstring = (s: string): number => {
  let longest = 0;
  let seen: { [key: string]: number } = {};
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};
