// ? My first approach without using reverse()

const isPalindromeStringApproach = (x: number): boolean => {
  const str = x.toString();
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - i - 1]) return false;
  }

  return true;
};

// TODO: Follow up: Could you solve it without converting the integer to a string?

// const isPalindromeNumber = (x: number): boolean => {};

export const isPalindrome = isPalindromeStringApproach;
