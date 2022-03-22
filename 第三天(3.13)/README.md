js题目：40

（感受：做了这些面试题，整理了一个套路）

# 1、【算法】用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值【算法】

拆解：
1、长度为5的数组
2、2-32之间的自由值
3、在数组中不重复
4、递归

// 1、长度为5的数组
// 2、2-32之间的自由值  ok
// 3、在数组中不重复  ok
// 4、递归  ok

function randomNumber() {
    return Math.floor(Math.random()*31 + 2)
}

var arr = new Array(5);
var num = randomNumber();
var i = 0;
randomArr(arr,num);

function randomArr(arr, num) {
    if (arr.indexOf(num) < 0) {
        arr[i] = num;
        i++;
    }
    else { 
        num = randomNumber();
    }
    if(i >= arr.length) {
        return 
    }
    else {
    	randomArr(arr,num)
	}
}

# 2、写一个方法去掉字符串中的空格

var str = " GHDF FJDG ";
str.replace(/\s*/g,""); 

match 和 replace的区别

replace 用后面的替换前面的

var str = "1 plus 2 equal 3";
   //match方法返回值为数组
   var arr = str.match(/[0-9]/g)
   console.log(arr); // [1,2,3]
 
   var new_str = str.replace(/[0-9]/g, 'newstr');
   //replace方法返回值为新的字符串
   console.log(new_str) // newstr plus newstr equal newstr


# 3、去除字符串中最后一个指定的字符

var str = "fdgjhghlgh";
<!-- 符合题意：去除最后一个g -->

<!-- lastIndexOf 如果没有会返回-1，有的话会返回下标 -->
var zifu = 'g';
const index = str.lastIndexOf(zifu);

<!-- split：用:切割字符串，返回数组 -->
<!-- "2:3:4:5".split(":")	//将返回["2", "3", "4", "5"] -->

<!-- join：用空格合并数组，返回字符串 -->
['', 'bcd', '', 'bbss', '', '', ''].join("");


1、如果需要将string里的所有字符都删除就要用到正则，如：
	
var str = "abcdaabbssaaa";
var reg = new RegExp("a","g");
var a = str.replace(reg,"");
<!-- 直接用replace的话，只会删除一次  str.replace('g',1)  "fd1jhghlgh" -->
console.log(a);


2、或者将字符串转化为数组，切完转回去

var str = "abcdaabbssaaa";

var a = str.split('a').join('')

<!-- 以上不适用于我们这一题，因为我们不去除全部，只去除一个 -->


数组转字符串
<!-- let arr=['1','2','3']
arr.toString()
不会改变arr，返回新的结果 -->

字符串转数组 【牢牢记住】
var res ='acsdcsd';
var newRes = [...res]; // ['a','c','s','d','c','s','d']
// 这里haha输出s，然后 原数组 newRes 会改变
var haha = newRes.splice(5,1)
 // 这里newRes 不会改变，还是一个数组，我们要的是final
var final = newRes.join('');

知识点：
<!-- 这种一般不用 -->
var newRes = ['a','c','s','d','c','s','d']
newRes.join() // 'a,c,s,d,c,s,d'

var newRes = ['a','c','s','d','c','s','d']
newRes.join('') // 'acsdcsd'

所以上面题的答案是：

var filterLast = function(str, del) {
    const index = str.lastIndexOf(del);
    if(index > -1) {
        str = [...str];
        str.splice(index, 1);
        return str.join('');
    }
    return str;
}


# 4、写一个方法把下划线命名转成大驼峰命名

"a_bc_def" => "aBcDef"

思路是
1、转化为数组
2、找到下划线删除这个元素，并拿到后面元素的坐标
3、拿到这个坐标去转化对应的元素为大写

var str="a_bc_def";

function revese(str) {
	let arr = [...str];
	let indexArr = [];
	for(var i = 0; i < arr.length; i++ ){
		if(arr[i] == '_') {
			indexArr.push(i+1);
		}
	}
	console.log('indexArr', indexArr);
	for(var j = 0; j < indexArr.length; j++ ) {
		arr[indexArr[j]] = arr[indexArr[j]].toUpperCase();
	}
	return arr.join('').split('_').join('')
}

revese(str);

# 5、写一个把字符串大小写切换的方法

AbCdE  =>  aBcDe

function caseConvert(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
	return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
caseConvert('AsA33322A2aa') //aSa33322a2AA

<!-- 字符串也能遍历 -->
<!-- var a = 'fsdfsfs'
for(var i =0;i<a.length;i++) {
	console.log(a[i])
} -->

<!-- split 是字符串删除某一元素的最简单办法 -->

# 6、写一个去除制表符和换行符的方法 

 * \f  匹配换页字符。
 * \n  匹配换行字符。
 * \r  匹配回车符字符。
 * \t  匹配制表字符。
 * \v  匹配垂直制表符。

```js
const removeEmpty = (str) => str.replace(/[\t\n\v\r\f]/g, "");

console.log(removeEmpty(`|
  
   
|`))

```

# 7、统计某一字符或字符串在另一个字符串中出现的次数

var str = 'dhshfsjkdfs';
var word = 's'
function cishu(str, word) {
    return str.length - str.split(word).join('').length 
}

cishu(str, word);

# 8、写一个加密字符串的方法

不会

# 9、写一个判断数据类型的方法

看不懂

```js
function type(value) {
	return Object.prototype.toString.call(value).replace(/\[object\s|\]/g, '')
}

type([])

// str.substring(start下标, stop下标);   截取，不改变原字符串

var str="Hello world!"
console.log(str.substring(3)) //'lo world!'

console.log(str.substring(3 ,5)) // lo

// str.slice(start下标, stop下标);  截取，不改变原字符串，stop下标可以接受负数 [)

str.substr() 不建议使用

```

# 10、简要描述下什么是回调函数并写一个例子出来

回调函数就是指函数在初始定义的时候先不执行，等满足一定条件以后再拿出来执行。如下：
setTimeout(() => { console.log('在本轮任务最后执行!') }, 0);

# 11、简要描述下JS有哪些内置的对象:https://segmentfault.com/a/1190000011467723

js对象有：
本地对象：Object，Array，Date，RegExp，Function，Boolean，Number，String
内置对象：Math Global，es5添加了JSON
宿主对象：对于嵌入到网页中的js来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，window和document。（bom）（Dom）

Object类型:

<!-- Object.assign: -->
var target = {
    a:1
};
var source1 = {
    b:2
};
var source2 = {
    c:function(){
      console.log('c');
    }
};
Object.assign(target,source1,source2);
console.log(target); //{a: 1, b: 2, c: ƒ}

<!-- 未完待续... -->

# 12、写一个获取当前url查询字符串中的参数的方法 

<!-- function urlParam(){
    const param = {};
    location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
    return param;
}
 -->


function params() {
  let search = '?id=6&sunbai=1';
  search = search.substr(1, search.length);
  // console.log('search', search);
  const res = {};
  if (!search) return res;
  search.split('&').map(item => {
    const [key, value] = item.split('=');
    res[key] = decodeURIComponent(value);
  });
  return res;
}
params();
// {id: '6', sunbai: '1'}


# 13、说说你对javascript的作用域的理解

es5：全局作用域，函数作用域

函数作用域可以访问全局作用域的变量，全局作用域不能访问函数作用域的变量

es6：新增块级作用域

# 14、什么是闭包？优缺点分别是什么？

定义：闭包是可以访问另一个函数作用域的函数。由于 javascript 的特性，外层的函数无法访问内部函数的变量；而内部函数可以访问外部函数的变量（即作用域链）。

自己的理解：
1、闭包依赖于作用域链
2、非return也是闭包

优点：全局找不到，但全局又能用他，这样可以防止变量被改，从而实现封装

缺点：可能就是局部变量无法被释放，占内存，且容易引起内存泄露

# 15、写一个数组去重的方法（支持多维数组）

[1, 2, 3, 4, [3, 4, [4, 6]]] =>  1,2,3,4,6
function flat(arr, target) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat(item, target)
    } else {
      target.push(item)
    }
  })
}

function flatArr(arr) {
  let result = []
  
  flat(arr, result)
  
  return result
}

function uniqueArr(arr) {
  return [...new Set(flatArr(arr))]
}

const result = uniqueArr([1, 2, 3, 4, [3, 4, [4, 6]]])

console.log(result) // 1,2,3,4,6

# 16、返回到顶部的方法有哪些？把其中一个方法出来

1、window.location.href += '#'  原理主要是这个#，不会让页面刷新，并且可以回到顶部，不能执行多次

2、window.scrollTo(0,0); 兼容性不好

3、document.documentElement.scrollTop = 0; 最好

4、顶部 <a name="maodian"></a>

需要回顶部的位置 <a href="#maodian"> </a>

这个方法好，不只可以回顶部，就是dom结构会有些迷惑，需要加注释

# 17、typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？

typeof是操作符，括号不一定只是函数调用这层意思，有可能也用于调优先级

typeof 123 //"number"
typeof 123+'abc'// "numberabc"
typeof(123+'abc') // "string"

# 18、你理解的"use strict";是什么?使用它有什么优缺点？

1、严格模式下，变量都必须先用var命令声明，然后再使用。

2、禁止this关键字指向全局对象

function f(){
　　　　return !this;
　　}
　　// 返回false，因为"this"指向全局对象（true），"!this"就是false

　　function f(){
　　　　"use strict";
　　　　return !this;
　　}
　　// 返回true，因为严格模式下，this的值为undefined（false），所以"!this"为true。

3、禁止在函数内部遍历调用栈
function f1(){

　　　　"use strict";

　　　　f1.caller; // 报错

　　　　f1.arguments; // 报错

　　}

　　f1();

4、arguments不再追踪参数的变化

function foo() {
	console.log('arguments', arguments)
}

foo(1,2,3,4,5);

# 19、"attribute"和"property"有什么不同？

property是js中的对象

attribute是html中的属性

<input type="text" value="123"/>

取
input.className
设置
input.className = xxx

input.getAttribute('value')


# 20、写一个验证是否为中文

<!-- function isChinese(str) {
  const re = /^[\u4e00-\u9fa5]+$/;
  return re.test(str);
} -->

/^[\u4e00-\u9fa5]+$/g

<!-- 使用的Unicode 编码 4e00 和 9fa5 分别表示第一个汉字和最后一个汉字的编码 -->

<!-- 非字母也非数字 -->

# 21、你对new操作符的理解是什么？手动实现一个new方法

new 运算符创建一个对象实例

new做了什么？
1、创建一个新对象
2、将对象的__proto__指向构造函数的protoType
3、把构造函数中的this指向新对象
4、返回这个新对象

function _new(fn, ...arg) {
	const obj = Object.create(Fn.prototype);
	const obj1 = Fn.apply(obj, arg);
	return obj1 instanceof Object ? obj1 : obj;
}

function _new(fn, ...arg) {
	<!-- 创建一个新对象, 将对象的__proto__指向构造函数的protoType -->
	const obj = Object.create(Fn.prototype);
	<!-- 把构造函数中的this指向新对象 -->
	const obj1 = Fn.apply(obj, arg);
	<!-- 返回这个新对象 -->
	return obj1 instanceof Object ? obj1 : obj;
}

# 22、0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？

IEEE 754-2008中64位【浮点数】规则定义的小数后的有效位最多为52位导致计算出现【精度丢失】的问题

0.1 + 0.2 = 0.30000000004

计算的时候要变成二进制，这些会被js裁剪，裁剪后就是 0.100000000000000002 

0.100000000000000002  === 0.1 // true

0.1 + 0.2 === 0.30000000000000004 // true

解决这个问题

toFixed(5) 保留5位小数

parseFloat((0.1+0.2).toFixed(10))


0.1 + 0.3 = 0.4

0.1 => 0.100000000000000002
0.3 => 0.299999999999999998

正好抵消

0.1 * 0.2 = 0.0200000000004

# 23、如何快速让一个数组乱序，写出来

思路：打乱下标，push到新数组

Array.prototype.shuffle = function() {
    var input = this; 
    for (var i = input.length-1; i >=0; i--) {
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex]; 
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex; 
    } 
    return input; 
} 
var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    tempArray.shuffle(); 
    console.log(tempArray);

# 24、写一个判断设备来源的方法

var ua = navigator.userAgent;
// 移动端[用移动端的 API 判断是不是移动端]
isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
// 微信
isWechat: /micromessenger/gi.test(ua),
// qq
isQQ: /qq/gi.test(ua),
// VV音乐
isvvmusic: /vvmusic/gi.test(ua),
// 安卓
isAndroid: /android/gi.test(ua),
// iOS
isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS


# 25、说说bind、call、apply的区别？并手写实现一个bind的方法

三者都是用来改变this指向的，bind绑定完后会返回一个新函数，不执行

Function.protoType.myCall = function(context = window) {
	context.fn = this;

	var args = [...arguments].slice(1);

	var result = context.fn(...args);
	delete context.fn;
	return result;
}

Function.prototype.myApply = function (context = window) {
  context.fn = this;

  var result
  // 判断 arguments[1] 是不是 undefined
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result;


  Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

# 26、说说你对arguments的理解，它是数组吗？

是类数组对象，同时arguments对象和Function是分不开的。
但他这样访问参数，也有length
arguments[0]

类数组转化为数组的方式

[...arguments]
Array.from(arguments)
[].slice.call(arguments)

# 27、解释下这段代码的意思

首先获取了所有的页面元素，然后使用一个不同的颜色为它们添加了一个1px的边框。

[].forEach.call($$("*"), function(a){ 
	a.style.outline="1px solid #"
		+(~~(Math.random()*(1<<24))).toString(16)
})

$$("*") ==> document.querySelectorAll('*');
~~a ==> parseInt(a)
1<<24 ==> 对二进数1小数点右移24位

(parseInt(Math.random()*(1<<24)).toString(16)) ==> 获得了一个位于0-16777216之间的随机整数，也就是随机颜色，再使用toString(16)将它转化为十六进制数。

[].forEach.call(
        document.querySelectorAll('*'),
        function(a){
            a.style.outline="1px solid #" + 
            (parseInt(Math.random()*(1<<24)).toString(16))
        }
    )

# 28、写一个获取数组的最大值、最小值的方法

Math.max.apply(Array,[25,62,91,78,34,62]) //  91
Math.min.apply(Array,[27,64,90,78,34,62]) // 27

// 利用 reduce 写一个冒泡排序

[25, 62, 91, 78, 34, 62].reduce((acc, val) => {
    console.log('acc, val', acc, val);
    return acc = acc < val ? val : acc
})

# 29、写一个方法判断字符串是否为回文字符串

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false


var isPalindrome = function(s) {
  if (s.length === 1) return true
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  const strReverse = str.split('').reverse().join('')
  return str === strReverse
};

# 30、写一个方法判断字符串中最长的一个回文字符串

TODO

# 31、说说你对this的理解

js中两个重要的概念：作用域和原型链

作用域主要是闭包
原型链主要是this

this指向 

1、全局（默认绑定）
2、new出来的实例（new绑定）
3、call，apply，bind 的第一个参数 （显示绑定）
4、函数调用者（隐式绑定）

var name= 'lala';
let obj = {
      name: 'sunbai',
      // 这里改成箭头函数结果会完全不同
      //（包裹箭头函数的第一个普通函数中的this，这里没有普通函数包裹，所以指向window）
      sayThis: function() {
        console.log(this.name);
      }
};

obj.sayThis(); // sunbai

# 32、造成内存泄漏的操作有哪些？

1、递归
2、闭包
3、死循环

这道题下的答案没怎么回答清楚

# 33、写一个方法把0和1互转（0置1，1置0）

1 是 true； 0 是 false；
var a；
!a && 1 || 0 ;
~a+2

这个最好（取反转数字）
function interchange(x) {
	return +!x;
}

# 34、为什么会有跨域问题？怎么解决跨域？

浏览器为了安全，制定了同源策略，所以会有跨域，

协议 域名 端口 三个有一个不同就算跨域

跨域的方式有：
	jsonp
	postmessage
	cors（XMLHttpRequest）
	代理方式
	domain改变主域相同


# 35、window对象和document对象有什么区别？

window是全局对象, 类似于global, 没什么特别的, 就类似于地球, 大家都住在地球上
document, 是文档对象, 主要针对, HTML元素操作,的文档渲染, 类似于, 地球上的部分生命



# 37、请用canvas写一个关于520浪漫表白的代码

不太ok

# 38、请你解释一个为什么10.toFixed(10)会报错？

因为 .跟在一个数字后面，浏览器把他判断为一个小数点
(10).toFixed(10)

# 39、找到字符串中最长的单词，并返回它的长度


function getMostLength(str) {
   if (!str) return;
   const arr = str.split(' ');
   let itemLengthArr = [];
   arr.forEach(item => {
      itemLengthArr.push(item.length);
   });

   const max = Math.max(...itemLengthArr);
   return { item: arr[itemLengthArr.indexOf(max)], length: max };
}

# 40、说说你对eval的理解

eval() 相当于一个小型的js解析器，接受一个字符串，可以把字符串解析成js代码并执行

不安全，性能低

webpack使用的就是eval执行的压缩之后的代码

# 41、说说你对模块化的理解

模块化开发，多人合作

commonjs，nodeJs
export/import，es6
AMD（browser），require.js为代表，依赖前置，先加载再使用
CMD（server），依赖就近


# 41、说你对IIFE的理解


(() => {})() 立即执行，传入window进去

传参数进去，形成函数块级作用域


html题目：（20）

# 1、htm、html、shtml三者有什么区别呢？

，htm 和 html没有区别 shtml可以放入ssi，就是在文件里加了一段，旨在将"info.htm"的内容拷贝到当前的页面中，当访问者来浏览时，显示两个页面的内容

# 2、你有用过HTML5的track标签吗？说说它的运用场景有哪些？

track是一个空元素，放在audio最后

kind（字幕文件的种类）：captions，chapters，description，metadata，subtitles

label：文本轨道的标签和标题

src：轨道文件的URL，可以是一个绝对URL路径，也可以是一个相对URL路径。

srclang：轨道文本数据的语言。srclang="en" 和srclang="zh-cn"分别表示字幕文件为英语和汉语。

# 3、举例说明HTML5的标签meter的用法

    作用：定义已知范围或分数值内的标量测量。

    说明： 标签不应用于指示进度（在进度条中）。如果标记进度条，请使用 标签。

    注释： 标签是 HTML 5 中的新标签。

# 4、HTML5的output是非常棒的一个标签，你对它有了解吗？

和form 表单，input 连用，oninput 承载 一个方法，方法的参数和 input | output 中 name对应

# 5、如何给一个下拉选项进行分组？

html

# 6、HTML5如何唤醒APP？

有以下几种方式：
    URL Scheme：最常见
    Intent: // ：Android 安卓的原生谷歌浏览器自从 chrome25 版本开始对于唤端功能做了一些变化，URL Scheme 无法再启动，就用 Intent，
    Universal Link ： iOS， 通过传统的 HTTP 链接即可打开 APP

唤醒途径：
    iframe的src
    a标签的src
    window.location

       行为(应用的某个功能)    
            |
scheme://[path][?query]
   |               |
应用标识       功能需要的参数

# 7、举例说明如何实现浏览器桌面通知？

websocket加以 Desktop Notification

Notification.requestPermission(function (perm) {  
    if (perm == "granted") {  
        var notification = new Notification("这是一个通知撒:", {  
            dir: "auto",  
            lang: "hi",  
            tag: "testTag",  
            icon: "https://static.cnblogs.com/images/adminlogo.gif",  
            body: "通知content"  
        });  
    }  
})

# 8、placeholder如何在兼容IE？

没看懂题意和题目是在干嘛

# 9、png8和png24有什么区别呢？

png8: 2^8等于256，也就是说PNG 8能存储256种颜色

png24: 相当于3乘以8 等于 24,就是用三个8bits分别去表示 R（红）、G（绿）、B（蓝）。R(0 ~ 255),G(0 ~ 255),B(0 ~ 255)，可以表达256乘以256乘以256=16777216种颜色的图片，这样PNG 24就能比PNG 8表示色彩更丰富的图片。但是所占用的空间相对就更大了。

1.png8和png24的根本区别，不是颜色位的区别，而是存储方式不同。 “PNG8”是指8位索引色位图，“PNG24”是24位索引色位图；

# 10、有哪些方法可以将图片和文字显示在同一行上呢？

图片是inline-block元素，文字如果不加标签就是在同一行，加了行内标签也是同一行，如果是块级标签就不行了.

# 11、主框架如何与iframe通信？如何解决跨域？

1.主域相同，子域不同，可以设置在两个页面都设置document.domain = ‘xxx.com’然后,两个文档就可以进行交互。
2.主域和子域都不同，则可以使用CDM(cross document messaging)进行跨域消息的传递。
发送消息: 使用postmessage方法
接受消息: 监听message事件

# 12、怎么使用HTML5实现录音的功能？

navigator.mediaDevices.getUserMedia()

# 13、html的a标签属性rel="noopener"有什么作用？

当我们使用targer=_blank打开一个新的标签页时, 新页面的window对象上有一个属性 opener, 它指向的是前一个页面的 window 对象, 因此, 后一个页面就获得了前一个页面的控制权. 甚至在跨域的情况下也可以生效, 你可以使用 window.opener.location.replace更改前一个页面的url.
使用 rel=noopener可以把window.opener置为空
老一些的浏览器可以使用 rel=noreferer.

# 14、举例说明ul、dl、ol三个标签的区别？

ul：无序列表。
dl：定义列表。
ol：有序列表。

# 15、html的标签属性bgcolor支持简写吗？如：bgcolor="#F00"

未得到正确答案

# 16、请举例说明html支持的数学符号有哪些？

HTML 符号实体 参考手册

举例：∞  &#8734;

> &#8250;

# 17、请举例说明关于html的引用标签有哪些？



    blockquote标签
        引用
        cite属性，没有浏览器支持，规定引用来源
        margin-start margin-end 有边距

    q标签
        短引用
        会自动加上after``before伪元素，自动加上引号

# 18、举例说明a标签的作用都有哪些？

- 打开链接
- 文件下载
<a href="https://codeload.github.com/vkboo/vue-svg-board/zip/master" download="vue-board-svg-name">vue-board-svg</a>
- 利用URL Scheme打开app
<a href="imeituan://xxx.xxx.xxx"></a>
- 锚点

<a href="#content">go to content</a>

<section id="content"></section>

# 19、说下cookie都有哪些缺点？

2、不能跨域：从而无法和子域名共享cookie。比如 example.com有子域名 static.example.com，在example.com页面产生的向stactic.example.com的请求无法使用exmaple.com页面下的cookie。

3、XSRF(Cross-site request forgery)攻击：在用户不知情的情况下发起请求，比如有人在论坛上有人加入图片标签 <img src='www.bank.com/***'>，其他用户加载页面时，会自动向bank.com发起请求。如果bank.com是基于cookie的验证方式，那么这个请求就可能会被通过，实现向攻击者转账。

4、增加传输体积：在每个请求中都会传输，即使是不需要验证身份的请求。

5、存储量限制，不同浏览器的限制不同，>4KB，<5MB

6、API操作不便：document.cookie = "name=oeschger";

# 20、如何在页面中插入TAB符号（制表符）

<pre>

css题目：（20）

# 1、 什么是zoom？它有什么作用？

zoom可以对一个元素设置缩放比例。此属性是IE浏览器的专有属性，Firefox等浏览器不支持。
zoom与tansform:scale()还是有区别的，zoom的缩放基点事左上角，且它是先缩放，然后再计算布局；tansform:scale()缩放的基点在元素正中间，缩放不会影响布局。

# 2、举例说明伪类:nth-child、:first-child与:first-of-type这三者有什么不同？

<div>
<p>大儿子</p>
<div>二儿子</div>
<p>三儿子</p>
</div>
<p>二叔</p>
<div>三叔<div>

div:nth-child（2） 选中父元素里的第二个子元素div；（即二儿子被选中）
p:first-child 选中父元素里的第一个p元素；（大儿子被选中，二叔没有被选中，因为它不是父元素里的第一个元素）
p:first-of-type 选中第一个类型为p的子元素（大儿子、二叔被选中，因为大儿子是父元素div的第一个p元素，二叔是body的一个p元素）
：nth-child（n）和：first-child 是强调父元素里的第n个xx子元素，首先是第n个，然后才是xx类型；：first-of-type 主要强调类型，即一个父元素里，无论我们想选中的那个元素前面有多少个同级元素，都不算，只要找到父元素里的第一个xx子元素就行。

# 3、使用纯CSS代码实现动画的暂停与播放

一个属性：animation-play-state
取值：paused（暂停）|running（播放）


hover取代点击
.stop:hover~.animation {
animation-play-state: paused;
}



checked伪类
radio标签的checked伪类，加上实现点击响应
#stop:checked ~ .animation {
animation-play-state: paused;
}
#play:checked ~ .animation {
animation-play-state: running;
}

# 4、说说你对hasLayout的理解，触发hasLayout的方式有哪些？

BFC

# 5、说说你对min-width和max-width的理解，它们有什么运用场景？

min-width和max-width可以使得自适应布局保持一个基本的样式。

比较常见的应用应该是网站首页的三栏布局类型，一般是两边的侧边栏会设定一个最大最小宽度，中间为主栏，这样不管如何缩放都能突出主栏，且侧边栏也不会缩太小影响观感

# 6、说说visibility属性的collapse属性值有什么作用？在不同浏览器下有什么区别？

设置visibility: collapse后对于普通元素来说跟visibility: hidden效果一样，隐藏元素，且占用空间
但对于一些table元素，比如row、columu、group，效果则跟display: none一样，隐藏元素，但不占空间


visibility: collapse对于表格的行（组）或列（组）元素来说就相当于display: none，而对于其它元素则相当于visibility: hidden；

# 7、absolute的containing block（容器块）计算方式和正常流有什么区别？

一个containing block把我问懵了，百度了下原来就是相对父元素怎么定位的。absolute会脱离正常的文档流，去向上找最近的、position属性不为static的父元素，如果找不到就是body，然后根据这个父元素去定位。而relative是不会脱离文档流，只是相对自身原本正常的文档流来定位的。



absolute会先向上找到第一个position不为static或者fixed的祖先元素，然后根据该祖先元素的display属性分类讨论。
如果为块级元素，则为该块级元素的padding box。
如果为行内元素，则为包含该祖先元素内所有行内元素的padding box

如果是正常流，其中元素的containing block是其最近的块级元素的content box

# 8、有用过scss和sass吗？说说它们之间的区别是什么？

sass和scss其实是一样的css预处理语言，其后缀名是分别为 .sass和.scss两种。

SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。

两者是有不同的，继sass之后scss的编写规范基本和css一致，sass时代是有严格的缩进规范并且没有‘{}’和‘；’。而scss则和css的规范是一致的。

# 9、举例说明实现圆角的方式有哪些？

border-radius

# 10、有哪些方式可以对一个DOM设置它的CSS样式？

1.可以使用行内样式
2.可以使用style标签
3.可以使用link引入css文件
4.可以使用js动态修改

# 11、如何使用css3实现一个div设置多张背景图片？

在 CSS3 中，只要在 background 中按顺序添加 url 就可以实现多张背景图片。每一个图片用 , 分开即可。

background-image:url("1.jpg"),url("2.jpg"),url("3.jpg");
background-repeat: no-repeat, no-repeat, no-repeat;
background-position: 0 0, 200px 0, 400px 201px;

# 12、transition、animation、transform三者有什么区别？

ransition：可以用来设置一个过渡动画效果
transition: margin-right 4s ease-in-out 1s;
animation：css动画效果设置，可以通过指定不同的关键帧设置复杂的动画效果

animation:mymove 5s infinite;
@keyframes mymove
{
from {left:0px;}
to {left:200px;}
}

transform：css3新增的一个变形属性，可以对元素做2d或3d旋转，缩放，倾斜的效果
transform:rotate(9deg) scale(0.5) ;


# 13、说说你对css的will-change属性的理解，它有什么作用呢？

添加这个属性就会创建一个新图层。防止影响其他元素
告诉浏览器,这个元素的某些属性可能会频繁变动触发回流，要求浏览器给予资源进行优化，一般浏览器会给这个元素单独生成一个图层渲染,gpu加速等提前优化手段，大量使用该属性会引起性能问题
不应过度使用这个属性,这属性只是性能出现问题的最后手段

对于简单的过渡动画应该在动画开始前添加 will-change 属性，动画结束后删除 will-change。


# 14、你有了解css计数器（序列数字字符自动递增）吗？如何通过css的content属性实现呢？

html

# 15、z-index有时不起作用的原因是什么？怎么解决？

1、可能是没有设置position
解决：设置position为relative,absolute,fixed
2、设置了浮动
解决：清除浮动

3、父元素position为relative
解决：设置为absolute

# 16、你有用过IE css的expression表达式吗？说说你对它的理解和它有什么作用呢？

没用过
理解：用来把CSS属性和Javascript表达式关联起来
例子：#container { width: expression((documentElement.clientWidth < 725) ? "725px" : "auto" ); }
优势：

接着包含在expression()里的语句就是JS脚本，在自定义属性与expression之间可别忘了还有一个引号，因为实质还是CSS，所以放在style标签内，而非script内。OK，这样就很容易地用一句话实现了页面中的链接虚线框的消除。

不是非常需要，一般不建议使用expression，因为expression对浏览器资源要求比较高。

# 17、说下background-color:transparent和opacity:0的区别是什么？

背景颜色的透明度为0，如果有文字，文字还在，opacity:0是整个div的透明度为0

# 18、CSS3中的transition是否可以过渡opacity和display？

opacity可以

display不可以

# 19、说说你对字母"X"在CSS中有什么作用？

关闭常用

基线：baseline

x-height 就是小写x的高度（基线和等分线之间的距离）

vertical-align：middle，这个 middle 基本是 baseline 往上 1/2 x-height 高度

# 20、word-wrap、word-break和white-space有什么区别？

word-wrap: break-word
前者在一行无法全部容纳下一个单词时会将其全部"推至"下一行. 若下一行也无法完全容纳时再进行截断.

word-break: break-word
后者在一行无法全部容纳下一个单词时则会直接进行截断.

white-space：

属性设置如何处理元素内的空白

汇总题目（25）

# 1、使用：transform: scale(0.5, 0.5)

transform 对行内元素无效，因此要么使用 display: block; 要么使用 display: inline-block;
transform 即使进行了缩放，原来元素还是会占据对应的位置。因此需要做调整，最好是在外面再包一层元素，以免影响其他元素。

# 2、请描述HTML元素的显示优先级

在html中，帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高。

表单元素:
    文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等
非表单元素:
    链接（a），div, table, span 等等

有窗口元素比无窗口元素的优先级高


    有窗口元素
        select元素，object元素，以及frames元素等等
    无窗口元素
        大部分html元素都是无窗口元素

# 3、来说说你对重绘和重排的理解，以及如何优化？

https://github.com/haizlin/fe-interview/issues/73

每个页面至少需要一次回流，就是在页面第一次加载的时候。(无法避免)

# 4、写一个方法验证是否为中文 

function isChinese(str) {
  const re = /^[\u4e00-\u9fa5]+$/;
  return re.test(str);
}

使用的Unicode 编码 4e00 和 9fa5 分别表示第一个汉字和最后一个汉字的编码

# 5、说说你对line-height是如何理解的？

行高属性，表示一行是字体的多大倍数，比如line-height: 1, line-height: 1.5就分表表示一行高度是当前字体大小的一倍，或1.5倍

# 6、谈谈你对input元素中readonly和disabled属性的理解

在表现上 readonly 和 disabled 都不能让用户对 input 进行编辑。但从含义上两者还是有较大的差别的。




readonly 直译为 “只读”，一般用于只允许用户填写一次的信息，提交过一次之后，就不允许再次修改了。

disabled 直译为 “禁用”，即这个 input 就是不允许填写和使用的（可能是因为权限或者其他原因）。

因此在外观上，readonly 与普通 input 无异，只是点击后无法进行编辑；而 disabled 的 input 呈灰色，也不允许点击。从这两点其实也可以看出，对于 input 的事件，readonly 会响应，而 disabled 是不响应的。并且在传输数据上，disabled 的数据是不会被获取和上传，readonly 的数据会被获取和上传。

# 7、前端工程师这个职位你是怎么样理解的？聊聊它的前景？

通过各种终端来向用户展示数据，或者给用户提供一些和后台的交互接口。
前景：首先，在我看来，一切和用户交互的终端都可以属于前端。并且随着现在跨端开发框架的兴起，比如Electron框架等，也使得前端的那套开发技术栈以及开发流程可以复制到桌面端来，使得前端的范畴越来越广泛。
并且，随着AR，VR技术的兴起，手机app中应用了大量的3维场景来提高用户体验，比如手机app上看房，看车，甚至是看一个城市的街景，都已经有了3D的场景，并且用户还能进行简单的操作。而这些都对前端提出了更高的要求

# 8、你对new操作符的理解是什么？手动实现一个new方法

fuction _new(Fn, ...arg) {
    const obj = Object.create(Fn.prototype);
    const obj1 = Fn.apply(obj, arg);
    return obj1 instanceof Object ? obj1 : obj;
}

# 9、说说浏览器解析CSS选择器的过程？


    按照从上到下，从右到左的顺序解析。

# 10、 js放在html的<body>和<head>有什么区别？

  js 放在 <head> 中，如果不添加 async 或者 defer 时，当浏览器遇到 script 时，会阻塞 DOM 树的构建，进而影响页面的加载。当 js 文件较多时，页面白屏的时间也会变长。


  把 js 放到 <body> 里（一般在 </body> 的上面）时，由于 DOM 时顺序解析的，因此 js 不会阻塞 DOM 的解析。对于必须要在 DOM 解析前就要加载的 js，我们需要放在 <head> 中。

# 11、0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？

双精度标准

https://github.com/haizlin/fe-interview/issues/80

# 12、说说CSS的优先级是如何计算的？

i  --  100
c  --  10
e  -- 1

# 13、关于`<form>`标签的enctype属性你有哪些了解？

  这个属性指定将数据回发到服务器时浏览器如果对表单数据进行编码，其中三种编码形式

  1、application/x-www-form-urlencoded 默认格式
  2、multipart/form-data
  3、text/plain

# 14、你经历过老板要求兼容IE吗？IE几？有什么感悟？

用原生js

# 15、如何快速让一个数组乱序，写出来

1、打乱下标
2、洗牌算法，思路就是从后往前遍历，然后随机(0, i+1)，交换


# 16、你有用过CSS预处理器吗？喜欢用哪个？原理是什么？

用过sass、less、，比较喜欢sass吧。

AST（抽象语法树）原理：todo

认识：
我们拆解一个简单的add函数

function add(a, b) {
    return a + b
}


一个id，就是它的名字，即add
两个params，就是它的参数，即[a, b]
一块body，也就是大括号内的一堆东西


# 17、说说你对属性data-的理解

data-x 是h5用来存放数据的标签，可以用来页面跳转的时候携带参数

# 18、说说你工作中遇到过比较难的技术问题是什么？是如何解决的？

问题出现的背景：在使用vue开发xxx功能中遇到xxx
问题出现的原因：在使用xx调试发现问题出现在xx
查找问题解决的办法：询问身边的技术大佬
问题解决后达到了什么效果： 加载速度提升了约4倍
问题解决后有什么感悟或者收获：纪录打bug-log中

# 19、写一个判断设备来源的方法


let ua = navigator.userAgent;
  // 移动端
  isMobile: ("ontouchstart" in window || navigator.msMaxTouchPoints) ? true : false,
  // 微信
  isWechat: /micromessenger/gi.test(ua),
  // qq
  isQQ: /qq/gi.test(ua),
  // VV音乐
  isvvmusic: /vvmusic/gi.test(ua),
  // 安卓
  isAndroid: /android/gi.test(ua),
  // iOS
  isIOS: /iphone|ipad|ipod|itouch/gi.test(ua), // IOS

# 20、在页面中的应该使用奇数还是偶数的字体？为什么呢？


    常用偶数号字体,但奇数号字体也没关系,例如 知乎正文使用15px字体,豆瓣电影使用13px字体
    UI设计师导出的设计稿一般都是偶数号字体
    偶数字号容易和页面其他标签的其他属性形成比例关系
    Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，
    而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀
    疏。(没试过)

# 21、请说说`<script>`、`<script async>`和`<script defer>`的区别

<script defer>表示立即下载，但延迟执行（文档完成解析后）<script async>告知浏览器可以在允许的情况下异步执行脚本（这两个属性无法应用于内联系的script） 


# 22、说说bind、call、apply的区别？并手写实现一个bind的方法

https://github.com/haizlin/fe-interview/issues/92

# 23、说说你对z-index的理解

当网页上出现多个由绝对定位（position:absolute）或固定定位（position:fixed）所产生的浮动层时，必然就会产生一个问题，就是当这些层的位置产生重合时，谁在谁的上面呢？或者说谁看得见、谁看不见呢？这时候就可以通过设置z-index的值来解决，这个值较大的就在上面，较小的在下面。

# 24、解释下你对GBK和UTF-8的理解？并说说页面上产生乱码的可能原因

GBK编码：是指中国的中文字符，其它它包含了简体中文与繁体中文字符，另外还有一种字符“gb2312”，这种字符仅能存储简体中文字符。

UTF-8编码：它是一种全国家通过的一种编码，如果你的网站涉及到多个国家的语言，那么建议你选择UTF-8编码。


才会导致它占用的空间大小要比GBK大，对于网站打开速度而言，也是有一定影响的。

# 25、你为什么离职呢？

钱少事多离家远，主要还是没发展。照着说就行，但是要记住一点就是千万不要说前公司的坏话。





算法题（3）



todo: 


算法题（3）

手写 promise












