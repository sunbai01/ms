html（50）

# 1、websocket握手成功会返回一个干什么状态吗？是200吗？

WebSocket protocol 是HTML5一种新的协议。它实现了浏览器与服务器全双工通信(full-duplex)。在握手阶段借用http协议传输，建立连接后采用TCP协议传输。

101状态码：切换协议 请求者已要求服务器切换协议，服务器已确认并准备切换

握手阶段websocket利用http进行传输，握手成功后，返回状态码101 告知浏览器，服务器已确认并准备切换协议

# 2、websocket可以携带cookie吗？为什么？如果可以，怎样做到呢？

websocket 是TCP/IP层的链接,而cookie是应用层HTTP协议的东西,因此不能。除非websocket在浏览器不支持的情况下用的降级方案。

# 3、websocket如何区分不同的客户端？

HttpSession和@PathParam

# 4、websocket和http2有什么区别？http2能取代websocket吗？为什么？

按照OSI网络分层模型，IP是网络层协议，TCP是传输层协议，而HTTP是应用层的协议。在这三者之间，SPDY和WebSocket都是与HTTP相关的协议，而TCP是HTTP底层的协议。
WebSocket则提供使用一个TCP连接进行双向通讯的机制，包括网络协议和API，以取代网页和服务器采用HTTP轮询进行双向通讯的机制。
本质上来说，WebSocket是不限于HTTP协议的，但是由于现存大量的HTTP基础设施，代理，过滤，身份认证等等，WebSocket借用HTTP和HTTPS的端口。

由于使用HTTP的端口，因此TCP连接建立后的握手消息是基于HTTP的，由服务器判断这是一个HTTP协议，还是WebSocket协议。 WebSocket连接除了建立和关闭时的握手，数据传输和HTTP没丁点关系了。

WebSocket也有自己一套帧协议。

http2不会取代websocket，因为它们二者解决的是不同的问题

# 5、跨标签页的通讯方式有哪些

localStorage

WebSocket

postMessage

# 6、精确获取页面元素位置的方式有哪些？

let btn = document.querySelector('#ele')
let {top, left} = getComputedStyle(btn)
console.log('top:', top, 'left:', left)

# 7、请问60*80的canvas占多少内存？你是怎么计算的？

一个像素为1byte，通过getImageData方法可以得到canvas的二进制流

# 8、如何给页面添加追加右键菜单（原右键菜单功能保持不变）

监听oncontextmenu，在系统右键菜单下追加自定义菜单

# 9、如何判断用户正在操作页面？当页面一个小时没有操作时跳转到指定页面如何做？

监听mousemove事件。当一段时间没有触发mousemove时，即认定用户没有操作页面

# 10、实现一个页面锁屏的功能

<script type="text/javascript" language=JavaScript>
    document.onkeydown = function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 76 && e.ctrlKey) {
            document.getElementById("message_div").innerHTML="你按下了ctrl+l,开发的时候可以跳到一个锁屏的页面";
            // window.location.href = '锁屏页面';
            return false;
        }
    };
</script>

定义一个Modal框，全屏铺满，初始定义为display:none , 需要锁屏的时候display:block

# 11、能否做到禁止打印页面？如果可以那要怎么做？

@media print{
    body{display:none}
}

document.onbeforeprint = function(){ return false; };

# 12、怎样禁用页面中的右键、打印、另存为、复制等功能？

<body oncontextmenu=self.event.returnValue=false onselectstart="return false">

# 13、开发静态页面时，不依赖node相关的工具，如何提取出公共部分并引入？

利用iframe，感觉有点取巧，勉强也算吧

// test-include.html
<html>
    <head>
    </head>
    <body>
        test
        <iframe marginwidth=0 marginheight=0 width="100%" height=200 src="./test-include2.html" frameborder="no"></iframe>
    </body>
</html>

// test-include2.html
<html>
    <head>
    </head>
    <body>
        test2
    </body>
</html>

# 14、请实现一个网站加载进度条

document.onreadystatechange = function() {
    console.log(document.readystate)
}

# 15、请实现一个文章阅读的进度条

chrome 浏览器中，通过document.documentElement.scrollTop获取页面滚过高度，通过document.documentElement.scrollHeight获取页面总高度，通过document.documentElement.clientHeight获取当前内容高度。通过给window对象设置scroll事件，触发回调函数：将进度条dom style属性中的width或height动态修改为（页面滚过高度 + 当前内容高度）/ 页面总高度


定位一个滚动条,计算出内部div(scrollBoxInner)的高度,
滚动时,触发滚动事件,计算scrollBoxInner的top值,实现功能
scrollBoxInner.style.top = parent.offsetHeight * (event.target.scrollTop / child.offsetHeight) + 'px'

# 16、canvas透明度是0.6的矩形和透明度是0.2的矩形叠加到一起，透明度是多少？

1-0.4*0.8 = 0.68

# 17、页面刷新时sessionStroage会变（会清空）吗？

不会

SessionStroage 是数据页面会话级别的, 当你在打开这个页面的时候会被创建, 并且重新加载或恢复页面仍会保持原来的页面会话...

当你在关闭对应浏览器Tab的时候会被清出

# 18、使用a标签的download属性下载文件会有跨域问题吗？如何解决？

最近刚遇到这个问题，后台返回的图片链接，点击按钮批量下载，a标签的 download 属性只对同源文件有效，
所以我们这里先把图片 url 转为 blob 格式，然后再下载

const blob: Blob = await res.blob();
const blobUrl = URL.createObjectURL(blob);

# 19、如何通过表单下载文件？

    1、form 表单的action设置为接口地址，设置method为post/get
        post方法：
        根据需要传递的参数设置多个input:name=key, value=value
        如果请求的接口不需要参数，建议设置一个input,否则可能会引起报错。
    2、submit提交到后台

    const from =document.createElement('form');
form.setAttribute('method','get');
form.setAttribute('action',url); // 下载文件的url
form.submit()

# 20、通过设置表单的target="_blank"来下载文件会被浏览器拦截吗？如何解决？


在项目中有这样的一个应用场景，用户点击页面的一个button，然后对用户的信息进行异步校验，校验通过之后触发一个请求，请求的目标页面需要打开新的页面，也就是请求的action的target属性为“_blank”，但是在测试时发现新开页面会被浏览器拦截



浏览器主要拦截非用户点击产生的弹窗，如直接触发，异步、定时器触发等情况。

如果是用户点击触发不会拦截。

如果是非用户点击触发会被拦截。

针对异步被拦截情况，可以使用以下几种方案：

    提前请求获取下载地址；
    先打开窗口，获取下载地址，再修改窗口地址；
    异步转同步。

不用表单下载，动态创建一个a标签，
设置href, target="_self"
然后a.click()
最后移除


# 21、在主框架下引入的iframe，如果检测这个iframe是否能打开，如果打不开则跳到404页面 

如果不跨域，那问题就很好解决了，有以下几种方案可以使用：

    使用 ajax 发送一个 head 请求，看状态是否返回 200 （之所以发送 head 请求，是轻量级，响应速度快）。
    检测 iframe 元素特征，在 iframe onload 触发后，检测 html 元素，例如有没有 title，内容是否为空等。

如果跨域的情况，要看你是否能控制跨域服务器。
    
https://github.com/haizlin/fe-interview/issues/2616

# 22、404页面有什么作用？

提升用户体验

# 23、对于rtl网站的适配有哪些方案？

transform: scaleX(-1)
或
direction: ltr;

# 24、表单可以跨域吗？

表单可以跨域。

form提交是不会携带cookie的，没有办法设置一个hidden的表单项，然后通过js拿到其他domain的cookie，因为cookie是基于域的，无法访问其他域的cookie。所以浏览器认为form提交到某个域，是无法利用浏览器和这个域之间建立的cookie和cookie中的session的，所以浏览器没有限制表单提交的跨域问题。

可以，举个常见的场景，有时候A系统到B系统 跳转就是form。

# 25、*p标签里面嵌套img标签会出现向上高3像素是什么原因？如何处理？

图片是内联元素，内联元素的对齐方式是按照文字基线对齐的，而不是文字底线对齐，所以会出现空隙。

    方法一：
    在 img 标签中使用 vertical-align 可以让图片完整填充父级容器。

    方法二：
    给 img 设置 display: block;

# 26、如何使用H5唤起原生地图APP（百度、高德、腾讯地图等）

 <iframe src="sinaweibo://qrcode">
    或
<a href="intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end"" >

或使用现在的唤起库 callapp-lib

# 27、写一个鼠标跟随的特效

# 28、如果一个标签元素同时出现两个class属性，两个class都会生效吗？为什么？

class类应该是生效的，具体怎么个执行书序取决于样式表中加载顺序，相同属性后来居上

# 29、H5怎么禁用长按复制的功能？

// 禁止长按图片保存，设置img样式
-webkit-touch-callout: none;
pointer-events: none; // 微信浏览器无法禁止，需加上这句

// 禁止长按选择文字
-webkit-user-select: none;

// 禁止长按呼出菜单
-webkit-touch-callout: none;

# 30、HTML5的video在手机端如何实现进来页面时就自动播放？

autoplay=true

但是现实是：基本所有浏览器都屏蔽了这个属性。
能实现的现在只有微信了，微信有一套自己的规则的内核，可以使用：controlslist="nodownload" poster="" x5-video-player-fullscreen="true" webkit-playsinline="true" x-webkit-airplay="true" playsinline="true" x5-playsinline 来达到自动播放的目的。

# 31、举例说明HTML5出来后，有哪些HTML标签被弃用了？

center
u
s
font .....
等等违反表现和结构分离原则的标签被弃用

# 32、HTML5如何监听video的全屏和退出全屏？

监听window.resize事件，判断document.fullscreenEnabled || document.fullScreen

监听fullscreenchange事件

document.addEventListener('fullscreenchange', (event) => {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If there isn't one,
  // the value of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});

# 33、写一个布局，当页面滚动一定高时，导航始终固定在顶部，反之恢复原位

使用粘性定位，position:sticky
记得使用的时候父元素不能使用overflow:hidden和overflow:auto属性，而且必须要指定top/left/bottom/right中任意一个值，父元素盒子不能小于该元素盒子高度。

# 34、说说base标签有什么作用？

base标签为页面上的所有链接规定默认地址.

<head>
    <base href="http://h-camel.com/show/" />
</head>

//略过其中结构

<a href="2679.html">说说base标签有什么作用</a>

# 35、html标签中的lang属性有什么作用？

根据lang属性来设定不同语言的css样式，或者字体

告诉搜索引擎做精确的识别

让语法检查程序做语言识别

帮助翻译工具做识别

帮助网页阅读程序做识别等等

# 36、说说如果meta标签没有写charset属性，将会如何？

可能会造成乱码

# 37、写一个左中右的满屏布局，左右固定220px,中间自适应并且要优先加载

* {
            padding: 0;
            margin: 0;
        }
        .main {
            position: relative;
        }
        .center {
            position: absolute;
            box-sizing: border-box;
            width: 100%;
            padding: 0 220px;
            overflow: hidden;
        }

        .fl {
            float: left;
        }
        .fr {
            float: right;
        }
        .fl,
        .fr {
            width: 220px;
            height: 100px;
        }

<!-- main {
    width: 100%;
    display: flex;
}


.left, .right {
    flex: 0 0 220px;
}

.center {
    flex: 1;
}

.left {
    order: -1;
} -->

# 38、如何关闭HTML页面在IOS下的键盘首字母自动大写？

autocapitalize=“off”

# 39、制作页面时，前端如何适应各种异形屏？
主要内容区域大小固定，固定在页面中间，两边可伸缩
width:1200px;
margin:0 auto;

# 40、HTML为什么要语义化？语义化有什么好处？

1.利于SEO
2.结构与表现分离
3.利于维护

# 41、什么是空元素？常用的空元素有哪些？

 没有闭合标签的元素是空元素

 <area>
<base>
<br>
<col>
<colgroup> when the span is present
<command>
<embed>
<hr>
<img>
<input>
<keygen>
<link>
<meta>
<param>
<source>
<track>
<wbr>

# 42、H5的Web Storage带来什么好处？


    存储的数据量更大，可以达到 5M；
    减少不必要的数据请求，不会自动把数据发送给服务器
    localStorage 可以把数据永久保存在本地，除非显示的清除或删除数据
    支持事件通知机制
    API 更加方便


# 43、当页面中使用application/xhtml + xml会出现什么问题吗？

要求比较严格，必须有head、body标签且每个元素必须是关闭的。

一些老的浏览器不支持，实际上，任何最新的浏览器都将支持application/xhtml+xml媒体类型。大多数浏览器也接受以application/xml发送的XHTML文档。

# 44、一般习惯把js写在</body>前，但有例外的情况吗？说说看

js的放置位置有三种：
（1）放在head标签内
（2）放在body标签内
（3）外部script


有，有写在head里面，还有写在后面
我都是写在后面，把所有代码都写在window.onload函数里面，这样等页面的所有元素加载完毕，js才会执行。


# 45、在H5中如何预加载音频？

可简单的通过audio标签实现，audio标签默认会预加载


# 46、请使用canvas画一个椭圆 

<script> 
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
</script> 

# 47、H5的哪些特性需要https支持呢？

service workers

navigator audio

# 48、button标签的type默认值是什么呢？

Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。

# 49、你认为一个好的布局应该是什么样的？有哪些需要注意的地方？

先布局整体,再细分到模块; 先抽离组件再分离业务

# 50、页面需要支持多语言，如果是你该怎么做？


    有多语言选项
    利用i18n来适配多语言




js题目（50）

# 1、实现一个函数sum, 满足以下需求:
sum() == 0
sum(1)(2)(3)() == 6
sum(3)(4)() == 7
sum(v1)(v2)...(vn)() == v1+v2+...+vn

function sum() {
	var args = arguments;
    var res = 0;
    for(var i = 0; i < arguments.length; i++) {
        res+=args[i];
    }
	if (arguments.length == 1) {
        res += arguments[0];
        console.log('res', res);
    	return sum;
	}
    return res;
}

console.log(sum(1)(2)(3)());

有bug，待想

# 2、写一个方法，实现树的路径查询[代码]

https://github.com/haizlin/fe-interview/issues/2805

# 3、给定特定的字符串，写个方法判断是否以元字母结尾

    (str)=>/[aeiou]$/i.test(str)

# 4、举例说明json的标准格式


    JSON数值 { "key" : value}

    {
        "age" : 18,
        "number" : 100
    }

    JSON字符串 { "key" : "value"}

    {
        "name" : "xiaoming",
        "nickname" : "mingming"
    }


    JSON数组 { "key" : [value]}

    {
        "color" : ["red", "yellow", "blue"],
        "weight" : [5, 2, 0]
    }



    JSON对象 { "key" : {value}}

    JSON对象数组

    {
        "products" : [
                      {"_id": "P001"},
                      {"name": "产品1"}
        ]
    }

    JSON数组对象 {"key":{"key1":[value1,value2]}}

# 5、使用js如何创建一个private方法？

const foo = (() => {
  const bar = () => {
    console.log('这是私有方法');
  };

  return () => {
    bar();
  };
})();

foo();

# 6、列举出JS的全局函数 

for(var key in window){
if(typeof window[key] == 'function'){
console.log(key)
}
}

# 7、js中的数字在电脑内存储为多少Byte？

js中的数字存储统一为64位浮点数，所以占内存大小为8byte

# 8、在js中undefined和not defined的区别是什么？

1.undefined

已经声明，但未赋值

2.not defined

未声明，报错

# 9、js的哪些操作可以改变作用域链？

？？？ 没看懂

比较有名的是eval的间接调用：

let foo = 42;

function bar() {
    let foo = 1;
    console.log((0, eval)('foo'));    // 42
}

bar();

# 10、Math.min() < Math.max() 返回结果是什么？为什么？

返回false，因为Math.min()返回Infinity，Max.max()返回-Infinity。

猜测Math.max的实现方式大致如下：

function max(...args) {
    return args.reduce((acc, cur) => cur > acc ? cur : acc, -Infinity);
}

# 11、class和普通构造函数有什么区别？

class 在语法上更贴合面向对象的写法，本质上还是prototype的语法糖。


   - 构造函数可以当作普通的函数调用，而class 只能使用new 关键字调用
   - class 内部默认启用严格模式
   - class 不存在变量提示（函数提交）在定义class前使用new调用会出错
   - class 内部定义的方法和属性都是不可以遍历的。
   - class 内部定义的方法都没有prototype（原型）
   - 当class内部没有constoructor函数时，会隐式的插入调用constructor（代表实例的this）

# 12、写一个js方法，输入指定类型的选择器(id，class，tagName)可以返回匹配的DOM节，要求兼容和性能

todo

# 13、写一个代理console.log的方法

function log() {
    console.log.apply(console,arguments);
}

# 14、实现一个寄生式组合继承

function Parent(name) {
    this.name = name
}

Parent.prototype.sayName = function() {
    console.log(this.name);
}

function Child(name) {
    Parent.call(this.name)
}

Child.prototype = Object.create(Parent.prototype)
Child.constructor = Child

# 15、说说你对RAIL性能评估模型的了解

R：Respponse，响应。一般指的是用户输入网页快速给出结果的过程，比如点击按钮，切换表单，启动动画之类的。
A：Animation，动画。指的是涉及 style，layout，paint，composite 过程的行为。比如：用户滚动页面，拖动刷新，页面动画等。
I：Idle，空闲。一般指用户看到网页到他们进行操作这一无交互时间段。
L：Load，加载。一般指网页加载这一段时间

# 16、假设要在UI渲染之前处理一些事情你该怎么办？


微任务， requestanimationframe

# 17、写个方法，实现对某个节点的拖拽

# 18、如果要你自己实现一个requireJS库，你该怎么做？

# 19、SeaJS和RequireJS有什么区别？

# 20、如何设计一个JS SDK？说说你的方法

# 21、如何设计一个pageAPI？说说你的方法

# 22、请说说DOM节点的操作如何优化？

todo

# 23、js的请求一般情况下在哪些地方会有缓存的处理？

# 24、requestAnimationFrame在EventLoop的什么阶段执行？

回流之前

# 25、你知道什么是空闲回调(requestIdleCallback)吗？

window.requestIdleCallback() 方法将在浏览器空闲时段内调用的函数排队，这使开发者能够在主事件循环
上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应，函数一般会按照先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间timeout，则有可能为了在超时前执行函数而打乱执行顺序

# 26、EventLoop有优点但也有缺点，请说说它的缺点是什么？

# 27、请说说以下两种原型的区别

var A = function() {};
var b = new A();
A.prototype = {
    n: 0,
    m: 1
}

和以下方式的声明有什么区别，为什么？

var A = function() {};
var b = new A();
A.prototype.n = 0;
A.prototype.m = 1;



    前者是重置了A的原型为一个新对象，后者是在A现有原型上添加属性


# 28、把对象转换到数字类型是如何转换的？
把对象转换到字符串类型是如何转换的？

const obj = {
  // 默认[Symbol.toPrimitive] 方法，删掉不影响输出结果
  [Symbol.toPrimitive](hint) {
    if(hint === 'number') {
      return this.valueOf();
    } else if (hint === 'string') {
      return this.toString();
    }
    return true;
  },

  valueOf() {
    return 42;
  },

  toString() {
    return 'foo';
  }
};

console.log(obj * 2);  // 84
console.log(`Hello, ${obj}!`);  // "Hello, foo!"

# 29、请举例说明比较运算符`>,>=,<,<=`的比较规则

# 30、写一个方法获取指定窗口的尺寸大小

# 31、写一个方法获取滚动条距离窗口顶部的距离

function getScrollTop(){
        var scrollTop = 0  
        if(document.documentElement&& document.documentElement.scrollTop){
            scrollTop = document.documentElement.scrollTop
        }else if(document.body){
            scrollTop = document.body.scrollTop
        }
        return scrollTop
    }

# 32、举例说明+运算符的运行机制

“+”在JS中除了数学运算，还有字符串拼接，“+”左右两边只要出现字符串，或者部分对象，则都按照字符串拼接处理
情形一： "+" 只有一边
let n = '10';
+n => 10 转为数字
++n => 11 转为数字后累加1
n++ => 11 转为数字后累计1

      情形二："+" 一边出现对象或者字符串
        10+{}  -> '10[object object]' 字符串拼接
        2 + ‘1’ -> '21'   字符串拼接


# 33、请说说focus、blur与focusin、focusout的区别是什么？

focus:当focusable元素获得焦点时，不支持冒泡；
focusin:和focus一样，只是此事件支持冒泡；
blur:当focusable元素失去焦点时，不支持冒泡；
focusout:和blur一样，只是此事件支持冒泡；
对于同时支持这4个事件的浏览器，事件执行顺序为focusin > focus > focusout > blur

# 34、举例说明判断浏览器是否支持某个事件的方法有哪些？ 

1.使用 in 运算符，检测对象中是否存在事件

var div = document.createElement('div'),
//是否支持触摸事件
supportTouch = 'ontouchstart' in div,
//是否支持方向转换事件
supportOtc = 'onorientationchange' in window;

# 34、接口请求时需要做哪些安全处理？怎么做？

在请求header上加后端给的token值

# 35、写个方法获取给定开始和结束时间的所有日期和月份

# 36、数组元素全倒排列并去重

# 37、函数的调用栈是怎么工作的？ 

1.首次运行JS代码时，会创建一个全局执行上下文，push到当前的执行栈中，每当发生函数调用，都会为该函数创建一个函数执行上下文并push到当前执行栈的栈顶
2.当栈顶的函数执行完以后，其对应的函数执行上下文将会从执行栈中pop出去，执行上下文的控制权将移动到当前执行栈的下一个执行上下文

# 38、说说你对堆栈跟踪的理解


# 39、用js写个算法算出筐里最少有多少个鸡蛋？

1449

for(let i=0;true;i+=63) {
    if(i%5===4&&i%6===3&&i%8===1) {
        console.log(i);
        break;
    }
}

# 40、js如何实现函数缓存？函数缓存有什么运用场景？


    what

    函数缓存，就是将函数运算过的结果缓存起来，这种做法是典型的用内存去换取性能的手段，常用于缓存数据计算结果和缓存对象。缓存只是一个临时的数据存储，它保存数据，以便将来对该数据的请求能够更快地得到处理。

    why
    比如我们有时只需要计算一次结果，不需要反复计算，但是每次执行方法又会执行计算过程，就可以将该部分结果缓存起来，提供下次使用；应用实际场景即是页面加载时如果需要请求长列表数据，如果我们只是简单地每次加载页面请求数据，那其实会造成很多没必要的请求，此时我们就可以将数据缓存起来，下次加载页面时直接使用即可。（可能还有其他用处，此部分仅为个人结合项目理解）
    how
        闭包
        高阶函数
        额外中间缓存（vuex/redux/localstorage）

# 41、Float32Array有几种构造方式？

# 42、什么时候在JS中使用Float32Array而不是Array？

# 43、举例说明你对TypedArray的理解，它的运用场景有哪些？

# 44、使用js写一个方法将数字转换为float,并取N位小数

parseFloat(5).toFixed(1) ?

# 45、写一个ASCII与Unicode码的互转的方法

# 46、写一个方法获取指定两个日期之间相隔的所有日期

# 47、new Function有什么应用场景？

将任意字符串转换为函数。比如从服务端拿回来一段函数语句（字符串），需要转为函数执行，就可以用new Function()
let str = "服务端返回的语句"
new Function(str)

# 48、计算从一个大数组中(如1万条数据)取出第一数据和最后一条数据的时间分别是多少？

console.time('aa');
for(var i=0;i<10000;i++){console.log(i);};
console.timeEnd('aa')

# 49、写一个方法将UTC时间和北京时间换算

UTC时间和GMT时间的值没什么太大区别：UTF = GMT +0，JavaScript在Date对象里面提供了一个getTimezoneOffset来获取本地时间相对于格林威治的时间差（GMT），以分钟为单位。
所以，换算UTC和北京的时间，就等同于换算GMT时间和北京的时间。

function revertTo(date, type) {
 // 因为格林威治时间和背景的时差是8个小时，这里为什么不用`getTimezoneOffset`来获取呢？是因为这个是获取当前的时间相对于GMT的时间，如果不是在中国，这个得出来就不是正确的了。
  const offset = type === 'Beijing' ? -8 : 8
  const time = date.getTime() + offset * 60 * 60 * 1000
  return new Date(time)
}

# 50、写一个方法判断一组数字是连值 

比如[1,2,3,4]，[9,0,1,2],这样的连值组合？连值是指12345678901234567890这样的数字相连的组合，像[1,2,3,4,5]是连值，但[1,3,4,5,6]不是，因为没有相连。
注：9和0相连
比如随便给你一组数，如果满足连值，则返回true

# 51、写一个方法，判断给定的几个数字是否相等，如[1,1,1,1]相等

new Set([1, 1, 1, 1]).size < 2

# 52、现在有一个宏任务，又有一个微任务两者同一层级，在微任务里面又有一个宏任务和一个微任务，请问执行顺序是什么,为什么？

外层微任务 => 内层微任务 => 外层宏任务 => 内层宏任务

###js 是单线程的， 有同步任务、异步任务； 异步任务又分为 微观任务与宏观任务；

    微观任务： js引擎发起的任务，如Promise、process.nextTick，mutationObserver;
    宏观任务： 宿主发起的任务，如 setTimeout、setInterval、setImmediate；
    执行顺序： 同步任务 -> 异步微观任务 => 异步宏观任务


    先微后宏

# 53、请问css/html/js/img的下载顺序是怎样的？都是并发执行的吗？

应该是按照html内容的先后顺序加载吧
css/js默认是阻塞式加载
img是异步加载
所以默认情况下应该只有img是并发执行的
另外，可通过script标签的async属性将js加载改成异步的

# 54、举例说明把一个数组扁平化的方法有哪些？

let testArray = [1,[2,3,[4,5]]

1、let result = testArray.flat()
2、let result = JSON.stringify(testArray).replace(/([]))/g, '').split(',')
3、while (ary.some(Array.isArray)) {
ary = [].concat(...ary);
}

# 55、写一个方法计算N年时农场里有几只羊（见下文描述）？


css（50）

# 1、用css3实现伪3D的文字效果

text-shadow 颜色、偏移量、模糊半径，颜色、偏移量、模糊半径

# 2、css如何让height:100%起作用？

普通元素：当前元素的包含块的高度是明确的即有效，当前元素的包含块高度也是百分比，就再往上找

绝对定位（absolute）元素的高度百分比计算是往上找直到找到一个非static的元素，就以这个元素作为高度计算依据，如果没找到就是html的高度作为计算依据，body默认没有高

html的高度百分比也是相对浏览器窗口高度

# 3、css的height:100%和height:inherit有什么区别？

在 absolute ，height:100%对应的是上一个relative的元素

height: inherit依然是他的父级元素

# 4、如何解决html设置height：100%无效的问题？

在外层包一个给定高度的div
height：100vh

# 5、用css画出中间一个大圆，四周有12个小圆环绕并和大圆是同心

todo

# 6、用css画出两个大圆相交，可以在各自圆及相交部分输入文字

todo

# 7、用css画出一个圆圈，里面有个对号

todo

# 8、用css画出一个圆圈，里面有个叉号（不能用英文字母x）

todo

# 9、CSS content属性特殊字符有哪些？

https://blog.csdn.net/zx562602419/article/details/81020342

# 10、使用css画个鸡蛋

todo

# 11、使用css画一根燃烧中的蜡烛

todo

# 12、写出在不固定宽高的元素在固定高度的情况下水平垂直居中的方法

flex布局；还有就是可以用定位也可以实现等等；
flex：父div：｛display：flex； justify-content: center;align-items: center;｝；
定位方法，相对定位在通过偏移元素实现水平垂直居中等等，我常用就是这两种，使用的时候注意兼容性

.parent{ 
    position: relative;
}

.child{ 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translateX(-50%) translateY(-50%);
}

---------------------------------------------------

.parent{
    position: relative;
}

.child{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:100px;
    height:100px;
    margin:auto; 
}

# 13、一个项目中有很多无用的css代码，怎么找到并清除这些无用的代码？

1.使用浏览器插件
2.使用PurifyCSS
3.chrome浏览器 F12审查元素的Audits，手动删

# 14、你们团队中css的class命名采用的是什么方式呢？下划线还是横线还是驼峰？

形式 .a .a-b

不用驼峰和_，因为这两样都需要 shift 辅助输入, 驼峰越多，按下shift 键的次数就越多。

# 15、举例说明CSS特性检测的方式有哪些？

原生的 @supports 的性能肯定是最好的，而且无需引入外部 javascript ，首推这个，但是无奈兼容问题，目前来看不是最好的选择。


Modernizr 功能强大，兼容性好，但是需要引入外部 javascript，多一个 http 请求，如果只是进行几个特性检测，有点杀鸡用牛刀的感觉。
针对需要的特性检测，使用 javascript 实现一个简单的函数，再把上面用到的方法封装一下：

/**
    用于简单的 CSS 特性检测
    @param [String] property 需要检测的 CSS 属性名
    @param [String] value 样式的具体属性值
    @return [Boolean] 是否通过检查
*/

    (function(property, value) {
        // 用于测试的元素，隐藏在页面上
        var ele = document.createElement('div');
        // 只有一个参数的情况
        if (arguments.length === 1) {
            if (property in ele.style) {
                return true;
            }
            // 两个参数的情况
        }
        else if (arguments.length === 2) {
            ele.style[property] = value;
            if(ele.style[property]) {
                return true;
            }
        }
        ele = null;
        return false;
    })("font-size",'10px');

# 16、如何使用css给一个正方形添加一条对角斜线？

   background:linear-gradient(45deg,transparent 49.5%,deeppink 49.5%,deeppink 50.5%,transparent 50.5%);

# 17、说说position:sticky有什么应用场景？

吸顶效果

# 18、用css画出一把刻度尺

todo

# 19、你会经常用到伪元素吗？一般都用在哪方面？

清浮动

# 20、使用负文本缩进text-indent: -9999px时有没有遇到过什么奇怪的问题呢？怎么解决？

？？？

# 21、使用css实现一个loading的效果

animation: donut-spin 1.2s linear infinite;

@Keyframes donut-spin {
   0% {
     transform: rotate(0deg);
   }

   100% {
     transform: rotate(360deg);
   }
}

# 22、说说sroll-snap-type属性的运用场景有哪些？相关联的属性还有哪些？

    scroll-snap-align

    https://www.cnblogs.com/coco1s/p/11993942.html

# 23、使用css实现气泡框的效果

html

# 24、:placeholder-shown和:focus-within这两个伪类你有使用过吗？说说看

:focus-within 是一个CSS 伪类 ，表示一个元素获得焦点，或，该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配 :focus 伪类。（shadow DOM 树中的后代也包括在内）

:placeholder-shown CSS 伪类 在 或 <textarea> 元素显示 placeholder text 时生效.

# 25、使用css实现霓虹灯效果

todo

# 26、为什么说css的选择器是从右向左匹配？

从右往左匹配会首先排除很多错误的匹配，打个简单的比方，孩子只有一个父亲，但是父亲可以有很多个孩子，从孩子找父亲简单，从父亲找某个指定的孩子可能就会找到错误的孩子。当然，选择器也是得优化的，不然哪怕从右往左匹配也会有一些性能上的问题。

# 27、表列举一些你认为最“昂贵”的css属性并解释为什么

filter  transform

# 28、当拿到一个新的项目，让你对这个项目的css做下架构设计，你该如何下手？

    公共变量（主题色/主要空隙/主要字号字体等）
    编译器（scss/less/postcss/stylus）
    自适应方案（栅格/rem/vw/pt）
    目录约定（mixin/common/theme/module/response）
    私有化方案（scoped/css module/css in js）

# 29、除了可以用js跟踪用户信息外，如果不用js，使用纯css怎么做呢？


可以利用 css 的伪类 :hover :active :focus 之类的监听用户行为，然后给指定的url 发送请求。

#link:active::after {

content:url('xxx/xxx?active');

}

# 30、使用css写一个红绿灯交替的动画效果

todo

# 31、使用css画个镰刀形的月亮

todo

# 32、你了解CSS Houdini吗？说说它的运用场景有哪些？

Houdini是一组底层API，它们公开了CSS引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展CSS。 Houdini是一组API，它们使开发人员可以直接访问CSS 对象模型 （CSSOM），使开发人员可以编写浏览器可以解析为CSS的代码，从而创建新的CSS功能，而无需等待它们在浏览器中本地实现。

# 33、css的负边距有哪些应用场景？

垂直水平居中
通过伪元素扩大元素覆盖范围

# 34、clear属性只对块级元素有效么？为何无法应用于行内元素？

block元素浮动之后已经脱离了文档流了，排列的顺序都不一样了，所以清除了之后有效果。
inline-block还是在文档流里面，加浮动不加浮动都没有什么作用的，所以清除也没有影响

如图片被文字环绕

# 35、你用过css的tab-size属性吗？浏览器默认显示tab为几个空格？

tab-size 属性规定制表符（tab）字符的空格长度。

在 HTML 中，制表符（tab）字符通常显示为一个单一的空格字符

# 36、如何让背景图片固定不随滚动条滚动？

background-attachment:fixed

# 37、举例说明与打印有关的属性有哪些？

page
page-break-before
page-break-after
page-break-inside

# 38、请写出font属性的快捷写法

p {
    font: italic bold 12px/20px arial, sans-serif;
}

# 39、使用css写一个垂直翻转图片的效果

transform: rotateX(180deg);  

# 40、css中的url()要不要加引号？说说你的理解

标准是要加的，不加也能用
但是从安全角度上看，最好加上，否则容易被xss攻击

----------------------------------------------

可以加，也可以不加。这个跟html标签的属性书写可以加引号也可以不加引号是一样的道理，当然如果属性中含有特殊字符比如空格则需要加空格，否则会引起浏览器解析错误。如果想养成良好的程序书写习惯，则最好加上引号，这是标准做法。

但是从安全角度来讲是要加上的...
否则容易被xss
因为url里面加了引号的话意味着url里面的内容是字符串...
但是不加引号的话传过来的万一是 下面的这种格式的话：

);url("http://www.xss.xss")

就把cookie什么的可能泄露出去了

# 41、如何使用css显示a链接的url？

.some-a-tag:before {
  content: attr(href);
}

# 42、怎么给手持设备添加特殊样式？

-webkit-touch-callout:none  禁止长按弹出菜单

# 43、如何使用伪元素实现增大点击热区来增加用户体验？

.extend-via-pseudo-elem {
    position: relative;
}

.extend-via-pseudo-elem::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
}

# 44、判断如下边框的颜色，并解释为什么[代码]？

<p style="color: red;border: 1px solid;">给p设置border，但不给它设置border-color</div>

    red
    当边框颜色未设置值时，边框颜色则和当前字体颜色一致

# 45、 box-sizing的宽度包含了哪些？

box-sizing: border-box;

内容 content = width - 2border - 2padding

box-sizing:  content-box;

内容 content = width + 2border + 2padding


# 46、给一个图片设置透明有哪些方式呢？

2.visiblity: hiddend;
3.opacity: 0;

# 47、不用换行的标签，怎么伪元素实现换行的效果？

使用\A 换行，并且指定white-space: pre保留换行效果
.foo::after {
  content: '123\A 456';
  white-space: pre;
}

# 48、固定的外框尺寸，里面的图片尺寸不固定，如何让图像自适应外框呢？

使用 object-fit ，用法类似background-size，可选的值：cover、contain、fill等

# 49、如何让表格单元格等宽显示？

table-layout: fixed;
width: 100%;

# 50、H5如何禁止显示系统菜单？

touch-callout:none;
user-select:none;

# 51、用css画一个平行四边形

<!-- 十扣 -->

<div class="parallelogram"></div>

.parallelogram {
  margin: 30px;
  width: 200px;
  height: 100px;
  border: 1px solid slateblue;
  transform: skew(-20deg);
}

# 52、如何阻止:hover、:active等鼠标行为状态的触发？

css属性：pointer-events: none;


   - 避免重复提交---按钮点击后 即增加该属性 使其不D:\Project\FE\DailyPractice\6.29\复习\html使用svg再能被点击
   - 链接不可跳转---指定a标签加上该属性
   - 点击被上方元素覆盖的下方链接---上方元素添加该属性

# 53、假如css的分号写在声明块之外，将会发生什么呢？解释下原因

<style>
p {color: blue};
.p1 {color: red}
.p2 {color: green}
</style>

<p class="p1">红色字体</p>
<p class="p2">绿色字体</p>

这样写第一条规则的分号会被放到第二条规则的句首解析，导致第二条解析报错，从而略过。
第三行不受影响


<style>
p {color: blue}
;.p1 {color: red}
.p2 {color: green}
</style>

# 54、父元素下有子元素，子元素也有高度但父元素的高度为何为0呢？分析下可能出现的原因及解决方法


可能出现的情况 即子元素脱标的情况：

    浮动
    固定定位
    绝对定位

解决方案：

- 父元素底部增加一行 <div style='clear:both;'></div>

缺点:添加了无意义的空标签 违背了结构表现分离

- 父元素一起浮动

本质是一个将错就错的方法

- 利用BFC来给父元素增加CSS

如给父元素加上 overflow:auto; 或display:table-cell;或display:table-caption;等

- 利用after伪元素 父元素增加after伪元素

parent:after{
   content: ".";
   display: block;
   height: 0px;
   clear: both;
   visibility: hidden;
}

- 更优雅的改进方案 ---常用

.clearfix:after,
.clearfix:before{
  content: " ";
  display: table; 
}  
.clearfix:after{
  clear: both;
}


# 55、使用css实现手风琴的效果

todo

# 56、使用css实现蒙版的效果

filter: blur(1px)

# 57、用css实现一个等腰三角形的小图标

.box {
    width:0;
    height:0;
    border-top: 20px solid red;
    border-bottom: 0px solid transparent;
    border-right 0px solid transparent;
    border-left: 0px solid transparent;
}

# 58、你有用过animation-fill-mode属性吗？它有什么应用场景？

动画播放完成之后的动作，比如可以定义动画播放完成之后回到初始状态

# 59、使用css实现太阳自转同时地球围着太阳公转的效果

todo

# 60、使用纯CSS实现3D按钮效果

todo

 算法题 3










