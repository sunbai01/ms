html 题目（50）：

# 1、 你知道p标签和br标签两者的区别是什么吗？

block 块级元素，br 内联元素；
block 能被 css 修改，br 不能；
block 非单标签元素，br 是；
block 换行靠的是块级元素特性，br 换行靠的可能是类似 \n 的渲染规则

# 2、解释下为什么<p> </p>会换两行？

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

 margin-block-start /end等效于上下外边距

# 3、你有使用过HTML5的dialog标签吗？说说看，它有什么特点？

html

<dialog id="dialog">12
    <button id="close">close</button>
</dialog>
dialogEl.showModal();

dialogEl.close('testValue');

# 4、canvas的width与height属性的值可不可以带单位？

经测试，width/height的属性值可以带单位且不会报错，但是无论是px还是em、rem，表现都和px一致，所以带单位没什么意义。

# 5、说下你对DOM树的理解

无答案

# 6、你有使用过picture标签吗？说说它有哪些运用场景

HTML <picture> 元素通过包含零或多个 <source> 元素和一个 <img> 元素来为不同的显示/设备场景提供图像版本。
浏览器会选择最匹配的子 <source> 元素，如果没有匹配的，就选择 <img> 元素的 src 属性中的URL。然后，所选图像呈现在<img>元素占据的空间中。

# 7、移动端点击300ms的延迟出现的原因是什么？你的解决方案是什么？

原因：早期IOS为了区分用户是双击缩放还是点击链接行为，于是就有了300ms延迟，其他浏览器就效仿了。
解决办法：1，引入fastclick，一了百了；2、在meta禁用浏览器缩放；3、touch事件模拟

# 8、你是如何组织html代码的？

标准构建:
```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title></title>
</head>
<body>
    <header>
        <h1>title</h1>
    </header>
    <main>
        <section>
            <a href="https://feiqa.xgqfrms.xyz/index.html"></a>
        </section>
        <article></article>
    </main>
    <footer>
      <p>copyriht &copy; xgqfrms 2019</p>
    </footer>
</body>
</html>
```

# 9、举例说明表格中如何再嵌套表格

可以在td里面嵌套里一个table

# 10、如果在写HTML时漏写了闭合标签，怎么办呢？

template 转化

# 11、HTML的标签这么多，我要全部记住吗？如果不要怎么办？

没必要全部记住，记住常用的html标签即可，就看目的性吧。

短时间看重点，长时间（成专家）记全部

# 12、如何防止他人窃取我的源代码或图片？

1、对于图片这些静态资源：可以使用nginx对来路进行判断，不在白名单的url直接404；
对于前端代码吧：html css好像没什么好方法。核心js倒是可以混淆加密；


2、比如js加密，图片用base64或css sprint等方式，使得资源即使要用也要费一番精力

# 13、如何自动转移到新的页面？
1、
window.location.href = `https://www.google.com`;

2、在<head>内引入

<meta http-equiv="refresh" content="0; url=http://example.com/">

content内第一个参数是延迟，单位秒，0为立即跳转
参数url是跳转地址

# 14、给单个表格的单元格设置背景色有什么方法？

table有个属性bgcolor

<td bgcolor="e91e6f"></td>

# 15、HTML5中required属性有什么应用场景？

required 是HTML5中新增的input属性，表示必填项
<input required="required"/>
or
<input required />


用来规定提交前必须填入字段的功能，所以可以运用在某些注册的必填或者问卷调查的必填项内

# 16、页面加载后，表单的第一个文本框如何自动获得焦点？ 

方法一、属性

<input type="text" autofocus/>

方法二、js控制

<input id="input" type="text"/>
document.getElementById('input').focus();

# 17、 canvas怎么解决图片和文字模糊的问题？

模糊问题的根源是dpr的不同导致

解决思路: canvas视图尺寸相同的情况下，canvas画布放大dpr倍，最终画出来的图片相当于缩小了dpr倍，然后通过ctx.scale(dpr,dpr)还原大小


# 18、HTML5相比于HTML4有哪些优势？

1.更强的语义化
2.更丰富的功能，比如canvas video audio *
3.更简洁的模板语法

# 19、在使用HTML5时有哪些规则需要遵守？


    新的特性应该基于HTML、CSS、DOM和JavaScript
    减少对外部插件的需求（如Flash）
    更好的错误处理
    更多的替换脚本的标记
    HTML5应与设备无关
    开发过程必须可视化


# 20、 wbr和br标签的区别是什么？

html4中wbr 表示软换行，br表示必须换行。wbr意思是在浏览器窗口或父级窗口宽度足够的情况下，不换行；在宽度不足的情况下，在加了wbr处主动换行。


# 21、 HTML5对元素内容进行拼写检查用的是什么属性呢？


使用的是：spellcheck 属性
内容可编辑可以使用：contenteditable 属性

# 22、适配刘海屏的方案有哪些呢？

我能想到的：
1.使用margin绕过
2.使用空白定高div
3.刘海中填充背景色

# 23、关于缓存你了解多少？

HTTP缓存机制
强缓存：浏览器直接从本地缓存获取数据，不与服务器进行交互
协商缓存：浏览器发送请求到服务器，服务器判断是否可以使用本地缓存

# 24、用一句话来描述下你对html的理解 

HTML是一种用户描述网页结构的标记语言，他是XML的一个子集，通过标签构造网页，通过属性为标签赋能。

# 25、当写一个复杂页面的时候，你是怎么布局的？有什么方法论吗？

文档流 + position 


文档流 + float

flex

table


自顶向下，逐步细化
先确定整体框架及各组成部分，再分而治之

# 26、说说你认为html在前端的地位怎么样？


HTML在前段的地位相当于数字对于数学，JavaScript相当于加减乘除。可以觉得他简单，不重要，但是你永远无法回避他。

# 27、你觉得html简单吗？说说你的理由

HTML可以很简单，其实就是一个特殊化的XML子集，但是也可以很复杂，比如说前些日子提到的：href,src等的区别。

# 28、如果让你带一个什么都不懂的人入门学前端，你应该怎么带他？


    1、如何下载 IDE，如何新建 html 文件，以及关键文件目录梳理
    2、html 的基础语法，并以 style 的方式教授 css 基础
    3、独立 css 文件，讲解层叠样式，给予三两个例子进行尝试
    4、讲解编程语言基础，变量函数分支循环等
    5、讲解事件延时请求等 BOM，带着各写几个案例
    6、独立 js 文件，讲解布局渲染缓存等概念
    7、写个网页版计算器，前端速成

# 29、说出至少十条你理解的html规范 


    标签名和属性推荐用小写
    标签都需闭合，不管是单标签还是双标签
    双标签不宜使用单标签闭合方式
    属性值需双引号
    img 标签需加上 alt
    img 标签推荐加上固定宽高
    html 和 body 标签最好不好
    部分字符推荐转义，比如 <
    link 写在 head 内，script 写在 body 内最末
    不推荐使用已废弃的标签和属性名，比如 marquee center 等


# 30、解释下为什么说html嵌套级别不宜过多？

1.影响代码阅读性。
2.降低浏览器渲染性能。
3.不利于维护。

# 31、网站的响应式和自适应有什么区别？

响应式：有多套UI,不同大小的设备加载不同的UI。
自适应：一套UI,根据屏幕大小缩放尺寸。

# 32、说说你是怎么实现页面阻尼效果的？

无答案

# 33、怎样实现每次页面打开时都清除本页缓存？

题目表述的不是很清楚，

window.onload = function() {
   localStorage.clear()
}

# 34、请解释下href="javascript:void(0)"和href="#"的区别是什么？

"#" 包含了一个位置信息，回到顶部

# 35、说说你对iframe属性sandbox的理解，它有什么作用呢？

用于限制iframe的跨域行为
sandbox是html5的新属性，主要是提高iframe安全系数。iFrames因安全问题而臭名昭著，这主要是因为iFrames常常被用于嵌入第三方内容，而后者则可能会执行某些恶意操作。这样可以有效防止iframe对父页面进行攻击（禁用插件，禁止其他浏览上下文的导航，禁止弹出窗口和模式对话框）。sandbox通过限制被嵌入内容所允许的操作而提升iFrames的安全性。这种方式将sandbox内容与父页面进行了分离，因此限制了被嵌入内容的权限。它可以防止如下操作：
◆访问父页面的DOM（从技术角度来说，这是因为相对于父页面iframe已经成为不同的源了）
◆执行脚本
◆通过脚本嵌入自己的表单或是操纵表单

# 36、浏览器怪异模式的怪异主要体现在哪方面呢？

页面渲染方式不同， 怪异模式的盒模型width和height包括了padding和border。inline元素和table-cell的垂直对齐方式默认值是bottom不是baseline，图片底部会出现缝隙。怪异模式可以给inline元素定义宽高

# 37、table由哪几部分组成？

<table></table>
<tbody></tbody>
<th></th>
<tr></tr>
<td></td>

<caption></caption> // 定义表格的标题
<tfoot></tfoot> // 定义表格的页脚
<thead></thead> // 定义表格的页眉
<col></col> // 定义用于表格列的属性
<colgroup></colgroup> // 定义表格列的组

# 38、请说说什么是分区响应图？

简而言之就是点击一张图片中的不同区域进行相应的跳转。

就是热点吧，图片map

# 39、html的标签<a>除了用作跳转链接外，还有哪些用途？

下载(download)和锚定位(name)

# 40、如何防止cookie被盗用？


    禁止第三方网站带cookie(same-site属性)
    每次请求需要输入图形验证码
    使用Token验证
    为cookie设置HttpOnly
    设置CSP
    使用Referer验证
    禁止网页内嵌
    使用https
    cookie带上用户ip加密

# 41、用什么代替html5中不再支持table的cellspacing和cellpadding属性？

可以调整td 元素的 margin和padding

# 42、HTML5图像相关的标签有哪些？


最基础的img标签，用来插入图片；
其次是canvas标签js绘图；
video媒体播放也是图像相关的；
还有大部分标签可以使用background-img也可以设置背景图片；


# 43、如何能防止网页禁止被iframe嵌入呢？

HTTP响应头信息中的X-Frame-Options，可以指示浏览器是否应该加载一个iframe中的页面。如果服务器响应头信息中没有X-Frame-Options，则该网站存在ClickJacking攻击风险。网站可以通过设置X-Frame-Options阻止站点内的页面被其他页面嵌入从而防止点击劫持。

解决方案

    deny：表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许
    sameorigin：表示该页面可以在相同域名页面的 frame 中展示
    allow-from uri：表示该页面可以在指定来源的 frame 中展示

# 44、怎么让table的thead 不动，tbody出现滚动条呢？


  position: sticky;
  

# 45、怎么让整个页面从iframe中跳出来？

window.location.href = document.querySelector('iframe').src


# 46、canvas有哪些可以提升性能的优化方法？
一般画下一帧会 clearRect，但当本帧绘制情况很复杂，会造成一定的白屏或黑屏，
所以会有一个临时 canvas 保留上一帧，因为直接 draw 不怎么消耗计算资源，
在发现绘制未完成时，用临时 canvas 显示。

在 ios 中绘制 3d canvas 的时候会有一些奇怪的模糊，后来看别人的源码发现，
如果用 2d canvas 承接 3d canvas 绘制的内容，可以避免这个问题，非常奇妙。

# 47、请说说canvas的closePath()与lineTo()的区别是什么？

closePath()：创建从当前点到开始点的路径。形成闭合

lineTo()：添加一个新点，然后创建从该点到画布中最后指定点的线条（该方法并不会创建线条）。


# 48、如何将图片画到canvas上？都有哪些方法？

js：

 ctx.drawImage(img,100,100);  img.src = "1.jpg"; 

# 49、canvas的应用场景有哪些？

图片相关：比如生成图片保存或者分享，再比如截图，再比如之前微信的头像加圣诞帽国旗也可以用canvas处理。
用于绘制一些线条图画，比如画板工具，比如画笔线条绘制。
用于加载文件，比如加载pdf，这个只是看见了react-pdf，没有去研究怎么实现的。
游戏中用，全屏特效中用，图片帧动画可能会用

# 50、在svg和canvas中你该如何选择？依据是什么？

svg 的节点多可能影响性能，高保真，方便绑事件，动画也有一套 api，样式还能受 css 控制；
canvas 性能好，能读写数据（imageData / base64），绘制复杂元素更灵活。

# 51、canvas画出来的图是位图还是矢量图？

canvas画出来的图是位图
SVG是矢量图


# 52、目前移动端的最小点击区域是多少呢？

44pt * 44pt

# 53、你知道移动端的尺寸都有哪些吗？

px,pt,cm,mm

# 54、移动端滚动穿透是什么原因？有哪些解决方案？

https://segmentfault.com/a/1190000020321154

css 题目（50）：

# 1、什么是脱离文档流？有什么办法可以让元素脱离标准的文档流？

正常文档流是块级元素垂直分布，行内和行内块级是水平分布，脱离文档流就是不按照正常文档流的顺序进行排列。
设置float、position可以脱离文档流，float是半脱离，元素中的内容仍处于文档流之中，position:absolute和fixed也会使脱离文档流 

脱离文档流的元素不受文档流内元素的影响。

# 2、说说响应式设计(responsive design)和自适应设计(adaptive design)的区别？

响应式设计利用媒体查询，根据不同的屏幕尺寸应用不同的布局和样式（应用多套代码）；
自适应设计布局和样式会随着屏幕尺寸进行缩放（应用同一套代码）。

实际上响应式和自适应,最好的情况只是一套结构,两套样式,最差的情况,多套结构,多套样式

# 3、请说说在什么时候用transition？什么时候使用animation？


    transition 相当于是个过度动画，需要又过度效果才会触发。一般用来做元素的放大缩小、平移旋转等简单的操作。transition 只执行一次，当需要执行多次时，一般会利用 :hover 等时机或者使用 javaScript 改变类名进行控制。
    animation 需要自己设定关键帧，可以做相对复杂的操作，比如延迟、循环播放等。一般在需要比较复杂的情况才会使用 animation。

# 4、请说说CSS3实现文本效果的属性有哪些？

text-shadow:文字阴影效果
word-wrap:换行设置


# 5、如何使用CSS的多列布局？

div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
}

# 6、举例说明在css3中怎么实现背景裁剪？

background-clip:
  border-box(默认,背景延伸至边框外沿,但是在边框的下层)
  padding-box(背景延伸至padding的外沿)
  content-box(背景延伸至内容的外沿)
  text(背景剪裁成文字的样式)

# 7、如何做图片预览，如何放大一个图片？

transform: scale(> 1)

# 8、如何写高效的CSS？

预处理器变量什么的css3都支持
不看预览就敢上手的理论知识

# 9、css中的border:none和border:0px有什么区别？

1、兼容性，border: none 兼容性差，浏览器不会对其渲染，不占内存

border:0px，渲染 + 占内存

举个例子：
border: 10px - border: 0px 触发动画
border: 10px - border: none 无动画

# 10、 外边距重叠是什么？重叠的结果是什么？怎么防止外边距重叠？

属于同一个 bfc 的两个相邻元素上下 margin 会重叠

其中一个元素外部套一个div，并清除浮动

# 11、 你有用过弹性布局吗？说说你对它的理解

粗略理解是：父宽变 子宽变

细化：
弹性盒子，flex布局

flex： 1 0 auto;

# 12、用css怎么实现两端对齐？

什么叫做两端对齐？

1、文本的两端对齐  text-align-last： justify
2、元素的两端对齐  justify-content: space-between;


# 13、举例说明你知道的css技巧有哪些？

https://github.com/haizlin/fe-interview/issues/1252

# 14、移动端的布局用过媒体查询吗？写一个试试

@media（max-width：600px）and（） {
  
}

# 15、position跟margin collapse这些特性相互叠加后会怎么样？

border-collapse: collapse; // 表格共享边框

# 16、你是怎么选择resetting和normalizing的？为什么？

两者都是统一 浏览器 默认的css 样式的
resetting 自己写

（选）normalizing 注重通用方案，只有自己用到的要自己写

# 17、你有用过clip-path吗？说说你对它的理解和它都有哪些运用场景？

clip-path 是什么???

# 18、会引起Reflow和Repaint的操作有哪些？

当 render-tree中 dom 的增删
dom的 position改
页面首次渲染
浏览器窗口发生改变
文字数量，图片大小
css伪类：hover
都会触发 reflow，reflow 一定 repaint
颜色 会触发 repaint

# 19、css的linear-gradient有什么作用呢？

线性渐变：渐变色背景，条纹背景

background： linear-gradient（to right，red，blue）;

# 20、怎么去掉点击a链接或者图片出现的边框？

a: active,
img: active {
  border: none;
  outline: none;
  text-decoration: none;
}

# 21、你了解css3的currentColor吗？举例说明它的作用是什么？

currentColor 是color 属性的值，currentColor关键字的使用值是 color 属性值的计算值。如果currentColor关键字被应用在 color 属性自身，则相当于是 color: inherit。

 它的作用在我看来是指定默认color的值，比如

 .active{
  color:#C60;
  border:thin  solid;
}
.active{
  color:#C60;
  border:thin  solid currentColor;
}

# 22、css怎么更改表单的单选框或下拉框的默认样式？

下拉框：select可以通过appearance： none 去除默认样式，然后自定义
option不可以，建议自定义标签重写select

单选框：

隐藏input标签，自定义标签通过checked伪类实现

# 23、请说说你对vh、vw的理解以及它们的运用场景是什么？

vw: 100vw为视窗的宽度，即1vw是视窗宽度的1%
vh: 100vh为视窗的高度，即1vh是视窗高度的1%

运用场景：


    图片查看大图：img { max-height: 90vh; }
    代替rem实现移动端布局

# 24、你知道什么是流体排版吗？说说它的原理是什么？

在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向。块元素则一个接一个地显示，就像该文档的写作模式中的段落一样。因此在流体排版中，内联元素从左边开始一个接一个地显示，块元素从顶部开始向下显示并移动页面。
流体排版其实现阶段已经十分普遍了，通常我们设置字体大小的时候都是直接给一个具体的px值，这样带来的后果就是当视窗大小发生改变的时候我们的字体无法随着窗口的变化而变化从而达不到我们预期的效果，在后来我们利用媒体查询实现了这一功能，通过设置rem来进行自适应，再到现在我们可以用vmin、vw、vh、vmax进行排版。

# 25、你有使用过字体图标吗？它有什么好处？

代替图片，可以减少http请求次数，提高页面加载性能。

font-awesome 好看是一点，其次也省的加载图片和自己找图片

# 26、css3和css2的区别是什么？

css3增加了更多特性：动画、过渡效果，圆角、文字特效等

# 27、如果css文件过大时，如何异步加载它？

 1、动态插入css 也就是自己创建一个link 标签 并赋予src等属性
  2、分割成多个CSS文件，同时加载
 3、还有一种添加preload属性 这种方式能比其他三种更早的加载css,但兼容性不强

# 28、你是怎样对css文件进行压缩合并的？

WebPack gzip 压缩：optimize-css-assets-webpack-plugin

# 29、你有使用过preload、preconnect、prefetch这些属性吗？说说它们都有什么作用？

Preload: 当我们在 link 标签中使用 preload 时，它会提前请求资源。主要用于获取当前路由中使用的高优先级资源。

Preconnect: 解决 DNS 和 TCP 握手问题

Prefetch: 提前获取资源将其置于缓存中，使用资源时从缓存中获取而不是发出另一个请求。

# 30、请举例说明css有哪些不可继承的属性？

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

# 31、css中最常用的字体有哪些？你是怎么选择字体的？

微软雅黑
字体选择主要看美工

# 32、请使用css画一个圆，方法可以多种 

1、div + border-radius:50%;

2、clip-path
.circle{
 width:10vw; height:10vw; background:gray;
 clip-path: circle();
}

3、svg background

.circle{
    width:10vw; height:10vw; 
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='gray'/%3E%3C/svg%3E");
}

4、radial-gradient

.circle{
 width:10vw; height:10vw; 
 background:radial-gradient(gray 70%, transparent 70%);
}

5.font

.circle::after {
    content: "●";
    font-size: 10vw;//字体实际大小
    line-height: 1;
}

# 33、你知道css的预处理器和后处理器都有哪些吗？它们有什么区别呢？

css的预处理器有sass，less，stylus。代码更加简洁，复用程度比较高，可以嵌套，可读性比较高，也方便维护。最终编译为css。

增加变量，可嵌套

css的后处理器rework，postcss。对css进行处理，有的可以对css进行压缩，有的可以自动处理兼容性问题。

美化 + 处理兼容

# 34、让你手写一个reset的文件，你应该怎么写？要考虑哪些方面呢？

肯定首先考虑的是浏览器本身的样式，还有浏览器兼容。


    margin，padding ==>0
    ul,ol list style:none
    a,text-decoration:none
    font-size:100%
    上标，下标。表格等

# 35、怎样去除图片自带的边距？

空隙产生的原因，换行符，空格符，制表符等你空白符，字体不为0的情况下，都会产生一个字符的空隙，空格符好会占据一定宽度，使用inline-block会产生元素间的空隙。

直接在父元素font-size: 0即可去除。

# 36、请描述下你对translate()方法的理解

控制元素 x、y轴方向平移

# 37、你是怎么设计css sprites（精灵图）的？有哪些技巧？ 


webpack的话可以使用webpack-spritesmith形成雪碧图，使用的时候利用 css 的 background-position 属性进行定位，确定横纵坐标

# 38、举例说明你对相邻兄弟选择器的理解

div+p{ //相邻兄弟选择器
  background: red;
}
符合两个条件就会被选中：
1.紧邻在另一个元素后面
2.两者父元素相同

# 39、相邻兄弟选择器、后代选择器和子选择器三者有什么区别？

相邻兄弟选择器： el + el{}

后代选择器 ：div p {} p可以是孙子元素

子选择器：div > p {}  p 只能是子元素

后续兄弟选择器：~div {}

后代选择器>子选择器。

# 40、用css给一个元素加边框有哪些方法？

:scope {
  border: 3px solid black;

  box-shadow: 0 0 0 1px black; /*不影响布局,无限叠加*/

  outline: 1px solid black; /*不支持圆角*/

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' stroke='%23000' fill='transparent'/%3E%3C/svg%3E");

  background-clip: content-box; /*形成透明边框*/
  padding: 1px;

  border-image: linear-gradient(red, black) 1;
  border: 1px solid;
}

# 41、请使用css写一个多级的下拉菜单

html

# 42、请说说颜色中#F00的每一位分别表示什么？为什么会有三位和六位的表示呢？

三位 一般是 xxxxxx or 321321 or 112233


# 43、举例说明css有哪些简写的属性和属性值？

border: solid 1px red;

border-style: solid;
border-width: 1px;
border-color: red;



animation: fadeIn .5s forward ease-in .2s infinite;

animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forward;
animation-timing-function: ease-in;
animation-delay: 0.2s;
animation-iteration-count: infinite;



background: url(images/foo.png) center top/cover no-repeat;

background-image: url(images/foo.png);
background-position-x: center;
background-position-y: top;
background-size: cover;
background-repeat: no-repeat;


flex: 1;

flex: 1 1 0;

flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;

# 44、为什么说不提倡用1px的小尺寸图片做背景平铺？


无答案

# 45、解释下为什么css的reset不建议直接这么写：*{ margin:0; padding:0;}？

1.*为通配符，使用通配符，即全局范围遍历，耗费浏览器效率，增大负荷；
2.会影响后面的设置的部分属性无效，例如：table设置的cellpadding，cellspacing。

# 46、你最希望css拥有什么样的特性？（目前没有的）

父类选择器吧，:focus-within 在 focus 时能修改父类样式，
没看懂
https://github.com/haizlin/fe-interview/issues/1445


# 47、你知道CSS的标准发布流程吗？

编辑草案 Editor's Draft (ED)

工作草案 Working Draft (WD)

过渡－最后通告工作草案 Transition – Last Call Working Draft (LCWD)

候选推荐标准 Candidate Recommendation (CR)

过渡－建议推荐标准 Transition – Proposed Recommendations (PR)

推荐标准 Recommendation (REC)

# 48、如何给段落的首行缩进？

直接空格是不行的，要用text-indent

长度值：px em rem
百分比：取决于包含块的width
关键字： each-line：文本缩进会影响第一行，以及使用

# 49、如何使用CSS实现段落首字母或首字放大效果？

p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

div {
text-transform: capitalize;
}
<div>
i come from China
</div>

# 50、border-radius:50%和border-radius:100%有什么区别？


正方形，长方形都一样，

区别在于原理：
就相当于盒子的宽度和高度的百分比，所以border-radius为50%时，对应的是边长的一半，所以正方形会显示圆形，

当我们再增加至100%这个过程中他的显示结果都不会改变，这是因为W3c有对于’曲线重合‘这样的规范，当两个邻角的 半径和超出了总边长，浏览器会重新计算保证不会重合，

所以建议使用border-radius:50%来避免浏览器进行不必要的计算

js 题目（50）：

# 1、请分析!+[]+!![]+!![]+!![]+!![]+!![]的结果

!+[] 和 五个 !![] 相加

+[] === false
!false == true == 1

# 2、用不同的方法改装下面的代码，使它的结果输出为0-4[代码]


for (var i = 0; i < 5; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }

1、let 
2、for (var i = 0; i < 5; i++){
      ((j) => {
          setTimeout((j) => {
            console.log(j);
          }, 1000)
      })(i)
    }

3、

let output = (i) => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(i)
            resolve()
        },1000)
    })
}
(async function () {
    for (var i = 0; i < 5;i++) {
        await output(i)
    }
})()

# 3、你知道js的可选链是什么吗？说说你对它的理解，它有什么应用场景？

window?.console?.log?.("Hello");

如果window存在，则其取console属性，如果console存在，则取其log属性，如果log存在，则将其作为方法调用。
如果该链任意一环节不存在，则忽略整个链并返回undefined。

该功能在获取一个多层嵌套对象的属性，并且上层对象可能不存在时非常有用，比如 user.data?.extraData?.phone，如果data、extraData有可能不存在，我们不需要判断其是否存在就可以取其phone值，会减少很多逻辑判断和冗余代码。

会影响代码的规范性，造成代码的可读性变差

# 4、说下你对alert的理解，它有哪些特性呢？及使用它时要注意些什么？

alert，浏览器自带的弹窗，用于提示一个文本消息。
它的样式，不可以定制，在正式的项目中，大多数的情况下，不使用它。
它最常用的场景：在前端开发中，进行js代码调试的时候使用。

# 5、如何在用户刷新、跳转、关闭浏览器时向服务端发送统计的数据？ 

刷新：window.onload事件。
跳转：click事件。
关闭：window.onunload事件。

在这些事件的时机，调用接口，发送数据。

# 6、页面上的DOM有多个相同的ID，用js获取时结果会是怎么样的？

只能获取第一个id的dom。

# 7、写一个方法判断一个数字是否为整数

 let isInteger = num => typeof(n)!='NAN' && num%1 === 0

# 8、用代码实现游戏应用中连续按键触发必杀技的监测方法 

const skills = [
  {
    keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    cd: 10,
    skillsCheckProgress: 0,
    skillsLastFire: 0,
  }
]

window.onkeydown = (key) => {
  for (let i = 0; i < skills.length; i++) {
    let skill = skills[i];
    if (key.key === skill.keys[skill.skillsCheckProgress]) {
      skill.skillsCheckProgress++;
    } else {
      skill.skillsCheckProgress = 0;
    }
    let now = new Date().getTime();
    if (skill.skillsCheckProgress === skill.keys.length
      && (now - skill.skillsLastFire) > (skill.cd * 1000)) {
      skills.skillsCheckProgress = 0;
      skills.skillsLastFire = now;
      console.log('fire');
    }
  }
}

# 9、使用js写一个计算字符串的字节数的方法

'中文a【】,'.split('').reduce((len, it) => len+=it.charCodeAt(0).toString(16).length/2, 0)

# 10、写一个任意进制转换的程序

todo

# 11、使用js写一个时钟的程序

todo

# 12、有了解过getSelectionAPI吗？怎么使用，有哪些场景？

只有动态复制部分文本时用过

# 13、写一个方法监听某个div滚动

div.addEventLisitern("scroll",()=>{},true) ?

# 14、pageshow和pageshide有什么应用场景呢？

当我们需要在浏览器前进或后退时执行某个操作时，可监听pageshow和pagehide事件

# 15、列举下获取指定日期的毫秒数的方法有哪些？

getTime()

# 16、写一个汉字与Unicode码的互转的方法

function encode(string) {
    let result = []
    for(let i = 0; i < string.length; i++) {
        result[i] = ("00" + string.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + result.join("\\u")
}

function decode(string) {
    return unescape(string)
}

# 17、说说你对postMessage的理解，它有什么运用场景呢？

document.domain
// 'github.com'


window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为https），端口号（443为https的默认值），以及主机 (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全。

从广义上讲，一个窗口可以获得对另一个窗口的引用（比如 targetWindow = window.opener），然后在窗口上调用 targetWindow.postMessage() 方法分发一个 MessageEvent 消息。接收消息的窗口可以根据需要自由处理此事件。传递给 window.postMessage() 的参数（比如 message ）将通过消息事件对象暴露给接收消息的窗口。

# 18、用js封装一个前端分页的库，说说你的思路

https://github.com/haizlin/fe-interview/issues/1834


# 19、如何判断一个对象是否为空？

1、
if (JSON.stringify(obj) === '{}') {
    return false
}
return true

2、
for (var i in obj) {
    return true;
}
return false;

3、
Object.keys():


# 20、js对象如何深比较？

todo

# 21、你觉得虚拟DOM快吗？还有没有比它还快的方式？

虚拟dom是js来执行 比操作dom肯定快 当然更快的是服务端的渲染了

# 22、阅读下面关于setTimeout和Promise的代码，判断结果会输出什么？为什么？


setTimeout(function () {
    console.log(1);
})
Promise.resolve(function () {
    console.log(2)
})
new Promise(function (resolve) {
    console.log(3);
    resolve();
}).then(function () {
    console.log(4)
})
console.log(5)

3541 2不输出

先微后宏

先then 后 set

# 23、 js如何检测当前页面是否以全屏模式显示？

if (window.document.body.clientWidth === window.screen.width){
    alert('全屏显示'+window.screenLeft)
}

# 24、写一个方法，实现使用canvas播放视频？

https://github.com/haizlin/fe-interview/issues/1862

# 25、setTimeout和setInterval有什么区别呢？


    setTimeout(fn,t),超时调用，超过时间t，就执行fn，只调用一次。
    setInterval(fn,t),间歇调用，调用周期t，执行fn，可循环调用多次。


二者调用后，均返回一个数值ID，此ID是计划执行代码的唯一标识符，可以通过它来取消尚未执行的调用

# 26、 axios如何一次发送多个并发请求？

axios.all()

# 27、这两种展开运算符的方式有什么区别呢？

https://github.com/haizlin/fe-interview/issues/1874

# 28、根据下面代码：说出执行结果，并解释为何是会是这样的结果？

var str = 'abc';
console.log(str[1]);

// b 因为String类型是可迭代类型，可以像数组一样

var num = 123;
console.log(num[1]);

// undefined  Number类型是不可迭代的类型，也不存在length，对象中不存在的属性都是undefined

# 29、axios为什么能在浏览器中环境运行又能在node中环境运行？

axios的getDefaultAdapter函数可以判断当前环境，浏览器环境会require一个js文件，node环境会require另一个js文件

前者是用promise管控的xhr一套流程，后者是用node的http库发起http请求。

# 30、axios相比原生ajax的优点有哪些呢？


    从 node.js 创建 http 请求
    在浏览器中创建 XMLHttpRequests
    支持 Promise API
    提供了一些并发请求的接口（重要，方便了很多的操作）
    支持拦截请求和响应
    转换请求和响应数据
    取消请求
    自动转换 JSON 数据
    客户端支持防止CSRF
    客户端支持防御 XSS

# 31、写一个方法删除字符串中所有相邻重复的项

todo
'aabbaaaaccdeee'.replace(/(.)\1*/g, '$1');  // abacde


function delneighbor(string) {
    if(string.length <= 1) {
        return string
    }
    let prev = string[0];
    let result = prev;
    let i = 1;
    while(i < string.length) {
        const current = string[i++];
        if(current == prev) {
            continue;
        }
        prev = current;
        result += current;
    }
    return result;
}


# 32、写一个方法检查给定的函数是否为js运行时环境的内置函数

https://github.com/haizlin/fe-interview/issues/1909

# 33、用js写一个方法检测指定的函数体是否为空


# 34、表达式和语句有什么区别？如何把语句转换为表达式？


# 35、写一个方法把对象和字符串互转

# 36、js如何监听页面缩放？

window.onresize

# 37、请解释下如下js代码对数组排序后的输出结果

var result = [55, 22, 168]; 
console.log(result.sort());

相同位数才能 sort

# 38、说下js的parseInt()和Number()有什么区别？


// 当字符串是由数字组成的时候 他们转换的数字一样的没有差别  
let numStr = '123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))   //123

// 当字符串是由字母组成的时候 
let numStr = 'abc'
console.log(parseInt(numStr))   //NaN
console.log(Number(numStr))   //NaN

// 当字符串是由数字和字母组成的时候 
let numStr = '123a'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))   //NaN

// 当字符串是由0和数字
let numStr = '0123'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))   //123

// **当字符串包含小数点**
let numStr = '123.456'
console.log(parseInt(numStr))   //123
console.log(Number(numStr))     //123.456

// **当字符串为null时**
let numStr = null
console.log(parseInt(numStr))   //NaN
console.log(Number(numStr))     //0

// **当字符串为''(空)时**
let numStr = ''
console.log(parseInt(numStr))   //NaN
console.log(Number(numStr))     //0

# 39、DOM0、DOM2、DOM3事件处理方式的区别是什么？

1.DOM0级事件处理方式：
      btn.onclick = func;
      btn.onclick = null;
   2.DOM2级事件处理方式：
      btn.addEventListener('click', func, false);
      btn.removeEventListener('click', func, false);
      btn.attachEvent("onclick", func);//IE
      btn.detachEvent("onclick", func);//IE
   3.DOM3级事件处理方式：
      eventUtil.addListener(input, "textInput", func);
      eventUtil 是自定义对象，textInput 是DOM3级事件

# 40、W3C的事件处理和IE的事件处理有哪些区别？

绑定事件 W3C addEventListener ;IE attachEvent
移除事件 W3c removeEventListner;IE detachEvent
阻止默认事件 W3C e.preventDefault; IE window.event.returnValue = false
阻止事件传播 W3C e.stopPropagation; IE winow.event.cancelBuble = true

# 41、如何用jst获取DOM元素在页面中的绝对位置？

 function getTop(e){
     var offset=e.offsetTop;
     if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
     return offset;
 }

# 42、看下面代码，判断a和b的类型是否为true？为什么？什么是基本包装类型？

var a=1;
var b = new Number(1);
typeof(a)===typeof(b); // false

a是基本数据类型number，b是通过new 操作符创建的引用类型实例，所以typeof(b) 是object，因而结果为false。

# 43、在浏览器标签页之间切换触发的事件是哪个？

document.onvisibilitychange

# 44、切换标签窗口后js定时器自动停止了，如何在激活标签后又继续呢？

    可以利用visibilitychange事件；在事件中重新开启定时器

# 45、js如何解决数字精度丢失的问题？

# 46、用js实现一个加法的方法

https://github.com/haizlin/fe-interview/issues/1974

# 47、 什么是UUID？它有什么作用？用js写一个生成UUID的方法


    UUID含义是通用唯一识别码 (Universally Unique Identifier)，
    通过同一种算法生成的UUID在任何情况下不允许重复。
    全局唯一标识符
    Math.random().toString(32).slice(2)

# 48、在axios中怎样添加授权验证？

在创建axios实例后 

var instance = axios.create({
  baseURL: 'https://api.example.com'
});
 instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


# 49、有用过Handlebars模板引擎吗？它的工作原理是怎样的？


    Handlebars是运用到前端，预编译，数据和视图分离的模板引擎
    模板引擎内置一些模板标签符号，然后根据这些标签符号，正则识别，
    编译成生成html字符串的函数，传入我的数据输出html字符串

# 50、用js写一个绑定事件检测窗口大小

 window.onresize = function(e){
     console.log(e)
 }

# 51、说说你对js中的依赖注入的理解，它的实现方式有哪些呢？

第一日 上古时期 Module? 从设计模式说起
第二日 石器时代 Script Loader 只有封装性可不够，我们还需要加载
第三日 蒸汽朋克 Module Loader 模块化架构的工业革命
第四日 号角吹响 CommonJS 征服世界的第一步是跳出浏览器
第五日 双塔奇兵 AMD/CMD 浏览器环境模块化方案
第六日 精灵宝钻 Browserify/Webpack 大势所趋，去掉这层包裹！
第七日 王者归来 ES6 Module 最后的战役



综合题目（50）：

# 1、Ajax与Flash的优缺点分别是什么？

Ajax 只是一套异步发网络请求然后更新页面的实践方案，Flash 是一个浏览器插件，但提供的是相对完整的运行时平台。Flash 被移动端抛弃了，连亲娘都不要它了，9102年了都。

# 2、字符串相连有哪些方式？哪种最好？为什么？


    ES6（最好）
    ${var} 
    简单，方便，但是不兼容低版本浏览器
    ES5
    ""+"" ''+''
    兼容性好，但是比较麻烦考验心智，如果拼接的有""''时需要\转义

函数式编程就是追求的可读性而不是性能。



const a = 'aaaaa';
const b = 'bbbbb';

1、 a + b

2、 `${a}${b}`

3、 a.concat(b)

4、 循环遍历组装

5、
var d = []
d.push(a,b)
console.log("d:", d.join(""))

# 3、有用过Flex吗？简要说下你对它的了解

定义这个元素是flex布局

.box{
  display: flex;
}

 flex-direction: row/column

 水平方向 justify-content: flex-start | flex-end | center | space-between | space-around;

 垂直方向 align-items: flex-start


# 4、Form表单是怎么上传文件的？你了解它的原理吗？

简单来说就是把文件转化成字节流，然后使用http进行传输，后端接受后在把二进制转化成原先的文件格式。

在HTML表单中，可以上传文件的唯一控件就是<input type="file">。
当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data（表明表单需要上传二进制数据），method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。multiple="multiple"说明可以同时上传多个文件

也可以使用文件编码传输，可以把图片转化成base64格式然后进行传输，到了服务器之后直接解码base64，

# 5、说说你对CDN的理解，使用过程中有没有遇到过问题？

CDN，内容分发网络。
具体来说，CDN就是采用更多的缓存服务器（CDN边缘节点），布放在用户访问相对集中的地区或网络中。当用户访问网站时，利用全局负载技术，将用户的访问指向距离最近的缓存服务器上，由缓存服务器响应用户请求。

采用CDN技术，最大的好处，就是加速了网站的访问——用户与内容之间的物理距离缩短，用户的等待时间也得以缩短

此外，CDN还有安全方面的好处。内容进行分发后，源服务器的IP被隐藏，受到攻击的概率会大幅下降。而且，当某个服务器故障时，系统会调用临近的健康服务器，进行服务，避免对用户造成影响。

项目中使用过CDN，我们的图片和脚本都放在cdn上，这样用户访问这些资源会更快，因为这些资源在不同的域名下，会一定程度避免http1.1的队头堵塞。有的CDN采用http2，速度更快。

有点不好就是：

    大部分CDN是单独收费的。
    CDN更新资源麻烦，可能需要手动来刷新CDN来刷新资源的缓存。
    如果CDN出了故障，需要联系CDN提供商来解决，中间增加了沟通耗时。
    可能对SEO有影响，CDN ip的多样性，部分ip可能对爬虫并不友好。

# 6、什么是事件委托？它有什么好处？能简单的写一个例子吗？

ul li

# 7、要是position跟display、overflow、float这些特性相互叠加后会怎么样？

position:absolute之后float应该就不起作用了

# 8、From表单提交时为什么会刷新页面？怎么预防刷新？

因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。

不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互。另一个偏方是使用 iframe 作为 form 的 target，不过 JS 处理方面不如让浏览器别管自己全手动发请求来得简单。

# 9、有用过本地存储吗？有什么限制？有没有考虑过超出了限制怎么办？

从上表可以看到，cookie 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 localStorage 和 sessionStorage 。对于不怎么改变的数据尽量使用 localStorage 存储，否则可以用 sessionStorage 存储。存储大量数据：IndexDB。

# 10、document的load 和ready有什么区别？


    解析HTML结构
    加载外部脚本和样式表文件
    解析并执行脚本代码
    构建html dom模型 // ready
    加载图片等外部文件
    页面加载完毕 // load

# 11、怎么使用自定义字体？有什么注意事项？

@font-face {
  font-family: '自定义字体名称';
  src: url('字体文件名.eot'); /* IE9 Compat Modes /
  src: url('字体文件名.eot?#iefix') format('embedded-opentype'), / IE6-IE8 /
  url('字体文件名.woff') format('woff'), / Modern Browsers /
  url('字体文件名.ttf') format('truetype'), / Safari, Android, iOS /
  url('字体文件名.svg#字体文件名') format('svg'); / Legacy iOS */
  font-style: normal;
  font-weight: normal;
}

# 12、web workers有用过吗？能帮我们解决哪些问题？

提供协程能力，如果有一个比较密集的计算任务，可以放到另一个进程中处理，等处理好了再把结果传回主程，这样主要进程就不会阻塞，页面可以正常渲染和响应

为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。

# 13、和你的上级领导意见不一致时你该怎么办？

听话能干>听话不能干>不听话能干>不听话不能干


# 14、写一个函数找出给定数组中的最大差值

es6 Math.max，Math.min
先排序再减

排序非sort写法：

const max = arr.reduce((a,b)=>{
    return a-b>0?a:b
})

reduce 和 sort 都是es6

es5 

xxx

# 15、css3的:nth-child(n)和:nth-of-type(n)的区别是什么？

注重孩子，一个注重类型

p:nth-child(n)，匹配所有p标签的父元素的第n个元素，并且这个元素是p标签，如果这个元素不是p标签，那么就不会匹配到
p:nth-of-type(n)，带着类型去找，不注重n，匹配所有p标签的父元素的第n个p标签元素

# 16、你有了解HTML5的地理定位吗？怎么使用？

navigator.geolocation.getCurrentPosition(success, error, options) 
position.coords.longitude;

# 17、网站被劫持植入广告该怎么办？如何防止？

这个是运营商做的http响应注入了，因为http是明文传递的，换成https这种加密的

# 18、写出4个使用this的典型例子

1⃣️ 全局 this 是 window

var name = 'window'
var obj = {
  name: 'sunbai',
  func: () => {
      console.log(this.name);
  }
}

var a = obj.func;
a();

2⃣️ 函数 this 是调用者


var name = 'window'
var obj = {
  name: 'sunbai',
  func: function(){
    console.log(this.name);
  }
}

obj.func();

3⃣️ 构造函数的 this 是 new 之后的新对象

function B() { 
    this.a = function() {console.log(this.b)}, 
    this.b = 1
}
let b = new B();
b.a();

4⃣️ call ，apply ，bind 的 this 是第一个参数

???

# 19、 什么是视差滚动？如何实现视差滚动的效果？

什么是视差滚动：
就是在同一视角下，鼠标或者页面滚动时，不同元素以不同的速率跟随滚动，产生生动的效果。
如何实现视差滚动：
根据页面滚动高度的变化，JS相应调整不同元素的不同位移，常见的插件有 parallax.js

# 20、HTML5中新添加的表单属性有哪些？

新的form属性

    autocomplete
    novalidate
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form

新的input属性

    新类型：color，date，email，month，number，range，search，tel，time，week。
    新属性：autocomplate，autofocus，list，placeholder

# 21、说说你对域名收敛和域名发散的理解？分别在什么场景下使用？

域名发散

域名发散就是为了突破浏览器对于同一域名并发请求数的限制，chrome浏览器同一时刻只能发送6个http请求，而且一个http1.1还有对头堵塞链，使用域名发散为同一个服务申请多个域名，从而可以一定程度上提高并发量。对于淘宝这种多图网站有很大提升。

域名收敛

域名收敛就是将静态资源放在一个域名下不进行发散，这主要是为了适应移动端的发展需求；通常DNS是一个开销较大的操作，而移动端由于网络带宽和实时性、资源等的限制，这些开销对移动端的用户体验是致命的，因此需要进行域名收敛；
而且 后面的http2 多路复用可以解决域名发散的问题。

以后http2普及之后，域名发散没有太大优势。

# 22、JSONP的原理是什么？解决什么问题？

动态插入script标签，执行callback回调函数，将回调函数中的参数输出

解决跨越问题

不支持post

# 23、margin和padding使用的场景有哪些？

https://github.com/haizlin/fe-interview/issues/220

# 23、渐进式渲染是什么？

渐进式渲染是用来提高网页性能，以尽快呈现页面的技术。
比如：图片懒加载；确定显示内容的优先级；等

# 24、说说你对浏览器的关键渲染路径的理解

dom - cssom - render tree - layout - print

# 25、写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同

function sum(x){
    if(arguments[1]){
        var arr = Array.prototype.slice.apply(arguments);
            x = arr.reduce((a, c)=> a+ c)
        return x;
    }else{
        function add(b) { 
            x = x + b; 
            return add;
        }
        add.toString = function() { 
            return x;
        }
        return add; 
    }
}
var res1 = sum(1)(2)(3)(4)(5)(6);
var res2 = sum(1,2,3,4,5,6);
console.log(res1)//21
console.log(res2)//21

# 26、 inline、block、inline-block这三个属性值有什么区别？

img确实是行内元素 但它也是置换元素 。

# 27、你了解HTML5的download属性吗？

自定义下载文件的名称，兼容性不好

# 28、对于5G的到来，你是怎么看的？说说你的想法

首先速度快肯定只是 5G 的表象，就像 4G 快于 3G 十倍一样，
短视频、移动支付、直播这些的爆发才是 4G 真正有趣的事情。
所以 5G 高速下能带给我们更多的玩法才是我们应该思考和幻想的事情


5G到来，我觉得是前端的一次大发展的机会，更快的网速表明前端可以做更多的事情了

# 29、请说下你对__proto__和prototype的理解

```js
function Parent(name){
  this.name = name
}
Parent.prototype = {
  contructor:Parent,
  speak:function(){
    console.log(`我是${this.name}`)
  }
}
var children = new Parent('xiaoming')
children.name  // xiaoming
children.speak() // 我是xiaoming
children.__proto__ ===Parent.prototype  // true       
Parent.prototype.__proto__ === Object.prototype  // true  
children.toString()  // "[object Object]"

```

# 30、box-sizing常用的属性有哪些？分别有什么作用？

content-box | border-box 用的最多的就是后者，将border，padding全部计算在内。

# 31、HTML5相对于HTML4有哪些优势？

更简洁-文档声明
更语义-语义标签
功能更强-各种表单属性及自定义属性等

# 32、对于让你接手一个你觉得很烂的老项目，你该怎么办？

所以，接手垃圾的老项目，一次性改完重构是不太现实的，按需求痛点一步步更新要更好些。

# 33、写一个格式化金额的方法 

如果需求捋得很清楚，编码只不过仅仅是个体力活而已

# 34、你有用过哪些css框架？说说它们的特点

# 34、有用过WebGL吗？说说你对它的理解

WebGL (Web图形库) 是一种JavaScript API，用于在任何兼容的Web浏览器中呈现交互式3D和2D图形，而无需使用插件。WebGL通过引入一个与OpenGL ES 2.0紧密相符合的API，可以在HTML5 元素中使用。

# 35、如何预防掉头发？

肝藏血，发为血之余，血亏则发枯。肾为先天之本，精血之源，其华在发。--老中医

# 36、请实现一个flattenDeep函数，把多维数组扁平化

es6
const temp = [1,2,[1,2]];
console.log(temp.flat(Infinity));

es5：

# 37、src、href、link的区别是什么？

src：img，js源，替换元素位置

href：a，建立和资源的联系

link：css

# 38、知道IPV6是什么吗？说说它和IPV4的区别是什么？

ipv6增加了海量的网络地址，使物联网成为可能。ipv4提供的2的32次方的地址根本不够无数的家用设备使用。而2的128次方的地址可为飞速增加的物联网设备提供足够的地址。如今到来的5G时代，ipv6在底层上可谓功不可没。

# 39、写一个方法获取图片的原始宽高

function loadImageAsync() {
    return new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function() {
          var obj = {
              w: image.naturalWidth,
              h: image.naturalHeight
          }
          resolve(obj);
        };
        img.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };

        img.src = url;
    })
} 

# 40、怎样把一个div居中？怎样把一个浮动元素居中？怎样把绝对定位的div居中？


div居中：
margin:0 auto;
浮动元素居中(div居中也可以用)：
margin-left: 50%; transform: translate(-50%);

绝对定位(absolute)与相对定位(relative)，position:fixed也是绝对定位

{ top:0; left:0; bottom:0; right:0; margin: auto; }


# 41、有用过HTML5的webSQL和IndexedDB吗？说说你对它们的理解

webSQL 和 IndexedDB 都是一种客户端的数据存储方案，webSQL已经废弃。IndexedDB 的特点是：存储空间大，使用异步存储数据模式，存放键值对型数据，支持数据库事务等，同时还可以存储多种类型数据，包括 js 对象类型。可以用在前端缓存大量数据。

# 42、说说你对同构和SSR的理解

Isomorphism, 同构，指一套代码既可以在server端工作，也可以在web 客户端运行，可以无缝在server端和client端渲染两种模式间切换。这个概念由airbnb的Rendr发扬光大。
所以一楼说的其实指的并不是同构JS，而是Universal Javascript.

在PWA 大行其道的环境下，因为爬虫需要和框架初始化容易白屏等等问题，服务端渲染的呼声又物论沸腾。SSR其实就是在server端把需要的页面和数据组装起来发给客户端而已。

SSR的好处

    SEO友好
    首页加载更快
    减少请求


# 43、有用过HTML5的WebWork吗？它主要解决了什么问题？

主要解决了单线程的问题 由于js执行环境是单线程 所以当处理cpu密集型问题时就没办法了 这时候就可以使用webwork开启一个子线程进行处理

# 44、手动写动画最小时间间隔是多少，为什么？

手写动画推荐使用 requestAnimationFrame API，他会根据浏览器性能自动使用合理的间隔，而且时间远远比自己写时间间隔要准确（如果对动画精确度要求很高，setInterval 是不准的）。

# 45、有使用过HTML5的拖放API吗？说说你对它的理解

图片默认自带拖拽功能，非图片元素设置draggable属性为true即可拖拽。

被拖拽元素的事件：
    ondragstart 拖拽的一瞬间触发
    ondrag 拖拽期间连续触发
    ondragend 拖拽结束触发

目标元素事件（将拖拽元素释放的地方）：

    ondragenter 进入目标元素触发（鼠标光标进入）
    ondragover 进入离开目标元素连续触发
    ondragleave 离开目标元素触发
    ondrop 在目标元素上释放鼠标触发

一个元素不能放在另一个元素上面，需要在ondragover上阻止默认事件。

# 46、说说什么是设计模式，你最常用的设计模式有哪些？

设计模式 是一种让代码可重用/可拓展/可解偶的拟物化思维，比如接口不同就用适配器之类的。
创建型设计模式

简单工厂模式、工厂方法模式、抽象工厂模式、建造者模式、原型模式、单例模式
结构型设计模式

外观模式、适配器模式、代理模式、装饰者模式、桥接模式、组合模式、享元模式
行为型设计模式

模板方法模式、观察者模式、状态模式、策略模式、职责链模式、命令模式、访问者模式、中介者模式、备忘录模式、迭代器模式、解释器模式
技巧型设计模式

链模式、委托模式、数据访问对象模式、节流模式、简单模板方式、惰性模式、参与者模式、等待者模式
架构型设计

同步模块模式、异步模块模式、widget模式、mvc模式、mvp模式、mvvm模式

# 47、 举例子说明javascript的变量声明提升和函数声明提升

var getName = function(){
  console.log(4)
}

function getName() {
  console.log(5)
}

getName() // 4 函数声明优先级高于var声明,  故 4 覆盖了 5

# 48、说说position的absolute和fixed共同与不同点分别是什么？

同：

    元素的block
    脱离文档流，不占据空间等等
    不同：
    absolute相对元素可设定，而fixed相对于浏览器窗口固定，页面滚动位置不变


# 49、什么是html的字符实体？版权符号代码怎么写？

&copy; ==> ©

# 50、如果面试官让你先自我介绍下，然后说下你的工作经历，你该怎么说？

我是xxx，毕业于 xxx，专业是 xxx，在 xxx 开始工作，期间负责 xxx，做过 xxx 项目，在 xxx 年换了工作，期间负责 xxx，做过了 xxx 项目，在工作经历中，涉及了 xxx 技术，xxx 端，好，我的介绍完毕。


算法题(3)

todo:

算法题(3)

