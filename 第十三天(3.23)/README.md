# js

# css

# 51、怎样在@keyframes中使用CSS变量

正常变量使用：


:root {
    --my-cool-background: #73a4f4;
}
 
/* CSS文件的其他部分 */
#foo {
    background-color: var(--my-cool-background);
}

在@keyframes中使用：

.bubble {
  --direction-y: 30px;
  --transparency: 0;
  animation: bubbling 3s forwards infinite;
}
 
@keyframes bubbling {
  0% {
    transform: translatey(var(--direction-y));
    opacity: var(--transparency);
  }
  40% {
    opacity: calc(var(--transparency) + 0.2);
  }
  70% {
    opacity: calc(var(--transparency) + 0.1);
  }
  100% {
    opacity: var(--transparency);
  }
}


https://www.cnblogs.com/powertoolsteam/p/css-variables.html

# 52、怎样在SVG中使用css变量？
<!-- 全局变化 -->
:root {
    --icon-color: black;
}

<!-- 局部变化 -->
.success {
    --icon-color: green;
}

stroke="var(--icon-color)"


# 53、css变量有哪些浏览器支持？

除了IE11（它不支持CSS变量），所有主流浏览器都对CSS变量有全面地支持。

对于不支持CSS变量的浏览器，一个变通的方案是使用具有虚拟查询条件(dummy conditional query)的@supports代码块:

 <!-- 不支持 -->
section {
    color: gray;
}
 
 <!-- 支持 -->
@supports(--css: variables) {
    section {
        --my-color: blue;
        color: var(--my-color, 'blue');
    }
}

此方法的一个缺点是，如果你大量使用CSS变量，而那些不支持CSS变量的浏览器在你的项目中有很高的适配优先级，那么相应的代码会变得很复杂，对于维护来说，甚至是噩梦。

第三方插件

# 54、你是如何检查css语法是否正确的？有哪些方法？

直接在Chrome浏览器的控制台上修改对应元素的css属性，直接看出变化

# 55、css3的属性transfrom的值 preserve-3d 和 perspective 有什么区别？

transform -- css3属性，可以对元素进行变换(2d/3d)，包括平移translate,旋转rotate,缩放scale,等等（完整取值参考 W3C）。

perspective -- css3属性，当元素涉及3d变换时，perspective可以定义我们眼睛看到的3d立体效果，即空间感。通俗地解释就比如你去电影院看电影，你距离大荧幕的距离就相当于perspective的值啦，离得越远则perspective值越大，看到空间效果也就会不一样！

# 56、 你最喜欢Sass的原因是什么？

样式复用，可以对css预处理，代码结构清晰（选择器嵌套）

# 57、你喜欢Sass还是Less？为什么？

？

# 58、Scss和Sass有什么区别？

编写语法不同，sass 他是按照缩进式写法
1、sass 不带大括号, scss 带大括号
2、 sass 没有 ; 号 , scss有
3、 scss 写法和css 简直一样

# 59、Sass的注释和css注释之间有什么区别？

？

# 60、请解释下Sass中的嵌套规则是什么？

？ 

# 61、Sass中的@at-root指令有什么作用？

@at-root指令可以将一个或多个样式规则生成在样式文件根层级上，而不是嵌套在其父选择器中

# 62、Sass中的@media指令有什么作用？

用于将不同的样式规则应用于不通的媒体类型

# 63、Sass中的@extend指令有什么作用？

@extend指令可以让一个CSS类继承另一个CSS类。

# 64、用于检测Sass中的错误是哪个指令？

Sass @debug指令用于检测错误, 并向标准错误输出流显示Sass脚本表达式值

# 65、如何定义一个Sass变量？

$bgColor: red;

@mixin flex($hov:space-between, $col:center) {
	display:flex;
	justify-content:$hov;
	align-items:$col;
}

# 66、Sass中如何编写占位符选择器？

# 67、Sass中的@import函数有什么作用？

可以导入外部定义@mixin的css变量

# 68、Sass的数字操作是什么？

todo

# 69、Sass的色彩操作是什么？

todo

# 70、在Sass中如何执行布尔运算？

$age:20;
.bool {
	@if ($age > 10 and $age < 25) {
		color: green;
	}
}

# 71、Sass中什么是括号运算？

todo

# 72、怎样使用Sass的Mixin功能？

Mixin可以将CSS封装为类似的函数方法。
在使用的时候通过使用@include来进行使用对应的方法。
有效的减少代码的重复率，将重复的CSS进行复用。

# 73、在Sass中Mixin有什么应用场景？

图

# 74、Sass脚本支持哪些数据类型？

numbers，strings，booleans，colors，nulls，lists，maps

# 75、Sass和Less有什么相同点？

todo

# 76、你知道Less刚出来时是用哪种语言编写的吗？

Ruby

# 77、Less现在最新的版本是使用的是什么语言编写的？

javascript

# 78、Less文件的扩展名是什么？

.less

# 79、Less的原理是什么？

变量，Mixin（混入），运算以及函数，LESS 可以让我们用更少的代码做更多的事情。

LESS 包含一套自定义的语法及一个解析器

# 80、使用Less有哪些方式？

1，直接引入less.js

使用步骤：
1、到less官网，下载less文件
2、在编译器中新建一个less文件，引入到我们的html页面中（注意下面的和css的引入方式稍微有些不同哦，看rel）
<link href="css/style.less" rel="stylesheet/less"/>
3、引入我们下载的less文件
<script src="js/less.min.js"></script>
然后就可以使用了

2，全局安装less，利用命令编译less

npm安装
npm install -g less
npm install -g less-plugin-clean-css

命令行编译less
lessc styles.less styles.css // 编译成css
lessc` --clean-css styles.less styles.min.css // 编译压缩css

# 81、在Less中怎样使用变量？如何定义？

@link-color: #ccc;
p {
	color: @link-color;
}

# 82、Less变量的种类有哪些？

值变量 选择器变量 属性变量 url变量 声明式变量

# 83、在Less中的嵌套作用是什么？

可以明确页面结构，看到各个class的关系

# 84、在Less中的Mixins有什么作用？

Mixins是一组css属性，可以将一个类的属性用于另一个类，并且包含类名作为其属性。在less中，可以使用类选择器或者id选择器以与css样式相同的方式声明mixin.mixin可以存储多个值，并且可以在必要的时候在代码中重复使用

# 85、在Less中转义有什么作用？

允许你使用任意字符串作为属性或变量值。任何 ~"anything" 或 ~'anything' 形式的内容都将按原样输出。
比如：

@min768: ~"(min-width: 768px)";
.wrap {
	@media @min768 {
		font-size: 2.0rem;
	}
}
编译为：

@media (min-width: 768px) {
	.wrap {
		font-size: 2.0rem;
	}
}

# 86、在Less中有哪些常用的函数？

todo

# 87、Less可以不通过编译直接在浏览器中使用吗？如何使用？

todo

# 88、在Less中的颜色通道功能是什么？

本人没有在 less 中使用过颜色通道功能，但是在此处可以总结下查到的关于颜色通道的定义：

每个图像都有一个或多个颜色通道，每个颜色通道保存着其对应的颜色信息。
图像中默认的颜色通道数取决于其颜色模式。例如，CMYK图像默认有4个通道，分别为青色、洋红、黄色、黑色。在默认情况下，位图模式、灰度、双色调和索引颜色图像只有一个通道。RGB和Lab图像有3个通道，CMYK图像有4个通道。

以GRB颜色模式为例，一副RGB色彩图中的每个像素点都是红，绿，蓝三种颜色通过不同比例混合而成，而颜色通道就保存着对应的颜色信息。

# 89、把Less编译为CSS的最佳方法是什么？

todo

# 90、在Less中使用命名空间和访问器有什么作用？

1.命名空间可以避免名称冲突，将一些变量或者混合模块打包起来, 然后重复使用

# 91、在Less中e()函数的目的是什么？

e 函数接收一个字符串并将此字符串返回。

用于输出一个即非CSS标识符，也不是Less专有标识符的值。


# html

# 1、你是怎样检测网页是否遵循W3C标准的？

1、文档类型是否定义
2、html 代码是否语义化


# 2、简述下W3C标准都有哪些？如何才能做出符合标准的网页？

todo

# 3、你认为写出什么样的html代码才是好代码呢？

不仅仅是逻辑顺序清楚，更重要还是复用性强，注释写的够让人明白。

# 4、写页面布局时需要考虑哪些方面的因素？

1 熟练使用块级元素 和 行内元素
2 html 结构语义化
3 是否考虑兼容性 和 移动端

# 5、百度、淘宝、京东移动端首页秒开是如何做到的？

我不知道，因为我的手机没看到他们首页秒开，都是有3秒的广告，这个时间，基本够他们加载完需要加载的数据了。

我猜是，服务端渲染， 解决首屏加载慢的方式，

# 6、说说你对H标签在布局中的重要性的理解

todo

# 7、写一个windows phone风格的布局

todo

# 8、使用button当按钮和使用div当按钮有什么区别？

button具有默认样式
button在表单中具有默认的提交事件
button具有disabled属性可以禁用

# 9、H5如何与APP交互？有哪些方式？

jsbridge与app通信

# 10、写一个水平竖直居中的弹窗，带遮罩层的布局

html

# 11、移动端布局的自适应如何做？

flex和rem

rem+postcss 已经是比较成熟的解决方案

如果本身没有用flex的话，就用百分比的形式

// 假设设计稿是750px
const ratio = 750/100 = 7.5;  // 除以100是因为屏幕宽度恒定为100vw

// 假设一个`div`是`375px`大小
div { width: 3.75vw; }  // 3.75vw在375px的屏幕下就是一般，即187.5px

# 12、写一个垂直的三栏布局，第一栏固定顶部，中间铺满，第三栏固定底部

todo

# 13、写一个滚动吸顶的布局

position: sticky;
top:20px；


# 14、实现两列等宽布局的方式有哪些？

1.flex实现：
.parent {
display: flex;
}
.child {
flex: 1;
width: 50%;
}


2.float实现（但是要注意清除浮动）：
.child {
float: left;
width: 50%;
}

# 15、 HTML5如何播放ts视频流？

引入mux.js转化，然后video展示
video标签

# 16、h5页面如何传递参数给小程序？ 

1、H5页面
<script src="${base}/resources/common/js/jweixin.miniProgram.js"></script>

wx.miniProgram.postMessage({
data: {
shareUrl:href
}
});

注意：传参必须使用data

2、小程序页面接收

Page({
//获取H5传给小程序的参数
getMessage: function(e) {
if (!e.detail) {
return
}
var datas = e.detail.data
var shareUrl = datas.shareUrl;
}
})

index.wxml文件

# 17、如何实现多行文字梯形排版？

可以利用文字会环绕浮动元素的特性来做：

todo

# 18、如何清除浮动


1：给 包含框 添加 after伪元素清除浮动。代码：

.clearfix:after{
            display: block;
            content:'';
            clear: both;
            height:0;
        }


2：使用BFC， 原理：让浮动块包含在同一个BFC中。

给 包含框 加一个overflow：hidden就可以了；代码：

3:  在 浮动元素 的最后面添加一个新元素，应用clear:both.

# 19、写一个类似刮刮卡效果的交互，即鼠标划过时显示号码

hover  =》 type： text


# 20、制作一个金字塔布局

todo

# 21、如何更改浏览器左上角标题旁的图标？

通过在 html 头部引入如下标签实现：
<link rel="shortcut icon" href="static/favicon.ico">

# 22、html5的geolocation定位误差大如何解决？

todo

# 23、HTML5的Geolocation不允许定位后如何于次让它弹起授权定位？

JS应该不能通过API主动再次调起授权定位。
需要提示用户，需要用户手动清除浏览器缓存或者设置app开启浏览器定位功能，之后才能重新弹出。

# 24、HTML5的Server-Sent和WebSocket有什么区别？

websocket是双向通信，server-sent只能服务端发送消息

# 25、 HTML5的Server-Sent和WebSocket如何选择哪一个？

看具体的业务场景

# 26、你觉得写Html难吗？难在哪？为什么？

合理应用h5新标签和新特性 而不只是divdiv

# 27、对于写一个页面布局，html/css/js这三者你是先写哪个后写哪个？


    快捷键创建模板
    html+css写出结构
    写js做交互

# 28、使用svg画出一个矩形 

<svg width="400" height="200" viewbox="0 0 2000 1000">
    <rect x="200" y="100" width="400" height="200" style="fill: blue"></rect>
</svg>

# 29、什么是本地存储的有效期？

本地存储的四种方式：cookie，localStorage, sessionStorage, indexDB
cookie: 通过 expires / max-age 设置过期时间。如不指定，则为 session cookie, 即一次会话有效。
localStorage: 持久存储，需主动清除
sessionStorage: 会话存储，会话结束（浏览器，标签页关闭）自动清除。
indexDB: 持久存储，需主动删除。

# 30、本地存储和cookie之间的区别是什么？

1.储存数据的大小不一样
2.cookie会被每次携带在请求中，而storage不会，只会存储在客户端。

# 31、为什么我们要使用web workers？

通过webworker可以开启多个线程，当我们在进行大数据运算的时候，效果会很明显，也是一种前端优化手段。

https://github.com/haizlin/fe-interview/issues/3463

# 32、说说你对HTML5中“一次编写，全体使用”的理解

有点组件化的意思

# 33、你认为HTML5出现后，它的商业模式会有哪些变化呢？

todo

# 34、如何阻止屏幕旋转时自动调整字体的大小？

iPhone 和 Android 的浏览器纵向 (Portrate mode) 和橫向 (Landscape mode) 模式皆有自动调整字体大小的功能。控制它的就是 CSS 中的 -webkit-text-size-adjust。

ext-size-adjust 设为 none 或者 100% 关闭字体大小自动调整功能.

html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
  -webkit-text-size-adjust:100%;
}

# 35、使用svg画一个百度的logo 

todo

# 36、使用svg画一个微信的logo

todo

# 37、如何在页面打开PDF文件？

移动端如果是安卓的不太能实现直接打开PDF文件，需要使用pdfjs将pdf转换成canvas，再在页面上展示

# 38、如何在不同的端口间共享cookie？

根据同源策略，cookie是区分端口的，但是浏览器实现来说，“cookie区分域，而不区分端口，也就是说，同一个ip下的多个端口下的cookie是共享的。

# 39、怎样计算首屏和白屏的时间？ 

https://developer.mozilla.org/en-US/docs/Web/API/PerformancePaintTiming

# 40、页面上如何显示特殊字符？

<code>

# 41、写一个带遮罩层的弹窗，并把内容锁定没有滚动条

todo

# 42、如何让img自动适应div容器大小？ 

设置图片宽高为100%并设置属性object-fit: cover，防止变形

object-fit

    contain: 保持比例，内容被缩放，长的一边与容器相同
    fill: 不保持比例，默认值
    cover: 保持比例，长边会被裁剪
    none: 图片大小不变，显示中间部分
    scale-down: 保持原有尺寸比例，none与contain的一个。取决于哪个使图片面积更小

# 43、说说你认为有没有你做不出来的布局？有哪些？为什么？

没有我做不出来的布局

# 44、你认为Html的术难点在哪？ 

自然语言的复杂性导致HTML表示自然语言时会丢失很多信息，虽然HTML现在可以使用strong等标签表示着重语气，但依然很难表示其他的语气（如惊讶），这虽然是文本这种载体的局限，但作为超文本语言的HTML却很难实现。

从使用上来说，HTML的技术难点在于如何精确的表示语义，自然语言的复杂性使得使用HTML表示时没有统一的标准答案。还有就是对无障碍的支持是一套独立的系统，对于制作者来说比较复杂。

# 45、写一个标签云的布局

todo

# 46、写html代码时，怎样才加速写代码的速度呢？你有什么方法？

    基于之前项目，整理出标准化方案。调研技术方案，提取可复用组件，方法等
    写代码前整理业务思路流程，先思考，后写码。

# 47、你觉得新开发一个网站最困难的是哪些部分？

设计阶段，需要对齐系统本身脉络，复用性

# 48、你最喜欢H5的哪些功能？为什么？

我最喜欢H5中包含的地理定位功能，通过调用geolocation api，用户允许定位后即可获取客户端wgs84坐标信息；相比于某些服务商如IP Geolocation API、百度地图 （仅限于国内），提供的通过获取用户客户端IP网络信息获取坐标信息更精确；

获取的坐标信息可以在百度地图、天地图等在线地图中可视化显示，一般的若要在国内在线地图中显示，需要将直接在客户端获取的wgs84坐标信息需要转换为国测局02坐标或百度经纬度坐标；

然而百度地图api中也有获取地理位置坐标的实例，相比于直接在浏览器获取更简单(找不到demo了😂……，类参考中可查找Geolocation：不需要进行从wgs84坐标到百度经纬度的坐标转换、且在谷歌的chrome中不翻墙貌似也能返回高精度位置坐标

# 49、页面的重绘和回流是什么？

- 回流： 当节点发生改变时，浏览器重新渲染部分节点或者全部文档，这个过程为回流。
    
- 重绘： 当操作的节点并不导致元素位置发生变化时，如 color background-color 等，浏览器会将新的样式赋值给这些节点，这个过程为重绘。
    
    简单理解会引起元素位置变化的就会 reflow，只是在以前的位置进行改变背景颜色等，只会 repaint

# 50、请使用flex和grid两种方式实现9宫格布局

html

todo





# 周级汇总题目
