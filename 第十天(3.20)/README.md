html题目（50）

# 1、iframe在更改了src之后，不出现后退或者前进按钮怎么解决？


    更改src时可以先删除旧的iframe后，新建一个iframe设置好src添加进去

# 2、 iframe可以使用父页面中的资源吗（如：css、js等）?


    iframe 属于一个单独的文档不能直接使用父页面的资源，css的层叠不会影响iframe
    iframe如果和父页面同域则可以在iframe中使用parent对象来使用父页的js对象

# 3、为什么移动端页面的设计稿一般是750px/640px呢？

750px 代表iphone6或inphone6s 设备的像素(宽)
640px 代表inpone3Gs，inpone4/4s iphone5系列 设备的像素(宽)
其他手机大多数时这两种规格
750px/640px 代表的逻辑像素是 375px/320px，简称2.x 图；所以实际上写css像素时，要除以2

# 4、怎样使用iframe刷新父级页面？

//在父页面中
  window.addEventListener("message",function(e){
      if(e.data.reload){
           winodw.location.reload()
      }
   
  }, false);
  //在子页面中
  window.parent.postMessage({reload:true})


# 5、在两个iframe之间传递参数的方法有哪些？

1、通过postMessage与父级通过，父级传递消息
2、通过websocket通信
3、如果是同一个域名下

    可用stroage，监听storageChange事件通信
    通过web worker也可通信


# 6、你知道什么是html5plus吗？

用js的方式来调用移动app(安卓和ios)的原生能力，例如拍照，摄像

# 7、在普通网页中如何调用html5+的plus对象？

document.addEventListener( "plusready", onPlusReady, false );
onPlusReady 函数中就可以引用plus对象

# 8、html5点击返回键怎样不让它返回上一页？


$(function() {
  　　if (window.history && window.history.pushState) {
     　　$(window).on('popstate', function () {
     　　window.history.pushState('forward', null, '#');
     　　window.history.forward(1);
     　　});
  　　}
  　　window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
  　　window.history.forward(1);
})

# 9、如何禁止移动端的左右划动手势？
html{
 touch-action:none;
 touch-action:pan-y;
}

# 10、你知道`<a>`标签的target属性规定在何处打开链接文档吗？


    _self 自身打开，效果即跳转
    _blank 新开标签页打开
    _parent 父
    _top 顶级


    另外有个细节是为什么链接是a标签，而不是b,c呢，因为a means anchor,锚点


# 11、如何使用html5进行图片压缩上传？

1、获取到文件对象，转成base64URL，（readAsDataURL、）
2、根据base64URL 获取到图片的宽高，生成canvans（canvasDataURL）
3、canvans 对象根据压缩比例，生成base64URL （toDataURL）
4、base64URL生成blob对象 （new Blob）

# 12、怎样避免让用户看到长时间的白屏？

link放在head内，js（js先执行，页面才继续有dom）放在，非操作dom的脚本放在web worker里
分包，缓存，预加载，懒加载，服务端渲染 这些手段


script标签上面这个async属性的作用：1、这个属性是HTML5给script新添加的属性，而且只适用于外部的JavaScript文件

2、如果在script标签上添加了这个属性，那么表明这个脚本资源就不再是同步加载的了，而是异步加载的，所以不会阻塞浏览器对页面的渲染

3、没加这个异步属性，且放在页面头部位置的script，很大程度上是因为，这些脚本需要在浏览器渲染页面之前就执行的；

到现在为止，我们已经讨论了很多关于把JavaScript文件放在文档的头部还是尾部的原因，那么下面我们可以总结出一些加载JavaScript文件的最佳实践；

对于必须要在DOM加载之前运行的JavaScript脚本，我们需要把这些脚本放置在页面的head中，而不是通过外部引用的方式，因为外部的引用增加了网络的请求次数；并且我们要确保内敛的这些JavaScript脚本是很小的，最好是压缩过的，并且执行的速度很快，不会造成浏览器渲染的阻塞。


网页开发中几乎所有的js操作都是基于HTML来实现的
一般来说放上面的JS文件是给放下面JS文件来用的
放下面JS文件是HTML来用的

# 13、如何去除标签`<i>`默认斜体？

给 i 标签设置font-style: normal;

# 14、举例说明当我们在写布局时，都有哪些边界的情况需要关注的？

margin 重叠

# 15、当img标签中的src图片加载失败时，怎么让它变得更美观呢？

 <img src="images/logo.png" onerror="javascript:this.src='images/logoError.png';">

当默认图也失效，就会陷入死循环

# 16、html如何创建图片热区（img usemap）？


  <img src="china.gif" usemap="#mymap">
    <map name="mymap">
     <area shape="rect" href="a.html" coords="0,0,50,50">
     <area shape="circle" href="b.html" coords="120,80,50">
     <area shape="poly" href="c.html" coords="0,0,50,50,100,100,200,200">
    </map>

# 17、你有用过图片热区吗？它有什么运用场景？


    点击logo回到主页
    点击地图区块跳到具体的地方网站

# 18、当html中使用map标签时,area中coords值如何精确定位呢？


    圆形，在绘制一个圆形时，其 shape='circle'，coords='x,y,r'，这里的 coords 值通过圆心(x,y)和半径r来确定位置和大小；
    矩形，在绘制一个矩形时，其 shape='rectangle'，coords='x1,y1,x2,y2'，这里的 coords 值通过两对确定位置顶点的值(x1,y1)和(x2,y2)来确定具体位置和大小；
    多边形，在绘制多边形时，其 shapre='palygon'，coords='x1,y1,x2,y2,x3,y3...'，这里的 coords 值通过多对确定位置顶点的值(x1,y1)、(x2,y2)、(x3,y3)... 来确定具体的位置和多边形的大小。


# 19、举例说明Shadow DOM的应用场景有哪些？

shadow DOM = Web components 

主要用于封装：可以将标记结构、样式和行为隐藏起来，并与页面上的其他代码相隔离，保证不同的部分不会混在一起，可使代码更加干净、整洁。其中，Shadow DOM 接口是关键所在，它可以将一个隐藏的、独立的 DOM 附加到一个元素上


Shadow DOM 允许将隐藏的 DOM 树附加到常规的 DOM 树中——它以 shadow root 节点为起始根节点

术语：

Shadow host：一个常规 DOM节点，Shadow DOM 会被附加到这个节点上。
Shadow tree：Shadow DOM内部的DOM树。
Shadow boundary：Shadow DOM结束的地方，也是常规 DOM开始的地方。
Shadow root: Shadow tree的根节点。

https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM

可以将 shadow DOM 视为“DOM中的DOM”。它是自己独立的DOM树，具有自己的元素和样式，与原始DOM完全隔离。

小知识点：该按钮是一个<iframe>元素，您实际看到的样式按钮其实是加载一个小文档。
这是Twitter可以确保其小部件的预期样式不受文档中的任何CSS影响的唯一方式。

input 虽然是一个h5标签，但实际上是个组件，里面是各种div，这些就是基于 shadow dom 做的


所以，shadow dom 是 html的一种规范，他允许浏览器开发者封装自己的html标签，同时也可以让开发人员创建类似<video>这样的自定义一级标签，创建这些新标签内容和相关的的API被称为Web Component。

- 解析默认的Shadow DOM

input::-webkit-input-placeholder {
    color: red;
}

shadow-dom 和 主dom 的样式互不影响。

- 自定义Shadow DOM

（1）定义简单的 Shadow DOM

html

（2）利用template标签来实现的Shadow DOM

https://www.jianshu.com/p/e47b103f3b60

# 20、如何禁止input输入的历史记录？


    给form加上 autocomplete=off 可以禁止整个表单的历史记录
    给单个input加上 autocomplete=off 可禁止这个input的历史记录


有时 autocomplete 属性不生效时，可以使用一些 hack 的方法，比如先把 input 设置成 readonly 或者 disabled，再动态移除 readonly 和 disabled 属性


比较特殊的是input的类型为password，可以借鉴网易126的操作方式： autocomplete="new-password"

# 21、input上传文件可以同时选择多张吗？怎么设置？

 <input type="file" multiple="multiple" value="浏览" />

# 22、input上传图片怎样触发默认拍照功能？

使用 capture 属性，capture 的值可以是：

camera 打开摄像头

user 打开前置摄像头

environment 打开后置摄像头

camcorder 打开录像

microphone 打开录音机


<input type="file" accept="image/*;capture=camera" />


# 23、android手机的微信H5弹出的软键盘挡住了文本框，如何解决？


window.addEventListener("resize", function () {
       if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
           window.setTimeout(function () {
               document.activeElement.scrollIntoViewIfNeeded();
           }, 0);
       }
   })

# 24、编写一个布局，让文字环绕在图片的周围

float

# 25、编写html时，你有没有用过Emmet插件呢？说说它的优点及规则有哪些？

它可以帮助快速编写HTML代码，减少复制粘贴的操作；

1、> 插入子元素； ul>li>a
2、+ 生成兄弟元素；

    div+p+section
3、* 生成多个相同元素

ul>li *3

4、# 和 . 分别生成带id和class的元素

div#submit+div.btn+div#submit.btn

# 26、你是如何理解html与css分离的？

结构与表现分离，利于重用和维护

# 27、什么是表单域？它有哪些运用场景？

<form></form>标签中间的部分

当点击这个表单域中的submit按钮，就会把表单中的数据提交到你action的属性指定的网页里面

# 28、举例说明锚点定位有什么作用？

一、我们在做一个很长的网页时，需要在页面内做一个导航，点击导航里的链接不是新开一个窗口或者跳转到其他网址，而是跳转到当前页的某一个位置。那么所要跳转到的那个位置，我们就叫做锚点，它是一种【在页面内部定位的方式】

# 29、html6即将到来，你最期待的是什么特性呢？


模块化

# 30、后缀.html和.htm有什么区别？

历史遗留问题，原来的结尾只能由三个字母，是一摸一样的。

# 31、使用canvas制作一个印章

html

# 32、如何构建“弱网络环境”友好的项目？

采用PWA技术

# 33、你知道什么是粘性布局吗？

sticky 达到吸附效果，像是 relative 和 fixed 的合体，

position: fixed;
top: 50px;

# 34、说说页面中字体渲染规则是怎样的？会有哪些因素影响字体的渲染？

字体渲染：

1、解码，根据web服务器返回的（或者本地网页本身的）content-type  charset等信息确定编码，将网页解码成 unicode字符流

2、分段，把文本分为不同语言（中英文）组成的小段

3、字体匹配，根据css设置的font-family对每一段文字进行字体匹配，遵循字体的fallback机制

4、渲染，确定字体后，排版引擎根据文本、字体等参数生成字形和位置，然后调用不同平台下的 rasterizer将字形转化成屏幕上的图案


影响因素：

web网页的lang charset
不同操作系统
不同浏览器

# 35、列举几种瀑布流布局的方法

 {
  display: flex;
  flex-direction: row;
 }

{
  display: flex;
  flex-direction: column;
  width: calc(100%/3)

}

# 36、列举几种多列等高布局的方法

1, 使用table布局
`.row {
  display: table;
}

.row > * {
  display: table-cell;
}

2, 使用flex布局
.row {
  display: flex;
  flex-wrap: wrap;
}
.row > * {
  display: flex;
  flex-direction: column;
}`

# 37、隐藏div内文字的方法有哪些？

text-indent:-9999px;
或
line-height:0;
font-size:0;
overflow:hidden;

# 38、noscript标签有什么作用？

noscript 标签用于当浏览器不支持 JS 的时候在页面上显示一些提示内容，但是也有一些缺点，比如如果是防火墙而不是浏览器禁用了 JS，非但 JS 执行不了，noscript 的内容也不会显示。

比较好的办法是使用 noscript 作为默认方法，同时提供一个 fallback 方法，即页面上提供一个 display: block; 的 div 提示，随后使用 JS 将其设置为 display: none;

# 39、input元素size属性和width 的区别是什么？

控件的初始大小。以像素为单位。但当type 属性为text 或 password时, 它表示输入的字符的长度。从HTML5开始, 此属性仅适用于当 type 属性为 text, search, tel, url, email,或 password；否则会被忽略。 此外，它的值必须大于0。 如果未指定大小，则使用默认值20。 HTML5 概述 "用户代理应该确保至少大部分字符是可见的", 但是不同的字符的用不同的字体表示可能会导致宽度不同。在某些浏览器中，一串带有x的字符即使定义了到x的大小也将显示不完整。 。

如果 size 和 style='width：xx' 同时使用的时候，最终由 style='width：xx' 来决定。

# 40、给一个元素加下划线的方法有哪些？

使用 <u></u> 标签
给元素添加 boder-bottom
文字样式 text-decoration: underline;
使用伪类或者子元素做绝对定位

# 41、说下你对组件、模块、元素的理解，它们的区别在哪里？



模块：主要是导入导出 import和export
1.一个模块就是一个单例，或者说就是一个对象；
2.每一个模块内声明的变量都是局部变量， 不会污染全局作用域；
3.模块内部的变量或者函数可以通过export导出；
4.一个模块可以导入别的模块。

组件：组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素


# 42、如何设置打印尺寸？

@media print {
...
}

# 43、link标签的属性media有哪些值？都有什么作用？

根据w3c的介绍，media属性表示link的链接文档会应用于何种媒介（设备）上。用于为不同的媒介类型规定不同的样式。常用的值为screen(计算机屏幕，默认), print(打印设备), tv(电视屏幕), handheld(手持设备)等。

# 44、打印页面时怎样自定义打印页眉页脚或者去掉眉页脚？

<style type="text/css" media="print">
@page
{
  size: auto; /* auto is the initial value /
  margin: 0mm; / this affects the margin in the printer settings */
}
</style>

# 45、浏览器的默认字体大小是多少？怎么设计它的基准？

多数浏览器的默认字体大小均为16px。可设置CSS的font-size改变字体大小。
<style> html,body{ font-size: 16px; } </style>
也可设置font-size:62.5%，使得1rem = 10px来约定字体大小。
对于IE浏览器的字体计算浮点数并不精确，因此可设置为font-size:63%。


# 46、div等元素如何阻止点击穿透和实现点击穿透？

pointer-events: none; 允许点击穿透 


阻止穿透：
在js的点击事件里面添加这句话，阻止冒泡
event.stopPropagation();

需要用到点击穿透的场景：

？？？

# 47、写页面布局时你有考虑过分辨率因素吗？还要考虑哪些因素呢？

1.支持的最大和最小分辨率
2.流式布局还是响应式布局


# 48、说说你对网格布局的理解

目前是最强大的布局方案，但兼容性差

# 49、实现一个居中半透明的模态窗

居中：
position: absolute; top: 50%; left: 50%;
半透明
background: rgba(0,0,0,.5); 
模态窗
transform: translateX(-50%) translateY(-50%); 

# 50、说说你对这几个概念的理解：层叠上下文、层叠等级、层叠顺序

层叠上下文(stacking context)，是HTML中一个三维的概念。在CSS2.1规范中，每个盒模型的位置是三维的，分别是平面画布上的X轴，Y轴以及表示层叠的Z轴。

层叠等级(stacking level，“层叠级别”/“层叠水平”)。在同一个层叠上下文中，它描述定义的是该层叠上下文中的层叠上下文元素在Z轴上的上下顺序。在其他普通元素中，它描述定义的是这些普通元素在Z轴上的上下顺序。

“层叠顺序”(stacking order)表示元素发生层叠时按照特定的顺序规则在Z轴上垂直显示。

js题目（50）


# 1、script所在的位置会影响首屏显示时间吗？

会，如果script放在头部，js的执行会阻塞dom树的构建

# 2、js怎么实现一个类并实例化这个类？

es5  function Demo () {}
es6  class Demo {}


实例化 new Demo()

# 3、json和对象有什么区别？

JSON 是对象，但对象不一定是 JSON。

对象是由属性和属性值组成，也就是 KEY->VALUE 对。
对象中的 value 可以是任意的数据类型，包括函数。而 JSON 中的 value 不能为函数。

json 是一种数据格式，其具有严格的语法，比如属性名须由双引号包裹等。
对象是一种数据、方法的组合形式。

# 4、在DOM上同时绑定两个点击事件（一个用捕获，一个用冒泡），事件总共会执行几次，先执行哪个事件？

两次
先捕获，后冒泡

# 5、如何判断对象是否属于某个类？

obj.proto === class.prototype

# 6、js操作节点的方法有哪些？

创建节点

createElement()
createTextNode()
createAttribute()
createComment()


查找节点:
  getElementById()
  getElementsByTagName()
  getElementsByName()
  getElementsByClassName()
  quertySelector()

删除节点：
  removeChild()

替换节点


    replaceChild()

# 7、写一个格式化时间的方法

https://github.com/haizlin/fe-interview/issues/2337


# 8、XML与JSON有什么的区别？

无可比性所以没区别
但有共同点，可能是写法都比较严格

# 9、写一个获取页面中所有checkbox的方法

console.info(document.querySelectorAll('input[type=checkbox]'))

# 10、写一个获取非行间样式的方法

行间样式：

<p style="color: red"></p>
<p></p>

<style> 
  color: red

</style>

外部样式：

<link></link>

window.getComputedStyle(element) ? window.getComputedStyle(element).attribute : element.currentStyle.attribute

# 11、localStorage什么时候过期?

只有手动清除或清除浏览器缓存才可以背清除掉,

可以通过setItem里面缓存时间参数，取出来后做一个前后时间对比，如果超过时间限制的话就删除该缓存即可。

# 12、如何判断两个对象相等？

JSON.stringify(obj)==JSON.stringify(obj)  执行速度是最快的

另一种写法：https://github.com/haizlin/fe-interview/issues/2365

# 13、举例说明js中什么是尾调用优化？

简而言之是函数里的最后一个动作是函数调用。

函数执行有时间复杂度和空间复杂度，尾调用优化却主要是指空间的优化。

# 14、innerHTML有什么缺点？

innerHTML的修改和添加，元素中旧的内容被移除新的内容会被重新写入元素。innerHTML内容将会被重新解析和构建元素。例如
innerHTML+ = ”“ 时，内容”归零” 重写，所有的图片和资源重新加载，这样会消耗更多的时间。

# 15、字符串拼接有哪些方式？哪种性能好？

1.使用 + 号 （最好）



2.es6模板字符串，以反引号（ ` ）标识
3.concat
4.数组方法join

# 16、js的循环结构有哪些？

for
for in


while  ？
do while  ？


# 17、在不支持js的浏览器中如何隐藏JavaScript代码？


在<script>标签之后的代码中添加“<!-– ”，不带引号。
在</script>标签之前添加“// –->”,代码中没有引号。

旧浏览器现在将JavaScript代码视为一个长的HTML注释。而支持JavaScript的浏览器则将“<! – ”和“// – >”作为一行注释。

<script><!--
alert();
// --></script>


# 18、alert如何让文本换行？

先考虑兼容性的问题，再使用转义字符
ie： alert("A\r\nB"); //chrome也可以实现
chrome： alert("A\nB");


# 19、Number()的存储空间是多大？假如接口返回一个超过最大字节的数字怎么办？

Number类型的最大值为2的53次方，即9007199254740992，如果超过这个值，比如900719925474099222，那么得到的值会不精确，也就是900719925474099200

# 20、一个api接口从请求数据到请求结束共与服务器进行了几次交互？

 API是一些预先定义的函数，或指软件系统不同组成部分衔接的约定。
    如果已经建立了连接，那么单次请求数据到请求结束应该是一次交互；

# 21、使用js实现一个循环队列

```js
const queue = []
let queueRunning = false
let loopTimer = null
const loop = task => {
  // do something...
  console.log(task)
  if (isQueueHasTask()) {
    // you can add new tasks in the middle of the queue.
    loopTimer = setTimeout(() => {loop(getNextTask())})
  } else {
    queueRunning = false
  }
}
const startLoop = () => {
  if (queueRunning) return
  if (isQueueHasTask()) {
    queueRunning = true
    loop(getNextTask())
  }
}
const stopLoop = () => {
  if (!queueRunning) return
  if (loopTimer) {
    clearTimeout(loopTimer)
    queueRunning = false
  }
}
const getNextTask = () => queue.shift()
const isQueueHasTask = () => !!queue.length
const addTask = task => {
  if (!Array.isArray(task)) task = [task]
  queue.push(...task)
  startLoop()
}
 

```

# 22、举例说明面向对象编程有什么缺点？


    有实例化开销，内存消耗比较大，性能消耗比较大


# 23、fetch和axios请求的原理都是基于XMLHttpRerequst吗？

axios是基于XMLHttpRequest的封装，而fetch是js原生支持的网络请求api，这在浏览器底层进行了支持。

# 24、axios为什么可以使用对象和函数两种方式调用？是如何实现的？

首先暴露的axios内部实现是指向一个wrap函数，然后这个函数上挂载了Axios.prototype上所有的属性和方法，包括get post delete等七种，所以axios就能直接这些方法，而且这些原型方法能实际调用是Axios.prototype.request。

axios(configObj)这样调用，就会执行这个wrap方法，它是对Axios.prototype.request封装。

所以无论怎么调用，最后都是靠Axios.prototype.request

# 25、axios拦截器原理是什么？

拦截器原理其实就是用use添加用户自定义的函数到拦截器的数组中。

https://github.com/haizlin/fe-interview/issues/2420

# 26、你是如何比较js函数的执行速度的？

采用chrome performance api

performance api比较精准的


console.time(flag); console.timeEnd(flag);也行 搭配timelog 多次测量


# 27、手写一个trim()的方法

trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。

不会改变原始字符串。

'    ab  c   '.replace(/(^\s+)|(\s+$)/gm, '')  // "ab  c"

replace(/(^\s+)|(\s+$)/gm)

# 28、实现一个函数记忆的方法

function cacheFunc(fn) {
  const cache = Object.create(null)
  return (...arg) => {
    const key = arg.length + arg.join(",") // 根据传参构建唯一的key
    if (cache[key]) { // 命中缓存，直接返回缓存值
      return cache[key]
    }
    return cache[key] = fn(...arg) // 否则，执行fn，保存一下
  }
}


function a(n) {
  console.log("执行了a函数");
  return n
}
let newA= cacheFunc(a)

newA(6)
newA(6)
newA(6)

结果只有第一次newA(6)调用才会打印"执行了a函数"，之后的newA(6)调用只会返回6

# 29、写一个方法遍历指定对象的所有属性

Object.keys()、Object.values()只能遍历对象自有的属性，for in 可以遍历原型中的属性。

# 30、 js循环中调用异步的方法，如何确保执行结果的顺序是正确的？

todo

# 31、 说说你对JSBridge的理解

js和原生应用之间交互的桥梁

# 32、代码中如果遇到未定义的变量，会抛出异常吗？程序还会不会继续往下走？

JS 解析器解析到未定义变量时，会抛出 Uncaught ReferenceError 错误，JS 引擎会停止解析后面的代码，但之前的代码不受影响，并跳出该代码块。

# 33、使用delete删除数组，其长度会改变吗？

长度不会改变


# 34、写一个方法，实时验证input输入的值是否满足金额如：3.56(最多只有两位小数且只能数字和小数点)的格式，其它特殊字符禁止输入

<input type="text" pattern="^\d+(\.\d{1,2})?$">

# 35、js怎样避免原型链上的对象共享？

组合继承

怎么做：
    公有的写在原型
    私有的卸载构造函数
    可以向父类传递参数

缺点：
（
    需要手动绑定constructor
    封装性一般
    重复调用父类性能损耗
）


function Parent (name, friends) {
  // 私有的部分
  this.name = name;
  this.friends = friends;
}
Parent.prototype = {
  // 公有的写这里
  constructor: Parent,// 需要手动绑定
  share: [1, 2, 3],
  log: function () {
    return this.name;
  }
}

// 封装性一般
function Child (name, friends, gender) {
  Parent.call(this, name, friends); // 这里调用了一次Parent
  this.gender = gender;
}
Child.prototype = new Parent(); // 这里又调用了一次Parent
Child.prototype.constructor = Child;//需要手动修改constructor


寄生组合继承

杂糅了原型链式、构造函数式、组合式、原型式、寄生式而形成的一种方式

https://github.com/haizlin/fe-interview/issues/2470

# 36、写一个方法把科学计数法转换成数字或者字符串

var a = -2243433.2242
var b = 1000000000000000000000
const numString = (str) => {
  return parseFloat(str).toLocaleString().replaceAll(',', '')
}
numString(a)// '-2243433.224'
numString(b)// '1000000000000000000000'
numString('1e+23')// '100000000000000000000000'

实际操作会有精度问题


# 37、内存泄漏和内存溢出有什么区别

内存泄漏（闭包）是分配的内存无法释放，导致一直占用内存空间，最终可能引发内存溢出

内存溢出是申请或使用内存超出可以分配的内存时(例如往一个整形空间存放长整形的数据)

# 38、promise的构造函数是同步执行还是异步执行，它的then方法呢？

promise构造函数是同步执行的，then方法是异步执行的。

# 39、写个方法获取屏幕的DPI



(function() {
  var arrDPI = new Array();
  if ( window.screen.deviceXDPI) {
    arrDPI[0] = window.screen.deviceXDPI;
    arrDPI[1] = window.screen.deviceYDPI;
  }
  else {
    var tmpNode = document.createElement( "DIV" );
    tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
    document.body.appendChild( tmpNode );
    arrDPI[0] = parseInt( tmpNode.offsetWidth );
    arrDPI[1] = parseInt( tmpNode.offsetHeight );
    tmpNode.parentNode.removeChild( tmpNode );
  }
  console.dir(arrDPI);
  return arrDPI;
})()

# 40、使用for-in语句能保证遍历对象的顺序吗？如果不能那为什么？如果可以那又如何保证？

？？？

# 41、使用js实现一个图片剪裁的功能

/** 
 * 裁切图片
 * @param imgUrl 原始图片路径
 * @param x,y,width,height 从点[x, y]开始，将宽度width,高度height的区域裁切下来
 * tips：需要运行于服务器环境下切图片为同域
 */
function clipImage(imgUrl, x, y, width, height) {
    return new Promise((resolve, reject) => {
        let cvs = document.createElement("canvas");
        cvs.width = width;
        cvs.height = height;

        var ctx = cvs.getContext('2d');
        let _img = new Image();
        _img.src = imgUrl;
        _img.onload = () => {
            ctx.drawImage(_img, 0 - x, 0 - y);
            resolve(cvs.toDataURL());
        }
    })
}

clipImage("./img/loginbg.jpg", 100, 100, 300, 400).then(res => {
    let __img = document.createElement("img");
    __img.src = res;
    document.body.appendChild(__img);
})


# 42、为什么要用纯函数？

在此之前要先了解什么是纯函数，简单来说纯函数的定义有两个：
1.返回的结果只依赖于传入的参数。
2.执行过程中不产生副作用。


在这里就需要了解到什么是副作用
1.改变了外部变量或者对象属性
2.触发任何外部进程
3.发送http请求
4.调用其他有副作用的函数


那么我们为什么要用纯函数呢，从定义来看，我们可以知道纯函数不管你在什么时候请求它，只要参数是一样的，那返回的结果就肯定是一样的

然后对于副作用我的理解是一个函数的功能要单一 ，你不能即在负责计算或者什么别的行为的同时还负责http请求什么的，发起http请求应该让另外一个函数去单独实现。


然后另外一个函数虽然产生了副作用，但是它的返回结果只依赖于传入的参数（比如链接）。这样做的好处有方便测试和后期维护，如何你一个函数负责多个功能，那后面估计看着这个函数都很难受。

# 43、纯函数和函数式编程有什么关系？

函数式编程是一种编程思想，纯函数是这种思想的基本

要实现函数式编程，我们所封装的方法应该是抽象的，应该是和外部状态无关系的，也就需要是纯函数的，这样才能保证抽象的方法可复用而且输出结果只决定于输入参数。

# 44、说说你对js沙箱的理解，它有什么应用场景？

沙箱是将代码放入一个隔离环境里运行，主要用于在线编辑

# 45、写一个 document.querySelector 的逆方法

document.querySelector 是 selectorStr -> node，现求一个方法 node -> selectorStr
由于CSS选择字符串表达方式有很多，请尽可能写出能选出唯一 node 的选择器

document.queryNode = function(node){
  if(node.id){
    return '#'+ node.id;
  }
  if(node.className){
    return '.'+ node.id;
  }
  return node.nodeName; 
};

# 46、不用 + eval Function 实现加法


function add(a, b) {
   // 只要 a 和 b 中一个为 0
  if(a==0 || b==0) {
    // 就返回不为0 的那个
    // a为0，返回 b，a不为0，返回a
    return a || b;
  }
  // b 不等于 0 的时候
  while(b!=0) {
    let i = b;
    a 为0的话，返回 a，a不为o的话，返回b <<用来将一个数的各二进制位全部左移若干位
    b = (a & b) << 1;
    a = a ^ i;
  }
  return a;
};

# 47、js源代码压缩都有哪些方法？它们的压缩原理分别是什么？

在线工具
webpack

原理：
删除注释
变量名方法名字精简

# 48、ajax如何接收后台传来的图片？

responseType 为 Blob，将 Blob 保存为文件

# 49、实现多张图片合成一张的效果

canvas

# 50、请使用 js 实现一个双向链表


    - 实现一个最基本的双向链表，使用两份数组实现。第一个数组保存的是第二个数组的下标，第二个数据才保存具体的元素。要求实现 push、pop、unshift、shift 与 insert 方法。
    - 为这个新生的双向链表实现 forEach、map、reduce 等方法，刻在 prototype 的那种。
    - 添加一些常用方法，例如 filter、reverse 等。


css题目（50）

# 1、你是如何压缩字体的？

压缩字体文件么，有研究过，平时用 font-spider。

# 2、如何使用CSS绘制一个汉堡式菜单

todo

# 3、说说display:none和visibility:hidden的区别

display:none dom对象不渲染。
visibility:hidden 隐藏但是dom对象渲染。

# 4、css的user-select:all 有什么用处？

none：
文本不能被选择
text：
可以选择文本
all：
当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。
element：
可以选择文本，但选择范围受元素边界的约束

# 5、如何让一个块元素绝对居中？

div{
  position:fixed;
  right:0;
  left:0;
  bottom:0;
  top:0;
  margin: auto auto
}

# 6、你知道什么是CSS-in-JS吗？说说你对它的了解

const styles = {
  color: red,
};

return <div style={styles} />

--------------------------------

// index.module.css
.x { color: red }

// index.js
import styles from './index.module.css';
return <div className={styles.x} />

--------------------------------


const styles = {
  x: { color: red }
};

return <styles><div className="x" /></style>

--------------------------------

const styles = {
  x: { color: red }
};

return <div className={styles.x} />

# 7、分析比较opacity: 0、visibility: hidden、display: none三者的优劣和适用场景


opacity 0: 单纯视觉效果，除了看不见，其他都正常。
visibility: hidden: 可继承也可覆盖。
display: none: 元素不会渲染，不影响布局，不会被css计数，也不支持transition。

# 8、你对伪类了解多少？分为几大类？

:hover
::after
::before
:nth-child
:nth-of-child
:first-child
:last-child
总结分为两类：页面节点效果操作和获取指定元素选择器


# 9、为什么要使用sass/less？

为了让 CSS 富有逻辑性，短板不那么严重。为了提示开发效率，使得css编写更加灵活

# 10、使用sass的方式有哪些？

得编译，有的项目中可以用<style type="sass"> 来使用（也得编译） 记不清楚是不是了


# 11、sass是怎么定义变量的？

sass变量可以理解为以$+变量名为键的键值对，例如

$my-color: #fff;
background-color:$my-color;

# 12、你认为sass和less的最大区别是什么呢？你喜欢哪个？为什么？

https://github.com/haizlin/fe-interview/issues/1739

# 13、说说你对sass的嵌套规则的理解？

嵌套类型有：选择器嵌套、属性嵌套、伪类嵌套、群组选择器嵌套 。

margin: 0 { //2.属性嵌套 相当于margin:10px 0 0 0 ;
  top:10px
}

.tenant-detail {
  background: transparent!important;
  .tenant-container {  // 选择器嵌套
  }
}

# 14、检测sass中错误的指令是哪个？

@debug伪指令检测错误，并将SassScript表达式值显示到标准错误输出流。

# 15、你有用过sass中的Mixin功能吗？它有哪些作用？

1.混合用法

@mixin ellipsis-one {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.test {
   @inculde ellipsis-one;
}

2.函数用法

@mixin hoverColor ($color, $deepColor) {
    color: $color;
    cursor: pointer;
    &:hover {
       color: $deepColor;
   }
}

.test {
 @inculde hoverColor(#555, #333);
}

# 16、在sass中可以执行布尔运算吗？

sass 有 @if @else if @else，这样也算是有并交关系了

# 17、说说sass有哪些你认为很棒的特性

预处理
嵌套
变量
模块
继承
计算

# 18、sass是如何导入模块的

@import

# 19、请使用CSS画一个带锯齿形边框圆圈

todo

# 20、css如何消除字体的锯齿？

-webkit-font-smoothing：antialiased;

# 21、css图片缩放失真出现锯齿的如何解决呢？

转化为svg，是一种矢量图的解决方案，缩放不会产生失真，我们可以把图片转为SVG来展示。

# 22、如何清除在项目中无用的css代码呢？

1、IDE中，会对没有使用到的样式，自己进行检测，删除时候，还需要手动删除。
2、webpack中，有基于消除无用css的插件（purifycss-webpack purify-css），不过需要提供html文件的模板，因为需要遍历这个模板，才知道用了哪些css。
3、单页面应用中，由于都是组件化的开发，无法提供一个最终版的html文件，所以不能适用上面2提供的方案。

# 23、一个页面引用多个文件，如何防止样式冲突？

编码层面：

1、定制规则：不同的样式文件表，增加不同前缀。
2、按照功能区分文件：不同的文件样式表，针对页面不同的部分写样式，通过样式层级的方式，确认样式的边界。（例如header部分：#header p { }，footer部分：#footer p { }）。


工具层面：
1、postCss的使用
2、vue中scoped、react中的css module配置等等

# 24、使用css将图片转换成黑白的效果

filter: grayscale(1)

# 25、请使用css3来模拟中/英文打字的效果

：after 加个 竖条闪呀闪， + 文字一个个出现这样的动画

# 26、使用css3画一个扇形

todo

# 27、你知道什么是动态伪类吗？

锚点伪类（a标签）
1、:link 未操作的链接
2、:visited 该链接已被访问，一旦:visited，:link/:active不再起作用。

用户行为伪类
1、:hover 鼠标悬停该元素
2、:active 鼠标点击该元素
3、:focus 鼠标在输入框中input

UI元素状态伪类
1、:enabled
2、:disabled
3、:checked


# 28、css中的baseline，你知道吗？

baseline是西文字体里面的一种定位，vertical-align:baseline是指行内元素里的文字，在垂直方向上，按字体的基线排列，基线就是可以类似我们小学写英文字母时的带线的格子，axec这些字母的底部就是baseline，然后lh的baseline也一样，g的baseline则在于中间，就是西文字体如何在一条看不见的线上排练形成整齐的视觉效果。汉字很少提及baseline的概念，但汉字有中宫的说法。

# 29、如何将元素的所有css属性恢复为初始化状态？

all:upset

# 30、移动端1px像素的问题及解决方案是什么？

viewport结合rem解决像素比问题


比如在devicePixelRatio=2设置meta
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">

在devicePixelRatio=3设置meta
<meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">


# 31、用CSS实现tab切换

1、用label结合单选按钮radio接受切换tab的单击
2、用zindex层级来显示当前tab页对应的内容
3、用css兄弟选择器选中对应的tab页签和内容页，添加相应的样式

# 32、用CSS实现一个轮播图

使用CSS实现的话，可以使用 animat属性和overflow:hidden 属性来做。


# 33、字体的粗细的属性是用哪一个？它有哪些属性值？

字体粗细应该是font-weight，值有normal,bold,bolder,lighter,inherit,也可以自己定义100~900之间的某一个值

# 34、你知道字体所拥有的字重的数量和font-weight的数值字重是什么对应关系吗？

正常  = font-weight：400

# 35、举例说明跟字体相关的属性有哪些？

font-size：字体大小
font-weight：字体粗细
font-family：字体类型
color：字体颜色

# 36、你所理解的css高级技巧有哪些？

各种伪类的用法吧，还有各种布局的使用和媒体查询自适应
各种动画效果，能用css的都可以不去用js写的，对我来说就很高级

# 37、body{ height:100% }和html, body{ height:100% }有什么区别？为什么html要设置height:100%呢，html不就是整个窗口吗？

html是body的父级，在缺少了父级的宽高之后，如果给body设置一个渐变色背景的话将不会正常显示。

# 38、你有使用过font-size-adjust属性吗？说说它的作用是什么？

很少用。

p {
  font-family: Verdana, Georgia，Times;
}

由于 Georgia 和 Times 字体比 Verdana 字体的 aspect 值要小，当使用备选字体时，必然会影响文本的易读性，甚至导致页面布局产生混乱。

为了避免这种情况，在CSS3中，新增加了 font-size-adjust属性。实际应用中，只需把 font-size-adjust属性的值，设置为首选字体的 aspect 值，就可以保证使用备选字体后，文本的显示尺寸不发生变化。

# 39、当使用@font-face的时候，为什么src中要加入local呢？

 @font-face   这是一个CSS @规则 ，它允许网页开发者为其网页指定在线字体。 

@font-face {
font-family: MyHelvetica;
src: local("Helvetica Neue Bold"),
local("HelveticaNeue-Bold"),
url(MgOpenModernaBold.ttf);
font-weight: bold;
}


意味着加入local后，代码加载时会优先采用电脑资源，而不是从网络加载


# 40、如何解决css加载字体跨域的问题？

我们使用Access-Control-Allow-Origin：* 通过启用cors 来解决跨域问题。

# 41、说下你对css样式的这几个属性值initial、inherit、unset、revert的理解 

initial（初始）、inherit（继承）、unset（未设置）、revert（还原）
inherit可以继承父级元素的属性，initial则是不继承
unset - 表示如果该属性默认可继承，则值为inherit，否则值为initial
revert - 表示样式表中定义的元素属性的默认值。若用户定义样式表中显式设置，则按此设置；否则，按照浏览器定义样式表中的样式设置；否则，等价于unset 。

# 42、如何取消从父级元素继承下来的CSS样式呢？

font-size: initial;
all: initial;

# 43、css的哪个属性可以把所有元素或其父元素的属性重置呢？

all:unset

# 44、css的height:100%和height:inherit之间有什么区别呢？

https://www.zhangxinxu.com/wordpress/2015/02/different-height-100-height-inherit/

# 45、如何禁止长按保存或复制图像？

在设置 user-select:none;属性可以防止用户复制吧，还有其他的就不知道了

pointer-event:none;

# 46、img标签是行内元素，为什么却能设置宽高？

img属于行内替换元素。height/width/padding/margin均可用。效果等于块元素。

# 47、css中的选择器、属性、属性值区分大小写吗？

选择器和属性区分大小写，

属性值如果是颜色可以不区分大小写吧，但颜色最好小写

# 48、说说你对相对定位、绝对定位、固定定位的理解

https://github.com/haizlin/fe-interview/issues/1916

# 49、padding会影响到元素的大小，那不想让它影响到元素的宽度应该怎么办？

box-sizing:border-box

# 50、 什么是hack？css的hack有哪些？

1、CSS hack：由于不同厂商的浏览器，比如Internet Explorer,Safari,Mozilla Firefox,Chrome等，或者是同一厂商的浏览器的不同版本，如IE6和IE7，对CSS的解析认识不完全一样，因此会导致生成的页面效果不一样，得不到我们所需要的页面效果。 这个时候我们就需要针对不同的浏览器去写不同的CSS，让它能够同时兼容不同的浏览器，能在不同的浏览器中也能得到我们想要的页面效果。


3、hack实例： 1、属性级Hack：比如IE6能识别下划线“_”和星号“*”，IE7能识别星号“*”，但不能识别下划线”_ ”，而firefox两个都不能认识。



1、属性级Hack：比如IE6能识别下划线“_”和星号“*”，IE7能识别星号“*”，但不能识别下划线”_ ”，而firefox两个都不能认识。

2、选择符级Hack：比如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。


周级综合题目（50）

# 1、请问display:inline-block在什么时候会显示间隙？

换行或空格

# 2、说说你对HTML5的img标签属性srcset和sizes的理解？都有哪些应用场景？

  srcset：规定了图片的src候选集;
  sizes：规定了图片在不同条件下的尺寸取值，根据尺寸取值从srcset中找到对应的图片src；配合srcset属性才能使用；

<img src="1.jpg " srcset="2.jpg 1440w, 3.jpg 800w" />
当浏览器宽度为1440时显示2.jpg，浏览器宽度为800时显示3.jpg

sizes 和 srcset 用法差不多

todo

# 3、你有使用过JWT吗？说说你对它的理解

JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。服务器认证以后，生成一个 JSON 对象，由客户端保存，每次服务端通信只要但是这个json对象就可以。方便服务器拓展。
JWT 由三部分组成Header（头部），Payload（负载），Signature（签名）。Header（头部），Payload（负载）都是json对象。Signature 部分是对前两部分的签名。
首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。
然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。
HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)
算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。

# 3、举例说明数组和对象的迭代方法分别有哪些？

Array

    6:  forEach method arr.forEach((val, idx, arr) => { ... }, thisArg)
    6:  for...of (Symbol.iterator) for (let val of arr) { ... }
    5:  for...in (Enumerable Keys) for (let key in arr) { ... }


Object

    for...in (Enumerable Keys) for (let key in obj) { ... }
    Object static method + for...of
    for (let key of Object.keys(obj)) { ... }
    for (let [key, val] of Object.entries(obj)) { ... }

# 4、遇到overflow: scroll不能平滑滚动怎么解决？

-webkit-overflow-scrolling: touch;

# 5、你有用过HTML5中的datalist标签吗？说说你对它的理解

<input list="browsers">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>

# 6、一个项目写很多的纯静态页面，有公共的部分（例如头和尾）你是怎么提取公用的？

1.写成js,插入
2.组件化开发

# 7、举例说明什么是IIFEs？它有什么好处？


const a = (() => {
    if (...) return 1
    else return 0
})()

let a
if (...) a = 1
else a = 0


# 8、说说你对BEM规范的理解，同时举例说明常见的CSS规范有哪些？

BEM：block（块）、element（元素）、modifier（修饰符），一种命名约定，可以让代码更易理解
如：
.card
.card__body
.card__button--primary

# 9、HTML5的应用程序缓存与浏览器缓存有什么不同？

应用程序缓存是 HTML5 的重要特性之一，提供了离线使用的功能，让应用程序可以获取本地的网站内容，例如 HTML、CSS、图片以及 JavaScript。这个特性可以提高网站性能，它的实现借助于 manifest 文件，与传统浏览器缓存相比，它不强制用户访问的网站内容被缓存

# 10、你知道什么是websocket吗？它有什么应用场景？

相对于HTTP这种非持久的协议来说WebSocket是一个持久化的协议，允许服务端主动向客户端推送数据。
应用场景

1.社交订阅
2.多玩家游戏
3.协同合作
4.点击流数据
5.股票基金等实时报价
6.体育实况更新
7.基于位置的应用
8.在线教育
9.多媒体聊天

# 11、举例说明什么是decodeURI()和encodeURI()是什么？


encodeURI()：将 URI 中的每个字符编码为 1-4 个格式为 %xx 的转义序列（xx 为十六进制数），但不包括 ASCII 数字、字母、URL 分隔符（/、?、,、&、...）、以及其他部分 ASCII 字符。具体见 MDN。
        Example: encodeURI('http://example.com/端点?键=值') => 'http://example.com/%E7%AB%AF%E7%82%B9?%E9%94%AE=%E5%80%BC'
decodeURI()：将已经编码的 URI 中的转义序列解码为它们表示的字符，但除了 encodeURI() 不会编码的字符。
    
encodeURIComponent()：用于编码 URI 中的组成部分。它除了转义 encodeURI() 指定的字符，还会转义 URL 分隔符（/、?、,、&、...）
        Example: encodeURIComponent('测试/测试?测试=测试') => '%E6%B5%8B%E8%AF%95%2F%E6%B5%8B%E8%AF%95%3F%E6%B5%8B%E8%AF%95%3D%E6%B5%8B%E8%AF%95'
    decodeURIComponent()：将已经编码的 URI 组成部分中的转义序列解码为它们表示的字符，但除了 encodeURIComponent() 不会编码的字符。

# 12、写例子说明如何强制（自动）中、英文换行与不换行

    word-break: break-all; 只对英文起作用，以字母作为换行依据
    word-wrap: break-word; 只对英文起作用，以单词作为换行依据
    white-space: pre-wrap; 只对中文起作用，强制换行
    white-space: nowrap; 强制不换行，都起作用
    white-space: nowrap; 
    overflow:hidden; 
    text-overflow: ellipsis; 不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持）

# 13、简述下HTML的快捷键属性是哪个？并举例说明有什么用？

<a href="http://www.baidu.com" accesskey="h">HTML</a><br />

# 14、你申请的这个职位，你觉得你还欠缺什么呢？

自己运维方面的能力还欠缺一些深度（本身前端，运维方面本来就是加分项，说是自己的欠缺也无伤大雅，除非你是高级工程师级别）
同时你要乘机表现自己的优点啊，比如说自己对产品有比较多的思考，会在平时工作中给产品意见，用技术推动产品优化，会给产品提供技术角度的建议等。

# 15、在js中怎么捕获异常？写出来看看？应该在哪些场景下采用呢？

try {
    ...
    throw ...
    ...
} catch (err) {
    ...
} finally {
    ...
}

# 16、 举例说明css的基本语句构成是什么呢？

一个选择器（例如：BODY，P等）和写在花括号里的声明，这些声明通常是由几组用分号分隔的属性和值组成。
body{
color:red;
}

# 17、你有用过HTML5的Device API吗？说说它都有哪些应用场景？

dial: 拨打电话
beep: 发出蜂鸣声
vibrate: 设备振动
setWakelock: 设置应用是否保持唤醒（屏幕常亮）状态
isWakelock: 获取程序是否一直保持唤醒（屏幕常亮）状态
setVolume: 设置设备的系统音量
getVolume: 获取设备的系统音量

# 18、说下你平时是怎么自学的？怎么安排时间的？

# 18、写出你遇到过IE6/7/8/9的BUG及解决方法

https://github.com/haizlin/fe-interview/issues/581

# 19、你会抓https和移动端的包吗？分别描述下这两种包要怎么抓？

电脑开代理->手机wifi连电脑代理->手机访问开发环境->手机数据线连接电脑->访问：chrome://inspect/#devices，跟普通网页一样了。

charles 挺好用的，抓取https需要手机安装证书

# 20、举例说明js如何实现继承？

https://github.com/haizlin/fe-interview/issues/586

# 21、 IE(6/7/8/9/10/11/Edge)下的hack写法分别有哪些？


    IE9以及<IE9: \9;
    IE8以及>IE8: \0;
    3.IE7以及<IE7: *;
    4.IE6:*或_;
    5.edge不清楚;


# 22、在新窗口打开链接的方法是什么？那怎么设置全站链接都在新窗口打开？

<head>
    <base target="_blank">
</head>


<a href="#" target="_blank"></a>

# 23、刷新和强制刷新有什么区别？说说你对两者的理解

302 是暂时重定向。比如在 CORS 项目中，前端发出一个非简单请求的时候，浏览器会预先发送一个 options 请求，response 一般都是200 或者 302。

而浏览器缓存相关的状态码通常是304（代表资源未更新）或者 200（from cache）

# 24、请描述你对浏览器同源策略的理解

同源策略是指，某个页面上执行的 AJAX/Fetch 请求只能访问到同域名下的 URL。
这是出于安全性考虑，然而在某些需要跨域的场景中，通过在服务端设置 CORS 响应头 Access-Control-Allow-Origin（允许的来源域名）、Access-Control-Allow-Method（允许的 HTTP Method）等，可以响应来自其他域的请求。


# 25、font-style的属性有Italic和oblique，两者有什么区别呢

italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.



Oblique > Italic


# 26、a标签下的href="javascript:void(0)"起到了什么作用？说说你对javascript:void(0)的理解？


javascript:是伪协议，表示url的内容通过javascript执行。void(0)表示不作任何操作，这样会防止链接跳转到其他页面。这么做往往是为了保留链接的样式，但不让链接执行实际操作，

# 27、你平时开发是用mac还是windows系统？至少举三个例子说明两者的区别？

# 28、js延迟加载的方式有哪些？

defer 属性
async 属性
动态创建DOM方式
使用jQuery的getScript方法
使用setTimeout延迟方法
让JS最后加载

# 29、怎么让body高度自适应屏幕？为什么？

html,body{height:100%}

html,body同时设置成100%才有效

或者

body{
height: 100vh;
}


为何只设置body{height：100%}不行？
height：100%是相对于父元素来说的，如果只设置body的高度属性，由于其父元素是html高度未设置，且并非浏览器窗口高度，所以只设置body为100%是不能达到效果的，必须html，body都设置100%。而body{height: 100vh}直接把高度设置成了视口高度，与html大小无关，所以只在body设置vh是可行的。

# 30、iframe的使用场景有哪些？

1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 
2：ajax上传文件。 
3：加载别的网站内容，例如google广告，网站流量分析。
4： 在上传图片时，不用flash实现无刷新。
5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。

# 31、Git的reset和revert有什么区别？它们分别适用于什么场景？

https://github.com/haizlin/fe-interview/issues/599

# 32、把script标签放在页面最底部的</body>之前和之后有什么区别？浏览器会如何解析它们？

HTML 2.0起放在“body标签闭合之后”就是不合标准的。之所以但是浏览器却不会报错，是因为如果在“body标签闭合之后”后再出现script或任何元素的开始标签，都是parse error，浏览器会忽略之前的，即视作仍旧在body内。所以实际效果和写在“body标签闭合之前”之前是没有区别的。所以要么放head标签里，要么放 </body> 之前。

# 33、display有哪些值？分别说明他们的作用是什么？

display: grid;

block
inline-block
inline
flex
table
none

# 34、举例说明你对HTML5的ruby标签的理解，都有哪些应用场景？

<ruby class="spz">
    <rb>茕</rb>
    <rt>qióng</rt>
</ruby>

# 35、你平常都看哪些方面的书？你看书的方法是怎样的？

设计模式
css世界
红宝书
犀牛
你不知道的js

# 36、请写一个sleep（暂停）函数

function sleep(milliseconds: number) {
    return new Promise<void>(resolve =>
        setTimeout(resolve, milliseconds))
}
void async function main() {
    // … do something …
    await sleep(5000)
    // … do something else …
}()


# 37、写出几个初始化CSS的样式，并解释说明为什么要这样写

* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none
}

.clearfix {
  *zoom: 1;
}

# 38、举例说明如何原样输出HTML代码，不被浏览器解析？


    使用pre标签


# 39、说说你对hosts文件的理解，它都有哪些作用？

hosts 文件可以将名称映射到 IP 地址。在本机上所有对这个名称的访问相当于对它被映射到的 IP 地址的访问。可以说它起到了简易的本地 DNS 的作用。

# 40、判断instanceof的结果并解释原因

function test(){ 
    return test; 
} 
new test() instanceof test;

==》

test instanceof test // false

https://github.com/haizlin/fe-interview/issues/609


Function.prototype -> Object.prototype -> null

# 41、说说你对CSS样式覆盖规则的理解 

- 首先看权重，权重高的样式会覆盖权重低大的样式。
!important > #id > .class > tag > *
- 同等权重时，css 靠后的覆盖靠前的（就近原则），只与 css 书写的顺序有关，与 class 引用的顺序无关
- 行内样式 > 内联样式 > 外联样式

# 42、怎么使用HTML5来获取定位？定位不准怎么解决？


Geolocation

# 43、说说你对robots文件的理解，它有什么作用？

robots.txt文件对抓取工具（如爬虫）在访问路径等方面做出了规定，用于阻止或引导抓取工具对网站下特定内容的抓取；

# 44、js异步加载有哪些方案？

1.将script标签放在body结束标签之前

<html>
<head></head>
<body>
 .....
<script type="text/javascript" src='...'></script>
</body>
</html>

这种方案会先加载dom树，然后再加载js脚本

2、在onload方法中给dom树动态添加script标签

<html>
<head></head>
<body onload="() => {
  var element = document.creatElement('script');
  element.type = 'text/javascript';
  element.src = '...';
  var headTag = document.getElementsByTagName('head')[0];
  headTag.insertBefore(element, headTag.firstChild);
}">
.....
</body>
</html>

这种方案也是先加载dom树，然后触发onload方法添加script标签加载js脚本

3、使用defer属性

<html>
<head>
    <script defer type='text/javascript'></script>
</head>
<body >.....</body>
</html>

这种方案会并行加载dom树和下载js脚本，js脚本下载后会等dom树解析完再执行

4.使用async属性

这种方案也会并行加载dom树和下载js脚本，js脚本下载完后立刻并行执行


# 45、外层有一个自适应高度的div，里面有两个div，一个高度固定300px，另一个怎么填满剩余的高度？

display: flex;
flex-flow: column nowrap;

flex-basis: 300px;

flex: 1;

# 46、a标签的href和onclick属性同时存在时哪个先触发？

onclick 先触发，回调写 preventdefault()

# 47、当项目准备上线前，你有做过哪些性能优化吗？

单页面应用首屏优化
1.第三方包CDN
2.路由懒加载,按需加载

# 48、写个方法随机打乱一个数组

随机交换下标

打乱下标

# 49、CSS的 overflow 属性定义溢出元素内容区的内容会如何处理呢

visible 默认
hidden 裁剪
scroll 滚动
auto


# 50、举例说明你对ol和ul标签的区别？它们的运用场景分别是什么呢？

有序无序的区别

算法题（3）


todo:

算法题（3）
