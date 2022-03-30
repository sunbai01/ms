# css

# 1、在Less中是如何导入的？

@import

@import url('css.less')或@import rul(css)

# 2、在Less中使用extend有什么用？

他是less的伪类，可以继承mixins属性

&:extend(.line);

https://blog.csdn.net/weixin_44413709/article/details/103626970

# 3、在Less中什么是＆combinator？

用于组合嵌套选择器和父选择器

TODO：扩展

# 4、在Less中支持运算符吗？

https://less.bootcss.com/#%E8%BF%90%E7%AE%97%EF%BC%88operations%EF%BC%89

# 5、在Less中有哪些注释方式？

// 与 /* */

单行注释不会出现在编译后的css文件里。

# 6、在Less中有哪些不同类型的函数？

类型函数 10种

# 7、如何在Less中创建循环结构？

.loop(@i) 
	when (@i > 0) {
		.loop((@i-1));
		padding:(10px + 5*@i);
	}

.call {
	.loop(4);
}
# 8、在Less中数据URI的作用是什么？

图像嵌入样式表

# 9、在Less中“Source Map Less Inline”选项代表什么？

# 10、在Less中命令行里编译的命令是什么？

lessc

您可以使用以下命令将 style.less 文件编译为 style.css :

lessc style.less style.css

# 11、在LESS中如何定义变量上下文中的范围？

变量范围指定可用变量的位置。 变量将从本地作用域搜索，如果它们不可用，则编译器将从父作用域搜索。

https://www.w3cschool.cn/less/scope.html

# 12、你有写过Less的插件吗？

npm install less-plugin-clean-css

# 13、你有使用过css的clamp函数吗？说说它有什么用途？

clamp(MIN, VAL, MAX) is resolved as max(MIN, min(VAL, MAX))

# 14、写的css样式是否能被js所读到？如果可以如何读取？

可以

内联：元素.style.width

外联或者内联无法获取的
getComputedStyle(dv2, null(该元素的伪类).backgroundColor

# 15、用纯CSS实现判断鼠标进入的方向

# 16、用css隐藏input的光标 

input {
  color: transparent;
  text-shadow: 0 0 0 #000;
}


input {
  caret-color: transparent;
}

# 17、如何隐藏鼠标在某个区域内的光标？

cursor: none

# 18、用css画一个足球场地图

todo

https://github.com/haizlin/fe-interview/issues/3509

# 19、用css画一个羽毛球场地图

todo

# 20、用css画一个篮球场地图

todo

# 21、使用纯的css如何定义变量？请举例说明

声明一个局部变量：

element {
	--main-bg-color: brown;
}
使用一个局部变量：

element {
	background-color: var(--main-bg-color);
}
声明一个 全局 CSS 变量：

:root {
	--global-color: #666;
	--pane-padding: 5px 42px;
}
使用一个 全局 CSS 变量：

.demo{
	color: var(--global-color);
}

# 22、使用css制作一个圣诞树

todo

# 23、请使用纯css画出一条虚线，并设置虚线的间隙（不能使用图片）

html

# 24、使用css实现导航栏左右滑动

todo

# 25、如何将文字设置等宽

用选择器选中文字后
font-family：monospace

# 26、如何将数字设为等宽？

font-family：'Helvetica Neue'

# 27、如何给字体设置阴影效果？

text-shadow

# 28、::before和::after它们的使用场是什么？

清浮动
三角形箭头
移动端边框1px

# 29、使用绝对定位position:absolute;后，就不能使用margin: 0 auto;实现居中，为什么呢？如何解决？

使用绝对定位后，脱离了文档流，相对于带有定位属性的上层定位元素定位，解决方法定位位置用百分比就可以实现水平居中啦。
position:absolute；
left：50%；
transform:translate（-50%）

# 30、如何让span在div中垂直居中？

1、flex
2、line-height
3、vertical-align：middle

# 31、css和wxss有什么区别？

相同之处：都支持选择器，内联
不同：
wxss新增了尺寸单位
wxss提供了全局样式和局部样式
wxss支持部分选择器

# 32、使用css画一个羽毛球场地图

todo

# 33、说说 display:flex 和 display:inline-flex 有什么区别？

display:flex 父容器本身的块属性不会改变，父容器内的子元素变成行内块元素的属性
display:inline-flex 父容器与子元素均改变为行内块元素的属性，并且自动换行


# 34、input标签改变高度的同时如何使光标定位在左上角（不使用textarea）

padding: 0 0 10px 0;

但是前提是

font-size: 30px;
height: 30px;


# 35、flex是哪些属性的简写呢？

flex-grow：项目放大的比例
flex-shrink：项目缩小的比例
flex-basis：项目所占大小
默认值： 0 1 auto

# 36、设置元素为display:flex后，哪些属性会失效呢？为什么？

子元素的float、clear和vertical-align属性将失效

# 37、使用css画个动态的泳池特效

html

# 38、使用纯css画一个线性渐变的背景

# 39、使用纯css画一个径向渐变的背景

# 40、如何让IE6支持PNG透明？


# 41、使用纯css画一个角向渐变的背景

background:linear-gradient(to left top, black, transparent)

# 42、使用纯css使得两个背景叠加

#bgImg{
width: 300px;
height: 400px;
background: url('1.jpg') no-repeat, url('2.png')no-repeat;
}

# 43、你有使用过css-doodle吗？说说它的作用是什么？

使用css绘制各种图案涂鸦的web组件

# 44、你有使用过mask属性吗？请说说它的用途

https://developer.mozilla.org/zh-CN/docs/Web/CSS/mask

CSS 属性 mask 允许使用者通过遮罩或者裁切特定区域的图片的方式来隐藏一个元素的部分或者全部可见区域



# html

# 1、HTML5是SGML的子集吗？

HTML5在很大程度上基于HTML4(基于SGML)和XHTML(基于HTML4和XML).

# 2、 html的属性值有规定要使用单引号还是双引号吗？

使用单引号和双引号是等效的

# 3、XHTML有哪些强制的要求？

.doctype、html、head以及body

# 4、HTML5语义化更好的标签有哪些？

footer header artical nav 

# 5、怎样处理HTML5新标签在浏览器中兼容的问题？ 

div

# 6、你是如何区分HTML和HTML5的？ 


    通过文档类型声明；
    通过一些HTML5独有新标签：<date>、<email>、<url>、<video>、<section>、<canvas>等


# 7、tabindex属性有什么作用？

正常情况下按Tab键时，是按内容中的控件添加时的顺序，谁先添加就谁先。为了能够自定义顺序，就产生了个一tabindex属性。简单理解就是定义Tab键的顺序的。 

# 8、说说你对HTML5中pattern属性的理解

www.jquerycn.cn/a_35865

# 9、为什么要优先选择html5开发移动应用？

todo

# 10、使用svg画一条折线图

todo

# 11、使用svg画一个三角形 

<svg viewBox="0 0 100 100">
	<path fill="red" d="M0,100 H100 L50,0 Z" />
</svg>


    svg 定义svg元素
    viewBox 定义svg的画布大小，0 0 100 100指的是x、y偏移为0，宽高为100(相对单位)
    <path /> 定义一个路径元素
    fill="..." 定义路径的填充颜色
    d="..." 定义各个顶点的位置
    M0,100 移动到点0,100，开始新路径绘制
    H100 水平绘制直线至100，该操作等同于L100,100
    L50,0 绘制直线至点50,0
    Z 闭合子路径


# 12、使用svg画一个腾讯的logo

todo

# 13、使用svg画一个平行四边形

<style> 

.wrap {
	background: green;
	transform: skewX(-0.06turn);
	margin-left:20px;
	text-align: center;
	color:#FFF; width:200px;
} 

.wrap div { 
	transform: skewX(0.06turn); 
} 
</style> 


# 14、 使用svg画出一个时钟

todo


# 15、使用svg画一个爱心

https://github.com/haizlin/fe-interview/issues/3194

# 16、使用svg画出“前端每日3+1”的几个字

todo

# 17、使用canvas能实现哪些复杂的功能？

复杂动画，html截图转pdf

# 18、使用svg能实现哪些复杂的功能？

todo

# 19、使用canvas画一个五子棋的棋盘

todo

# 20、使用canvas画一个中国象棋的棋盘

todo

# 21、使用canvas画一个军棋的棋盘

todo

# 22、svg可以转为png吗？怎么转？

todo

# 23、要减少DOM的数量有什么办法吗？


    类似长列表的话可以只渲染可视区域的DOM元素（比如10个），上面用空的DIV或者padding撑开
    阴影效果、清除浮动等的使用伪元素
    操作列表等大量的DOM元素，可以创建文档片段节点(Fragment)作为父节点，然后将操作DOM元素移步到Fragment节点的子节点上，操作完毕后再将Fragment替换原来的DOM父节点

# 24、一个标签上同时出现三个或多个class属性，请问它的渲染顺序是怎样的？

按照css定义的顺序从前往后渲染，后定义的同类属性覆盖前面定义的。

# 25、如何给`<video>`视频添加字幕(WebVTT)？

	track

# 26、为什么说cookie不可以滥用？

1.安全问题
2.每次请求都会携带cookie,占内存，影响带宽
3.不能跨域
4.可储存的内容少

# 27、如何对一个页面进行重构？ 

# 28、如何动态修改<title>的标题名称？

	1、原生：document.getElementsByTagName("title")[0].innerText = 'your title'
document.title = 'your title'
2、jquery: $('title').html('your title')
$('title').text('your title')

# 29、你有使用过summary标签吗？说说它的用途

summary needs to be used with details

summary标签是作为details标签里的标题，details标签用于描述文档或文档片段的详细信息

# 30、你有使用过ins标签吗？说说它的用途

为标签中的内容加入下划线，
ins标签是一个语义标签，用于标注其为插入文档信息
ins标签是html5中的新标签

# 31、你有使用过del标签吗？说说它的用途

文本标签中间加一道横线，电商重构页面。原件用这个标签包裹


# 32、你有使用过kbd标签吗？说说它的用途

todo

# 33、HTML5拖拽事件的顺序是什么？

ondragstart： 开始拖动

ondrag： 拖动过程中

ondragend： 拖动结束

------------------------------

ondragenter 原对象拖着入目标对象

ondragover 悬停到目标对象上方

ondragleave 离开目标对象

ondrop 拖到目标对象上方释放

# 34、前端需要注意哪些SEO?

- 合理的
title
description
keyswords 搜索引擎对这三项的权重逐个减少，title值强调重点即可，重要的关键

- 语义化的html代码，符合w3c规范

- 重要内容html代码放在前面：搜索引擎抓取html的顺序是从上到下，有的搜索引擎对抓取长度有限制

- 重要的内容不要用js输出，爬虫不会执行js获取内容

- 少用 iframe ，搜索引擎不会抓取iframe中的内容

- 非装饰的图片一定要alt

- 提高网站速度，网站速度是搜索引擎排序的一个重要指标

# 35、说说你对H5媒体捕获的理解，它有什么用途？

todo

# 36、H5播放的video视频，如何实现对视频截图？

https://github.com/haizlin/fe-interview/issues/3279

# 37、如何解决微信浏览器视频点击自动全屏的问题？

1.1 页面内播放
X5内核视频在用户点击后默认会进入全屏播放，前端可以设置video的x5-playsinline属性来将视频限定于网页内部播放，这个默认还是使用的X5内核视频播放控件，层级高于页面层级

1.2 同层页面内播放
同层页面内播放是标准的视频播放形态，在video标签中添加且只需要添加一个(不要与x5-playsinline同时存在):**x5-video-player-type='h5-page'**属性来控制网页内部同层播放，可以在视频上方显示html元素，使用浏览器默认的播放控件，可以修改播放器样式，层级跟页面一个层级


# 38、如何解决微信浏览器中video标签z-index过高遮挡页面问题？

和页面只能留一个

# 39、html中表格的width和height的值为什么没有单位？它的的默认单位是像素吗？

todo

# 40、如何给table中的某一列设置固定宽度

table { table-layout: fixed }

table tr td: ntn-child(n){width: 100px}

# 41、如果要开发一个在超级大屏上显示的可视化页面，你首先要考虑什么？

适配，清晰度

# 42、微信公众号的文章如何做到点击图片查看答案？

todo

# 43、你有使用过H5的Web Audio API吗？说说它的用途

todo

# 44、【重要】写一个布局，它的宽度是不固定的100%，如果让它的宽度始终是高度的一半呢？

利用padding和margin使用百分比时以元素宽度为基准的特性，可以以此固定元素的宽高比：

<!-- /*.changfangxing {
		width: 100%;
		height: 0;
		父元素的一半
		padding-bottom: 50%;
		background-color: green;
	}*/ -->


# 45、你认为HTML标签有什么不好的地方吗？为什么？

不知道

# 46、如何使用H5实现电子签名？请说说你的思路

最终目标；实现用户手写签名，然后将签名放到指定位置

步骤：
1，使用canvas实现用户手写签名
2，canvas将用户签名导出图片
3，放到指定的dom处

# 47、如何使用H5实现录屏的功能？请说说你的思路

todo

# 48、如何在网页可见区域的正中间画一条横线（要考虑有滚动条的情况）

okk

# 49、如何在select控件中使用a链接？

todo

# 50、说说js代码写到html里还是单独写到js文件里哪个好？为什么？

分开好

1、功能独立，界面干净

2、方便管理，关系清晰

3、方便引用，一些公共js独立导入可复用





# 周级汇总题目
