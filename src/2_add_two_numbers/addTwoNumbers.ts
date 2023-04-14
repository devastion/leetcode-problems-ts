/**
 * You are given two non-empty linked lists representing two
 * non-negative integers. The digits are stored in reverse
 * order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading
 * zero, except the number 0 itself.
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/** DRAFT
 * [2 4 3]
 *  0 1 2
 * 3*(10^2) + 4*(10^2) + 2 = 342
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// * Got the math through google search
// TODO: Come up with other solution

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null,
  carry = 0
): ListNode | null => {
  if (l1 || l2) {
    let next1 = l1?.next ?? null;
    let next2 = l2?.next ?? null;

    let val1 = l1?.val ?? 0;
    let val2 = l2?.val ?? 0;

    let sum = val1 + val2 + carry;

    let nextCarry = sum >= 10 ? 1 : 0;

    return new ListNode(sum % 10, addTwoNumbers(next1, next2, nextCarry));
  } else if (carry) {
    return new ListNode(1);
  }

  return null;
};

export const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
export const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

/**
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */

// OUTPUT
export const l3 = new ListNode(7, new ListNode(0, new ListNode(8)));

// TEST
console.log(addTwoNumbers(l1, l2));
