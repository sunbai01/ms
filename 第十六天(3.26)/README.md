# js

# 1、写一个方法将汉字转换成拼音首字母

todo

# 2、写一个方法，批量删除指定索引的数组元素

保持索引：

function clearItems (list = [], indexes = []) {
  indexes.forEach(index => {
    list[index] !== undefined && (list[index] = undefined)
  })
}
var a = [1, 2, 3, 4, 5]
clearItems(a, [0, 1])
console.info(a) // [undefined, undefined, 3, 4, 5]

不保持索引

function clearItems (list = [], indexes = []) {
  indexes.sort((a, b) => b - a).forEach(index => {
    list.splice(index, 1)
  })
}
var a = [1, 2, 3, 4, 5, 6]
clearItems(a, [0, 2, 1])
console.info(a) // [4, 5, 6]


升序

function sortNum(a, b) {
	return a-b
}

降序
function sortNum(a, b) {
	return b-a
}

# 3、url链接中如果有两个问号会出现什么问题？如果通过js获取url的参数时能正常获取到吗？

测试地址
https://github.com/haizlin/fe-interview/issues/3171?a=1&b=2?c=3
获取参数
console.info(location.search) // ?a=1&b=2?c=3

# 4、写一个方法将字符串中的制表符全部替换为逗号

const rmTab = (str) => {
  return str.replace(/\t+/g, ',')
}
rmTab(' a 	 ')

# 5、为什么eval要添加括号呢？

(0, eval)('this')

这种调用形式的话，那是因为js规定eval在间接调用(无调用者上下文)时，其编译的代码会默认执行在顶层作用域。

let foo = 1;

(function() {
  let foo = 2;

  console.log(eval('foo'));       // 2
  console.log((0, eval)('foo'));  // 1

  (0, eval)('foo = 3');

  console.log(foo);  // 2
})();

console.log(foo);    // 3


# 6、写一个方法检测指定的数组是否有重复的元素

https://github.com/haizlin/fe-interview/issues/3183

todo

# 7、写一个方法求给定1485个元素中取33个元素的组合有多少种（大数据处理，小心CPU爆炸）

todo

# 8、写一个方法代替eval
const myEval = function (fn) {
const Fn = Function;
return new Fn('return ' + fn)();
}

# 9、请解释下为什么我们可以在声明函数前使用它？

js是解释性语言，解释器在运行JS脚本前会对脚本进行扫描预处理，变量和函数声明会被提前预处理，分配内存和空间。扫描完之后才会对脚本进行逐行运行，因此运行前，当前作用域的变量都已存在，可以使用。

var func = function () {} 这种是声明了一个变量 func，并赋值为 function(){}, js预处理的时候只会提升声明，不会预处理赋值，因此在赋值前使用 func() 会报错，因为此时 func 未赋值，为 undefined

# 10、请解释下执行栈有哪些特点？

执行栈，也叫调用栈，用于存储在代码执行期间创建的所有执行上下文。可以把执行栈看作一个存储函数调用的栈结构，遵循先进后出的原则。

规则如下：
1.首次运行JS代码时，会创建一个全局执行上下文，push到当前的执行栈中，每当发生函数调用时，都会为该函数创建一个新的函数执行上下文并push到当前执行栈的栈顶
2.当栈顶的函数运行完以后，其对应的函数执行上下文将会从执行栈中pop出去，执行上下文的控制权将会移动到当前执行栈的下一个执行上下文

# 11、js函数定义方式有哪些？

三种 
var a = function(){} 
function a(){} 
var a =new Function(){}

# 12、js函数调用方式有哪些？

func();
func.apply();
func.call();

# 13、解释如下代码的输出结果，并改造代码使得按顺序输出i 

function test(){
	for(let i = 0; i < 8; i++){
		(
			function(j){
				setTimeout(function(){
					console.log("i=", i);
				}, Math.random() * 1000);
			}(i)
		)
	}
}

test();

要求改造后输出结果：
i= 0
VM1507:6 i= 1
VM1507:6 i= 2
VM1507:6 i= 3
VM1507:6 i= 4
VM1507:6 i= 5
VM1507:6 i= 6
VM1507:6 i= 7

改造：
function test(){
    for(let i = 0; i < 8; i++){
        (
            function(j){
                setTimeout(function(k){
                    console.log("i=", k);
                }(i), Math.random() * 1000);
            }(i)
        )
    }
}

或者去掉 Math.random() 

# 14、说说你对数据结构和数据类型的理解 

todo

# 15、请解释下数据结构与算法的关系

todo

# 16、请解释下算法有什么特征（基本要素）？


一、数据对象的运算和操作
1，算术运算：加减乘除等运算
2，逻辑运算：或、且、非等运算
3，关系运算：大于、小于、等于、不等于等运算
4，数据传输：输入、输出、赋值等运算
二、算法的控制结构
有穷性、确切性、输入项、输出项


# css

# 1、为什么伪类的content不能被选中？


    伪类不是真正的DOM,无DOM相关的属性和方法



# 2、如何取消页面中选中的文字？

user-select: none;
/* browser-specific values */
-moz-user-select: none;
-webkit-user-select: none;
-ms-user-select: none;


# 3、怎样把单位cm转换成px呢（在打印时有时会用到）？

1cm == 37.8px

# 4、什么是关键帧动画？

表示关键状态的帧动画叫做关键帧动画。
所谓关键帧动画，就是给需要动画效果的属性，准备一组与时间相关的值，这些值都是在动画序列中比较关键的帧中提取出来的，而其他时间帧中的值，可以用这些关键值，采用特定的插值方法计算得到，从而达到比较流畅的动画效果。

# 5、什么是逐帧动画？

实现逐帧动画需要两个条件：
（1）相关联的不同图像，即动画帧；（2）连续播放。

# 6、为什么float会导致父元素塌陷？

“当元素设置浮动后，会自动脱离文档流”，
翻译成白话就是说，元素浮动后，就不在整个文档流的管辖范围，那么它之前存在在父元素内的高度就随着浮动不复存在了，而此时父元素会默认自己里面没有任何内容
（前提是未给父元素设置固定高度，如果父元素本身有固定高度，就不会出现这种情况）

# 7、如何形成BFC？

根元素
float的值不为none
overflow的值不为visible
display的值为inline-block、table-cell、table-caption
position的值为absolute或fixed

# 8、举例说明BFC会与float元素相互覆盖吗？为什么？

BFC的区域不会与float的元素区域重叠
计算BFC的高度时，浮动子元素也参与计算
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

# 9、BFC与IFC有什么区别？

BFC:针对块元素
IFC:针对行内元素

# 10、translate3D有什么作用？

3d动画，启用GPU硬件加速

# 11、在固定宽度的div下，怎么让字体自适应大小，不超出宽度，也不要换行

fittext  todo

# 12、如果要你自己设计一个css框架，说说你的思路

todo

# 13、行内元素可以设置padding和margin吗？

水平方向都可以设置，垂直方向都是无效的，而在padding的垂直方向进行设置可以产生表象，但不影响周围元素

# 14、pseudo-class与pseudo-element有什么区别？

伪类表示已存在的某个元素处于某种状态，但是通过dom树又无法表示这种状态，就可以通过伪类来为其添加样式。例如a元素的:hover, :active等

伪元素主要是用来创建一些不存在原有dom结构树种的元素，例如：用::before和::after在一些存在的元素前后添加文字样式等，这些被添加的内容会以具体的UI显示出来，被用户所看到的，这些内容不会改变文档的内容，不会出现在DOM中，不可复制，仅仅是在CSS渲染层加入。CSS3中建议使用::表示伪元素，如：div::before。

# 15、flex与其他有什么不同，用它有什么好处？

flex 从根本上不同于之前常用的借助 定位、浮动 的布局。从逻辑思路上来说，flex 布局具有宏观性，提供了一种对于页面中元素如何排布的框架，开发者不需要关注细节和进行额外的操作，就能使得一系列元素按约定的规则排列。而之前常用的借助 float 、marging、position 的布局，则更像是一种“技巧”，不是真正意义上的布局，它们的存在更大意义上关注于单个元素或者某种场景下的特性而非全局。

# html

# 1、如何优化页面的渲染过程？

将样式表放到head中
将js脚本置底
减少脚本的数量，将多个脚本合并，可以使用webpack等前端工具打包
压缩样式、脚本、图片等的体积

# 2、html哪个标签属性可以通过预解析DNS？

1.<meta http-equiv="x-dns-prefetch-control" content="on">
2.<link rel="dns-prefetch" href="//www.spreadfirefox.com">

# 3、说下cookie的优点和使用场景是什么？

todo

# 4、跨域通信有哪些方式？

jsonp
CORS
代理
postMessage


# 周级汇总题目

# 1、你上家公司前端团队有多少人？是怎么分工的？


前端团队包括外包同学，共有30人，性能，安全，b（平台/编辑器）端/c端（落地页），垂类

# 2、写一个方法判断给定的字符串是否同态

好吧，首先要知道什么是同态：

    两个字符串，如果A字符串中的每一个字符都可以在B字符串中找到唯一对应，并且顺序一一对应；如果存在这样的函数，那么A和B同态

https://github.com/haizlin/fe-interview/issues/1011

# 3、过渡和动画的区别是什么？

相同：都会让你的页面元素动起来
区别：
过渡 transition

1.需要事件触发，比如hover，focus，checked , js改, @media query
2.一次性的
3.只能定义开始和结束状态，不能定义中间状态
举例：
transition: width 2s;
动画 animation

1.不需要事件触发
2.显示地随着时间的流逝，周期性的改变元素的css属性值。区别于一次性。
3.通过百分比来定义过程中的不同形态，可以很细腻
举例：
原生css实现闪烁的bling bling的效果

@keyframes bling-kf {
   0% { opacity: 1; }
   50% { opacity: 0.5; }
   100% { opacity: 1; }
}
.bling {
    animation: bling-kf 2s ease-in infinite;
}

不停的bling bling，很有趣的，:)

# 4、网站的TDK该怎么设置？它有什么作用？

刚一看确实不知道TDK是啥，其实就是title, description, keywords的简称，这三个常用于网站的seo；

title可以在head里面使用<title>标签设置；而description和keywords可以通过meta标签设置，meta的使用可以参考


TDK是一个缩写，T(title),D(description),K(keywords)，用于网络搜索引擎优化seo，它是seo中页面的描述和关键词设置，也被称为seo界的三个标签。

# 5、要你做一个国外的web页面，你需要考虑哪些问题？

需求范围，词条翻译，工期，目标用户群用户行为习惯，交付方式和验收标准，最后一点，也是精髓--报价。

# 6、请描述下js的原型和原型链的理解以及它们之间的关系

原型：

变量的原型 __proto__
函数的原型 prototype

原型的作用：
可以通过设置原型给对象添加自定义的方法以供后续调用

-------------------------------------------

原型链：
原型链是指，每个对象都有自己的__proto__指向自己构造函数的原型，且该构造函数也有自己的原型对象，一直向上直到原型对象为null。至此构成了一个原型链。

原型链的作用：
可以通过原型链实现继承。

关系：
原型是原型链的组成部分。


# 7、在默认的情况下，使用h1标签呈现出什么效果？

加粗，默认32px大小

font-size: 2em;
font-weight: bold;
display: block;

# 8、position的relative和absolute定位原点是哪里？

absolute 第一个非static的父级元素的左上角

relative 元素本身所在位置

# 9、你知道什么是图床吗？它有什么好处？

一般需要插入图片的网站都会配备一个图床。
图床用于存储需要用到的图片，可以用于上传下载图片。

对于一些博客网站来说，从图床引用图片会比直接将图片转码插入文中阅读体验和加载速度都有一个较大的提升。

# 10、请描述下什么是原型模式？它主要运用在哪些场景？

原型模式是一种设计模式，就是创建一个共享的原型实例，通过拷贝这些原型创建新的对象，也就是创建一个对象作为另一个对象的Prototype属性。

优点：用于创建重复的对象，可以提升性能。
结合优点，可以运用在以下几种场景：
1、类初始化需要消耗很多资源
2、有多个调用者调用且每个调用者会修改其值，相当于保存一份原有的对象拷贝相同对象进行修改，即保护性拷贝
3、通过new对象时需要很多繁琐的准备或访问权限

# 11、说下你对cursor属性的理解

cursor 是鼠标光标的属性。可以给元素设置不同的cursor属性来使鼠标在不同的位置显示不同的形状。

pointer



