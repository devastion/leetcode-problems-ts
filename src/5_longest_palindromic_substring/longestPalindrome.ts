// Given a string s, return the longest palindromic substring in s

/** DRAFT
 * "c b b d" // bb
 *  0 1 2 3
 * "c b b d b a b a d" // bab or aba
 *  0 1 2 3 4 5 6 7 8
 */

const isPalindrome = (s: string): boolean => {
  const len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return false;
  }
  return true;
};

// console.log(isPalindrome("aaa")); // true
// console.log(isPalindrome("aca")); // true
// console.log(isPalindrome("abc")); // false

// TODO: Optimize the algorithm

const longestPalindromeSubstring = (s: string): string => {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      let substring = s.substring(i, j);
      if (isPalindrome(substring) && longest.length < substring.length)
        longest = substring;
    }
  }
  return longest;
};

console.log(longestPalindromeSubstring("abb"));
console.log(longestPalindromeSubstring("babad"));
console.log(longestPalindromeSubstring("ccc"));

export const longestPalindrome = longestPalindromeSubstring;
