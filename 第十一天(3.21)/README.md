html题目（50）

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

# *4、写一个方法实现promise失败后自动重试

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

# 18、你用过Navigator.sendBeacon()吗？说说它有什么应用场景？

# 19、

css题目（50）

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

# 算法题


1、

2、

3、














