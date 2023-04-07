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

// ? Follow up: Could you solve it without converting the integer to a string?

const isPalindromeNumber = (x: number): boolean => {
  let y = 0;
  let param = x;

  while (x > 0) {
    let rightNumber = x % 10;
    x = Math.floor(x / 10);
    y = 10 * y + rightNumber;
  }

  if (y === param) return true;
  else return false;
};

export const isPalindrome = isPalindromeNumber;
