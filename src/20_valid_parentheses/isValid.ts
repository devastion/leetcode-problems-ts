/** DRAFT
 * "( ( ) [ { } ] )"
 *  0 1 2 3 4 5 6 7
 */

export const isValid = (s: string): boolean => {
  const leftBrackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftBrackets.push(s[i]);
    } else if (
      s[i] === ")" &&
      leftBrackets.length !== 0 &&
      leftBrackets[leftBrackets.length - 1] === "("
    ) {
      leftBrackets.pop();
    } else if (
      s[i] === "}" &&
      leftBrackets.length !== 0 &&
      leftBrackets[leftBrackets.length - 1] === "{"
    ) {
      leftBrackets.pop();
    } else if (
      s[i] === "]" &&
      leftBrackets.length !== 0 &&
      leftBrackets[leftBrackets.length - 1] === "["
    ) {
      leftBrackets.pop();
    } else {
      return false;
    }
  }
  return leftBrackets.length === 0;
};

console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("(]")); // false
console.log(isValid("(()[{}])")); // true
console.log(isValid("]")); // false
