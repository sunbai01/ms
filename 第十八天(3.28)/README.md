# js

# 1、写一个方法判断js的方法是内置的还是自定义的

function isNative (f) {
    return typeof f === 'function' && /native code/.test(f.toString())
}

# 2、如何区分返回内容是文件流还是json数据？

await (await fetch(url)).blob();
// Blob {size: 100, type: "application/json"}
// Blob {size: 73226, type: "image/jpeg"}

# 3、写一个函数时，如果有多个参数，如何传才比较好？

使用对象传递参数，利用解构为参数设置默认值
function foo({arg1=1, arg2=2, }={})

# 4、写一个JS方法，判断元素是否在可视区域

// 判断元素是否在视口中
function isEleVisible(ele){
    var {top, right, bottom, left} = ele.getBoundingClientRect()
    var w = window.innerWidth
    var h = window.innerHeight
    if(bottom < 0 || top > h){
        // y 轴方向
        return false
    }
    if(right < 0 || left > w){
        // x 轴方向
        return false
    }
    return true
}

# 5、写一个方法生成不重复的用户ID

function getUuid(len){
    let timeStr = String(Date.now() % 100)
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0;i<len - timeStr.length;i++){
        const idx = Math.floor(Math.random() * str.length) 
        timeStr += str[idx]
    }
    const arr = timeStr.split('')
    arr.sort(()=>Math.random()-.5)
    return arr.join('')
}

# 6、写一个方法判断在一个一维数组里，有且只有一个数等于给定的值

var arr = [1,2,3,4,5,5];

function panduan(arr, target) {
	let res =[];
	for (var i = 0, i < arr.length, i++) {
		if (arr [i] == target) {
			res.push(arr [i]);
		}
	}
	if(res.length > 1) {
		return false;
	}
	return true;
}

panduan(arr, 5)

# 7、使用原生js给一个按钮绑定两个onclick事件

btnElment.addEventListener('click', function () {
  console.log('handle1')
})
btnElment.addEventListener('click', function () {
  console.log('handle2')
})

# 8、如何判断链表是否有环？

var hasCycle = function(head) {
	const res = [];
	let f =false;
	while (head) {
		if (res.includes(head)) {
			f = true;
			break
		}
		res.push(head);
		head = head.next;
	}
	return f;
};

# 9、解释下什么是暂时性死区？

如果用ES6新出的语法let和const，这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区
例子：
console.log(a); // ReferenceError
let a; // 声明前获取就会报错

# 10、Promise 和 setTimeout 执行先后有什么区别？

Promise.then 先执行 setTimeout后 执行

# 11、 添加原生事件如果不移除为什么会内存泄露？

比如下面代码：
var button = document.getElementById('button');
function onClick(event) {
button.innerHTML = 'text';
}
button.addEventListener('click', onClick);

给元素button添加了一个事件处理器onClick, 而处理器里面使用了button的引用。而老版本的 IE 是无法检测 DOM 节点与 JavaScript 代码之间的循环引用，因此会导致内存泄漏。
如今，现代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法，已经可以正确检测和处理循环引用了。换言之，回收节点内存时，不必非要调用 removeEventListener 了。

# 12、setTimeout(fn,0)，延迟执行吗？

会延迟的

主线程任务执行完毕后才会执行任务队列中的待执行任务；
setTimeout(fn, 0) 至少也会延迟 4ms

setTimeout(fn,0)的含义是，指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行
HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加


# 13、说说你对函数是一等公民的理解


    函数可以像对象、字符串、数值等其它数据类型地位相同，可以用来给变量进行赋值，或者当成参数、或者充当返回值；
    高阶函数中的函数都是以一等公民的形式存在的；

# 14、js的作用域有哪些？

ES5中：全局变量和局部变量
ES6中：块级作用域

# 15、说下你对map方法的理解，并解释下面代码返回的结果 

const result = new Array(3).map((item) => {
  return item = {
    name: 'test'
  }
});
console.log(result);

map 对没有赋值或者已经删除的元素直接返回。
 // [empty × 3]

# 16、请解释下什么是softbind，并实现一个softbind 

todo

# 17、写一个方法实现选中复制的功能


https://q.shanyue.tech/fe/html/20.html#%E9%80%89%E4%B8%AD-selection-api-range-api

# 18、请实现一个Promise.race

https://github.com/haizlin/fe-interview/issues/3964


# 19、js中Iterable对象和Array有什么区别？

    iterable对象是符合迭代器接口，可以通过 iterable.next()或者 for of 访问其中的元素
    Array是特殊的iterable对象，除了itearable的方式不遍历外，还 提供了 for in foreach map等方式

# 20、请使用js实现一个无限累加的函数

function add(num) {
	let res;
	while(true) {
		res = num++;
		console.log('res', res);
		function add(res);
	}
}

# 21、浏览器中的剪切板是如何监听复制事件的？


    在HTML元素上

<input oncopy='cb'>

    在JS中获取具体元素

document.querySelector('p').oncopy = cb
document.oncopy = cb

    或者

document.querySelector('p').addEventListener('copy',cb)
document.addEventListener('copy',cb)

# 22、分别解释下js中默认绑定、隐式绑定、显式绑定、new绑定的区别 

默认绑定：在非严格模式下是指向的全局，在严格模式下是undefined。
隐式绑定：是指谁调用了函数，函数的指向就是谁，如果存在多个调用的话，this就是指向最近的一个调用。
显示绑定：通过call apply bind方法改变this的行为就是显示绑定。call和apply的功能性质相同，只是展示改变this指向，后面如果还有需要，就需要再调用一次但是传参形式不同，call是用散列表的方式，apply是以数组的方式，在性能方面call会比apply更好一点，因为apply是数组传参 会解析一下。bind改一次就永久改变this指向了。
new绑定：通过构造函数 new来调用的普通函数。

# 23、请说说严格模式下的this指向


    在严格模式下，在全局作用域中，this指向window对象
    在严格模式下，函数中的this等于undefined
    在严格模式下，对象的函数中的this指向调用函数的对象实例
    在严格模式下，构造函数中的this指向构造函数创建的对象实例。
    在严格模式下，在事件处理函数中，this指向触发事件的目标对象。

# 24、在严格模式下，全局作用域中函数中this的值是什么？

undefined

# 25、请通过代码来解释下new和instanceof的内部机制

todo

# 26、请通过reduce函数实现一维数组的求和

function add(arr){
    let res;
    let sum = arr.reduce(function(pre, item) {
        res = pre + item;
        console.log('res', res);
        return res
    }, 1)
    return sum
}
console.log(add([1,2,3]));

# 27、请使用js写个方法解析emoji表情

todo

# 28、写一个方法找到一维数组里，有且只有两个连续相等的所有元素

ok

# 29、写一个方法，让数组里的元素上移一格/下移一格

Array.prototype.shiftOneStepRight = function() { 
  return this.map((_, index) => index === 0 ? this[this.length -1] : this[index - 1]) 
}

const array1 = [5, 1, 2, 3, 4];
array1.shiftOneStepRight(); // output [5, 1, 2, 3, 4]

# 30、写个方法找出页面中除了数字和英文字母外的所有特殊特号

var html = document.documentElement.innerText;
function del(html) {
	var reg = /[^A-Za-z0-9]/g
	html.match(reg)
}

# 31、请说说IEEE 754标准指的是什么？

IEEE 754, IEEE二进制浮点数算术标准，是使用最广泛的浮点数运算标准。

很多语言都采用了该标准，包含JavaScript、Java等。但是该计算标准有一个缺陷，就是浮点数相加可能会出现误差，比如：

float a = 0.15 + 0.15
float b = 0.1 + 0.2
if(a == b) // can be false!
if(a >= b) // can also be false!

# 32、请说说IEEE 754规定了哪些标准？

单精确度（32位）、双精确度（64位）、延伸单精确度（43比特以上，很少使用）与延伸双精确度（79比特以上，通常以80位实现）。

# 33、请说说new String("A")和String("A")分别返回的结果，请解释为什么？

new String("A") ： 创建一个 String 类型的对象， 值为 "A"

String("A”) : 通过内置函数创建字符串


new String("A") :
返回类型：引用类型，堆内存存储
返回值：字符串对象
String("A”) ：
返回类型：基本类型，栈内存存储
返回值：字符串值

# 34、请解释以下题目会输出的结果（类型转换）

var temp = [0];
if ([0]) {
  console.log(temp == true);
} else {
  console.log("测试");
}


打印false，[0]是对象，逻辑值是truthy，但是thuthy中只有1、"1"、 1n、true 才 == true


# 35、写一个方法获取手机电池的信息，如：电量、充电状态等

navigator.getBattery()

charging: 是否在充电
chargingTime: 充满电还需要的时间(秒)
dischargingTime: 电池剩余可用时间(秒)
level: 剩余电量,最大电量就是1
onchargingchange: 充电状态改变时触发该监听函数
onchargingtimechange: 充满还需时间改变时触发该监听函数
ondischargingtimechange: 电池剩余可用时间改变时触发该监听函数
onlevelchange: 电量改变时触发该监听函数

# 36、 javascript什么时候会占CPU？

页面在浏览器打开的时候，产生重绘，js动画，以及定时器的时候

JS动画，特别是涉及setTimeout，setInterval的

浏览器进行重绘时，挺占用CPU

UI操作，计算密集型任务

# 37、写一个方法探测CPU占比情况

todo

# 38、如何把10.36四舍五入为最接近的整数？

+(10.36).toFixed(0)，Number.toFixed()按照四舍五入的规则进行取舍

# 39、如何排查页面中CPU占用高的情况？

devtool 录制 看堆栈

# 40、如何计算动画的帧率（FPS）？

可以借助requestAnimationFrame API，requestAnimationFrame 使用一个回调函数作为参数。这个回调函数会在浏览器重绘之前调用。

requestAnimationFrame的回调函数执行次数通常与浏览器屏幕刷新次数相匹配，而利用这个API实现动画的原理就是回调函数内再次调用requestAnimationFrame，所以页面不断重绘时，然后检测1秒内requestAnimationFrame调用的次数，就是当前的FPS

用代码表示就是这样的：


https://github.com/haizlin/fe-interview/issues/3611

# 41、请解释下面题目输出的结果

var val = "test";
console.log("output is " + (val === "Test") ? "123" : "456");

123

# 42、infinity代表什么数据？

在JS中Infinity用于表示无穷大的数值，且不是常量，即无法明确表示它到底有多大。可以通过isFinite(val)判断当前数字是否是无穷大，函数返回true表示不是无穷大，返回false表示是无穷大。

# css

# 1、你最不喜欢css的哪些特性是什么？为什么？

grid 页面标签多，不常用，使用场景flex的都可替代

# 2、说说CSS对元素属性赋值的详细过程？

todo

# 3、使用css实现闪光的霓虹灯文字效果

todo

# 4、使用css3实现小车行驶的动画效果

todo

# 5、使用css制作吊扇转动的效果

todo

# 6、使用css制作鼠标经过图片时，放大图片1.5倍

 img:hover{ zoom:1.5; }

# 7、你有使用过grid布局吗？说说你对它的理解

todo

# 8、grid布局和flex布局有什么区别？

todo

# 9、使用css实现一个弹幕的效果

todo

# 10、简写的flex:1的完整写法是什么？

flex-grow:1;
flex-shrink:1;
flex-basis:0%;

# 11、flex:1与flex:auto有什么区别？

# 12、请说说css常用的单位和不常用的单位分别有哪些？

常用: px, em, rem, vw, vh, %
不常用: vmin, vmax, ex, ch

# 13、如何取消同级li的最后一个li标签的右边距？


li {
  margin-right: 10px;
}

li:last-of-type {
  margin-right: initial;
}


也可以直接给除了最后一个li以外的元素设置右边距

li:not(:last-of-type) {
	margin-right: 10px;
}

活着的
li:last-child {
  margin-right: 0 
}


# 14、使用css3动画代替js的动画有什么好处？

简单，高效

https://www.cnblogs.com/shuaishuaidejun/p/7444711.html

# 15、分离图层做动画有什么优点？

渲染时只会渲染动画元素所在的层，不会影响到页面上的其他元素，提高渲染性能。

# 16、如何创建stacking context？

z-index

# 17、Fixed定位如果脱离Viewport会产生什么样的bug？如何解决？

todo

# 18、哪些方式使得position:fixed定位的基准元素改变？

层级上下文 例如filter, translate

# 19、fixed定位脱离文档流与float有什么区别？

文档流的概念非常有意思，当时我记得我学css这块的时候有完全脱离和半脱离两个概念。完全脱离指的是，其他元素均无视这个盒子，这个盒子的行为也影响不到其他内容了。而半脱离的概念是在有限的范围内对脱离。float虽然是脱离文档流了，但所在位置是根据父级盒子的位置来确定的，并且是在排版的时候依然要占据文字排版的空间，fixed脱离，任何元素于他的位置都没有任何关系，并且不会影响文字排版区域

# 20、css如何去掉i标签默认的斜体？

i{
	font-style:normal;
}

# 21、justify-content的space-between与around有什么区别？

space-between: 行内均匀分布元素，距离相同，首尾元素距离边界的距离是元素间距的一半
space-around: 行内均匀分布元素，距离相同，首尾元素紧贴边界

# 22、为什么代码中两个display属性为inline-block的元素之间有多余字符（包括换行、制表符等）会造成页面中这两个元素之间有空隙？解决方案是什么？替代方案又都有哪些？

把两个<span>写在一行

  <span class="item">aaa</span><span class="item">bbb</span>

float浮动

.item {
  display: inline-block;
  float: left;
}

# 23、怎么让position:fixed相对于父元素定位？

1、 给父元素设置transform

# 24、使用flex实现一行有多个不等的标签元素宽度平均分配 


父： display: flex;
子：flex: 1;

# 25、使用了float的标签，如何避免左侧贴边重叠？

margin

# 26、怎样解决float元素无法撑起父级容器的高度？

父級元素overflow:hidden;

或者給父級元素增加偽類
content:'';display:table;clear: both;

# 27、解释下BFC、IFC、GFC、FFC的区别是什么？

todo

# 28、使用纯css布局中一个“王”字 

html

# 29、举例说明BFC有什么应用场景

1.margin重叠
2.不和浮动元素重叠
3.浮动元素也算高度

# 30、给兄弟元素的标签设置红色

.target + * {
  color: red;
}

# 31、解释下为什么说通配符选择器要慎用？

通配符号的性能会很差，建议覆盖 特定的标签，例如

body, div, dl, dt, dd, ul, ol, li,
h1, h2, h3, h4, h5, h6, pre, code,
form, fieldset, legend, input, button,
textarea, p, blockquote, th, td {
	margin: 0;
	padding: 0;
}


# 32、伪类选择器和伪元素选择器有什么区别？

伪类选择器：选择的是DOM树之外的消息，或是不能依靠简单选择器进行标识的元素；前者包含那些匹配指定状态的元素，比如:visited，:active，后者包含那些满足一定逻辑条件的DOM树中的元素，比如:first-child; first-of-type; :target
伪元素选择器：选择的是DOM树没有定义的虚拟元素。不同于其他选择器，伪元素选择器不以伪元素为最小选择单位，它选择的是元素指定内容，比如::before, ::after

# 33、请说说width: auto和width: 100%有什么区别？

width:auto 是自适应宽度 减去 magrin 边框 等间距，剩余的宽度，width:100% 是占据父元素的 100% 宽度

https://www.cnblogs.com/justuntil/p/12389993.html

# 34、如何实现gif动图的暂停和播放？

hover 换src

# 35、简述下Flex的容器和项目的概念

todo

# 36、你在使用calc过程中遇到过哪些坑？如何解决？

css3 calc()方法 大坑 “-”号前面和后面一定要加空格，加空格 加空格

# 37、你有使用过@support吗？说说你对它的理解

用于检测当前浏览器是否支持css某个属性并加载具体样式。

# 38、解释下1px、1rem、1em、1vh代表的含义分别是什么？


    1px
    像素（Pixel），相对于显示器屏幕分辨率而言的，即一个像素点。
    1rem
    相对于根元素HTML，即同根元素font-size大小。
    1em
    当前元素的字体大小
    1vh
    相对于视口/视窗，即可视区域

# 39、使用css制作出一个星星

todo

# 40、使用css3制作一个鼠标经过文本时，显示出边框的动画特效

p{
border: 1px solid transparent;
}
p:hover{
border-color: red;
}

# 41、行内元素float:left后是否变为块级元素？

行内元素设置成浮动之后变得更加像是 inline-block
行内块级元素，设置成这个属性的元素会同时拥有行内和块级的特性，最明显的不同是它的默认宽度不是 100%，行内元素默认 100%宽度占据一行
这时候给行内元素设置 padding-top 和 padding-bottom 或者 width、height 都是有效果的

# 42、可以改变页面布局的属性有哪些？

position 

float

display visibility

z-index

text-align text-valign line-height

overflow

# 43、合并CSS的方法有哪些？


    gulp
    webpack

# 44、说说你对Bootstrap网格系统的工作原理的理解

媒体查询


# 45、如何清除li列表的符号，改成图片背景

list-style-image: url('starsolid.gif');

# 46、请解释下 outline-offset 属性有什么作用？

outline-offset CSS 属性用于设置 outline 与一个元素边缘或边框之间的间隙

# 47、请描述一下网页的层叠等级(z-index)？

网页在轴上的排序

# 48、请解释下float的工作原理 

脱离文档流

# 49、请问下，居中为什么尽量用transform，而不用margin+left(top)？

<!--感受：大发现！我前些日子复习元素在页面垂直居中的一种实现方式，发现了一个记忆点，正好是今天面试题问的，神奇 -->

需要设置子元素的宽高

https://blog.csdn.net/qq_40137978/article/details/110430269

# 50、css预处理器的优点和缺点是什么？

todo

# html

# 周级汇总题目
