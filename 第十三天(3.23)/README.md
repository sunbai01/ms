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

# 周级汇总题目
