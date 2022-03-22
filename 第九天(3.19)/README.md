html题目（50）

# 1、html5怎么判断app是否安装？

例如，打开微信 是用了微信自己的 wechat://xxxx 这样类似http/https的协议，来打开。支付宝是alipay，其他的应用都有不同的自己的协议头，通过这样的链接来唤醒APP。如果打不开就能判断是否安装该APP

说了等于没说

# 2、举例说明html5怎么判断网络状态？

返回浏览器的联网状态

var state = navigator.online

if (state) {
  console.log('在线')
}
else {
  console.log('离线')
}


想要监听浏览器的联网状态

window.online = function() {
  console.log('在线')
}

window.offline = function() {
  console.log('不在线')
}

# 3、html5怎么判断是否在wifi环境？

navigator.connection.effectiveType

# 4、https页面加载http的资源会导致页面报错的原因是什么？怎么解决？

https是当下的网站的主流趋势，甚至像苹果这样的大公司，则完全要求用户必须使用https地址。

然而对于以前http链接来说，我们往往就存在一个兼容性问题，因为你不可能一下就全部切换过去，应该在很长一段时间内，https与http将共存。

因为https地址中，如果加载了http资源，浏览器将认为这是不安全的资源，将会默认阻止，这就会给你带来资源不全的问题了，比如：图片显示不了，样式加载不了，JS加载不了。

解决办法：

1. 最笨的方法，直接复制原有代码，写成两套代码，一套为http使用，一套为https使用，http和https各自指向各自服务。

2. 可用的方法，用同一套代码，在后台请求标识好协议，将该变量传到html页面中，进行协议替换，如：后台变量，$protocol = 'https://';  前台接收变量 src='{$protocol}res.aa.com/jquery.js'。

3. h5方法，使用js自己加载协议情况，如在body onload='aa()', 在aa() 方法中，将资源按照需求加载进来即可。

4. 推荐方法，不指定具体协议，使用资源协议自适配，比如，当前为https页面，那么就是https资源，如果是http页面，那么就是http资源。具体方法超简单：<script src='//www.aa.com/jquery.js'></script>

# 5、关于iframe的跨域你有了解多少？

同主域，子域跨域
不同主域跨域

# 6、如果要你实现一个代码（多种语言）高亮的组件，你的思路是什么？

highlight.js

https://blog.csdn.net/weixin_44935752/article/details/109134042


# 7、HTML5如何隐藏video元素的控制栏、全屏按钮？

controls: controls 删掉

# 8、HTML5的video怎么取消自动播放？

去掉 autoplay 属性

# 9、HTML5的video怎样预加载（支持全量加载）？

preload="auto"

# 10、移动端如何禁止用户手动缩放页面？

user-scalable=no"

# 11、html中p标签内为何不能嵌套div标签？

但内联元素却不能包含块元素

以下效果 begin 和 end 不在一行

<p>
begin
	<div>1</div>
	<div>2</div>
end
</p>

解析成了

<p>
begin</p>
	<div>1</div>
	<div>2</div>
<p>
	end
</p>

# 12、网站如何自适应手机屏幕？

两套代码

各种流式布局 rem + media


# 13、html的标签元素分为哪几大类？分别有什么作用？

行内元素
块级元素
行内块级元素

单闭合标签
双闭合标签

# 14、举例说明html的修饰元素有哪些？

加粗
倾斜
下划线
删除线
自带样式

# 15、如何禁止html页面缓存？

http-equiv="Cache-Control" content ="no-cache, no-store, must-revalidate"
http-equiv="Pragma" content="no-cache"
http-equiv="Expires" content="0"

- Cache-Control（http 1.1）
no-cache, no-store, must-revalidate
- Pragma（http 1.0）
兼容老版本的http传输协议
- Expires
0，表示过期时间，不进行缓存

# 16、canvas有哪些渲染上下文？

const context = canvas.getContext('2d'); // 获取2d上下文
const context = canvas.getContext('webgl'); // 获取webgl上下文

# 17、使用递归时应该注意哪些问题？

1、有正确的结束条件，避免无限循环
2、避免使用太多栈，可限制最大栈数报警 或者 异步分批

# 18、写个布局，当页面高度不够时，底部固定在下面，反之不固定

html

# 19、写html代码时，如果缺少了结束标签，你如何检测及如何预防？

编辑器装语法检测的插件
template

# 20、解释下什么是CDATA？

CDATA指的是不被xml解析的文本数据

# 21、移动端如何设置页面以全屏模式运行？

<meta name="apple-mobile-web-app-capable" content="yes" />

# 22、iOS下页面如何启动加载时显示画面图片？如何设置大小？它有什么好处？

<link rel="apple-touch-startup-image" href="start.png" media="(device-width: 1536px) and (orientation: portrait)"/>
 
 IOS防止白屏

# 23、移动端如何使页面横、竖屏？

todo

# 24、IOS在播放视频时，有可能会出现短暂的黑屏，如何解决呢？

todo

# 25、你有了解video的x5-video-player-type这个属性吗？它的作用是什么呢？

限制wx x5内核自动播放的功能

# 26、移动端如何实现长按保存图片（图片上的二维码是动态的）？

html -> canvas -> image -> a[download]

html2canvas.js：可将 htmldom 转为 canvas 元素。
canvasAPI：toDataUrl() 可将 canvas 转为 base64 格式
创建 a[download] 标签触发 click 事件实现下载

# 27、你知道微信端的浏览器内核是什么吗？

x5内核

微信自带浏览器是qq浏览器x5内核

# 28、页面上的登录表单记住了密码（显示星号），但我又忘了密码，如何找回这个密码呢？

元素里面input type 改为 text

# 29、img中的src加载失败时如何用默认图片来替换呢？

onerror属性，要注意默认图片也加载失败的情况

# 30、怎样去除iOS和Android中的输入URL地址的控件条呢？

setTimeout(scrollTo，0，0，0)

# 31、HTML5中的article和section有什么区别？

article 定义文本

section 定义文档中的章节

# 32、html标签的属性值是否可以省略引号？为什么？

h5可以，但以前的不可以

# 33、举例说明实现文字贯穿线的方法有哪些？

<del></del>

# 34、如何在页面上显示Emoji表情？

有个存数据库的情况

utf8mb4 编码，做个细节处理，只有 emoji 才用编码，

# 35、a标签可以再嵌套a标签吗？为什么？如果不行，那又想要嵌套效果怎么解决呢？

<area></area> 实现嵌套

# 36、说说你对html的嵌套规范的理解，都有哪些规范呢？

a不要嵌套a
行内不要嵌套块
p不要嵌套块元素
ul下只能跟li

# 37、html的img标签为什么要添加alt属性呢？

alt是一个必须属性，他规定图像无法显示时的替代文本

利于seo
提高用户体验
便于百度的图片收录及优化
百度会对网站的title 以及alt分析，进而分类进行排序

# 38、块级元素不能包含其他块级元素有那些？

p不能放div
li可以包含div

# 39、table中给td设置宽度无效怎么解决？

列宽是由table直接设定的，给table设定宽度，tableLayout：fixed

# 40、怎么去除img之间存在的间隔缝隙？

font-size

# 41、给内联元素加float与给块元素加float有什么区别？

内联元素加float无效

# 42、如何解决input在Firefox和Chrome中高度不一致的问题？

原因是 input在火狐的 border-width-padding  受win10系统的影响，

设置一样的样式覆盖默认

{
	box-sizing: border-box;
	height: 20px;
}

将win10 系统的文本大小设置为 100%

# 43、可以给内联元素设置宽和高吗？为什么？

内联中非置换元素不能设置宽高，

置换元素（img  input  textarea） 可以设置宽高

# 44、你知道著名的3像素Bug指的是什么吗？怎么解决呢？

img下方缝隙

原因：img 是行内元素，默认display: inline; 它与文本的默认行为类似，下边缘是与基线对齐，而不是紧贴容器下边缘

解决办法：
1、img设置display：block
2、img 和 父元素 都 vertical-align: top
3、img 父元素设置 line-height：0


# 45、IE6文字溢出BUG（别名：多出来的猪、谍影重重）怎么解决呢？

？？？

# 46、对一个元素设置浮动后，它的特征是什么？

1、自己脱离文档流
2、浮动后，元素周围的内联元素将环绕他
3、造成父元素的高度塌陷

# 47、微软雅黑是有版权的，在页面中使用font-family:Microsoft YaHei会不会有版权问题呢？

不会，展示取决于用户设备上该字体是否可用

商用、个人都可以用，但商用要授权

# 48、如何禁止web端的页面缩放？

meta

# 49、iframe如何自动调整高度？

未跨域时，在 iframe 中利用他父窗口对象将本页面的滚动高度设置给iframe的height

跨域时，在 iframe 中将自己的滚动高度设置在本页面内的一个隐藏于父页面不跨域的iframe的hash值，执行上述操作

# 50、iframe父页面如何获取子页面的元素？

1、父页面 onMessage，子页面 postMessage
2、$('iframe')[0].contentWindow.document.getElementById()


css题目（50）

# 1、如何用css自定义滚动条？能做到所有浏览器兼容吗？想要做兼容怎么办呢？

.bar::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}

.bar::-webkit-scrollbar-thumb {
	border-radius: 50px;
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0,2);
	background: #588;
}


.bar::-webkit-scrollbar-track {
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0,2);
	background: #DEDEDE;
}

做不到

# 2、举例说明伪类:focus-within的用法

类似于冒泡机制，div 中 input获取焦点时，父元素怎么样，

用法：

div:focus-within {
  background: cyan;
}

# 3、请用css写一个扫码的加载动画图

html

# 4、height和line-height的区别是什么呢？

line-height：多行文字基线间的距离

# 5、手写一个使用css3旋转硬币的效果

1、animation + keyframes
同扫码

2、transition + transform

transition: transform 3s linear;
transform: rotate(0deg);

:hover {
	transform: rotate(360deg);
}

# 6、如果给一个元素设置background-color,它的颜色会填充哪些区域呢？


content、padding和border区域。

 然而该行为由background-clip属性决定，默认为border-box(content、padding和border区域。
)。

padding-box(content、padding)

content-box(content)

# 7、当全国哀悼日时，怎么让整个网站变成灰色呢？

body {
	filter: grayscale(1)
}

# 8、怎样用纯CSS实现禁止鼠标点击事件？

pointer-events: none

# 9、实现一个上下固定，中间自动填满的布局

flex

flex-direction: column

上下定高
中间 flex: 1

body 和 container 需要设置高度为100%

# 10、请写出:link、:visited、:hover、:active的执行顺序

 :link、:visited、:hover、:active

 lvhao

# 11、举例说明clear取值有哪些？

clear: none  允许浮动元素出现在两侧
clear: both  两侧不允许有浮动元素 （清除浮动）

# 12、举例说明常用的cursor取值有哪些？

pointer 出现小手

not-allowed 禁用

# 13、你有用过vw布局吗？和使用rem有什么区别？

vw/vm

假如宽度是1200px的话。那10vw就是120px

1vm = 1200px * 100% = 12px

HTML为大小为10px

1.2rem = 10px * 1.2 = 12px

# 14、实现文本的竖向排版

writing-mode: vertical-rl; 左到右

writing-mode: vertical-lr; 右到左

# 15、怎么使图片宽度自适应呢？

object-fit: contain

# 16、怎么让div中的图片和文字同时上下居中？

html

# 17、举例说明:not()的使用场景有哪些

:not(p) {
	color: red;
}

除了p元素之外的其他元素，color 都为 red

# 18、你有使用:valid和:invalid来校验表单吗？

1、:valid 用于匹配输入值为合法的元素
2、:invalid用于匹配输入值为非法的元素

// input内容合法，边框颜色是绿色
input:valid {
	border-color: green;
	box-shadow: inset 5px 0 0 green;
}
// input内容非法，边框颜色是红色
input:invalid {
	border-color: red;
	box-shadow: inset 5px 0 0 red;
}

# 19、举例说明attr()的使用场景

<div title="在支持content属性的浏览器中能看到我被显示了"></div>

<a href="xxx.com"></div>


div:after{content:attr(title);}

div:after{content:attr(href);}



# 20、怎么使用纯css实现左右拉伸拖动？

resize:both;
overflow:auto;

# 21、用css实现饼图效果

html

# 22、用css实现倒影的效果

box-reflect

# 23、请说下你对css对象模型(CSSOM)的理解

CSSOM 是一组允许 JavaScript 操作 CSS 的 API。它非常类似于 DOM，但是用于 CSS 而不是 HTML。它允许用户动态读取和修改 CSS 样式。

# 24、使用overflow: scroll时不能平滑滚动怎样解决？

scroll-behavior: smooth;

# 25、使用css画出一个五角星

html,todo

# 26、说出至少十条你理解的css规范

1、尽量不要使用 float
2、要正确嵌套
3、命名规范
4、尽量不要加 !important
5、复用性要强
6、加注释
7、避免使用CSS表达式
8、选择<link> 舍弃 @import
9、把样式表放在顶部
10、压缩CSS

# 27、写一个动画，向上匀速移动100px，向下以1.5倍速度移动200px，一直反复循环

html

# 28、在css中为什么说不建议使用@import？

1、兼容性不好，他是css2.1才出现的概念

2、@import 会等dom全加载好再被加载，容易 foc

# 29、 [css中兼容ie浏览器的前缀是什么? 

webkit  谷歌

moz  火狐

o  opera

ms ie

# 30、  [请问触发hasLayout的后果是什么？

可以看做是触发bfc，在ie7一下版本

# 31、  [css中class和id选择器有什么区别？

1、id权重高
2、 class 可以用空格给同个元素设置多个 class，id 用空格会让 id 失效；
3、 id 可以和链接锚点一起玩耍。
4、id 的唯一性，获取该 id 的 dom 时，会取同名 id 的前者



# 32、  [移动端页面不满一屏时如何实现满屏背景？

body {
  min-height: 100vh;
}

1vh 等于body 高 = 100% * body高 = 100% * 100vh  

# 33、  [写一个高度从0到auto的transition动画
无法写

# 34、如何使用CSS3的属性设置模拟边框跟border效果一样？


    outline
    伪元素  html
    box-shadow 



# 35、怎么IE6下在使用margin:0 auto;无法使其居中？

浏览器解析的问题，IE6下需要对居中的元素设置text-align:center属性使其margin:0 auto;生效。


# 36、使用css实现彩虹的效果

https://github.com/haizlin/fe-interview/issues/1600

# 37、  [css中padding和margin是相对于父元素还是子元素呢？

padding相对于子元素，margin相对于父元素

当padding和margin被设置为百分比的时候，这个百分比是相对于它们的包含块元素的宽度

# 38、 [当使用opacity时会使得元素的子元素也透明，此时不想要子元素也跟着透明怎么办？

父元素 transpant

background:rgba(120,120,120,0.7)

# 39、你有使用过postcss吗？它和less/scss/stylus有什么区别？

todo

# 40、解释下什么是PPI和DP？

PPI（pixel per inch）：像素密度，1英寸屏幕上显示的像素量。值越高，屏幕越细腻。

DP（Density-independent pixel）：安卓开发用的长度单位。

1dp=（屏幕ppi / 160）px。

# 41、头部设置meta也可以做到自适应为啥还要用rem？

媒体查询如果需要适应的情况比较多 就得写多个条件的代码 代码太多太繁琐 rem只用判断是几倍图 就可以做出调整

这个问题我也很疑惑

自适应：https://zhuanlan.zhihu.com/p/53503827

# 42、在rem下如何实现1像素？

先用px开发，最后把px转换成rem

# 43、 [rem是如何实现自适应布局的？

其大小与设置的html根大小相对
通过js获取当前页面的宽度，动态的调整
html{
font-size: 5px;
}
来改变整个页面对应的字体大小

# 44、 使用rem的优缺点是什么？和使用百分比有什么区别？

rem在处理小数的时候会有误差，百分比要按照父级的尺寸去计算，不灵活

移动端用rem，但不能完全依赖rem，得看公司需求，若pc端和移动端都想一起做的话，那就全部都用rem，样式只用写一套。

如果仅仅只纯粹的做一个移动端，那么整体布局尽量用百分比，少用rem来定宽和定高。

# 45、 [当页面采用rem布局时，如何解决用户设置字体大小造成的页面布局错位？

禁止用户缩放页面,todo,好问题


# 46、 [使用rem时应该注意什么？

设置根元素的字体大小；

https://github.com/haizlin/fe-interview/issues/1654

# 47、 [使用rem布局时怎样合理设置根标签字体大小？

UI出2倍稿，然后用js计算当前设备和UI设计稿之间的比例关系，通过resize实时计算根标签字体大小，即可。


# 48、 [解释下css3的flexbox（弹性盒布局模型），以及它应用场景有哪些？

手机端中比较常用的三段式布局, 头尾固定高度 中间自适应 它可以修改父元素下所有子元素的位置 和排序方式 相对于浮动 更加强大 要注意的是指定flex之后,子元素的float、clear和vertical-align属性将失效

# 49、 [你有使用过vmax和vmin吗？说说你对它们的理解

暂时没用过，最多只用过vw、vh。
了解了下，vmin是vw和vh中较小的那个；vmax是vw和vh中较大的那个。
比如视口宽1000px，高800px，则1vw = 10px，1vh = 8px，1vmax = 1vm = 10px，1vmin = 1vh = 8px。


# 50、 [如何设置背景图片不随着文本内容的滚动而滚动？

可以用position做，最简单的方法直接用background的属性：
background-attachment: fixed;
html

js题目（50）

# 1、说下你对IoC的理解，它有什么运用场景？

比如一个请求获取sql数据时，我们根据不同的数据传入不同的数据库操作类的实例，实现同一接口操作不同的数据库接口

# 2、请说说commonJS模块与ES模块的差异有哪些？

commonJS模块输出值的复制
ES模块 输出值的引用

commonJS模块 运行时加载
ES模块 编译时输出接口

CommonJS => module.export

# 3、举例说明为什么说ES模块比commonJS模块还优秀？

es 模块是编译型，所有的运行都在模块内部

es模块引入多次只会引入一次

es 允许静态分析，实现像 tree-shaking的优化，提供 循环引用，动态绑定

# 4、什么是函数式编程？它有什么优缺点？

todo

# 5、你知道什么是纯函数吗？

纯函数是个计算机术语，这点与语言无关。

纯函数的特征是确定了输入就一定可以确定输出，并且无副作用。

举例子 ，我们在Redux设计模式下，reducer就是一个个的纯函数，我们只是根据参数，按照规则创建新的state，对于老的state，我们只消费，不修改。

# 6、举例说明什么是响应式编程？

在命令式编程环境中，a=b+c表示将表达式的结果赋给a，而之后改变b或c的值不会影响a。但在响应式编程中，a的值会随着b或c的更新而更新。


电子表格程序就是响应式编程的一个例子。单元格可以包含字面值或类似"=B1+C1"的公式，而包含公式的单元格的值会依据其他单元格的值的变化而变化。


Vue就是依靠响应式编程实现的，实现了对数据的监听，和对使用数据的依赖收集，
使得数据变化后自动更新视图

# 7、js循环的数据量很大（例如100W+）时会出现什么情况？如何进行性能优化？

https://github.com/haizlin/fe-interview/issues/2040

# 8、日常开发中写JS循环时应该注意哪些情况？


1、不要写死循环
2、不要在循环中改原数组 或者改原数组的长度
3、尽量使用let

# 9、用js实现一个HashMap，不可以使用Object

function HashMap() {
        this.keyArr = [];
        this.valueArr = [];
      }
      HashMap.prototype = {
        put: function(key, value) {
          // 向Map中增加元素（key, value)
          var len = this.keyArr.length;
          this.keyArr[len] = key;
          this.valueArr[len] = value;
        },
        get: function(key) {
          //获取指定Key的元素值Value，失败返回Null
          var idx = this.keyArr.indexOf(key);
          if( idx != -1){
            return this.valueArr[idx];
          }
          return null;
        },
        remove: function(key) {
          // 删除指定Key的元素，成功返回True，失败返回False
          var idx = this.keyArr.indexOf(key);
          if(idx != -1){
            this.keyArr.splice(idx, 1);
            this.valueArr.splice(idx, 1);
            return true;
          }
          return false;
        },
        removeAll: function() {
          //清空HashMap所有元素
          this.keyArr = [];
          this.valueArr = [];
        },
        keySet: function() {
          //获取Map中所有KEY的数组（Array）
          return this.keyArr;
        }
      };
      HashMap.prototype.constructor = HashMap;

# 10、用js实现typeof的功能

function getType(obj) {
	return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase()
}

# 11、请举例说明JSON.stringify()有哪些特性？

JSON.stringify()本身是将一个对象转化为文本化的json

九大特性：

1、undefined、symbol、函数，对象忽略，直接判断 -》 undefined ,数组 =》 null
2、toJSON() 只输出return 出来的值
3、正常序列化 Date的值
4、nan infinity null 都是 null
5、包装对象自动转
6、对象中不可枚举的属性会被忽略


# 12、举例说明js鼠标事件有哪些？

mouseover
mouseup
mousedown
mouseout
mouseleave
mouseenter
mousemove
click
dblclick

# 13、如何判断一个元素文本是否换行？

# 14、解释下如下代码的意图：Array.prototype.slice.apply(arguments)

arguments 类数组对象
slice 可以实现数组的浅拷贝

由于arguments 不是数组，所以不能用 slice 操作，所以要用apply调用数组对象的slice方法，将 arguments 转化为数组

例子 

function nana() {
	var args = Array.prototype.slice.apply(arguments);
	args // [1,2]
}

nana(1,2)

# 15、js可以用中文作为变量命名吗？为什么？

可以，因为 js 采用 unicode 字符集标准；

# 16、写个方法近似计算指定数组或对象占用内存的大小

	function sizeOfObject(obj)){
       if(object == null){
           return 0
       }
       var bytes = 0
       for (var key in obj) {
       		// hasOwnProperty 用来判断一个属性是定义在对象本身而不是继承自原型链
       		// 
           if (!Object.hasOwnProperty.call(obj, key)) {
               continue
           }
           // 重点是 sizeof
           bytes += sizeof(key)
           try {
               bytes += sizeof(obj[key])
           } catch (ex) {
               if (ex instanceof RangeError) {
                   bytes = 0
               }
           }
       }
       return bytes
   }
   function sizeOf(obj){
       var objType = typeof obj
       switch(objType){
           case 'string':
               return obj.length*3;
           case 'boolean'
               return 1;
           case 'number':
               return 8;
           case 'object':
               if(Array.isArray(obj)){
                   return obj.map(sizeOf).reduce(acc,curr)=>acc+curr,0)
               }else{
                   return sizeOfObject(obj)
               }
           default:
               return 0
       }
   }

# 17、写个方法判断数组对象中是否存在某个对象

let arr = [
	{a: 1, b:2},
	{c: 3, d:4},
	{e: 5, f:6}
]

let obj = {c: 3, d:4}

let hasobj = (arr, obj) => {
	arr.filter(e => (JSON.stringify(e) ===  JSON.stringify(obj)).length > 0 )
}

# 18、js的数组/对象在内存中分别是如何存储的？

https://github.com/haizlin/fe-interview/issues/2109

# 19、判断[].__proto__.__proto__ === {}.__proto__结果并解释为什么[代码]

[].__proto__ => array.prototype 
array.prototype.__proto__ => object.prototype 

{}.__proto__ => object.prototype

所以结果为 true

# 19、使用js生成1-10000的数组

<!-- console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6] -->


Array.from(new Array(10001).keys()).slice(1)

# 20、你是如何排查js内存泄漏的？

谷歌的devtool performance录制比较卡顿的代码，使用memory 来观察内存的增长

# 21、写一个方法获取指定数组中间的值（一个或者两个）

Math.floor
Math.ceil

# 22、写一个方法把分钟转化为时分，例如：150->02:30
整数部分和余数部分

# 23、用js怎么实现图片马赛克效果？

todo

# 24、ajax请求中为何会出现OPTIONS请求？

这种方式预检请求，主要是因为浏览器的同源策略

# 25、Math.ceil()、Math.round()、Math.floor()三者的区别是什么？

Math.ceil()向上
Math.floor() 向下
Math.round() 四舍五入

# 26、请写一个性能最好的深度克隆对象的方法

todo：

# 27、使用ajax请求真的不安全吗？为什么？

ajax 是发送 http 请求的一种方式，只不过浏览器给他加了一个同源策略

ajax本质上和https没什么区别

# 28、你有使用过pjax吗？它的原理是什么？

没用过，但我看面试题的时候知道他是 pushState + ajax = pjax

# 29、pjax和ajax的区别是什么？

pjax 是 一个jquery 插件

。。。

https://github.com/haizlin/fe-interview/issues/2188

# 30、实现一个ajax的队列请求

todo

# 31、根据元素ID遍历树形结构，查找到所有父元素ID [代码]

# 32、document.domain的作用是什么？它有什么限制？

可以实现基于同一个基础域名的两个不同域名实现跨域访问

（两个页面都设置domain，端口置为null来实现跨域）


# 33、举例说明Object.defineProperty会在什么情况下造成循环引用导致栈溢出？

这块不懂，先写下来,然后去找正确的写法

var person ={ 
	age: 1
}

Object.defineProperty(person, 'age', {
	get() {
		return this.age;
	},
	set(val) {
		this.age = val;
	}
})

person.age

# 34、微信的JSSDK都有哪些内容？如何接入？

开发者在网页上通过jssdk使用原生功能的工具包，，录制/播放语音，蓝牙，上传手机图片，拍照

使用：

1、绑定域名
2、script引入
3、config接口注入权限验证配置
4、ready接口处理成功验证
5、error处理失败验证

# 35、说说你对JS中暂性死区的理解，它有什么运用场景？

var v=1;
{
    v = 2;
    let v;
}

// Cannot access 'v' before initialization
//  初始化前无法访问“v”

# 36、 写一个方法，当给定数字位数不足8位时，则在左边补充0以补足8位数的方法

const n = 900;
const nStr = n.toString().padStart(8, '0');
const nstr = ('' + n).padStart(8, '0');

// 用y补充满x位
padStart(x, y)

# 37、如何提升JSON.stringify的性能？

第二个参数指定需要转换的属性，按需转换


第二个参数存在，并且第二个参数还是function的时候 

var students = [1,2,3] ; 
var json = JSON.stringify(students, function (key,value) { 
	return value.toString().toUpperCase()
}); 
alert(json);

# 38、使用ajax轮询接口有什么优缺点？

轮询优点： 简单
缺点：响应不及时，网络流量消耗大

# 39、innerHTML与outerHTML有什么区别？

innerHTML 对应id里面的元素

outerHTML 对应id 的元素 + 里面的元素

# 40、你认为es5的设计缺陷有哪些？

es6新增的就是es5的缺陷

# 41、解释下深度优先遍历和广度优先遍历的区别及如何实现

深度优先遍历： 栈，先进后出，空间小，时间长

广度优先遍历： 队列，先进先出，空间大，时间短，空间换时间


# 42、setTimeout的第三个参数有什么用？

第三个参数是函数传参

# 43、Geolocation.getCurrentPosition()用来做什么的？在什么浏览器不受兼容？

获取当前设备位置，安卓不支持

# 44、对`a == ('1'||'2'||'3') ? false : true`写法进行改进，写出你优化后的方法


![1,2,3],includes(+a);

or

!['1', '2', '3'].includes(a + '')

or

!{1: true, 2: true, 3: true}[a]

# 45、用js写一个方法检测浏览器是否支持css3的属性
var div = document.createElement('div');
console.log(div.style.transition);
支持，输出 ""
不支持，输出 undefined

# 46、在设置keyup监听事件后按F5刷新和按浏览器中刷新键刷新有什么区别？

刷新键刷新 不会触发 keyup事件

# 47、写一个方法获取图片的方向

todo
# 48、写一个方法获取图片的exif信息

todo

# 49、如何按回车自动提交表单

监听 keydown事件，并且判断按键代码为13，触发提交事件

# 50、AudioContext有什么应用场景？

AudioContext实例有 createAnalyzer()，可以实现音频可视化

gainNode 实现音量range的调整

# 51、写一个方法实现自定义右键菜单的功能

todo 
# 52、callee和caller的区别和作用是什么？

arguments.callee 指的是当前函数
function.caller 指的是调用当前函数的函数


作用：需要函数自调用，或者调用父函数的场景下

周级综合题目（50）

# 1、如何让(a==1 && a==2 && a==3)的值为true，把"=="换成"==="后还能为true吗？

(a==1 && a==2 && a==3) // false

let a = {
  value: 0,
  valueOf() {
      return ++this.value;
  }
}
a == 1 && a == 2 && a == 3 // true

简单来说就是==会触发valueOf()方法


把"=="换成"==="后还能为true吗？ 改为全等，上面输出为 false

let val = 0;
Reflect.defineProperty(window, 'a', {
  get: () => ++val,
});
(a===1 && a===2 && a===3)


# 2、举例说明css中颜色的表示方法有几种


    颜色单词: blue / lightblue / skyblue / transparent(透明)
    rgb(0-255, 0-255, 0-255) / rgba(0-255, 0-255, 0-255, 0-1)
    hsl色相: hsl(色调，饱和度，明度) hsla( 色调，饱和度，亮度，不透明度 ) (兼容性)
    十六进制: #000000- #FFFFFF ( #000 - #fff ) ( 0-9 a-f | [A-F] )


# 3、写出html提供的几种空格实体（5种以上）


&nbsp;

&ensp;

&emsp;

&thinsp;

# 4、最后如果技术面和HR面问你：你还有什么问题吗？你分别会问些什么？

技术面

技术面提问的话我会比较关注团队情况，技术栈和方向，以及目前的业务方向
团队人数，团队里面的工作、学习、生活氛围等。
目前的技术栈是什么，以及接下来的技术方向是怎样的，比如是否拓展多端能力等
业务方向，因为很多公司会有很多业务，有些甚至是跨行业的，比如一家教育公司可能有金融业务等，所以了解清楚业务对我来说也比较重要。

HR面

HR面提问的话我会比较关注切身的利益，毕竟你都到HR面了，谈谈待遇也无伤大雅的。

    五险一金是否缴纳，社保公积金缴纳比例，这块其实差别还蛮大的，按基础交和全额交，差距挺大。
    公司有哪些福利待遇？
    公司对新人会有培训吗？
    公司有完善的绩效考核系统和职级晋升体系吗？
    公司发薪日

以上是我目前会比较关注的，当然不同时期可能关注的点会不一样，比如大佬级别后期根本不关注待遇，人家就是去当合伙人的，那也没话说。

# 5、说说你对数据类型转换的理解是什么？类型转换的方法有哪些？

String to Number

Number(str)
+str

Number to String

num + ''
toString(num)

All to Boolean

Boolean(value)
!!value

Object to JSON

JSON.striingify(obj)

JSON to Object

json.parse(obj)

# 6、html直接输入多个空格为什么只能显示一个空格？

该行为由 CSS white-space 控制，其默认值 normal 的表现即为多个空格压缩成一个。

接上，设置为pre-wrap，pre等属性值，是可以解决这个问题的

# 7、请解释下什么是cookie隔离？为什么要隔离？如何隔离？

什么是cookie隔离：请求资源的时候不要让它带

为什么隔离：
如果静态文件都放在主域名下，那静态文件请求的时候都带有的 cookie 的数据提交给 server 的，非常浪费流量，所以不如隔离开。
这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。
同时这种方式不会将 cookie 传入 Web Server，也减少了 Web Server 对 cookie 的处理分析环节，
提高了 webserver 的 http 请求的解析速度。


做域名拆分：cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，

# 8、元素竖向的百分比设置是相对容器的高度吗？

父级非 auto 的 height 时，子级百分比的 height 才有效。
父级为不确定高度的时候，字元素为200%，父元素被撑开，父元素被撑开，字元素相对是不是就又变化了，这样会造成死循环，所以在css里，高度都是auto。
如果想要实现等比例的盒子模型，可以通过上面的padding-top,padding-bottom属性来实现。


# 9、HTML5如果不写<! DOCTYPE html> ，页面还会正常工作么？

页面添加了<! DOCTYPE html>说明该页面采用了W3C标准，如果不加则页面会根据浏览器自身的解析标准来解析，这可能会导致页面在不同的浏览器呈现出不同的效果。

# 10、你觉得你自己最大的优点和缺点分别是什么？能否举例说明一下？

这种题基本上就是先说一两个优点，然后再说一个两个缺点，但是，关键是后面要把缺点说成优点，怎么说呢，
比如你说自己的缺点是太执拗，举例，因为有的时候自己做需求前，总喜欢把需求原委弄清楚，各种准备工作做好了才开始做需求，做的过程中又喜欢把注释和文档都写的整整齐齐，但是这样偶尔会造成让自己需要加班才能完成需求。
基本上这样说就把一个缺点说成了几个优点：

    弄清楚需求，准备工作做好，说明做事有方法
    注释文档写清楚，说明代码风格好
    加班解决问题，说明能吃苦，愿意付出，对需求质量要求高

是不是套路。

# 11、举例子说说你对js隐式类型转换的理解

转字符串
let a=1;b=''+a;

转数字
console.log(1 + true); // 2

# 12、如何消除transition闪屏？

这个问题自己没有遇到过，或者说没有注意过这个问题，网上搜索了下答案，不知道有没有效果，下次遇到这个问题就可以往这方面排查和思考了：

.css { 
    -webkit-transform-style: preserve-3d; 
    -webkit-backface-visibility: hidden; 
    -webkit-perspective: 1000; 
} 

# 13、请写出唤醒拔打电话、发送邮件、发送短信的例子

<a href="tel:139xxxxxxxx">一键拨打号码</a>
<a href="mailto:webyxk666@163.co">一键发送邮件</a>
<a href="sms:139xxxxxxx">一键发送短信</a>

# 14、js动画和css动画有什么区别？

js 动画

    会进入函数调用栈，走完事件循环才会走渲染，如果过程中还有频繁获取 dom 状态恐怕是药丸。
    但相比 css 动画（不考虑 css 变量），js 动画可配置目标值或速率等，搭配 transition 挺不错。
    且 js 动画做暂停、反向和复杂的节奏都要更棒。
    再比如弧形运动轨迹，对 css 动画而言恐怕就比较难搞了。

css 动画

    非常简易的 hover active checked 等动效用 css 来写真是太方便了。
    对循环播放的动画，多数情况下也是 css 动画更佳。
    css 动画库的复用感觉会相较高很多。
    至于所谓的 gpu 加速或 will-change 很难讲哟，真的有效，但却不是很懂。

# 15、formData主要是用来做什么的？它的操作方法有哪些？

用于后端参数处理为multipart/form-data的情况下 ，现在通常用于上传文件


# 16、说说你对jpg、png、gif的理解，分别在什么场景下使用？有使用过webp吗？


jpg, 色彩复杂图片
png, 色彩简单图片
gif, 动图, 或者色彩极简的icon等
webp, 判断能使用webp的浏览器就是用webp

# 17、写个例子说明HTML5在移动端如何打开APP？

<a href="yourapp://page/xxx" />

Android 是利用 deeplink， iOS 是利用 URL Schemes

# 18、为什么浏览器会有兼容的问题呢？

因为各家浏览器厂家实现的W3C标准各不相同

这个除了厂商之间的兼容问题,还有浏览器版本之间的兼容问题

# 19、说说你对base64的理解，它的使用场景有哪些？

后端传送图片的时候，会先把图片转化为base64传输

    上传图片时 先将图片转化为base64 然后上传
    对于小质量的图片 我们可以转化为base64 在页面展示
    url 通过base64加密


# 20、请说说*{box-sizing: border-box;}的作用及好处有哪些？

这样不管border和padding的值是多少，盒子在页面中的占地大小不会发生改变


# 21、怎样禁止表单记住密码自动填充？

 autocomplete

# 22、本地git与远程仓库连接的方式有哪些？

第一种，本地新建文件夹 -> git init -> git add . -> git commit -m 'xxx' -> git remote add origin xxx -> git push -u origin master
第二种，直接git clone xxx（ssh链接）-> git add . -> git commit -m 'xxx' -> git push

# 23、Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？

get：

     1.  GET请求会将参数跟在URL后进行传递，也就是会在url中显示

     2.  GET请求有数据长度限制，一般在2000个字符，而POST没有。

     3. GET方式请求的数据会被浏览器缓存起来，POST没有

     4.  GET在某些情况下会有安全问题，POST没有。

     5. 在客户端使用get请求时,服务器端使用Request.QueryString来获取参数

     6. get请求参数会在url中显示，容易被他人窃取，post在请求体中，不会被窃取

post：

     1. POST请求是作为HTTP消息的实体内容发送给WEB服务器。

     2. 客户端使用post请求时,服务器端使用Request.Form来获取参数。 

     3. post一般用于修改服务器上的资源，对所发送的信息没有限制。
     4. post比get更加安全

     5. post需要设置请求头

# 24、你有使用过哪些栅格系统？都有什么区别呢？

bootstrap 12份
element-ui 24份

# 25、html的a标签属性rel='nofollow'有什么作用？

nofollow有两种用法：
1.用于meta元标签：
<meta name="robots" content="nofollow" />
告诉爬虫该页面上所有链接都无需追踪。
2.用于a标签：
<a href="login.aspx" rel="nofollow">登录</a>
告诉爬虫该页面无需追踪

# 26、说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法

todo

# 27、你对响应式设计的理解是什么？知道它基本的原理是吗？要想兼容低版本的IE怎么做呢？

理解：在不同系统，不同设备，不同尺寸的界面，有良好的用户体验，舒适的阅读体验，交互体验。
原理：根据不同设备尺寸，浏览器自动调整或通过样式调整，来保证用户体验。
兼容：Respond.js

# 28、 怎么在IE8及以下实现HTML5的兼容？

html5shiv.js

# 29、你知道二维码的原理是什么吗？要把android和ios的下载地址合成一个二维码怎么做呢？


二进制，白块表示“0”，黑块就是“1”。

# 30、写一个字符串重复的repeat函数

```js
var str='abcd';
function repeat(str,n){
    var type = typeof(str) === 'string';
    var result='';
    if(!type){
        return 'Type Error';
    }
    for(var i=0;i<n;i++){
        result += str;
    }
    return result;
}
repeat(str,2);//'abcdabcd'

```

# 31、怎么改变选中文本的文字颜色和背景色？


::selection {
background-color: #222;
color: white;
}

# 32、video和audio分别支持哪些格式？


    video: MP4、WebM、Ogg
    audio: MP3、Wav、Ogg
移动端里 iOS 还是 Android 都是支持 m3u8 的。

# 33、说说你对RESTful的理解

总结来说，RESTful是一种客户端与服务端交互时的WEB API的风格，面向资源，url不包含动词。

REST 指的是 Representational State Transfer

# 34、移动端点击事件为什么会有延迟？延迟多长时间？有哪些方法可以解决？

留时间间隔判断用户是否双击缩放， 300ms

解决办法：禁止缩放、设置默认视口宽度为设备宽度、设置css touch-action:none、fastclick.js

fastclick主要的原理就是，创建了一个div，并且执行了这个div的点击事件并且取消默认事件，再隐藏这个div

# 35、在实际编写css中你有遇到过哪些浏览器兼容性的问题？怎么解决的？

必用的三个工具

    PostCSS
    Autoprefixer
    Browserslist

# 36、favicon.ico有什么作用？怎么在页面中引用？常用尺寸有哪些？可以修改后缀名吗？


作用：标签页左上角图标
引用： <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico">
尺寸： 16x16 32x32 

# 37、说下你对互联网行业及前端技术发展趋势的看法

门槛越来越高，前端由百家争鸣到独尊儒术

# 38、写一个方法随机生成指定位数的字符串 

function getRandomString (length) {
  let str = Math.random().toString(36).substr(2)
  if (str.length >= length) {
    return str.substr(0, length)
  }
  str += getRandomString(length - str.length)
    return str
}

# 39、说说你对!important的理解，一般在哪些场景使用？

一般不用

# 40、在a标签上的四个伪类执行顺序是什么？

lvha

# 41、说说你做过让你觉得最满意的项目是什么？为什么？

永远都是下一个项目，每一个项目要拿出100%的信心和实力去完成，每做一个项目都会自我提升，所以是下一个项目就是最满意的

# 42、js中=、==、===三个的区别是什么？并说明它们各自的工作过程 

= 是 赋值操作符。执行顺序是从右到左， 比如 a = b = c，先执行 b = c，再执行 a = b。结合其它算术运算符就是复合赋值运算符比如： +=，-=，*=。a += b 等价于 a = a + b，其它复合赋值运算符类似。

== 在 js 中叫 不严格等于。和其它语言不一样，其它语言比如 java 中的 == 和 js 中的 === 更像。js 中的 == 也是用来比较左右操作数是否相等，但是它在比较时会自动进行类型转换，不严格。举个例子 '' == false 返回的结果是 true，左右都被转换成数字进行比较 Number('') 和 Number(false) 都返回 0，所以相等。

=== 在 js 中叫 严格等于。没什么可说的，就是严格比较左右两个操作数的相等性，0 === false 结果是 false。

建议：平时编码应该尽量使用 === 而不是 == 避免因为自动类型转换带来的逻辑 bug。

# 43、请你解释下什么是浮动和它的工作原理是什么？同时浮动会引起什么问题？


    什么是浮动：我们在做布局的时候用到的一种技术，通过浮动可以让元素左右浮动，然后通过margin调整位置
    工作原理：使元素脱离文档流，让元素可以左右浮动，直到遇到另一个浮动元素的边缘才停止。
    带来的问题：浮动元素会造成父级元素无法自动获取高度，导致父级塌陷，布局错乱。

# 44、移动web页面如何自动探测电话号码？

<meta name="format-detection" content="telephone=yes">

# 45、你对web服务器软件有了解吗？都使用过哪些？各有哪些优缺点呢？

用过nginx和apache，使用上其实没什么区别，nginx比apache的优点可能是反向代理吗？有时候遇到跨域问题可以本也启一个nginx代理转发挺方便的。还是就是nginx的配置很简单。

# 46、说说instanceof和typeof的实现原理并自己模拟实现一个instanceof


    instanceof
        返回 boolean
        通过调用 class 的 [Symbol.hasInstance] static method 来判断一个 object 是否是一个 class 的 instance
        缺省行为：判断 object 的 prototype chain 中是否有任意一个 prototype 与 class 的 prototype 相等
        polyfill:

        interface IConstructor<T> {
          new(...args: any[]): T
        }

        function isObject(o: any) {
          return (typeof o === 'object' || typeof o === 'function') && o !== null
        }

        function instanceOf<T>(obj: any, cls: IConstructor<T>): obj is T {
          if (isObject(cls)) {
            if (typeof cls[Symbol.hasInstance] === 'function')
              return cls[Symbol.hasInstance](obj)
            else if (typeof cls === 'function') {
              if (isObject(cls.prototype))
                return cls.prototype.isPrototypeOf(obj)
              else return false
            } else throw new TypeError('cls is not callable')
          } else throw new TypeError('cls is not an object')
        }

    typeof
        返回 'string', 'number', 'undefined', 'boolean', 'object', 'function', 'symbol'
        获取数据底层的类型标签。

# 47、用CSS画出一个任意角度的扇形，可以写多种实现的方法

todo

# 48、HTML5如何识别语音读出的内容和朗读指定的内容？

Web Speech API
Speech Synthesis API

# 49、你会抓包吗？都有用过哪些抓包工具？

会，Mac版 Charles；用来抓移动设备上请求记录；用重定向来解决前后端分离跨域问题

# 50、请快速答出此题的答案并解释：var x, y = 1; x + y = ?

nan

x只是声明了并未赋值，默认值为undefined, x+y ==> undefined + 1 = NaN


算法题（3）


