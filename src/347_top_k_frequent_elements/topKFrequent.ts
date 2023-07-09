export const topKFrequent = (nums: number[], k: number): number[] => {
  const hash: { [key: number]: number } = {};

  for (const val of nums) {
    hash[val] = (hash[val] || 0) + 1;
  }

  return Object.entries(hash)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((n) => Number(n[0]));
};
