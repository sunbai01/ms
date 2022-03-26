
# 3.12 算法题（2）

1、给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

    例如，121 是回文，而 123 不是。

  示例1：

输入：x = 121
输出：true

  示例2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

 示例3：

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。

var num = 123;
function isPalindrome(param) {
  var strParam = param + ''
  var res;
  res = strParam.split("").reverse().join('');
  if(res === strParam){
      return  true;
  }
  return  false;
}

console.log(isPalindrome(num))

进阶：你能不将整数转为字符串来解决这个问题吗？

 - 转成数组，首尾是否相等

<!-- 012345
01234
0123456789 -->
var num = 123;
function isPalindrome(param) {
  var strParam = param + '';
  var arrParam = strParam.split("");
  var res;
  var len = arrParam.length / 2;
  for(var i = 0; i< len;i++) {
    if(arrParam[i] !=  arrParam[arrParam.length -1- i]) {
        return false
    }
  }
  return true;
}

console.log(isPalindrome(num))

时间复杂度？
空间复杂度？


2、给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

示例 1：

输入：s = "()"
输出：true

示例 2：

输入：s = "()[]{}"
输出：true


示例 3：

输入：s = "(]"
输出：false

示例 4：

输入：s = "([)]"
输出：false


示例 5：

输入：s = "{[]}"
输出：true

用栈：

var str = '{[]}'
var isValid = function (s) {
  const stack = [];
  for (var i = 0; i < str.length; i++) {
    let c = s[i];
      switch (c) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default:
          if (c !== stack.pop()) {
            return false;
          }
      }
  }
  return stack.length === 0;
}

isValid(str)

# 3.13 算法题（3）

1、将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]


示例 2：

输入：l1 = [], l2 = []
输出：[]


示例 3：

输入：l1 = [], l2 = [0]
输出：[0]

// var l1 = [1,2,4], l2 = [1,3,4]
// var mergeTwoLists = function(list1, list2) {
//   var res;
//   listnum = list1.concat(list2)
//   res = listnum.sort();
//   return res;
// };

// mergeTwoLists(l1, l2);

var mergeTwoLists = function(l1, l2) {
    let node = new ListNode(null)
    let current = node
    if(!l1) {
      return l2
    }
    if(!l2) {
      return l1
    }
    while (l1 || l2) {
      if(l1 && l2) {
        if(l1.val < l2.val) {
          // 不能直接赋值对象，否则将会切断其与node的联系
          // 所以要通过next赋值ss
          current.next = l1
          l1 = l1.next
        } else {
          current.next = l2
          l2 = l2.next
        }
      }
      else {
        if (l1) {
            current.next = l1
            l1 = l1.next
        } else if (l2) {
            current.next = l2
            l2 = l2.next
        }
      }
      current = current.next
    }
  return node.next
}

2、移除元素

输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

输入：nums = [0,1,2,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。

// 双指针形式,一个一个往前换
var removeElement = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) {
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};

var removeElement = function(nums, val) {
    let len = nums.length;
    let left = 0;
    for(let right = 0; right< len; right++) {
      if(nums[right] != val) {
        nums[left] = nums[right];
        left++;
      }
    }
    return left;
};

3、实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

示例 1：

输入：haystack = "hello", needle = "ll"
输出：2

示例 2：

输入：haystack = "aaaaa", needle = "bba"
输出：-1

示例 3：

输入：haystack = "", needle = ""
输出：0

我们可以让字符串 needle\textit{needle}needle 与字符串 haystack\textit{haystack}haystack 的所有长度为 mmm 的子串均匹配一次。

var strStr = function(haystack, needle) {
    const n = haystack.length, m = needle.length;
    for (let i = 0; i + m <= n; i++) {
        let flag = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            return i;
        }
    }
    return -1;
};



