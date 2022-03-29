# js

# 1、分析下`sum = n * (n - 1) / 2`的时间复杂度是什么？

    一般情况下，只要算法中不存在循环语句、递归语句，即使有成千上万行的代码，其时间复杂度也是Ο(1)。 

# 2、for(;;)循环里如果省略第二个条件，则需要注意什么问题？

无限循环 和while(true)一样

# 3、遍历一个树结构，除了可以用递归外还能用哪些方法？ 

DFS和BFS

# 4、 你是如何做前端性能分析的？从哪些方面入手？有哪些指标？

举个例子：小程序示例性能分析，首先确立指标：主要每天监测的后台管理指标是从百度统计拉取数据源的pv uv以及首页fmp（大盘是1420ms），当然对于我们这种小程序页面较多的小程序，也包括页面访问top3来判断用户的卡点

其次是多端性能分析，如编辑器，devtools
移动端，我们每周会拉取一些机型，高端机和低端机的运行速度

# 5、写出js各类型转化为Boolean的值分别是什么？及转化的规则是什么？

console.log(Boolean(undefined)) // false
console.log(Boolean(null)) // false
console.log(Boolean(+0)) // false
console.log(Boolean(-0)) // false
console.log(Boolean(NaN)) // false
console.log(Boolean("")) // false
Boolean(document.all) 的值为 false

# 6、使用js实现一个并发限制的promise，并保证最多同时运行三个任务

todo

# 7、写一个方法将虚拟Dom转化为真实DOM

todo

# 8、promise有哪几种状态？是如何变化的？

待定（pending）： 初始状态。
已兑现（fulfilled）：操作成功。
已拒绝（rejected）：操作失败。
从pending到fulfilled，或者pending到rejected。


# 9、请解释下为什么下面第一种方式会报错而第二种不会？

// 第一种：构造函数创建
var object=new Object();
object.a=1;
object.8=8; //Unexpected number

// 第二种：字面量创建
var object = {
  a: 1,
  8: 2
};


object的键会被自动转为字符串。
但是obj.name 属性名只能是字符串，不能是数字, 因为会被当成小数点。
第一种可以使用object[8] = 8;
第二种会被转成字符串所以不会报错。

# 10、与一个方法将origin转化为tree，要求支持无限级和性能 

const origin = {
  "a.b.c": "abc",
  "a.d.f.g": "adfg",
  "a.z": "az",
  "test": "test"
}

// 树结构对象
const tree = {
	a: {
		b: {
			c: "abc"
		},
		d: {
			f: {
				g:"adfg"
			}
		},
		z: "az"
	},
	"test": "test"
}


todo

# 11、js最大支持多少长度的数组？为什么？

2^32 - 1

# 12、为什么js里定义的数组可以不定长且数据类型可以不固定呢？

v8 引擎做的封装，分为快数组 和 慢数组，不指定length的话都是快数组，指定length小于等于1024的话是快数组
大于1024的话是慢数组

# 13、请说说你对内置对象和宿主对象的理解

本地对象 内置对象 宿主对象

本地对象：
Object、Array、Date、RegExp、Function、Boolean、Number、String

内置对象：

Global和Math，ECMAScript5中增添了JSON

宿主对象：

浏览器对象有很多，如Window和Document等。
所有的DOM和BOM对象都属于宿主对象

# 14、如果使用JSON.stringify进行深拷贝有什么弊端？如何解决？

如果对象中存在日期，函数等，日期会转为字符串，函数会被忽略

# 15、举例说明你对尾递归的理解，它有什么应用场景？

防止栈溢出，主要是数据过大，直接 return 函数，不需要保存前一个函数内的运算操作，在原始栈的位置直接覆盖运算，应用场景主要是减少内存开销

# 16、说说你对稀疏数组的理解

todo

# 17、解释下点击一个input输入框，依次会触发哪些事件？

onmouseenter → onmousedown → onfocus → onmouseup

# 18、实现一个isNaN的方法

const isNaN = v => +v !== +v;

# 19、请问typeof typeof 168的结果是什么？

typeof 168 =》 "number"

string

# 20、解释下JavaScript并发模型

todo

# 21、null是对象吗？

null不是对象，而是一个空指针，虽然typeof null返回object，但实质上null是值类型，其类型为null

# 22、举例说明 createDocumentFragment 和 createElement 有什么区别？

创建虚拟节点 和 创建节点

# 23、对象的键可以重复吗？为什么？如果可以重复将会又什么样的表现？

可以重复。因为不会报错。但是不建议重复。重复的话，同一个名字的键只会有一个值，就是最后一次的值，打印对象，名字重复的，也只能显示一个键的名字和值。如：var obj={a:1,a:2,b:3}，实际输出为var obj={a:2,b:3}。

# 24、什么是散列函数？它有什么特征？

todo

# 25、如果要让你去实现一个散列函数，你将从哪些方面考虑？

散列空间大小合理，兼顾防碰撞和运算速度。
支持扩容。
有较强的防逆向能力，从结果无法反推输入值。

# 26、请解释下setTimeout的运行机制 

setTimeout()是异步方法，其内部的代码，要等到本次执行的所有同步代码执行完以后，才会执行。js代码自上而下逐行执行，当执行到setTimeout()时，会将其挂起，设置的延时结束后，会把setTimeout()放入任务队列中，当执行引擎在主线程方法执行完毕，才会将任务队列中的代码依次执行。

# 27、给定下面伪代码，请说出程序运行多少秒后会输出“Hello World!”（不考虑其它干扰因素）？并解释下为什么？

sleep(1秒) //运行1s

setTimout(function(){
    输出 "Hello World!"
}, 7秒)

sleep(3秒) //运行3s


答案：
8s

# 28、写一个方法记录函数运行的时间 

function method(callBack) {
    console.time("所用时间");
    callBack()
    console.timeEnd("所用时间")
}

function aa() {
    let num = 0;
    for (let i = 0; i < 5000; i++) {
        num++
    }
}

method(aa)

# 29、写个方法获取浏览器的唯一标识


Fingerprint

# 30、js能够保证object属性的输出顺序吗？如果可以怎么做？

不能

let obj = {item1:1, item0:0, item4:4, item3:3};
Object.keys(obj).sort((a, b)=>{
    // 获取到key最后的数字 然后进行匹配
    a = a.match(/\d*$/)[0];
    b = b.match(/\d*$/)[0];
    return a - b;
})

# 31、写一个方法js将数组对象中某个属性值相同的对象合并成一个新对象

todo
https://github.com/haizlin/fe-interview/issues/3363

# 32、解释下3 + "2" - 5的值为多少？

27

3 + "2" - 5 = "32"-5 = 27
首先 3 + "2" 是将+作为字符串的连接符，因此变为"32"；
然后就变成了"32"-5的操作，进行-运算时，会先将其他类型转换为Number，再进行运算；
因此最后"32"-5 = 32 - 5 = 27

# 33、如何创建视频文件的blob？

todo

# 34、使用js写一个方法操作css变量

todo

# 35、写一个方法动态同步加载script文件

todo

# 36、在非函数内写return语句，会有什么问题？

return是终止函数并返回函数最终的执行结果。非函数代码执行会报错

Unexpected token 'return'

# 37、写一个方法，实现修改当前的URL链接但页面不跳转的功能 

window.history.pushState("", "", "/test");

# 38、写一个方法监听指定cookie的变化

cookieStore.addEventListener('change', e => {// do something})

# 39、写一个方法实现指定开始的数字增加到指定的结束数字，步长默认为1

todo

https://github.com/haizlin/fe-interview/issues/3395

# 40、写一个方法将一个数组中的元素，从前到后依次两两组合，最后一个与第一个组合

<script>
    function CombinedNumbers(array) {
        const newarray = []
        if (array.length % 2 !== 0) {
            return '你的数组长度得是偶数'
        }
        for (let index = 0; index < array.length / 2; index++) {

            newarray.push(String(array[index]) + String(array[array.length - 1 - index]))

        }
        return newarray
    }
    const array = [1, 2, 3, 4, 5, 6]
    console.log(CombinedNumbers(array));
</script>


# 41、写一个算法找到数组中两个元素相加等于指定数的所有组合

var twoSum = function (nums, target) {
  let r1 = (r2 = 0);

  for (let o = 0; o < nums.length; o++) {
    for (let i = o + 1; i < nums.length; i++) {
      if (nums[o] + nums[i] === target) {
        r1 = o;
        r2 = i;
      }
    }
  }

  return [r1, r2];
}

# 42、以下方法调用call输出的结果是什么？请解释下？

[].copyWithin.call({ length: 5, 3: 1 }, 0, 3)

没看懂

# 43、写个方法将base64的数据流装换为二进制流

没答案

# 44、实现一个批量请求函数 multiRequest(urls, maxNum)

实现一个批量请求函数 multiRequest(urls, maxNum)，要求最大并发数 maxNum，每当有一个请求返回，就留下一个空位，可以增加新的请求，所有请求完成后，结果按照 urls 里面的顺序依次打出。

咩看懂

# 45、请说说html、body、document、window四者的区别是什么？

 window ＞ docum ＞ html ＞ body

html

HTML 文档的根元素，其他元素都是其子元素。

body

body 元素包含了文档的可见内容，HTML 文档最终显示的内容都是其子元素。document.body 可以直接访问此元素。

document

document 对象是 window 的子属性，用来访问页面中的元素，保存着操作 DOM 的 API。

window

window 对象在文档打开时自动创建，保存着 DOM，BOM，核心JS 等所有内容。
对于客户端 JS 而言，window 对象是其全局对象，通过访问 window 对象提供的客户端 API 操作DOM，发起网络请求，进行本地存储，开启定时器，获取浏览器信息等各种能力。

# 46、写一个方法将ArrayBuffer转为字符串

let resBlob = new Blob([arraybuffer]) //res为arraybuffer型数据
let reader = new FileReader()
reader.readAsText(resBlob, "utf-8")
reader.onload = () => {
	let tmpResObj = JSON.parse(reader.result)
}

# 47、请问，javascript可以读取本地的文件吗？为什么？

js 是运行在内核里面的，理论上是基于浏览器这样一个应用程序存在的，是不能对其开放访问本机文件的权限的。但是为了满足读取本地文件的需求 html 里开放了 input 控件供 js 读取本地文件，FileReader 可以读取到本地文件中的一些内容

客户端JS，受到浏览器限制，像犯人，只能在狱警规定的范围内活动。
服务端JS，如 NodeJS，更像自由人，权限大的多，可以操作本地文件。

# 48、使用JavaScript拖拽盒子跟着鼠标动的效果

html

# 49、如何监听浏览器窗口大小变化？

window.addEventListener('resize', () => {
  // ...
});

# 50、写一个方法将一个html字符串变成JSON树的形式

todo


# css

# 1、怎样把单位cm转换成px呢（在打印时有时会用到）？

1px所代表的长度=2.54cm/分辨率
1cm=分辨率/2.54

# 2、在固定宽度的div下，怎么让字体自适应大小，不超出宽度，也不要换行

用 fitty

# 3、写出固定子容器在固定的父容器下水平垂直居中的布局 

html

# 4、使用css如何拉伸字体？

transform:scale

# 5、如何设置字体的左右间距？

<p class="example1">这是我要改变间距的字体</p>
<p class="example2">这是已经改变间距的字体</p>

.example1 {
   letter-spacing: 5px;
}
.example2 {
   letter-spacing: 10px;
}

# 6、你有用到以pt为单位过吗？pt单位有什么应用场景呢？

没用过
pt单位应用场景
当用户改变 默认的 96DPI 时
使用 px 定义文字，无论用户怎么设置，都不会改变大小；使用 pt 定义文字，当用户设置超过 96DPI 的值，数值越大，字体就越大。

# 7、css子元素会继承父元素的font-size吗？请解释下面父子元素各字体的大小[代码]

<div class="parent">
    父元素
    <span>子元素</span>
    <p>子元素</p>
</div>

*{
    font-size: 12px;
}
.parent{
    font-size: 30px;
}

不会，因为 * 已经直接制定了 span 和 p 的字体大小。
* 给出font-size时，未定义font-size的子元素的字体大小按照 * 的定义，为 12px；
如果没有在 * 中定义，则会继承父元素的font-size

# 8、请说说css的三大特性是什么？

继承性
层叠性
优先级

# 9、css variable 的使用方法和好处有哪些？

:root {
	--my-color: red;
}

.container {
	color: var(--my-color, red);
}

精简代码，减少冗余，利于重用

# 10、有使用过css的images-set吗？它能解决什么问题？

不同设备显示不同图像

background-image:image-set("cat.png"1x, "cat-2x.png"2x, "cat-print.png" 600dpi);

# 11、page-break-before 和 page-break-after 属性有什么应用场景？

分页打印

@media print
{
table {page-break-before:always;}
}


Object.style.pageBreakBefore=auto|always|avoid|left|right

object.style.pageBreakAfter="always"

# 12、@media print可以用来控制web打印样式吗？

可以。

@media print {
  @page {
    margin: 20mm 10mm 15mm 10mm;
  }
}

# 13、1in等于多少mm？1mm等于多少px？

1in == 96px
1mm == 0.1cm == 3.78px
1in == 96/3.78 mm

# 14、如何使两张图片叠加？

使用绝对定位

# 15、说说你对在web端图片清晰和模糊的理解

位图在放大后会失真或变模糊，而矢量图不会。要根据需求作取舍

# 16、如何设置字体之间的间隙？

设置容器的letter-spacing属性，可以调节字体间的间隙

# 17、用css实现两端对齐text-align: justify有什么不足之处？

https://github.com/haizlin/fe-interview/issues/2680

# 18、使用text-align: justify怎么让单行也起作用？

https://github.com/haizlin/fe-interview/issues/2680
???

# 19、如何实现css隔离？

设置一个独一味二的类名或者id。
组件中可以使用 scoped

# 20、css在页面上画一个正方形，边长为页面宽度的一半

html

# 21、在css中哪个属性会影响DOM读取文档流的顺序？

writing-mode

# 22、不加class和id使得倒数三个li背景色为红色

li:nth-last-child(3){
	
}

# 23、解释下z-index最大值和最小值可以设置为多少呢？

js中数字最大值是 负的 2的53次方 

预留最高一位作为符号位 所以是 +2的53次方 - 1

# 24、z-index可以是负数吗？

z-index: auto 是系统预设
z-index: -1 是子元素被父元素覆盖 

# 25、css中的fill有什么应用场景？

填充 svg 形状的颜色

# 26、css穿透属性有哪些？

pointer-events: auto;

# 27、举例说明 pointer-events 有什么实际用途？

全网置灰
全网添加水印

pointer-events: none; 点击穿透,给覆盖元素设置，点击时被覆盖元素可触发点击事件

# 28、rem的弊端是什么？

自适应，整体布局尽量用百分比，少用rem

# 29、使用flex实现一个自适应的九官格

html

# 30、margin属性的负值 在inline-block元素下是如何表现的？

水平方向不生效
垂直方向生效

# 31、请举例说明 width:fit-content 有什么使用场景

fill-available

撑满可用空间

fit-content

宽度缩小到内容宽度

max-content

内容值宽度最大的作为容器宽度

min-content

内容值宽度最小的作为容器宽度

# 32、当css中background或background-image的值为url()或url(#)时，会发生什么情况？为什么？如何解决？

会多发一个http请求
解决方案：
用base64图片，或添加一个背景色

# 34、请说说position:absolute和float有什么不同？

float 和 absolute 不占空间

float 都脱离文档流，块级元素和 absolute 一样的覆盖效果，可以实现行内元素环绕


# 35、position的relative和absolute分别是相对谁进行定位的？


relative 相对自身
absolute 相对第一个非static的元素进行定位

# 36、什么情况下会出现css阻塞？

css 阻塞：

1、将html解析为dom tree
*2、将 css 解析为cssom tree
*3、将 dom tree 和 cssom tree 合并为render tree
4、浏览器依照 render tree 开始布局

精简 css资源，减少响应时间
不同尺寸使用不同css

# 37、css加载会阻塞DOM树解析吗？

不会，css的加载是异步的

# 38、css加载会阻塞DOM树渲染吗？

一定会,css资源的加载时开的一个异步进程的,dom的解析是在另外一个进程,所以不会阻塞,但是会阻塞render tree的形成进而影响页面的布局

# 39、css加载会阻塞js运行吗？

1.css加载不会阻塞Dom的解析
2.css加载会阻塞Dom的渲染
3.css加载会阻塞后面js的运行

# 40、如何优化打印样式？ 

？？@media print

# 41、使用display: table-cell有什么应用场景呢？

多行文本垂直居中

# 42、我们使用第三方的css安全吗？为什么？


    不安全，可以通过css的背景图片发送信息


# 43、在不可替换元素上使用width/height/margin/padding会有什么样的表现？

display:inline 只有margin,padding 生效

display:block/inline-block 4个属性均能生效

# 44、使用css3制作下雨动画的效果 

1、box-shadow 生成若干数量、不同偏移量的“雨滴”，
2、animation 设置雨滴从上往下落的动画效果

# 45、你现在还经常写css代码吗？

工程化的项目使用less，sass，其他的css

# 46、你最喜欢的是哪个css特性？为什么？


    flex，让布局简单


# 47、你是怎么学习css的？说说你的学习方法


    多练习各种布局理解布局原理
    读 《css世界》

# 48、你觉得css高级的特性有哪些？

css 动画，滤镜，3d

https://blog.csdn.net/chandoudeyuyi/article/details/69206236

# 49、你现在还会经常学习css的新知识吗？

会，h5出的新特性虽然工程中不常用容易忘，一些偏僻css也还是会定期复盘，主要是通过面试题来了解它的应用场景，

https://blog.csdn.net/chandoudeyuyi/article/details/69206236

# 50、当你忘记某个css时，你是如何解决的？

查文档，看文档的顺序是看他的写法，看属性值对应出来的效果

# html

# 1、制作一个不规则形状有哪些方法可以实现？

canvas

# 2、写一个密码默认星号，但可以查看密码的输入框

html

# 3、 html的开始与结束标签嵌套错误会导致哪些问题？

有的可以被正常解析，有的不行。

题目中的例子可以被正常解析，如果是 <div><a>标题</div></a>，a 标签不能被正常解析。

# 4、如果列表元素li的兄弟元素为div，会产生什么情况？

查询的时候,不太好查询到具体的li标签

单纯的对html来说主要是破坏了语义结构吧,
css方面来说不好统一控制样式，div默认也没有list-style

# 5、HTML采用的是RGB颜色还是CMYK颜色？为什么？

用在电脑或者手机上显示的大部分都是RGB，用于需要印刷的都用CMYK
并且不同的显示器色域不同会导致色差，不同浏览器也有自己的调色板，后面总结出来过一套web安全色，就是专用在web上大部分情况下都不会有明显色差的一些颜色

# 6、如何使用纯HTML实现跑马灯的效果？

HTML marquee 元素用来插入一段滚动的文字。
但是该元素已废弃。

# 7、请写一个正则获取html源码中所有img标签的src地址
<!-- 
/<img\b[^<>]?\bsrc=["'].["']\b(/>|>|>)/
个人理解, 如有错误麻烦帮助更正 -->

todo

# 8、如何优化大数据列表（10万+）的性能？说说你的方案 

确实 todo

# 9、在head标签中必不少的是什么？

根据w3c文档，title是head部分中唯一必须的元素

# 10、说说你对H5的SharedWorker的理解，它有什么运用场景？

一种特定类型的 worker，可以从几个浏览上下文中访问，例如几个窗口，iframe 或其他worker，

多个标签之间的通信

# 11、说说你对H5的ServiceWorker的理解，它有什么运用场景？

一个服务器与浏览器之间的中间人，如果网站中注册了 ServiceWorker，那么它可以拦截当前网站中所有的请求，
进行判断（需要编写相应的判断程序），如果需要向服务器发起请求就转给服务器，如果可以直接使用缓存就直接返回缓存不再转给服务器，从而大大提高浏览体验。

# 12、你有使用过MediaRecorder吗？说说它的运用场景有哪些？

录屏

# 13、H5中video的事件的触发顺序是怎样的？

onloadstart
ondurationchange
onloadedmetadata
onloadeddata
onprogress
oncanplay 
oncanplaythrough

# 14、const nums1 = [1, 2, 2, 1], nums2 = [2] 交集是什么？

[2]
[2, 2]

https://www.cnblogs.com/followyou/p/11384704.html

todo

# 15、html中在span标签里面可以放那些标签？

不要放 div

w3c内明确标识了，行内元素不可以套用块状元素。

# 16、进入编辑页面时，如何把光标聚焦到第一个input？

autofocus

# 17、如何给input的右上角加个清除的按钮？

# 18、http中的301、302、307、308有什么区别？

301 永久移动

302 发现

307 临时重定向

308 永久重定向

# 19、举例说明只用html和css如何使得一个列表编号倒序？


html

ol 是有序的呀

# 20、如果src或者href为空时，将会伴随着哪些问题的出现？

# 21、H5页面在微信中如何禁止分享给好友和朋友圈？

利用JSBridge实现调用微信提供的一些原生功能，可以通过调用隐藏操作菜单来实现禁用分享。
代码如下：
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
WeixinJSBridge.call('hideOptionMenu');
});
（前段时间工作中刚用到）

# 22、微信H5页面如何更新缓存？

https://blog.csdn.net/woyidingshijingcheng/article/details/89926990

# 23、说说你对短链接的理解，它有什么应用场景呢？


todo

# 24、你知道短链接的生成原理吗？

目的将长度较长的链接压缩成较短的链接，并通过跳转的方式，将用户请求由短链接重定向到长链接上去

1.二种方式生成短链

    hash-可能会重复
    发号器发号压缩 URL


2.短链跳转方式

    301 - 用户第一次访问某个短链接后，如果服务器返回301状态码，则这个用户在后续多次访问统一短链接，浏览器会直接请求跳转地址，而不是短链接地址，这样一来服务器端就无法收到用户的请求
    缺点：有缓存情况下直接跳转原地址，无法记录准确的访问

    302-浏览器不缓存短链接请求，那么用户每次访问短链接，都会先去短链接服务端取回长链接地址，然后在跳转。
    缺点：服务器压力大

# 25、网页中的友情链接有什么作用？

    有利于SEO，提高访问量,精准访问

# 26、你知道什么是反向链接吗？它有什么应用场景呢？

反向链接对应的是类似于友情链接这种正向链接模式。一般对于搜索引擎来说，高质量的反向引擎会提高网页的权重。。。所以对于seo来说，会是个很好的方法。。。

# 27、如何让pre标签中的元素自动换行？

white-space:pre-wrap;

# 28、写一个方法计算出页面中HTML使用最多的标签是哪一个

todo

# 29、写一个布局，满足当页面滚动时，左侧固定不动，右侧的最小高度与左侧一样

todo

# 30、H5的video可以播放哪些类型的文件？可以播放rtsp流吗？

Ogg、MPEG4、WebM,不能播放rtsp

# 31、请说说你在写布局时对于浏览器兼容性的感受或总结 

table，flex 兼容性不太好

# 32、html页面中如何实现gif图片重新播放？

因为浏览器会缓存图片，所以对于一次性gif如果不做处理的话，只会播放一次。如果需要重新播放gif，重新设置下img标签的src属性即可

# 33、如何实现默认显示git的第一帧图片，当鼠标经过时，播放完整的gif动画

准备一个静态第一帧的 img 图片，和gif完整图片，来回切换，就可以完成效果

# 34、如何实现页面背景图固定不动，不跟随滚动条滚动？

background-attachment: fixed

# 35、制作一个页面时，需要兼容PC端和手机端，你是要分别做两个页面还是只做一个页面自适应？为什么？说说你的理由

自适应的话可能不够，只适用于pc端

PC端和手机端需要响应式布局，两套代码

# 36、你能否画出一个0.5px的直线？

通过scale(0.5)来实现


# 37、实现中国五星红旗国旗的布局

https://github.com/haizlin/fe-interview/issues/3015

# 38、如何禁止手机端页面缩放？

document.documentElement.addEventListener('touchstart', function (event) {
	if (event.touches.length > 1) {
		event.preventDefault();
	}
}, false); 禁止双指放大

<meta name="viewport" content="user-scalable=no">


# 39、如何解决在移动端1px渲染成2px的问题？

兼容性问题，某个元素默认就有1px的border，或者有1px的outline，将各元素的base属性border与outline设为0；

img{border:0px solid #ddd;outline:none;}

# 40、如何垂直居中`<img>`？

 html

# 41、canvas生成图片有没有跨域问题？如果有如何解决？

前端设置 useCORS: true。后台配置允许跨域

# 42、说说你对制表符的理解，它有什么作用？

以一定格式 输出内容


# 43、如何根据设备尺寸做页面自适应？

@ media query + rem

# 44、 使用div+css进行布局有什么好处？

好处就是兼容性好吧。。。。坏处感觉挺多的，各标签含义不明确。

# 45、请使用一个div写出有三条横线的小图标

html

理解一下

# 46、如果浏览器支持的功能受限，如何更好的提供页面呢？

# 47、说说你对移动优先布局的理解

移动优先布局，应该是基于这样一个前提：
如今web页面的移动端用户量（访问量）要远远大于pc端等设备
所以是优先服务于移动端的
那么采用移动优先布局的策略才能最大化页面的使用
移动优先布局即首先针对移动端设备设计页面的布局方式
然后在这个基础上逐渐向平板、电脑等宽屏设备去拓展和适配

# 48、写一个三栏布局，中间固定，两边自适应（平均）

html

# 49、写出不定宽度的子级div，在相对于固定宽度的父级元素水平居中的布局

html

# 50、如何禁用掉a标签的默认事件？

e.preventDefault()

# 周级汇总题目
