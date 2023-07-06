export const groupAnagrams = (strs: string[]): string[][] => {
  const hash: { [key: string]: string[] } = {};

  for (const word of strs) {
    if (!word) {
      if (!hash["empty"]) hash["empty"] = [];
      hash["empty"].push("");
    }
    // ? 26 letters in alphabet a-z
    const freq = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < word.length; i++) {
      // ? 97-122 all lowercase letter in ASCII code
      const charCode = word.charCodeAt(i) - 97;
      freq[charCode]++;
      const freqStr = freq.toString();
      if (i + 1 === word.length) {
        if (!hash[freqStr]) hash[freqStr] = [];
        hash[freqStr].push(word);
      }
    }
  }

  return Array.from(Object.values(hash));
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
