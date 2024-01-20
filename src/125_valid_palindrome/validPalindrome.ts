// The goal is to use two pointers and not recursion
// charcode a = 97 | charcode z = 122
// charcode A = 65 | charcode Z = 90

// Naive;
export const validPalindrome = (s: string): boolean => {
  const lowercase = s.toLowerCase();
  let str = "";
  for (const l of lowercase) {
    if ((l >= "a" && l <= "z") || (l >= "0" && l <= "9")) str += l;
  }

  console.log(str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left].charCodeAt(0) === str[right].charCodeAt(0)) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
};

// true
console.log(validPalindrome("A man, a plan, a canal: Panama"));
// false
console.log(validPalindrome("0P"));
// true
console.log(validPalindrome("a."));
