
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


3.14 算法题(2)

1、给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2

示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1

示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0

示例 5:

输入: nums = [1], target = 0
输出: 0

二分法，时间复杂度是O(logn)
indexOf + filter index

var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};


2、给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：

输入：nums = [1]
输出：1

示例 3：

输入：nums = [5,4,-1,7,8]
输出：23

var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};


3.15 算法题(2)

算法题：

1、给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例 1：

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。

示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。

示例 3：

输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。

var lengthOfLastWord = function(s) {
    let index = s.length - 1;
    while (s[index] === ' ') {
        index--;
    }
    let wordLength = 0;
    while (index >= 0 && s[index] !== ' ') {
        wordLength++;
        index--;
    }
    return wordLength;
};

2、给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。

示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。

示例 3：

输入：digits = [0]
输出：[1]

考虑为9的情况

3.16 算法题(3) todo

算法题（3）

1、给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。


示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"


整体思路是将两个字符串较短的用 000 补齐，使得两个字符串长度一致，然后从末尾进行遍历计算，得到最终结果。

var addBinary = function(a, b) {
    let ans = "";
    let ca = 0;
    for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
        let sum = ca;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        ca = Math.floor(sum / 2);
    }
    ans += ca == 1 ? ca : "";
    return ans.split('').reverse().join('');
};

2、
3、


3.17 算法题（3）[todo]

# 1、
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

输入：nums = [3,2,4], target = 6
输出：[1,2]

输入：nums = [3,3], target = 6
输出：[0,1]

e.g:
[2,7,11,15]
9

var twoNum = (arr, target) = > {
    var map = new Map();
    for (let i = 0; i < arr.length; i++) {
        var x = target - arr[i];
        if(map.has(x)) {
            return [map.get(x),i]
        }
        map.set(arr[i], i)
    }
}

twoNum([2,7,11,15], 9)

# 2、

# 3、


3.18 算法题(3)【todo】

3.19 算法题(3)【todo】

3.20 算法题(3)【todo】

3.21 算法题(3)【todo】

3.22 算法题(3)【todo】

3.23 算法题(3)【todo】

3.26 算法题(3)【todo】






