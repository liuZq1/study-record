/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
。*/

/*
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.*/

/*
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]*/

function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || 0;
}

let addTwoNumbers = function (l1, l2) {
  let addOne = 0; //进位
  let sum = new ListNode('0'); //创建一个头链保存结果
  let head = sum; //保存头链表用于最后的链表返回
  while (l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;

    let r1 = val1 + val2 + addOne;
    addOne = r1 >= 10 ? 1 : 0;
    sum.next = new ListNode(r1 % 10);
    sum = sum.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
};

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
  let carry = 0; //进位
  let head = new ListNode(0);
  let staging = head;
  let sum; //总和
  let val1, val2;
  while (l1 || l2 || carry) {
    val1 = (l1 && l1.val) ? l1.val : 0;
    val2 = (l2 && l2.val) ? l2.val : 0;
    sum = val1 + val2 + carry;
    staging.next = new ListNode(sum % 10);
    staging = staging.next;
    carry = Math.floor(sum/10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return head.next;
};