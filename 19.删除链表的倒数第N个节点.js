/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 初始化链表
  let resultHead = new ListNode(0);

  // 往前拼接一个值,兼容边界值
  resultHead.next = head;

  let nodeA = resultHead;
  let nodeB = resultHead;

  // nodeB先走n步
  for (let i = 0; i < n; i++) {
    nodeB = nodeB.next;
  }

  // 走剩下的length - n步，获取当前倒数n处的指针
  while (nodeB && nodeB.next) {
    nodeB = nodeB.next;
    nodeA = nodeA.next;
  }

  // 把指针指向的n处数据的next指针改向next.next
  nodeA.next = nodeA.next.next;

  return resultHead.next;
};
