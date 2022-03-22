js：20

# 1、 infinity代表什么数据？

js中 infinity 表示 无穷大的数值，且不是常量，可以通过isFinite(val) 表示当前数字是否是无穷大，如果是无穷大返回false，如果不是返回true

# 2、请解释下面题目输出的结果

var val = "test";
console.log("output is " + (val === "Test") ? "123" : "456");

// 123

计算顺序为 () + ？

=> 

"output is " + false = "output is false", 非空字符串为 true,  所以输出123

# 3、如何计算动画的帧率（FPS）？

requestAnimationFrame api，使用一个回调函数作为参数，这个回调函数会在浏览器刷新时候执行。这个回调函数里再次调用 requestAnimationFrame ，1s内requestAnimationFrame执行了几次，就是动画当前的FPS

# 4、如何排查页面中CPU占用高的情况？

计时器
全局变量
监听滚动时有没有写回调函数

# 5、如何把10.36四舍五入为最接近的整数？

1、需要Math.round();
// 这个小加号是为了转化为数字， 10.96.toFixed(0) 输出字符串
2、+(10.96).toFixed(0);

不能 parseInt() 和 Math.floor()


# 6、写一个方法探测CPU占比情况（暂无答案）

# 7、javascript什么时候会占CPU？

浏览器打开的时候
js动画
重绘
定时器

# 8、写一个方法获取手机电池的信息，如：电量、充电状态等

小程序有这个api，不知道h5有没有这种api可调用
navigator.getBattery()，也不知道这个是从什么时候有的，因为不常用，用的时候要看一下他兼容性

charging: 是否在充电
level: 剩余电量

# 9、请解释以下题目会输出的结果（类型转换）

var temp = [0];
if ([0]) {
  console.log(temp == true);
} else {
  console.log("测试");
}

false

因为 Boolean([0]) ==> true 所以判断 [0] == true

只有 1， '1', 1n, true  和 true 才 == true

# 10、请说说new String("A")和String("A")分别返回的结果，请解释为什么？

new String("A") 返回了一个对象
String("A")返回一个字符串

# 11、请说说IEEE 754标准指的是什么，规定了哪些标准？

0.1 + 0.2 不一定等于 0.3
float a = 0.15 + 0.15
float b = 0.1 + 0.2

if(a == b) // false
if(a >= b) // false

单精确度（32位），双精确度（64位），延伸单精确度（43比特以上），延伸双精确度（79比特以上）

# 12、写个方法找出页面中除了数字和英文字母外的所有特殊特号

<!-- var html = 'aslfkdhalfg hasoljf blk112347?!#$U'
var reg = /[^A-z0-9]/g;
html.match(reg) -->

var reg = /[^A-z0-9]/g;
str.match(reg);

要匹配的东西.match括号里是匹配规则，这里记住别写错了

# 【算法题】13、写一个方法，让数组里的元素上移一格/下移一格

# 【算法题】14、写一个方法找到一维数组里，有且只有两个连续相等的所有元素

# 【算法题】15、请使用js写个方法解析emoji表情

无答案

# 【算法题】16、请通过reduce函数实现一维数组的求和

# 17、请通过代码来解释下new和instanceof的内部机制

这个看不懂，后面看懂了原型链什么的再看

# 18、在严格模式下，全局作用域中函数中this的值是什么？

undefined

# 19、请说说严格模式下的this指向

1、在严格模式下，全局的this指向this
2、在严格模式下，函数中的this指向undefined
3、在严格模式下，对象中函数this指向调用他的实例
4、在严格模式下，构造函数this指向构造函数创建的实例
5、在严格模式下，事件函数的this指向触发事件的目标对象

# 20、分别解释下js中默认绑定、隐式绑定、显式绑定、new绑定的区别

默认绑定：在非严格模式下是指向的全局，在严格模式下是undefined。
隐式绑定：是指谁调用了函数，函数的指向就是谁，如果存在多个调用的话，this就是指向最近的一个调用。
显示绑定：通过call apply bind方法改变this的行为就是显示绑定。call和apply的功能性质相同，只是展示改变this指向，后面如果还有需要，就需要再调用一次但是传参形式不同，call是用散列表的方式，apply是以数组的方式，在性能方面call会比apply更好一点，因为apply是数组传参 会解析一下。bind改一次就永久改变this指向了。
new绑定：通过构造函数 new来调用的普通函数。

# 21、浏览器中的剪切板是如何监听复制事件的？

元素上
<input oncopy="cb" />

获取元素

document.getElementById('p').oncopy = cb;

事件监听
document.getElementById('p').addEventListener('copy', cb);

# 22、请使用js实现一个无限累加的函数

题意答案不唯一，pass

# 23、js中 Iterable 对象和 Array 有什么区别？

没太懂

iterable对象是符合迭代器接口，可以通过 iterable.next()或者 for of 访问其中的元素

Array是特殊的iterable对象，除了itearable的方式不遍历外，还 提供了 for in foreach map等方式

# 24、请实现一个Promise.race

<!-- Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
 -->

<!-- Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。 -->

static race = function (promises){
	return new Promise((resolve,reject) => {
		promises.forEach((p, index) => {
			Promise.resolve(p)
				.then( 
					value => { 
						<!-- 这里不懂 -->
						resolve(value) 
					},
					reason => { 
						<!-- 这里不懂 -->
						reject(reason) 
					}
				) 
		}) 
	}) 
}

# 25、写一个方法实现选中复制的功能

https://q.shanyue.tech/fe/html/20.html#%E9%80%89%E4%B8%AD-selection-api-range-api

选中: selection API/Range API
复制: execCommand

# 26、请解释下什么是softbind，并实现一个softbind

看不懂

# 27、说下你对map方法的理解，并解释下面代码返回的结果

```javascript
const result = new Array(3).map((item) => {
  return item = {
    name: 'test'
  }
});
console.log(result); // [empty × 3]

```

map 对没有赋值或者已经删除的元素直接返回。

# 28、setTimeout(fn,0)，延迟执行吗？（这问event loop呢）

主线程任务执行完毕后才会执行任务队列中的待执行任务，这个时间差是4ms

# 29、添加原生事件如果不移除为什么会内存泄露？（浏览器的垃圾回收机制这块要系统的看）

比如下面代码：
var button = document.getElementById('button');
function onClick(event) {
button.innerHTML = 'text';
}
button.addEventListener('click', onClick);

给元素button添加了一个事件处理器onClick, 而处理器里面使用了button的引用。而老版本的 IE 是无法检测 DOM 节点与 JavaScript 代码之间的循环引用，因此会导致内存泄漏。
如今，现代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法，已经可以正确检测和处理循环引用了。换言之，回收节点内存时，不必非要调用 removeEventListener 了。

# 30、Promise和setTimeout执行先后有什么区别？

Promise先，setTimeout后

先微后宏


# 31、解释下什么是暂时性死区？

es6中的let 和 const，声明前使用就会报错，这在语法上，称为"暂时性死区" ReferenceError



html题目：（20）

# 1、写H5和小程序有什么相同及不同的地方吗？

不同：

1、能力支持的程度不同
2、运行环境的不同
3、开发成本的不同，小程序相当于独立出来的生态

相同：

都是运行在手机端上的页面

# 2、你喜欢哪种布局风格？说说你的理由

弹性布局。display：flex;
理由：可以适配不同的显示屏宽度

继而介绍做过的一个弹性布局的项目


# 3、html5中的meta标签http-equiv属性有什么作用？

http-equiv 是 http5 新增的属性，用于把content属性关联到头部

content-type: 声明网页字符编码
refresh:每30秒刷新一次页面

# 4、页面的重绘和回流是什么？

回流必重绘，重绘不一定回流

    回流： 当节点发生改变时，浏览器重新渲染部分节点或者全部文档，这个过程为回流。
    重绘： 当操作的节点并不导致元素位置发生变化时，如 color background-color 等，浏览器会将新的样式赋值给这些节点，这个过程为重绘。
    简单理解会引起元素位置变化的就会 reflow，只是在以前的位置进行改变背景颜色等，只会 repaint

# 5、如何让img自动适应div容器大小？

设置图片宽高为100%并设置属性object-fit: cover，防止变形

object-fit

    contain: 保持比例，内容被缩放，长的一边与容器相同
    fill: 不保持比例，默认值
    cover: 保持比例，长边会被裁剪
    none: 图片大小不变，显示中间部分
    scale-down: 保持原有尺寸比例，none与contain的一个。取决于哪个使图片面积更小

# 6、 h5页面如何传递参数给小程序？

postMessage({}）

三种时机去接收

# 7、跨域通信有哪些方式？
    JSONP
    Hash
    postMessage
    WebSocket
    CORS

# 8、如何优化页面的渲染过程？

将样式表放到head中
将js脚本置底
减少脚本的数量，将多个脚本合并，可以使用webpack等前端工具打包
压缩样式、脚本、图片等的体积

# 9、举例说明使用data-有什么优点？

在dom元素中存储值

<button data-time="xxx"></button>

元素.data('time') 可以拿到xxx

# 10、页面导入样式时，使用link和@import有什么区别？

1、link是html ，@import是css
2、@import 没 link兼容性好，es5以下不支持
3、link是随页面加载，@import是页面加载完后加载


@import这个使用的方法，它必须得在<style></style>中使用

# 11、HTML全局属性(global attribute)有哪些（包含H5）？

全局属性：适用于任何html元素

accesskey: 设置快捷键
class，id，style: 为元素设置类标识
contenteditable: 指定元素内容是否可编辑
contextmenu: 定义鼠标右键弹出上下文菜单内容（仅firefox支持）
draggable: 设置元素是否可拖拽
data-*：为元素增加自定义属性
translate：元素和子孙节点内容是否需要本地化
title：规定元素有关的额外信息
lang：元素内语言

# 12、HTML5的文件离线储存怎么使用，工作原理是什么？

使用：
<html manifest = "cache.manifest">

</html>

定义：
HTML5的离线存储是基于一个新建的.appcache文件的缓存机制

浏览器如何解析cache.manifest文件

1.在线情况:浏览器发现html头部有manifest属性,他会请求manifest文件,如果是第一次访问,那么浏览器会根据manifest文件的内容下载相应的资源并且进行离线存储.如果已经访问过并存储,那么浏览器使用 离线的资源价值,然后对比新的文件,如果没有发生改变就不做任何操作,如果文件改变了,那么就会重新下载文件中的资源并进行离线存储
2.离线情况:浏览器就直接使用离线存储资源

# 13、 简述超链接target属性的取值和作用

_self 当前窗口

_blank 新窗口

# 14、label的作用

<label for="">
<input id="">

# 15、iframe框架都有哪些优缺点？

优：
1、实现异步刷新，iframe刷新不影响窗口刷新
2、跨域

缺：
1、window.onload 需要在iframe刷新完后再刷新
2、滚动条影响用户体验
3、增加请求开销

# 16、你对标签语义化的理解是什么？

正确的标签做正确的事情

<header>
<footer>
<aside>
<nav>
<main>

# 17、常见的浏览器内核都有哪些？并介绍下你对内核的理解 

浏览器分 渲染引擎和 JS 引擎，内核一般是指渲染引擎

ie，火狐，谷歌、opera、safari

# 18、为什么HTML5只需要写<!DOCTYPE HTML>就可以？

确保不同浏览器以相同的方式解析文档，以及执行相同的渲染模式。默认以怪异模式渲染。

# 19、元素的alt和title有什么区别？

title鼠标悬浮名字
alt图片加载失败显示的内容

# 20、 DOM和BOM有什么区别？

只有 JS 的宿主环境是浏览器的时候才有 DOM 和 BOM ，在 Node 中是没有这两个对象的。

BOM: 浏览器对象模型，比如 navigator,location,history,storage 都为 BOM 的操作。其根对象是 window，可以理解为 winodw 开头的方法

window.navigator
window.location


css题目：（5）

# 1、CSS3有哪些新增的特性？

边框：
border-radius 圆角
box-shadow 盒阴影

背景：
background-size
background-clip
background-origin 

渐变：
linear-gradient
radial-gradient

文本效果:
word-break
word-wrap
text-overflow
text-shadow

转化：
transform
translate(x,y)
rotate(angle)
scale(n)

3D转换：

rotate3d(x,y,z,angle)

过渡：

translation


动画

@keyframes
animation

多媒体查询
@media


# 2、对比下px、em、rem有什么不同？

em相对大小，当前字体的倍数，相对于当前对象的字体字体

rem相对大小，类似它们，根元素html字体大小的倍数


# 3、要让Chrome小于12px的文字支持怎么做？

transform: scale(0.75)

# 4、如何去掉button的点击样式？

border:none

# 5、为什么有时候给元素设置宽度不起作用呢？

宽度设置只对块级元素起作用，行内元素是无效的。


周级综合题目：(0)


todo: 算法题（2）













