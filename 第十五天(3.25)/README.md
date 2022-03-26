# js

# 1、使用js实现一个数组flat()的方法

```js
var arr = [1,2,3,[4,5,[6,7]]]
function flat(arr) {
	var res =[];
	for(var i = 0;i<arr.length;i++) {
		if(arr[i] instanceof Array) {
            // console.log(arr[i])
			let item = flat(arr[i])
            res = res.concat(item)
		}
		else {
			res.push(arr[i]);
		}
	}
	return res
}

flat(arr);

```

# 2、使用js写个方法，把下列数组对象按多字段排序，name升序，age降序

todo

# 3、 使用js写个方法，使得数组的两个元素互换，要求高性能

var a = [1,2]

function itemChange(arr) {
	return [arr[0], arr[1]] = [arr[1], arr[0]]
}

itemChange(a)

# 4、使用js写一个方法，使得数组的某个元素置顶

我的思路：找到这个元素，删除splice，把他放在数组的第一项

标准答案：

# 5、使用js如何改变url参数值，并且页面不刷新？

location.hash

# 6、使用原生js实现给定节点的父节点下所有子节点的元素 

https://www.jb51.net/article/143286.htm

<div class="parent">
	<span class="child"></span>
</div>

var el = getElementByClassName('parent').parentNode;

el.childNodes

所有父节点

一个父节点下的所有子节点

todo

# 7、使用递归实现指定最小值和最大值之间的所有整数求和 

???

# 8、使用js写一个羽毛球16个队抽签随机队伍编号的方法 

生成 1-16的随机号码

Math.random() * 16 + 1

# 9、 一次JS的请求哪些地方会有缓存处理？

1.DNS缓存：DNS缓存是指在正常访问ip之后，系统会将这个ip存储起来，当再次访问的时候，系统就会把本地的DNS缓存提取显示，等于是加速了网址的解析。
2.CDN缓存：CDN是Content Delivery NetWork的简称，即‘内容分发网络'的意思，主要用于分地域的集群服务器，当用户浏览网站请求数据时，CDN会选择一个离用户最近的CDN边缘节点来响应用户的请求。
3.浏览器缓存：客户端缓存减少了服务器请求，避免了文件重复加载，显著地提升了用户体验。但是当网站发生更新时(如替换了css，js以及图片文件)，浏览器本地仍保存着旧版本的文件，从而导致无法预料的后果。
4.服务器缓存：缓存指的是将需要频繁访问的网络内容存放在离用户较近、访问速度更快的系统中，以提高内容访问速度的一种技术。服务器缓存就是存放频繁访问内容的服务器。

# 10、map和forEach有什么区别？

map方法返回一个新的数组，forEach方法不返回

# 11、一个函数调用会产生多少个上下文环境？

1.全局执行上下文
2.函数执行上下文

#12、如何激活一个上下文？ 

函数调用

# 13、请说说你对变量对象的理解

# 14、请说说你对活动对象的理解

在JavaScript中，当一个函数被调用的时候，就会产生一个特殊的对象：活动对象。这个对象中包含了参数列表和arguments对象等属性。由于活动对象是变量对象的特例，因此它包含变量对象所有的属性如变量定义，函数定义等


Arguments对象是活动对象的一个属性，它包括如下属性：

    callee — 指向当前函数的引用


# 14、如果给你一段代码，你能画出执行过程的上下文堆栈的变化吗？

todo

# 15、是否所有的循环都能用递归代替？为什么？如果不可以，请举例说明

？？？

# 16、你觉得递归好写吗？

# 17、闭包是如何形成的？

# 18、字符串从哪里来的split方法和length属性？

console.log(String.prototype)

# css

# 1、如何让一个元素垂直居中

html

# 2、画一个长方形

html

# 3、为什么说css的选择器一般不要超过三级？

CSS的解析过程，在解析选择器的时候，是从右向左，从上到下及逆行解析的。
超过三级会使的css解析树复杂度呈指数级增加，降低css加载性能

# 4、你用过outline属性吗？它有什么运用场景？

outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

# 5、width属性的min-content和max-content有什么作用？

max-content 在一个父元素上设置该元素后，元素的宽度会以子元素内最长的一个为准，子元素表现得会好像设置了white-space:nowrap一样一行展示

min-content 在一个父元素上设置该元素后，子元素会按照最短断行进行换行

# 6、举例说明with属性的fill-available有什么应用场景？

一些 div 元素默认宽度 100% 父元素，这种充分利用可用空间的行为就称为 fill-available。

# 7、举例说明background-repeat的新属性值：round和space的作用是什么？

space 背景图不会产生缩放，会被裁切
round 缩放背景图至容器大小（非等比例缩放）

# 8、使用css如何设置背景虚化？

	filter:blur(5px);

# 9、使用css画一个饼图的效果

todo

# 10、::first-letter有什么应用场景？

p:first-letter {
  font-size: 2em;
}

段落首字放大效果

# 11、举例说说你对white-space属性的理解

white-space: normal  空白保留
pre  空白忽略
nowrap 文本不会换行
pre-wrap 保留空白符序列，但是正常地进行换行。
pre-line 合并空白符序列，但是保留换行符。

# html

# 1、你写一个页面需要多长时间？

和页面结构，样式，交互设计正相关

# 2、写一个三栏布局，两边固定，中间自适应

flex

# 3、 html元素哪些标签是不可替换元素？哪些是可替换元素？

可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。也就是说，css 可以影响元素但是不能影响其内容的显示。

可替换元素：

    <iframe>
    <video>
    <embed>
    <img>
    ……

html 的大多数元素为不可替换元素

# 4、可替换元素和不可替换元素有什么不同的特点？

可替换元素的内容由元素的某些属性的值决定
不可替换元素的内容由子节点的内容决定

# 5、举例说明使用data-有什么优点？


    可以方便的缓存数据在dom上

# 6、你最喜欢html的哪个标签？为什么？

div，因为此标签是用得最多的也是最强大的HTML标签，许多其它标签也是基于此标签而产生的。

# 7、如何在IOS下启用WebApp全屏模式？

手机端打开Web检查器，Mac端接入手机，打开Safari开发模式。
设置<meta>标签：
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes" />
然后将网站添加到主屏幕，点击将以全屏模式启动。

# 8、使用canvas时你有遇到过哪些坑？是如何解决的？

https://www.cnblogs.com/superil/p/8462042.html

# 9、说说如果a链接href=""（空）时点击时会有什么表现？

不会进行跳转，会刷新当前页面

# 10、在a标签中，怎样防止链接跳转？


    css添加 point-events:none
    js click 中event.stopProgation
    将href属性设置为href="javascript:void(0);

# 11、 html的哪个标签可以预加载？

 元素的 rel 属性的属性值preload能够实现预加载 

# 12、html的哪个标签可以预渲染？

link 标签的 rel='preload'


# 周级汇总题目

# 1、
