js题目：（50）

# 1、js如何实现打印指定的区域？ 

<link media="print" href="./print.css" />



const btn = document.querySelector(`[data-uid="btn"]`);
    const dom = document.querySelector(`[data-uid="print"]`);
    btn.addEventListener(`click`, () => {
        printDOM(dom);
    });
    const printDOM = (dom) => {
        // debugger;
        const html = dom.innerHTML;
        // about:blank
        const newBlankWindow = window.open("", "_blank");
        newBlankWindow.document.write(html);
        newBlankWindow.document.close();
        newBlankWindow.print();
        newBlankWindow.close();
    }

# 2、用js实现最大化和最小化窗口

document.fullscreen()
document.fullscreenElement()
document.exitFullscreen()



const toggleFullScreen = () => {
    if (!document.fullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        // false, null
    } else {
        document.exitFullscreen();
        // true, html dom
    }
}

document.addEventListener("keydown", (e) => {
    // Enter
    if (e.keyCode === 13) {
        toggleFullScreen();
    }
}, false);


# 3、举例说明什么是匿名函数？它有什么优缺点呢？

优点 1、不用为函数名烦恼。 2、创建函数作用域，减少全局变量的使用

缺点：可能造成内存的泄漏


# 4、举例说明js创建数组有哪些方法？

1、数组字面量法 var a = []

2、new 构造函数方法 new Array(n)

# 5、用js封装一个对cookie操作的方法 

// getCookie 两种方法，一种正则，一种for循环
function getCookie (name) {
    let cookieArr = document.cookie.split('; ');
    let len = cookieArr.length;

    for (let i = 0; i < len; i++) {
        let item = cookieArr[i].split('=');
        if (name === item[0]) {
            return decodeURIComponent(item[1]);
        }
    }
    return '';
}
function getCookie2 (name) {
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    let arr = document.cookie.match(reg);
    if (arr) {
        return decodeURIComponent(arr[2]);
    } else {
        return '';
    }
}

# 6、写一个网络不通时则提醒用户的方法

```js


    检测是否处于在线状态，如何判断在线状态（onLine）？通俗的讲可能就是是否联网，然而有可能是处于局域网，虽然没有连接万维网，如果服务可达也可称为onLine状 态。因而，单纯的判断网络是否联通并不能完整的检测onLine状态，故增加XHR请求来协助判断。

/**
 * @description: 检测当前url主机地址是否可达
 * @return: true 服务器可达（online） false 服务器不可达(offline)
 */
function serverReachable() {
    let xhr = new(window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP");
    xhr.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.random(), false);
    try {
        xhr.send();
        status = xhr.status;
        return status >= 200 && status < 300 || status === 304
    } catch (error) {
        return false
    }
}

/**
 * @description: 检测浏览器是否处于联网状态
 * @return: true 联网 false 没有联网
 */
function networkReachable() {
    return navigator.onLine
}

/**
 * @description: 检测数据是否是布尔类型
 * @param {type} 数据
 * @return: true: 是布尔类型 false: 不是布尔类型
 */
function isBoolean(value) {
    return Object.prototype.toString.call(value) === "[object Boolean]"
}

/**
 * @description: 检测是否处于在线状态
 * @return: true: 在线（onLine） false: 非在线（offLine）
 */
export default function checkIsOnLine() {
    let networkStatus = networkReachable();
    if (isBoolean(networkStatus)) {
        if (networkStatus) {
            return true
        } else if (serverReachable()) {
            return true
        } else {
            return false
        }
    } else {
        // 浏览器不支持onLine属性，降级使用服务是否可达来判断
        return serverReachable()
    }
}
```

# 7、你对window的属性devicePixelRatio有了解吗？说说它有什么实际应用场景？

返回设备物理像素分辨率与CSS像素分辨率的比值

# 8、js垃圾回收的方式有哪些？

1、标记清除
2、引用计数

# 9、异步加载和延迟加载有什么区别？

异步加载：async

浏览器会在解析HTML的同时进行加载javascript，一旦该javascript加载完毕，浏览器会暂停HTML的加载并执行javascript，之后继续HTML的加载。

延迟加载： defer

同样是解析HTML的同时进行加载javascript，但是浏览器会等待HTML全部解析完毕后再进行执行已加载的javascript。

# 10、举例说明你对事件代理的理解

addeventListener('click', function(e) {
    e.target.style
})

# 11、请解释下NaN表示什么呢？typeof NaN结果是什么？
NaN : not a number.
'number'

# 12、解释下offsetWidth、clientWidth、scrollWidth这三者的区别是什么？

offsetWidth：整体的实际高度
clientWidth：可视区的高度
scrollWidth：已滚的高度

# 13、各浏览器的事件机制有什么不同？ 如何阻止事件冒泡？

ie：e.cancelBubble()；

e.stopPropagation()；

# 14、实现一个下拉不到底的橡皮筋效果

todo


# 15、说出至少十条你理解的js规范

1.尽量使用const去定义常量，且采用大写加_，如 MAX_COUNT = 10
2.尽量写代码注释；
3.try catch不确定的代码块；
4.Promise的reject处理；
5.及时清理不用的变量、定时器；
6.switch 语句应使用break中断，而不是return；
7.命名语义化；
8.尽量减少对闭包的使用
9.尽可能使用if判断做容错处理；
10.尽量避免使用内置方法或属性名字去定义，如var self = this;


# 16、前端异步的使用场景有哪些？

ajax请求 , 各种事件 , 定时器 延时器

# 17、写一个方法判断页面滚动方向

```js
var lastScrollTop = 0, lastScrollDirection;
var event = new Event('scroll-direction-change');

scroller.addEventListener("scroll", function(e) {
  var scrollTop = e.target.scrollTop;
  var direction = scrollTop - lastScrollTop > 0 ? 1 : -1;
  if (lastScrollDirection !== direction) {
    event.direction = direction;
    scroller.dispatchEvent(event);
    lastScrollDirection = direction;
  }
  lastScrollTop = scrollTop;
});

scroller.addEventListener("scroll-direction-change", function(e) {
  console.log(e.direction > 0 ? '向下滚' : '向上滚', e);
});

```
# 18、写一个方法来获取div到浏览器窗口的高度

1、
element.getBoundingClientRect().y
2、 ？？？
const getElementDistance = (element: any) => {
    const offsetTop = element.offsetTop // obj 距离上方或上层控件的位置
    const scrollTop = document.documentElement.scrollTop  // 滚动高度
    return offsetTop - scrollTop
  }

getElementDistance(document.getElementById('element'))

# 19、举例说明constructor和instanceof的区别是什么？

constructor 是 object 的属性之一，instanceof是运算符

constructor的结果是方法，instanceof是布尔值

constructor获取的是原型链的最顶层，instanceof 可以判断是否属于原型链的任意一层

# 20、写一个方法获取div的宽高

const {width, height} = el.getBoundingClientRect()

# 21、你知道js的函数重载是什么吗？

函数重载就是具有相同的名字但是参数数量不一样的函数

# 22、请写出几种匿名自执行的写法（至少三种）
(function() {
    
})()

(function() {
    
}())

+ function() {
    
}()

~~ function() {
    
}()

# 23、写一个方法找出指定一维数组所有不重复的元素和个数

重复元素的 indexOf 和 lastIndexOf 输出的下标不一样
const setArray = arr => {
    return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v));
};

# 24、举例说明这三种方法map、reduce和filter的区别是什么？


1、根据已有数组的每个元素生成一个长度相同的另一个元素。

map , 不改变原数组

2、遍历一个数组的所有元素与上一次遍历的结果，最终生成一个结果。

[1, 2, 3].reduce((acc = 0, e) => { 
    // acc为 每次return 后的值，初始值为0，e为数组中每一项
    return acc + e 
}); 

3、根据条件过滤一个数组，将满足条件的元素存入一个新的数组中。

[1, 2, 3].filter(e => e > 2 );  // [3]


# 25、遍历数组和对象的方法都有哪些？

数组：

forEach 数组
for 数组
for of 数组

var myArray = [1, 2, 3]
for (var value of myArray) {
  console.log(value);
}

map
reduce
filter

对象：

for in 对象（value 为 key） && 数组（value 为 index）
var myArray = {a: 1, b: 2}
for (var value in myArray) {
  console.log(value);
}

var myArray = {a: 1, b: 2}
Object.keys(myArray) // [a, b]
Object.values(myArray) // [1, 2]


# 26、写一个方法从数组中随机抽取N个不重复的元素

会了

indexOf Math.random()

# 27、请实现一个计算器的功能

TODO

# 28、请说说你对try/catch的理解，平时有在哪些场景会用到呢？

包裹可能会出错的代码

# 29、说说你对js排序的理解，你有了解哪些算法呢？

无答案

# 30、写一个方法判断大括号{}是否闭合

var isClosed = function(str, tag = ['{', '}']) {
  const stack = [];
  for (let i in str) {
    const val = str[i];
    if (tag[0] === val) {
      stack.push(val);
    } else if (tag[1] === val) {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

# 31、举例说明什么是短路求值？

|| 和 && 

const number = test || 0;  test 为 true 则反弹赋值为 test，否则为0，防止number是什么 undefined，null，false，nan 等奇怪的值

const number = test && test.value;   test 为 true 则向下走赋值为 test.value，不为 true 则反弹为 false，这样可以防止test为空时候，test.value报错

# 32、使用js获取鼠标坐标

document.body.addEventListener('mousemove', ({ clientX, clientY }) => {
    console.log(clientX, clientY);
});


# 33、js依赖注入的实现思路是什么？它有什么优缺点呢？

无答案

# 34、用js实现动态改变根元素字体大小的方法

事件 + a.style.fontSize 

# 35、说说你对异常处理和错误处理的理解

异常通常指接口、网络、服务器报错
错误通常指程序本身运行时报错

# 36、说说js跳出循环return、break、continue的区别？

for(var i=1;i<=10;i++) { 
    if(i==8) { 
        break; 
    } 
    document.write(i); 
} 

return 是跳出循环，并且返回一个值 8
break是直接跳出循环并且最后一个循环值不执行；1,2,3,4,5,6,7
continue是跳出循环并进入下一个循环 1,2,3,4,5,6,7,9,10

# 37、js事件中currentTarget和target的区别是什么？

e.currentTarget 事件绑定的元素 ul
e.target 则是事件触发的元素 li

# 38、写例子说明js中自定义事件的使用与触发

``` js
/* 创建一个事件对象，名字为newEvent，类型为build */
var newEvent = new CustomEvent("build ", {
  detail: {
    dog: "wo",
    cat: "mio"
  },
  bubbles: true,
  cancelable: true,
  composed: true
});
/* 给这个事件对象创建一个属性并赋值 */
newEvent.name = "新的事件！";

/* 将自定义事件绑定在document对象上，这里绑定的事件要和我们创建的事件类型相同，不然无法触发 */
document.addEventListener("build ", function(e) {
  console.log("你触发了自定义事件！" + newEvent.name) 
  console.log(" event.detail.dog:" + event.detail.dog + "\n event.detail.cat:" + event.detail.cat)
},
false)
/* 触发自定义事件 */
document.dispatchEvent(newEvent);
```

# 39、你有使用过ExtJs吗？说说它的优缺点是什么？

无答案

# 40、你有使用过BackboneJS吗？说说它和vue有什么区别？

无答案

# 41、请比较下for、forEach、for of的性能的性能

1.for 最好
2.forEach与for of 相差无几 平均测试下来forEach略高for of
3.forEach 无法通过 break跳出 for of内存占用上有一定的优势

# 42、微任务和宏任务有什么区别？

宏任务：script整体代码、setTimeout、setInterval...
微任务：Promise.then、Object.observe、process.nextTick...
运行机制：当前宏任务执行结束 -> 是否有微任务 --> 执行当前微任务 --> 执行下一个宏任务

# 43、举例说明object.freeze有哪些用途呢？

Object.freeze() 方法可以冻结一个对象或数组。 可以提升性能。
它和const 完全不同

# 44、箭头函数的this值继承于哪里

继承自包裹该箭头函数的最近一层的非箭头函数的this值

定义时外部作用域?

# 45、getelementbyId和queryselect平时经常使用哪一个？说说你的看法

正常获取某个元素，用querySelector比较多，总不能给每个元素都上个id吧。

在操作表格时，用getElementById比较好，因为所有input都具有id属性，而且性能会比较高。

# 46、window.console.log()和console .log()有区别吗？体现在哪里？

不一样，window.console.log只能在浏览器中使用

console.log在浏览器、Node等其他环境中都可以使用


# 47、用js实现一个导航吸顶效果

写好吸顶样式
监听滚动事件，到某一位置时候替换css

# 48、如果让你把把html页面导出为pdf，不用插件的话，你该怎么做？

window.print()方法可以将当前页面打印，然后选择pdf格式

# 49、写一个让一句话随着鼠标移动的小插件

目标： 鼠标上绑一句话

cursor: url() default;

xxx todo

# 50、请分析020-088=?的过程及结果

020 被识别为 8 进制，即 16；
088 不能转为 8 进制，即 88；
然后运行减法，得到 -72。


html题目：（50）

# 1、请问WebSql是HTML5的一个规范吗？

WebSqL 并不是 HTML5 的规范。它是一个独立的规范，引入了一组使用 SQL 操作客户端数据库的 APIs。
可以理解为在浏览器中操作一个 Sql 数据库，在移动端上支持程度会比较好，现在已经不在支持。

现在如果在前端想要进行大数据的存储应该使用 IndexedDB。

# 2、你知道什么是锚点吗？它的作用是什么？怎么创建一个锚点？

name="ss"

<a name="end" href="#begin">jump to begin</a>

这里跳name="begin" 的a标签 或者 id="begin" 的任意标签，这种元素叫锚点

# 3、table去除边框的方法有哪些？

1、border：0/hidden/transparent
2、border-style: hidden
3、border-width: 0; 
4、border-color: transparent;

# 4、触发form表单自动提交的方式有哪些？

form里只有唯一个input时候,回车即提交表单.

```
<input type="submit">
<button type="submit>
```

# 5、canvas默认画布的尺寸是多大？怎样设置才能不会变形？

默认画布尺寸为300*150 不加单位。

如果直接在css中设置canvas元素的width和height会导致画面变形。

如果不想画面变形可以直接在标签中设置，或者通过js来设置属性的宽高。
<canvas width='300' height='200' id= 'a'>

var can = document.getElementById('a')
can.width ='500';
can.height = '300'

# 6、Web Worker线程的限制是什么？ 

（1）同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

（2）DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

（3）通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

（4）脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

（5）文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

# 7、如何刷新浏览器的应用缓存？

浏览器缓存可分为强缓存和协商缓存。
强缓存指的是设置了expires或者cache-control:max-age的请求，此类缓存在设定的过期时间之前刷新不会再次向浏览器发起请求，直接由客户端决定使用缓存进行页面展示。


协商缓存指的是未设置强缓存对应字段的缓存，浏览器会向服务器发送请求，并带IF-Modified-Since和IF-None-Match字段，服务器对应的返回字段为Last-Modified或 Etag，如果在etag未更改 或 last-modified 的时间早于IF-Modified-Since 则服务器不返回文件，使用浏览器本地缓存。

回到问题，如何刷新应用缓存。

当你直接点击浏览器的刷新按钮或者F5刷新时，浏览器会忽略强缓存，必定向服务器发起请求，但是如果服务器返回304则会继续使用本地缓存。


ctrl+f5等于是给请求都加上 Cache-Control: no-cache 头,和打开chrome控制台 勾上 disable cache原理一致

\\

按F5或浏览器刷新按钮
浏览器会在请求中附加必要的缓存协商，但不允许浏览器直接使用本地缓存，它能够让 Last-Modified、ETag发挥效果，但是对Expires无效。

按Ctrl+F5或按Ctrl并点击刷新按钮
这种方式就是强制刷新，总会发起一个全新的请求，不使用任何缓存

# 8、HTML5的服务器(server-sent event)发送事件有什么应用场景？

两种服务端推送技术的简单对比:
SSE                         WebSocket
服务器到浏览器的单向通信     两端之间的双向实时通信
不兼容IE                       兼容性更好
协议实现断线重连与消息追踪   不在协议范围内, 需要手动处理
实现简单, 复用HTTP         独立于Http, 实现较复杂

回到问题, 在客户端请求不影响服务端推送数据或客户端请求以及客户端请求不密集的情况下可以考虑使用SSE代替WebSocket.

    邮箱: 实时获取新邮件
    后台性能监控: 实时更新监控数据
    天气预报: 实时更新天气信息


# 9、如何让textarea高度自适应呢？

通过设定min-height + height: auto

# 10、请说说应用缓存中的回退和网络分别是什么？

应用缓存中的回退，指在服务器不可访问时，将会显示某文件。

FALLBACK:
/home/ /homeoffline.html


网络命令描述不需要缓存的文件，例如以下代码中，我们说”home.aspx”永远都不应该被缓存或者离线访问。某文件必须在线访问

NETWORK:
home.aspx

# 11、如何让textarea标签中的内容原格式输出？

加个 code标签 或者 <pre> 标签

 或者 设置css属性
white-space: pre;

<textarea name="demo" id="" cols="30" rows="10">
   <code>
     <span>
       <i></i>
     </span>
     <div></div>
   </code>
 </textarea>

# 12、说说你对HTML5的keygen标签的理解，它的作用是什么？

<keygen>是为了方便生成密钥材料和提交作为 HTML form 的一部分的公钥

# 13、form标签定义请求类型和请求地址分别是哪个属性？

请求类型：method属性：get/POST

请求地址：action属性；： url

# 14、如何实现应用缓存？说说你对manifest的理解 

https://segmentfault.com/a/1190000009047702

# 15、请说说<pre>和<code>标签的区别？

pre里的内容会保留换行符和空格，code里的不会保留

pre标签是块级元素，code标签是行内元素

# 16、SGML（标准通用标记语言）和HTML（超文本标记语言），XML（可扩展标记语言）和HTML的之间有什么关系？


SGML 衍生出 XML,HTML，这也是他们需要指定DTD来区分的原因

XML 结合 HTML => 严格的XHTML

HTML5不再基于SGML，而是基于html

# 17、说说你对表单属性type="hidden"的理解，它的运用场景有哪些？

存CSRF token，防止CSRF攻擊

1 隐藏域在页面中对于用户是不可见的，在表单中插入隐藏域的目的在于收集或发送信息，以利于被处理表单的程序所使用。浏览者单击发送按钮发送表单的时候，隐藏域的信息也被一起发送到服务器。

2 有些时候我们要给用户一信息，让他在提交表单时提交上来以确定用户身份，如sessionkey，等等．当然这些东西也能用cookie实现，但使用隐藏域就简单的多了．而且不会有浏览器不支持，用户禁用cookie的烦恼。

3 有些时候一个form里有多个提交按钮，怎样使程序能够分清楚到底用户是按那一个按钮提交上来的呢？我们就可以写一个隐藏域，然后在每一个按钮处加上οnclick="document.form.command.value="xx""然后我们接到数据后先检查command的值就会知道用户是按的那个按钮提交上来的。

4 有时候一个网页中有多个form，我们知道多个form是不能同时提交的，但有时这些form确实相互作用，我们就可以在form中添加隐藏域来使它们联系起来。

5 javascript不支持全局变量，但有时我们必须用全局变量，我们就可以把值先存在隐藏域里，它的值就不会丢失了。


# 18、请说说viewport是什么？在什么时候下使用？有什么作用？

viewport：视口当前可见的部分叫做可视视口。
可视视口可能会比布局视口（layout viewport ）更小，因为当用户缩小浏览器缩放比例时，布局视口不变，而可视视口变小了。


在head加入这行，把默认的layout viewport的宽度设为移动设备的屏幕宽度，也就是把当前的viewport宽度设置为设备物理屏幕的宽度，实现全屏的效果

<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">


# 19、本地存储的生命周期是什么？

cookie: expire 和 max-age 都能控制数据的存储时间。expire 是一个绝对的过期时间，max-age 是文档被访问之后的存活时间（是相对时间）。默认是 session

sessionStorage: 当会话被关闭后（浏览器、标签页被关闭），就会被清除。与 localStorage 用法一样。
localStorage: 除非被主动清除，不然永久储存在浏览器中

IndexedDB: 没有过期时间，除非主动清除。

# 20、input的onblur和onchange事件区别是什么？

onchange是指值改变并且失去焦点时触发的事件
onblur失去焦点时就触发，不管值有没有改变

# 21、怎样把整个页面中的内容设置成只读，不可编辑的状态？

1.将所有dom设置为disabled
2.搞个透明，全屏的最上层的div元素
3、绑定 input 在 focus 时立马触发 blur

body {
  pointer-events: none !important;
}

# 22、HTML5如何使某个页面元素或整个页面可编辑？

让某个元素可以编辑，可以使用 contenteditable 属性。
让整个页面可编辑可以使用 document.designMode 属性。

# 23、举例说明如何在页面中添加数学公式？

？

# 24、说说你对small标签的认识，有哪些应用场景？

HTML 中的元素將使文本的字体变小一号。(例如从大变成中等，从中等变成小，从小变成超小)。

在HTML5中，除了它的样式含义，用于表示边注释和附属细则，包括版权和法律文本

# 25、使用标签怎样对一个单词标志缩写呢？

<abbr>标签可以用于来展示缩写字符；

# 26、不用h标签、css和js怎么实现多个字的字体连续放大的效果？

HTML 中 font-size的继承属性

# 27、HTML5有哪些存储类型？它们之间有什么区别？

cookie 最大 4k，服务器携带
localstorage 最大 5M-10M, 所有同源 tab 共享, 能持久化存储, key-value 存储, value 只存字符串
sessionStorage 无大小限制, 只在当前 tab 有效, tab 关闭即失效, key-value 存储, value 只存字符串
indexedDB  key-value 存储,value 可以任意类型, 同源, 支持事务, 最大 250M, 兼容 ie10
web sql  支持版本,事务,支持 sql 语句, 不兼容 ie

# 28、HTML5的video在有的移动端设备无法自动播放？怎么解决？

<!-- 1、利用微信的JSAPI的创建页面监听WeixinJSBridgeReady()是实现： -->
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>

2、添加控制属性（controls），让用户手动触发 

controls="controls"

3、添加触摸监听，当用户打开浏览出，触摸屏幕事件来监听播放

document.addEventLinstener('touchstart',function{ document.getEmlementById(“audios").play } )

# 29、你有用过bdo标签吗？举例说明它的作用是什么？

html

# 30、你有使用过figure标签吗？说说你对它的认识，有哪些应用场景？


    没有使用过
    认识
        语义化标签，表示一段独立的内容，是独立于主文档流的独立单元
        表示插入的内容，如插图、表格、代码片段等等
        经常与<figcaption>结合使用，<figcaption>表示片段的描述


# 31、举例说明如何使用纯html怎么实现下拉提示的功能？

datalist id属性  => input list属性

# 32、怎么检测浏览器是否支持HTML5特性？

1、'localStorage' in window;

2、创建一个HTML5特有的元素，检测是否存在该元素的【特有属性】

function supportCanvas() {
    return !!document.createElement('canvas').getContext;
}

3、创建一个元素，然后检测这个元素的DOM对象是否拥有【特定方法】，同时调用这个方法并检查这个返回值

function supportVideoType() {
    return document.createElement("video").canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
}

4、创建一个元素，然后检测该元素的DOM对象设定的【属性值】，然后检查浏览器是否保留了该属性值

function supportColorType () {
    var i = document.createElement("input")
    // HTML支持`color`
    i.setAttribute("type", "color");
    console.log(i.type)
    return i.type !== "text"//text为默认的type
}

# 33、HTML5如何调用摄像头？

window.navigator.getUserMedia()

然后接收三个参数，第一个是视频或者音频以及分辨率
var constraints = {
    video: true,
    audio: false
};
第二个是成功回调，第三个是失败回调。

还有一种调用
window.navigator.mediaDevices.getUserMedia()
也是三个参数，参数格式和上文一样，区别在于这个api是基于promise实现的。

let promise = navigator.mediaDevices.getUserMedia(constraints);

# 34、你有使用过HTML5的output吗？说说它的作用是什么？

定义表单输出

<form id="form" oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0<input type="range" id="a" value="50">100
    +<input type="number" id="b" value="50">
</form>
=<output form="form" name="x" for="a b"></output>

# 35、xpath和dom有什么区别？

xpath可以比较模糊吧 比如 div/div/div[2]/div 这样的 说不定可以选择出两块内容


    xpath是用于在XML文档中查找信息的语言
    DOM是HTML的结构，对应的解析语言是JavaScript


# 36、前端路由指的是什么？它有什么好处？它有哪些方式可以实现呢？

前端路由在我看来就是url的变化

好处就是可以做spa（单页）应用（本质就是根据url变化动态切换组件展示）

实现方式的话大概可以分为两种，一种是history，另一种是hash

history

history是将a标签中的默认跳转替换为ajax请求，然后通过history.pushState来改变路由
此时 浏览器的前进与后退，会触发window.onpopstate事件，
页面首次载入的时候，如果没有查询地址、或查询地址不匹配，则使用第一个菜单的Ajax地址的查询内容，并使用history.replaceState更改当前的浏览器历史，然后触发Ajax操作。

hash

Web 服务并不会解析 hash，也就是说#后的内容Web服务都会自动忽略，但是JavaScript是可以通过 window.location.hash 读取到的，读取到路径加以解析之后就可以响应不同路径的逻辑处理。

hashchange 事件(监听 hash 变化触发的事件)，当用 window.location 处理哈希的改变时不会重新渲染页面，而是当作新页面加到历史记录中，这样我们跳转页面就可以在 hashchange 事件中注册 ajax 从而改变页面内容。

# 37、为什么HTML5里面我们不需要DTD？

HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；而HTML4.01基于SGML,所以需要对DTD进行引用，【才能告知浏览器文档所使用的文档类型。】

XML是可扩展标记语言是未来网页语言的发展方向，可能会替代HTML，他和HTML都是由SGML延伸转变而来的，你可以理解SGML是最早的版本，但现在已经淘汰不用了

# 38、meta的属性有哪些组成？说说它们的分别有什么作用？

content属性是必要的，还有3个非必要属性:http-equiv/name/scheme(不常用)

添加服务器发送到浏览器的http头部内容

<!-- 浏览器的头部就会包括这些: charset:iso-8859-1 expires:31 Dec 2008 -->
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">
<!-- 5s后重定向到Google -->
<meta http-equiv="Refresh" content="5;url=https://www.google.com" />

<!-- 用webkit内核进行解析 -->
<meta name="renderer" content="webkit">

* 常用的meta标签
<!-- 声明文档使用的字符编码，一定要写第一行(有以下两种写法) -->
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<!-- 禁止百度转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp" />

<!-- SEO优化部分 -->
<!-- 页面标题<title>标签(head 头部必须) -->
<title>your title</title>
<!-- 页面关键词 keywords -->
<meta name="keywords" content="your keywords">
<!-- 页面描述内容 description -->
<meta name="description" content="your description">
<!-- 定义网页作者 author -->
<meta name="author" content="author,email address">
<!-- 定义网页搜索引擎索引方式，robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。 -->
<meta name="robots" content="index,follow">

<!-- viewport主要是影响移动端页面布局的 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

- content 参数：
    - width viewport 宽度(数值/device-width)
    - height viewport 高度(数值/device-height)
    - initial-scale 初始缩放比例
    - maximum-scale 最大缩放比例
    - minimum-scale 最小缩放比例
    - user-scalable 是否允许用户缩放(yes/no)

<!-- 移动端常用 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="format-detection"content="telephone=no, email=no" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
<meta name="apple-mobile-web-app-capable" content="yes" /><!-- 删除苹果默认的工具栏和菜单栏 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" /><!-- 设置苹果工具栏颜色 -->
<meta name="format-detection" content="telphone=no, email=no" /><!-- 忽略页面中的数字识别为电话，忽略email识别 -->
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">
<!-- 适应移动端end -->

# 39、Shadow DOM和Virtual DOM有什么区别？

Shadow DOM

Shadow DOM是浏览器提供的一个可以允许将隐藏的DOM树添加到常规的DOM树中——它以shadow root为起始根节点，在这个根节点的下方，可以是任意元素，和普通的DOM元素一样。
Virtual DOM

虚拟DOM是由js实现的避免DOM树频繁更新，通过js的对象模拟DOM中的节点，然后通过特定的render方法将它渲染成真实的节点，数据更新时，渲染得到新的 Virtual DOM，与上一次得到的 Virtual DOM 进行 diff，得到所有需要在 DOM 上进行的变更，然后在 patch 过程中应用到 DOM 上实现UI的同步更新。


# 40、你知道有哪些常见的视频（音频）编码格式和视频（音频）格式吗？

音频：.mp3 .wav

视频：.ogg .mov .avi .rmvb .mp4



# 41、什么是Data URI？

Data URLs，即前缀为 data: 协议的URL，其允许内容创建者向文档中嵌入小文件。
data:text/html,<script>alert('hi');</script>
一个会执行 JavaScript alert 的 HTML 文档。

# 42、你知道HTML什么是单闭合标签和双闭合标签吗？为何要分为这两种呢？
<br/>
<input />
<img />
两者对比单闭合标签往往是功能方面的，双闭合标签往往是内容方面的


# 43、怎样给radio分组呢？

给input[type=radio]设置相同的name值，即可实现radio的分组

# 44、HTML的注释有几种写法？有什么规范吗？

无答案

# 45、HTML的标签区分大小写吗？属性名区分大小写吗？

标签不区分大小写，属性名区分大小写

# 46、img、input标签它们是行内元素还是块级元素？

行内块元素，因为能设置宽高

简单的说行内元素也就是display:inline的元素，行内块元素就是display:inline-block的元素

# 47、HTML5的哪些新特性是令你最兴奋的？

当然是 SVG 和 canvas 啦，让网页呈现和动效有了更多可能。
其次是 history api 让单页面应用成为了主流。

# 48、做好的页面都有在哪些浏览器上测过？

浏览器种类

# 49、网站首页有大量的图片，加载很慢，要是你，你该怎么去优化呢？

雪碧图，cdn

正常的图片可以使用懒加载（延迟加载），懒加载是网页性能优化的一种方式

当我们向下滚动的时候图片资源才被请求到，这也就是我们本次要实现的效果，这也就是懒加载。

核心：那么我们就要对<img>标签的src属性下手了，在没进入可视区域的时候，我们先不给这个<img>标签赋src属性，这样岂不是浏览器就不会发送请求了。

实现：
1、document.documentElement.clientHeight//获取屏幕可视区域的高度
2、element.offsetTop//图片相对于文档顶部的高度
3、document.documentElement.scrollTop// 滚动条高度

如果：offsetTop < clientHeight +  scroolTop，则图片进入了可视区内，则被请求。

更快的实现方式：

getBoundingClientRect() 获取图片到可视区顶部的距离,并获取到可视区的高度

# 50、你有用过HTML5的requestAnimationFrame吗？它运用的场景有哪些呢？

为什么要使用requestAnimation呢？
由于屏幕种类，分辨率，屏幕尺寸的不同，屏幕自动刷新的频率不同，使用requestAnimationFrame可以自动适配屏幕刷新频率。避免丢帧。

与setTimeout相比，requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机。除此以外，还可以节省CPU，函数节流。

css题目：（50）

# 1、在实际编写css中你有遇到过哪些浏览器兼容性的问题？怎么解决的？

做手机端Hybrid的时候, android4.3-跟android4.4+特别多flexbox兼容问题, 如果遇到android4.3-的有问题, 一般是另外想办法

PostCSS
Autoprefixer
Browserslist

# 2、说说你对!important的理解，一般在哪些场景使用？

权重高于任何属性选择器，一般不建议用

# 3、请你解释下什么是浮动和它的工作原理是什么？同时浮动会引起什么问题？

浮动的元素脱离标准流，

浮动元素会造成父级元素无法自动获取高度，导致父级塌陷，布局错乱。

# 4、用CSS画出一个任意角度的扇形，可以写多种实现的方法

todo

# 5、请问display:inline-block在什么时候会显示间隙？

html

# 6、遇到overflow: scroll不能平滑滚动怎么解决？

-webkit-overflow-scrolling: touch;

# 7、说说你对BEM规范的理解，同时举例说明常见的CSS规范有哪些？

Block:el-input
Element:el-input__icon
Modifier:el-input__icon--size-small


# 8、写例子说明如何强制（自动）中、英文换行与不换行


    word-break:break-all;只对英文起作用，以字母作为换行依据
    word-wrap:break-word; 只对英文起作用，以单词作为换行依据
    white-space:pre-wrap; 只对中文起作用，强制换行
    white-space:nowrap; 强制不换行，都起作用
    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持）


# 9、举例说明css的基本语句构成是什么呢？

选择器 + 写在花括号里的声明


# 10、写出你遇到过IE6/7/8/9的BUG及解决方法

https://github.com/haizlin/fe-interview/issues/581

# 11、IE(6/7/8/9/10/11/Edge)下的hack写法分别有哪些？

同上

# 12、font-style的属性有Italic和oblique，两者有什么区别呢

italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.

oblique 范围更广，包含Italic

# 13、怎么让body高度自适应屏幕？为什么？

html,body{height:100%}

为何只设置body{height：100%}不行？
height：100%是相对于父元素来说的，如果只设置body的高度属性，由于其父元素是html高度未设置，且并非浏览器窗口高度，所以只设置body为100%是不能达到效果的，必须html，body都设置100%。而body{height: 100vh}直接把高度设置成了视口高度，与html大小无关，所以只在body设置vh是可行的。

# 14、display有哪些值？分别说明他们的作用是什么？

display:block/inline-block 给元素转块/转行内块
display:inline 把元素转成内联元素
display:none让元素消失，不显示
display:flex弹性布局

# 15、写出几个初始化CSS的样式，并解释说明为什么要这样写

为了解决各个浏览器显示不一样的问题

/ 自适应高度
html,
body {
  width: 100%;
  height: 100%;
}

/*清除浮动*/
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}

/*去掉列表前面的小点*/
li {
    list-style: none;
}

/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
    border: 0;  /*ie6*/
    vertical-align: middle;
}


/*取消链接的下划线*/
a {
    text-decoration: none;
}

# 16、说说你对CSS样式覆盖规则的理解


    1、首先看权重，权重高的样式会覆盖权重低大的样式。
    !important > #id > .class > tag > *
    2、 同等权重时，css 靠后的覆盖靠前的（就近原则），只与 css 书写的顺序有关，与 class 引用的顺序无关
    3、行内样式 > 内联样式 > 外联样式

# 17、外层有一个自适应高度的div，里面有两个div，一个高度固定300px，另一个怎么填满剩余的高度？

html

# 18、CSS的overflow属性定义溢出元素内容区的内容会如何处理呢

visible（默认值）：溢出的内容会照常显示在元素内容区之外；
hidden：溢出的内容会被裁剪
scroll：溢出的内容会出现在滚动区，通过滚动条滚动可以看到；
auto：当内容溢出时表现同scroll；

# 19、CSS的伪类和伪对象有什么不同？

伪类：我们常用的比如，hover，focus等，我认为伪类是为了弥补选择器的不足。

伪元素 : ::before ::after 是为了创建一个dom元素，使用content属性指定要插入的内容。content必须有值（空值也行）

# 20、移动端的布局用过媒体查询吗？写出例子看看 

没用过，但媒体查询我知道

    @media (max-width:500px) {
        body {
            background: salmon;
        }
    }

    @media (min-width:501px) and (max-width:900px) {
        body {
            background: saddlebrown;
        }
    }

    @media (min-width:901px) {
        body {
            background: gold;
        }
    }

# 21、写出div在不固定高度的情况下水平垂直居中的方法？

水平：
margin: 0 auto;

垂直：

margin-left：-50px 0 0 -50px;

# 22、为什么会出现浮动？在什么时候需要清除浮动呢？

为了实现文字环绕图片效果，使用浮动
使用了浮动的时候会出现浮动。子元素浮动脱离文档流，父容器高度塌陷,这时候需要清除浮动

# 23、当一个元素被设置为浮动后，它的display值变为什么呢？

其display计算值就变为了block，尽管其表现形式和inline-block类似

找一个span标签输出他的display值
1.inline
2.block

# 24、行内css和important哪个优先级高？

!important 将覆盖行内css，！important 最高

# 25、如何更改placeholder的字体颜色和大小？

    /* Chrome浏览器 */
    input::-webkit-input-placeholder {
      color: red;
    }

    /* 火狐浏览器 */
    input::-moz-placeholder {
      color: red;
    }

    /* IE */
    input:-ms-input-placeholder {
      color: red;
    }

# 26、移动端微信页面有哪些兼容性问题及解决方案是什么？

1.rem方案通过reset js进行适配
2.vw 方案 搭配px to viewport进行适配

# 27、你对视网膜(Retina)分辨率有了解吗？有没有在实际中使用过？

Retina分辨率指的是屏幕的物理分辨率达到了使得人眼难以看到单个物理像素；

实际前端用的最多的还是在手机上展示1px线的问题吧

那么要实际实现1像素的细线,我常用处理就是伪类边框1px,宽高为依附元素的2倍，然后transform:scale(0.5)去实现细线

# 28、如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写个例子

图片等比缩放 img{ object-fit: cover/contain;

# 29、说说你对前端二倍图的理解？移动端使用二倍图比一倍图有什么好处？

二倍图是指单位面积下设备像素与css像素个数之比为 4 的位图

你如果用一倍图 在分辨率高的手机上 是卡的

# 30、你是如何规划响应式布局的？

从项目角度来讲，
PC 和 Mobile 分开

从方法流派来讲，
有栅栏布局，固定 viewport，使用 rem/pt/vw 单位
使用定位百分比，修改为 rem/vw 单位，五种；

从文件结构来讲，
是独立为响应布局专用 css 文件，还是跟随组件一起；

其他细节，
用 flex-grow 的地方，用 % 的地方，用 em 的地方

# 31、说说你对低版本IE的盒子模型的理解

 box-sizing：content-box/border-box

# 32、行内元素和块级元素有什么区别，如何相互转换？

一般通过display属性来区分块级元素和行内元素，block代表块级元素，inline代表行内元素。
块级元素：
1、内容独占一行。
2、width和height可以设置。
3、margin和padding也可以设置。
行内元素：
1、内容不独占一行。
2、width由内容撑开，不可设置。
3、竖直方向marigin和padding不可设置，水平方向可设置。
4、有多个行内元素，则会排列在一行，直到父容器放不下才会换行。
块级元素和行内元素通过修改display属性可相互切换。

# 33、怎么实现移动端的边框0.5px？

一种是通过transform中的scale

border: 1px solid red;
transform: scaleY(.5);

一种是通过meta viewport中设置init-scale为0.5
 <meta name="viewport" content="width=device-width, initial-scale=0.5">

一种是基于背景渐变实现

height: 2px;
background-image: linear-gradient(0deg, red 50%, transparent 50%)

# 34、CSS中的calc()有什么作用？

坑：运算符号 左右需要有空格的哦，否则，属性不生效。

width: calc(100% - 30px);

# 35、过渡和动画的区别是什么？

相同：都会让你的页面元素动起来

transition 是需要事件进行触发的，且只能触发一次。
 transition: width 2s;

animation 无需事件触发，并且可以周期性播放。可定义中间状态。

@keyframes bling-kf {
   0% { opacity: 1; }
   50% { opacity: 0.5; }
   100% { opacity: 1; }
}
.bling {
    animation: bling-kf 2s ease-in infinite;
}

# 36、position的relative和absolute定位原点是哪里？

position: relative，它偏移的参照位是其原先在正常文档流中的位置；
position: absolute，它偏移的参照位是第一个position不为static的父级元素的左上角；


# 37、说下你对cursor属性的理解

cursor是用来显示鼠标不同的光标的

pointer 小手

# 38、说说你对设备像素比的理解

设备像素比(Device Pixel Ratio 简称：DPR)，是指物理像素和CSS像素的比例。

# 39、你有用过table布局吗？说说你的感受


    1、table 布局往往是 table 嵌套 table，会有非常多的 DOM 节点，对于性能来说是一个灾难
    2、语义化不明，本身就是标签错误的用法。因此对 SEO 不友好。
    3、DOM 操作是噩梦，无数的 tr、td 中要寻找到目标 DOM 元素非常困难，代码没有维护性可言。

# 40、举例说明时间、频率、角度、弧度、百分度的单位分别是哪些？


    1、时间: s, ms
    2、频率: Hz
    3、角度: deg
    4、弧度: rad
    5、百分度: grad

# 41、 标签、class和id选择器三者的区别是什么？分别在什么时候用？

三者的权重不同，都可以作为 CSS 的选择器使用。id > class > tag。

id 会留给 JavaScript 使用

class 和 tag 一般用在 CSS 上，用来进行样式的编辑。

# 42、为什么要使用css sprites？


    减少HTTP请求
    增加图片显示速度

# 43、Reset CSS和Normalize CSS的区别是什么？


    Reset CSS: 将各个浏览器的默认样式重置
    Normalize CSS: 保留各个浏览器的样式,只是让它们更加统一通用了

# 44、怎么自定义鼠标指针的图案？

cursor: url() ,auto

# 45、你知道CSS中的字母"C"代表什么吗？

CSS 【层叠】样式表 Cascading Style Sheet

# 46、说说你对GPU的理解，举例说明哪些元素能触发GPU硬件加速？


    GPU: 图形处理器,用于处理图形有关的任务,用于渲染页面
    在css中使用 transform: translateZ(0),可以开启GPU硬件加速

# 47、你有没有自己写过一套UI库？说下遇到哪些难点？

目录划分、按需加载

# 48、设置字体时为什么建议设置替换字体？

这是由于网站用户的浏览设备不同，可能并不支持或没有安装你所设置的字体。
这时候就会自动使用替换字体来对网页进行一个展示。
设置替换字体可以尽可能保证所有用户的浏览体验。

# 49、请举例说明伪元素 (pseudo-elements) 有哪些用途？

    可以不用再多写一个 dom
    可以用 content 搭配出很多效果

# 50、举例说明微信端兼容问题有哪些？

1、小程序 iphonex 适配

2、在ios微信端，当在输入框唤起键盘后，页面会抬升，输入完成键盘退出后，页面并没有自动恢复到原来的样子, 越接近页面底部越明显。
解决方法是使用document.documentElement.scrollIntoView(false),让页面自动回滚。

# 51、什么是zoom？它有什么作用？

zoom是缩放比例，可以将元素进行缩放。
和css3中的transform:scale() 作用类似.
两者区别在于缩放的参照点不一样，zoom针对元素左上角，scale针对元素正中心
此属性是IE浏览器的专有属性，

组合题目：（50）

# 1、说说你对SVN和GIT的理解和区别

SVN是集中式，GIT是分布式

# 2、typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？

操作符

# 3、解释下 CSS sprites的原理和优缺点分别是什么？


优点&解决的问题

    hover效果，如果是多个图片，网络正常的情况下首次会闪烁一下。如果是断网情况下，就没图片了。sprites 就很好的解决了这个问题（第一次就加载好了）。
    合并了请求数
    制作帧动画方便

缺点

    位置不好控制，有时候容易露底。。比如说3030的按钮，图片只有1212保不齐就漏出其他图片了。
    合成时候比较费时（有工具代替）
    位置计算费时（有工具代替）
    更新一部分的时候，需要重新加载整个图片，缓存失效。

# 4、你认为table的作用和优缺点是什么呢？

table 用于表格数据的展示，并且很符合人们的直观认知。

在 div+css 布局流行之前，普遍使用 table 进行布局。曾经的神器 Dreamweaver 的可视化拖拽也是基于 table 布局。

table 布局的好处在于样式好控制，特别是居中、对齐。缺点在于会多处非常多的 DOM 节点（想想一个 td 里面再来一个 table），会导致页面加载变慢、不利于 SEO（table 原本就不是用来布局的）。也因此，在 CSS 成熟之后，table 布局马上就变成历史了。

# 5、你理解的"use strict";是什么?使用它有什么优缺点？

    禁止this关键字指向全局对象
    禁止在函数内部遍历调用栈
    全局变量必须显式声明
    arguments不再追踪参数的变化

# 6、什么是FOUC？你是如何避免FOUC的？

FOUC 即 Flash of Unstyled Content，是指页面一开始以样式 A（或无样式）的渲染，突然变成样式B。
原因是样式表的晚于 HTML 加载导致页面重新进行绘制。

    通过 @import 方式导入样式表
    style 标签在 body 中

解决方法：把 link 标签将样式放在 head 中

# 7、怎样在页面上实现一个圆形的可点击区域？

1、svg
2、用一个div,给div添加圆角属性50，在div上添加点击事件
3、button 上添加圆角属性
4、a标签添加圆角属性

# 8、最近都流行些什么？你经常会浏览哪些网站？

github、stackoverflow/segmentfault、mdn

# 9、"attribute"和"property"有什么不同？

    property是DOM中的属性，是JavaScript里的对象
    element.property = 'xxx';   如：p.className = 'xiao';
    attribute是HTML标签上的特性，它的值只能够是字符串
    element.getAttribute('属性名','属性值');  如：a.getAttribute('href');

# 10、css的属性content有什么作用呢？有哪些场景可以用到？

伪类

# 11、说说你对NodeJs的理解及用途 


搭个服务器，前后端打通
或者弄个中间层，连接前后端
mock数据，能做的还有很多

# 12、为什么会有跨域问题？怎么解决跨域？

浏览器为了安全，产生了同源策略，协议、域名、端口有一个不同，就会产生跨域

跨域方式有jsonp,代理方式，cors，domain改变主域相同，postmessage也可以

https://github.com/haizlin/fe-interview/issues/150

# 13、 怎么才能让图文不可复制？

-webkit-user-select: none;
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;


# 14、html5都有哪些新的特性？移除了哪些元素？

语义化的标签，header,footer,nav,section,article等。表单类型增多，date,datetime,email,range,url,time等。视频音频标签，localstorage,sessionstorage等。canvas，拖动的api。


移除元素

    applet
    big
    font
    frame/frameset


# 15、 你有自己的博客吗？平时自己有写一些技术文章吗？

平时会写一些技术文章，主要用来记录平时遇到的问题，和进行知识体系的梳理总结。
最后还会写一些总结性的思考，比如每年写个学习总结，自己对职业规划的思考等。

平时有积累，到需要输出的时候就很快了，记得到现在的公司，试用期让我做一次分享，好在之前对移动端开发有过系统的整理，PPT完成很快，思路超级清晰，最后分享也得到了大家的好评。


# 16、说说你对IIFE的理解

IIFE 就是 ;(() => {})() 这样的形式。


js es5之前没有块级作用域啊，IIFE就干这个事，就是为了私有化作用域的变量，不过 es5 const let 加入了块级作用域。

如果命名的函数只需要使用一次，建议使用

当我们需要写一个 js 插件，并且复用率很高的时候，建议使用

# 17、 怎么让英文单词的首字母大写？

text-transform 属性控制文本的大小写，是CSS2.1的属性，兼容性问题不大。

.demo {
  text-transform: capitalize;
}


/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;

# 18、webSocket怎么做兼容处理？

SSE服务
轮询或长连接的方式实现伪websocket的通信

# 19、你现在在团队是什么角色，有起到了什么显著的作用吗？

# 20、window对象和document对象有什么区别？

window对象

代表浏览器中的一个打开的窗口或者框架，window对象会在或者每次出现时被自动创建，在客户端JavaScript中，Window对象是全局对象global，所有的表达式都在当前的环境中计算，要引用当前的窗口不需要特殊的语法，可以把那个窗口属性作为全局变量使用，例如：可以只写document，而不必写window.document。同样可以把窗口的对象方法当做函数来使用，如：只写alert()，而不必写window.alert.
window对象实现了核心JavaScript所定义的全局属性和方法。
document对象

代表整个HTML文档，可以用来访问页面中的所有元素 。
每一个载入浏览器的HTML文档都会成为document对象。document对象使我们可以使用脚本(js)中对HTML页面中的所有元素进行访问。
document对象是window对象的一部分可以通过window.document属性对其进行访问
HTMLDocument接口进行了扩展，定义HTML专用的属性和方法，很多属性和方法都是HTMLCollection对象，其中保存了对锚、表单、链接以及其他可脚本元素的引用。


# 21、重置（初始化）css的作用是什么？

我理解的，简单讲主要是为了 统一各个浏览器自带的默认样式而诞生的。

# 22、最近在学什么？能谈谈你未来3，5年给自己的规划吗？

最近学前端基础，三年做到前端自信，可以cover各种业务需求。。。等
基本上这道题还是考察面试者对自己的认识及规划，面试官也想借机会看看你的规划与公司的发展能不能同步以及有没有足够的空间给到你，总之，公司希望你是一个有目标的人，并且这个目标最好能帮助公司更好的发展。


# 23、JQuery的源码看过吗？能不能简单概括一下它的实现原理？

https://github.com/haizlin/fe-interview/issues/163

# 24、span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

产生空白的原因：元素被当成行内元素排版的时候，
我们写html怎么写，一般是
<span></span>
<span></span>元素之间的空白符（空格、回车换行等）都会被浏览器转换成一个空白字符，如果挨着写就不会有这种问题的出现，这个字符的大小受font-size影响

<!-- 
    出题者的意图是什么？
    造成这问题的表面原因和深入原因是什么？
    解决方案有哪些？哪个比较好？ -->


补充一下：
可以设置父元素 font-size: 0; 解决，或者父元素设置 display:flex/inline-flex;，
应该还有很多方案，欢迎补充。

# 25、如何让元素固定在页面底部？有哪些比较好的实践？

移动端使用position:fixed的时候，有时候会出现点击输入拉起键盘时，按钮位置被顶上去，输入完成收起键盘后，位置依旧存在问题的情况

这个是在结构的底部还是视图的底部 ，视图底部就是 fixed，结构的底部就是 sticky footer 布局咯~

# 26、说说你对http、https、http2的理解

http: 重复拨号的单对单电话
https: 安全点重复拨号的单对单电话
http2: 不需要重复拨号的单对多电话

 http2：不仅解决了http的非持续连接，还增加了多路复用，以及服务器推送的功能

# 27、深度克隆对象的方法有哪些，并把你认为最好的写出来 

？？？ todo

# 27、手写一个满屏品字布局的方案

？？？ 没懂

# 28、说说video标签中预加载视频用到的属性是什么？

preload

# 29、从你的角度上来讲，你觉得如何管理前端团队？

1.业务职责清晰（团队和个人）
2.流程规范有序（开发流程和上下游合作流程）
3.团队技术氛围好，能发现每个人的闪光点，帮助其找到在团队中的价值和定位
4.活跃和有归属感的团队氛围

# 30、写出几种创建对象的方式，并说说他们的区别是什么？

var obj = {}
Object.create() // 继承创建
const obj = new Object() // 不推荐


# 31、你知道的等高布局有多少种？写出来

todo

# 32、xml与html有什么区别？

1.html不区分大小写，xml区分大小写
2.html可以没有闭合标签，xml必须有闭合标签
3.html可以拥有不带值的属性名，xml中所有的属性必须带值
4.html是用于显示数据，xml主要用于描述，存放数据


# 33、说说你对本项目的看法及建议 

基础知识广度有提升，没人回答的时候辛苦楼主公布下答案，webpack快上

# 34、写一个使两个整数进行交换的方法（不能使用临时变量）

es5: 

var a = 1,b = 2;
a = b+a;
b = a-b;
a = a-b;

es6:
function change(a, b) {
  [a, b] = [b, a];
  return [a, b]
}

console.log(change(1, 2));

# 35、说说你对媒体查询的理解

@media print{
    .site-footer-credits{ display: none;}
    .noprint {display: none;}
    .page-header {text-align: left}
}

# 36、页面中怎么嵌入Flash？有哪些方法？写出来

<object width="550" height="400">
  <param name="movie" value="somefilename.swf">
  <embed src="somefilename.swf" width="550" height="400"></embed>
</object>

# 37、如果HR说要做背调，还要你给出近三个月的银行流水，你该怎么办？

给

# 38、请说说你对事件冒泡机制的理解？

事件流的执行顺序，捕获阶段-》目标阶段-》冒泡阶段。冒泡从里到外的执行。<div><span>点我</span></div>,在div上定义的事件，点击span的时候会触发span上面绑定的事件，之后也会触发外面div上面的事件，这就是冒泡。


# 39、你是怎样抽离样式模块的？

说的是 webpack + extract-text-webpack-plugin插件吧？ 把样式文件单独打包出来。
webpack4 升级了插件为 mini-css-extract-plugin

# 40、 HTML5如何使用音频和视频？

视频

音频和视频一样

音频
1。事件
1-1 canplay 事件
+ 会在音频加载完毕可以播放以后执行
1-2 timeupdate 事件
+ 会在音频播放以后，时间改变的时候触发
1-3 ended 事件
+ 会在视频播放完毕后触发

2。属性
  2-1 paused 
    + 是否暂停
  2-2 currentTime
    + 当前播放时间
    + 读写的属性，可以获取当前播放时间(单位是秒)
  2-3 volume
    + 获取当前播放的音量
    + 读写的属性，0 ~ 1 之间
  2-4 muted
    + 获取当前音量是否静音
    + 读写的属性
  2-5 duration
    + 获取当前视音频的总播放时间
    + 只读属性（秒）
3。方法
  3-1 play()
    + 调用的时候会让音乐播放
  3-2 pause()   
    + 调用的时候会让音乐暂停
  3-3 stop() （现在不支持了）
    + 调用的时候会让音乐回到最初状态

# 41、最近996一词很火，谈谈你对996的看法

适度可以

# 42、你对事件循环有了解吗？说说看！

 - 单线程模型

JS 引擎有多个线程，但引擎同时只执行一个任务，其他任务都必须在后面排队，即引擎只在一个线程上运行。这个线程称为主线程。

 - 事件循环机制

JS 本身并不慢，慢的是读写外部数据，比如等待 Ajax 请求返回结果。如果等着 Ajax 返回结果出来，再往下执行，就会耗费很长的时间。所以 JS 设计了一种机制，CPU 可以不管 IO 操作，而是挂起该任务，先执行后面的任务，等到 IO 操作返回了结果，再继续执行挂起的任务。

同步任务执行完后，引擎一遍又一遍检查那些挂起来的异步任务是否满足进入主线程的条件。这种循环检查的机制，就叫做事件循环机制。

 - 任务队列

JS 引擎运行时，除了一个正在运行的主线程，还提供一个或多个任务队列，里面是各种被挂起的异步任务。首先，主线程会去执行所有的同步任务，等到同步任务全部执行完，就会去看任务队列里面的异步任务，如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就会变成同步任务。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。

 - 同步任务和异步任务

 程序里面所有的任务可以分成两类：

    同步任务：没有被引擎挂起，在主线程上排队执行的任务。只有前一个任务执行完毕，才能执行后一个任务。
    异步任务：被引擎挂起，不进入主线程，而进入任务队列的任务。只有引擎认为某个异步任务可以执行了，该任务才会进入主线程执行。排在异步任务后面的代码，不用等待异步任务结束会马上运行。


# 43、你知道全屏滚动的原理是什么吗？它用到了CSS的哪些属性？

知识点：
    JS 滚动监听事件
    JS 移动端touch监听事件
    函数节流
    DOM操作


类似竖向轮播图

思路：
  https://github.com/haizlin/fe-interview/issues/182


# 44、说说你对WEB标准和W3C的理解与认识？

网页主要由三个部分组成，表现、结构和行为。

这里顺便解释下什么是web标签语义化，即用正确的标签做正确的事情。

W3C对web标准提出了规范化的要求

W3C组织意识到了之前HTML版本的不足，推出的HTML5进一步推进了Web语义化发展，采用了诸如footer、section等语义化标签，弥补了采用id="footer"或者class="footer"形式的不足，以更好的推动Web的发展。

# 45、你有遇到过字体侵权的事吗？如何解决？




# 46、假如设计稿使用了非标准的字体，你该如何去实现它？

设计的职责是美观，前端的职责是尽可能还原，设计之所以会使用非标准的字体、甚至侵权的字体是因为不了解技术实现和版权意识。
所以先沟通，告知设计实际的情况，然后在综合考量的情况下应该尽可能去实现，通常采用载入字体和图片化的方式

# 47、说说你对target="_blank"的理解？有啥安全性问题？如何防范？

在新的空白页, 打开该链接,
安全性问题, 就是, 如果url中带有敏感信息, 会被第三方网站读取到document.referer

rel="noopener noreferrer"来完整覆盖火狐和ie

# 48、说说你对http、https的理解

    从是否需要证书方面来看：https协议需要到ca申请证书，一般免费证书很少，需要交费。
    从是否安全方面来看：http是超文本传输协议，信息是明文传输（无法加密），https则是具有安全性的ssl加密传输协议。
    从写法、端口号来看：http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
    从OSI网络模型中来看：http的连接很简单，是无状态的(HTTP工作于应用层)；https协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议、比http协议安全(HTTPS的安全传输机制工作在传输层)

# 49、请写出一个函数求出N的阶乘（即N!）

function factorial(n) {
      if (n > 1)  return n*factorial(n-1);
      return 1;
}


# 50、列举CSS优化、提高性能的方法

1、根据页面结构进行css模块的划分
2、不同css文件的引入要加scoped
3、用less增加复用性，减少文件体积
4、用link不用import
5、压缩CSS
6、复合属性其实分开写，执行效率更高，因为CSS最终也还是要去解析如 margin-left: left;
7、尽量少甚至是不使用标签选择器，这个性能实在是差，同样的还有*选择器
8、利用继承，减少代码量
9、尽量少的使用嵌套，可以采用BEM的方式来解决命名冲突
10、慎重使用高性能属性：浮动、定位；
11、尽量减少页面重排、重绘；
12、尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等
13、使用transform来变换而不是宽高等会造成重绘的属性
