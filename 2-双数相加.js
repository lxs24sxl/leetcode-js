// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  console.log('l1', l1)

  const listToStr = (list) => {
    let str = '';
    let val = '';
    while(list) {
      val = list.val;
      list = list.next || null;
      str += val
    }
    return str.split('').reverse().join('')
  }

  const strToList = (str) => {
    let arr = str.split('')
    let listNode = new ListNode(arr.shift())
    return arr.reduce((result, item) => {
      let ln = new ListNode(item);
      ln.next = result;
      return ln
    }, listNode)
  }

  
  const add = (str1, str2) => {
    let result = '';
    let temp = 0;
    str1 = str1.split('');
    str2 = str2.split('');
    while(str1.length || str2.length || temp) {
      temp += ~~str1.pop() + ~~str2.pop();
      result = temp % 10 + result;
      temp = temp > 9;
    }
    return result
  }
  
  let total = add(listToStr(l1), listToStr(l2))
  return strToList(total)
}

console.time()
console.log('addTwoNumbers', addTwoNumbers(new ListNode(342), new ListNode(564)))
console.timeEnd()