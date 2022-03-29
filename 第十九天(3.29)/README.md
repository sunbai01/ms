# css

# 1、在什么情况下，用translate()而不用绝对定位？反之呢？请说明理由

translate设置百分比值时，百分比是相对元素自身元素尺寸的值
绝对定位的top, left等的百分比值则是相对最近的position为relative\abolute\fixed祖先元素尺寸的值
所以
需要基于元素自身尺寸进行定位时，使用 translate，
需要基于某个祖先元素的尺寸进行定位时，使用 position:abolute

# 2、以前我们都提倡把css通过外部引入，但现在使用webpack时往往会和html打包在一起？这是为什么呢？

??

# 3、写一个特效：鼠标经过文字时，文字旋转360度

:hover

transform: rotate(360deg);

# 4、css中定义class时，中间有空格和没空格的区别是什么？

.example .pp {
  color: orange;
}
.example.pp2 {
  color: green;
}

第一个class要这样写生效：<p class="example">文字文字<span class="pp">pp这个class生效</span>....</p>
第二个class要这样写生效：<p class="example pp2">pp2这个class生效</p>

如上面的两个定义一个是中间有空格，一个是中间没空格。

    .example .pp = E F 是后代选择器。

    .example.pp2 则是在一个元素上，这个元素包括这两个类才会有效果。

# 5、使用css实现浮雕效果 

使用css3字体阴影 text-shadow

# 6、使用css实现描边效果

 .demo { color: white; font-size: 40px; -webkit-text-stroke: 1px black; } 

# 7、使用css实现模糊的效果

body {
  filter: blur(10px);
}

# 8、font-weight的默认值是多少？

400，normal

# 9、你是如何对 CSS 和 JavaScript 代码组织的？有哪些原则？

顶部定义公共变量样式

css使用变量引入

多业务使用 scoped

link标签写在head头内

# 10、请使用css实现一个小波纹的效果

todo

# 11、你自认为自己的css水平如何？还有哪些是用css实现不了的？

todo

# 12、你有使用过touch-action属性吗？说说它的用途

值类型

 .auto.手势操作完全由浏览器自己决定.meta元素里面的viewport设置
 .manipulation:表示浏览器只允许进行滚动和持续缩放操作,双击不能触发.这个设置可以完美解决移动端点击300ms延时的bug
html{
touch-action:manipulation
}

 .pan-x:手指可以左右平移
 .pan-left:手指可以往左移动,移动开始后可以往右恢复
 .pan-right:手指可以往右移动,移动开始后还是可以往左恢复的
 .pan-y:手指可以垂直移来移去
 .pan-up:手指可以晚上移动
 .pan-down:手指可以往下移动
 .pan-zoom:手指可以用来缩放页面

https://www.jianshu.com/p/665897a71229

# 13、如何创建块级格式化上下文(block formatting context),BFC有什么用

创建规则：

根元素
浮动元素（float不取值为none）
绝对定位元素（position取值为absolute或fixed）
display取值为inline-block、table-cell、table-caption、flex、inline-flex之一的元素
overflow不取值为visible的元素


作用：

可以包含浮动元素
不被浮动元素覆盖
阻止父子元素的margin折叠

# 14、通过CSS的定位有几种，分别相对于什么定位？

static,常规布局
relative,相对定位，使用这个定位后，元素相对于本身未添加定位的位置定位
absolute,绝对定位，相对于最近的非static祖先元素定位
fixed,相对于浏览器窗口定位
sticky,粘性定位

# 15、如何垂直居中一个浮动的元素？

 <style>
.fl {
	float: left;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
.father {
	width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

# 16、你感觉css哪块的知识点最难掌握？为什么？

todo

# 17、控制换行的属性有哪些？

word-break: break-all;
flex中的 flex-warp

# 18、举例说明如何控制中文不换行？

white-space: nowrap;

# 19、如果元素宽度不够时，如何使得长串单词不会被截断？

todo *截断这是一个知识点，很重要要考

# 20、举例说明哪些css属性可以简写？

border。padding margin background

# 21、为什么有时候给元素设置宽度不起作用呢？

可能是个行内元素。，设置一下块状元素 或者行内元素 display属性

# 22、如果设置一个元素的字体为：font-size:18，没有写单位px，那么会默认有px的单位吗？

不会，属性会被干掉

# 23、如何清除input元素聚焦时的边框

去控制台看是谁去控制的，hack一下

outline: none; 

# 24、如何让子元素不继承父元素的:hover效果？

子元素的:hover 写原始属性，如 { width:  0 }

# 25、如何去掉button的点击样式？

: active 写原始属性

# 26、css unicode字符集使用时要注意哪些问题？

1.文档需要声明为UTF-8
2.编号用在HTML中时，需要在前面加上&#符号
3.用于CSS文件中，但是需要用反斜杠\转义
4.用于JavaScript，和CSS用法一样，不过要用\u来转义


# 27、css unicode字符集有哪些分类？

https://www.cnblogs.com/guojikun/p/7646115.html

# 28、解释下为什么css中值为0时可以不写单位吗？

在尺寸意义上讲，0 === 0em === 0px === 0vw === 0rem === 0 anything，在 0 这个尺度上，所有的单位差异都被抹平了。

# 29、你觉得在css中如果值是0时写单位好还是不写好呢？为什么？

不写好，单位写了比较冗余

# 30、你知道css压缩的方法和原理是什么吗？请描述一下

todo

# 31、说说你对css包含块的理解

todo

# 32、如何确定元素的包含块？

# 33、元素包含块有什么作用？

# 34、css中如何获取dpr值？

设备像素比 = 物理像素 / 逻辑像素(px) 

@media(min-resolution:1 dppx){}

-webkit-min-device-pixel-ratio : 2

# 35、如何判断dpr的倍数？

@media (-webkit-device-pixel-ratio: 3) {

}

JS方法：window.devicePixelRatio ,输出多少，就是几倍屏
CSS方法：max-device-pixel-ratio

# 36、说说你对css3属性column的理解

columns: 指定列的宽度和数量

columns: 150px 4；

# 37、请使用css column写一个多列布局

html

# 38、解释下为什么在移动端切图时会有使用到2倍图片呢？

手机端的的屏幕分辨率是retina屏，可以理解为像素点更加密集，所以通常切一倍图在手机下就会显得模糊

# 39、解释下使用2倍图片，有什么优缺点？

不清晰，显示不全或者留白

# 40、要开发一个pc端和移动端的自适应布局网站，说说你的方案是什么？

我做的那个项目

# 41、pc端和移动端使用两套布局和使用一套自适应布局分别有哪些优缺点？

两套css，代码分离且冗余

一套css，代码杂揉，无大的区分

# 42、移动端开发时你了解淘宝的lib-flexible方案吗？它的原理是什么？

不知道有没有记错，大致的原理类似设定一个基准宽度比如750px，设定html根标签字体大小；根据目标设备的宽度与基准宽度的比例，修正html的字体大小；其他需要等比缩放的元素属性采用rem来基于html字体自动适配。

# 43、说说你对screen.width伪响应式的理解


https://blog.csdn.net/fzddd7315/article/details/71104496

# 44、如何去掉em的默认样式？

font-style:normal

# 45、css的属性list-style-position的值outside和inside有什么区别？


    outside：标记盒在主块盒的外面。（默认值）
    inside：标记盒是主要块盒中的第一个行内盒，处于元素的内容流之后。

# 46、说说你对css变量（自定义属性）的理解？

任何值的更新都发生在同一个地方。正如，在你定义的变量上。

CSS在很大程度上是一种声明式的语言，而缺少动态能力。

这个厉害的新技术，学习和使用起来都非常直观。


# 47、css变量属性有什么用途？有什么优缺点？

1、兼容性差，但是可以和js配合写动画
2、也方便做主题 全局修改：因为，你只需要在自定义属性中改变一次值，所有应用了这个变量的地方都会自动跟着一起改变

# 48、css变量和预处理器中的变量有什么不同？

你可能已经在CSS预处理器中尝试过使用变量而带来的好处了，比如Sass和Less。

预处理器让你能设置变量，以及在函数、循环、数学计算等等地方中使用它们。这是否意味着CSS变量已经无关紧要了呢？

那可未必，主要是因为，CSS变量与预处理器中的变量其实是不同的东西。

这些不同基于一个事实：CSS变量是浏览器中直接可用的CSS属性，而预处理中的变量是用于编译成常规的CSS代码，浏览器其实对它们一无所知。

这意味着，你可以在样式表中，在内联样式中，在SVG的标签中直接更新CSS变量，甚至可以在运行时用JavaScript直接修改它。而你是无法对预处理器中的变量做上面这些操作的。CSS变量开启了一个充满可能性的新世界大门。

不是说你必须要在两者间做出选择：没有什么东西限制你，你可以同时使用CSS变量和预处理变量，并享有它们各自带来的巨大好处。



“css预处理器用来定义一种新的语言,完全兼容css语法,它为css增加了一些编程的特性,比如变量、函数、逻辑控制。css预处理器编写的css不能直接被浏览器识别,需要编译生成css文件。”


# 49、css变量受哪些影响？

受级联关系影响

:root {
    --main-color: blue;
}
.alert {
    --main-color: red;
}
p {
    color: var(--main-color);
}
<--! HTML -->
<html>
  <head>
    <!-- head code here -->
  </head>
 
  <body>
    <div>
      <p>blue 的段落</p>
      <div class="alert">
        <p>red 的段落</p>
      </div>
    </div>
  </body>
</html>

# 50、css变量区分大小写吗？

css变量必须以--开头，对大小写敏感，--main-bg和--main-Bg会被认为是两个不同的变量



# html

# 周级汇总题目
