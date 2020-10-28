// Source : https://leetcode.com/problems/add-two-numbers/
// Author : cderek
// Date   : 2019-05-13

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let add = 0, head, tail;
  while(l1 || l2) {
    const a = l1 ? l1.val : 0;
    const b = l2 ? l2.val : 0;
    const sum = a + b + add;
    if(!head){
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    add = Math.floor(sum / 10);
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  if(add > 0) {
    tail.next = new ListNode(add);
  }
  return head;
}
