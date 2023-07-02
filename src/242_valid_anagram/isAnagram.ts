export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const hash: { [key: string]: number } = {};

  for (const l of s) {
    hash[l] = (hash[l] || 0) + 1;
  }

  for (const l of t) {
    if (!hash[l]) return false;
    else hash[l] -= 1;
  }

  return true;
};
