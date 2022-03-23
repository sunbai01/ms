js题目：（50）

# 1、js的函数有哪几种调用形式？

1、直接调用 fn()
2、自调用 (function())();
3、做为对象的属性调用 obj.fn()
4、构造函数调用new fn()

Obj.prototype.fn = function(args){}
const obj = new Obj()
obj.fn(args)

call和apply调用 fn.call() || fn.apply()
fn1.call(this, arg1,arg2,...)
fn2.apply(this, [arg1, arg2, ...])

fn3 = fn1.bind(this)
fn3(arg1, arg2, ...1)

# 2、用js写出死循环的方法有哪些？

设置一个永远达不到的结束条件 or 不设置结束条件

while (true) {}

for (let i = 0; i > 0; i++) {}

let i = 0;
do {
  i++;
} while (i > 0);

function fn(a) {
  console.log(a);
  fn(a);
}

# 3、分别写出数组的交集、并集、差集、补集这四个方法

const intersect = (a, b) => a.filter(i => b.includes(i)) // 交  记住*
const exclude = (a, b) => a.filter(i => !b.includes(i)) // 差
const union = (a, b) => exclude(a, b).concat(b) // 并
const unionAll = (a, b) => a.concat(b) // 重复并
const xor = (a, b) => exclude(a, b).concat(exclude(b, a)) // 补

# 4、要实现一个js的持续动画，你有什么比较好的方法？

requestAnimationFrame，浏览器专门为js动画提供的API。

# 5、写例子说明如何给li绑定事件（ul下有1000+个li）？

document.getElementsByTag('ul')[0].addEventListener('click', (e) => {
    e.target.style.color = 'red';
})


# 6、说说你理解的同步和异步的区别是什么？(为什么要有同步异步）

同步就是上一个任务结束下一个任务再开始，比如alert弹窗，你不点击确定他就会阻塞后边代码的执行；

异步就是按顺序开始（不可能同时开始）但是不一定按顺序结束，比如图片的加载就是走的异步。

# 7、不用第三方库，说说纯js怎么实现读取和导出excel？

将后端给的二进制数据包装成Blob对象，然后进行url导出；

const blob = new Blob([res], { type: 'application/msexcel;charset=UTF-8' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.click();

# 8、分别封装精确运算的加减乘除四个方法

todo

# 9、不依赖第三方库，说下如何使用js读取pdf？

1、如何读取并展示在页面上，用 <iframe src="file.pdf"> 就能显示。

2、如何读取并解析 PDF 格式，利用 HTML 技术渲染 PDF 文件内容？

写一个 pdf.js。

脚本思路是使用 1、FileReader API 读取文件二进制内容 2、根据 PDF 文件规范解析内容（PDF 是开源格式） 3、根据 PDF 文件描述的文档内容和布局，用 canvas 或者 DOM 展现出来。 P.S.(内嵌的 font 或图片可以提取二进制然后用 blob URL 搞定)

难点在于 如何用 DOM 实现 PDF 格式描述的布局 (不清楚 PDF 是如何描述布局的)。

# 10、准确说出`'1,2,3,4'.split()`的结果是什么（包括类型和值）？

split()参数如果为空会将整个字符串不进行分割直接作为数组的单个元素返回。

'1,2,3,4'.split() => ['1,2,3,4'] // 整体数组，元素类型为string

# 11、你是如何更好地处理Async/Await的异常的？

我一般直接在await后面的Promise对象上使用catch方法；不过更优雅的方式应该是对promise对象进行一层包装，通过返回值判断是否有异常，如：

// 对Promise对象进行一层包装，将异常值和成功结果一起返回
function wrapper(promise) {
  return promise
    .then(res => [null, res])
    .catch(err => [err, null])
}

function sleep(t) {
  return new Promise((resolve, reject) => {
    if (t < 1000) {
      reject('123')
    } else {
      setTimeout(() => {
        resolve()
      }, t)
    }
  })
}

async function delay() {
  let [err, res] = await wrapper(sleep(100))
  if (err) {
    console.log(`error: ${err}`)
  }
}

delay()

# 12、请说说json和jsonp的区别？


    json: 一种数据结构
    jsonp: 解决跨域的一种方式

    1、前端发get请求：http://xxx/xxx:8080?jsonpCallBack=_callback123 && jsonpId = 123
    2、把jsonpCallBack挂到window上 window._callback123 = () => { todo }
    3、后端构造js文件
    4、前端插入<script src="xxxx/xxx/123.js"></script>


# 13、[算法]写个方法，找出指定字符串中重复最多的字符及其长度

var str = 'sunbaihahahahah'

https://github.com/haizlin/fe-interview/issues/1003


# 14、说说你对作用域链的理解

全局环境下，函数嵌套函数，从最内函数找到全局，这个链式查找就是作用域链（可以用栈来描述）

# 15、[算法]写一个方法判断给定的字符串是否同态(isomorphic)

https://github.com/haizlin/fe-interview/issues/1011

# 16、请描述下js的原型和原型链的理解以及它们之间的关系

注意，原型链和作用域链不是一个东西

原型：每个 对象/数组/函数 都有 __proto__ 属性 称作 隐式原型，

其中函数还有 prototype 属性，称作 显式原型。该属性是一个指针，指向一个对象的 _proto_ ，这个对象我们称之为原型对象。

同时，__proto__ 和 prototype 都是一个对象，既然是对象，就表示他们也有一个 __proto__

构造函数的 __proto__

实例对象的隐式原型（__proto__）是一个对象，里面包含两个属性值：constructor 和 __proto__

1. p.__proto__.constructor 返回的结果为构造函数Person

2. p.__proto__.__proto__ .constructor 返回的结果为Object()函数

所以：1. p.__proto__.__proto__ = Object.prototype

https://baijiahao.baidu.com/s?id=1685587405779644513&wfr=spider&for=pc

实例对象的__proto__指向构造函数的prototype，从而实现继承。


# 17、请描述下什么是原型模式？它主要运用在哪些场景？

原型模式是一种设计模式，就是创建一个共享的原型实例，通过拷贝这些原型创建新的对象，也就是创建一个对象作为另一个对象的Prototype属性。

1.在需要一个类的大量对象的时候，使用原型模式是最佳选择，因为原型模式是在内存中对这个对象进行拷贝，要比直接new这个对象性能要好很多，在这种情况下，需要的对象越多，原型模式体现出的优点越明显。

2.如果一个对象的初始化需要很多其他对象的数据准备或其他资源的繁琐计算，那么可以使用原型模式。

3.当需要一个对象的大量公共信息，少量字段进行个性化设置的时候，也可以使用原型模式拷贝出现有对象的副本进行加工处理。

# 18、请详细描述AJAX的工作原理

客户端 和 服务端 进行 异步通信 的技术

基本原理是，通过XMLHttpRequest向服务器发送异步请求，获得服务器返回的数据，利用js更新页面。

 其核心功能在于XMLHttpRequest对象。

    创建XMLHttpRequest对象
    打开链接 （指定请求类型，需要请求数据在服务器的地址，是否异步i请求）// XMLHttpRequest 对象的 open() 
    向服务器发送请求（get类型直接发送请求，post类型需要设置请求头）// XMLHttpRequest 对象的 send() 
    接收服务器的响应数据（需根据XMLHttpRequest的readyState属性判定调用哪个回调函数）
    更新页面


# 19、请用js编写一个红绿灯程序

# 20、函数声明与函数表达式有什么区别？

提升优先级不同,函数表达式必须赋值完了才能被调用

var getName = function(){
  console.log(4)
}

function getName() {
  console.log(5)
}

getName()

# 21、【深度】用js写一个事件侦听器的方法

发布订阅者模式

# 22、【算法】写一个把数字转成中文的方法，例如：101转成一百零一


# 23、【深度】分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？

防抖节流

# 24、如何使用js来截图？怎样截可见区域和整个页面？

可以基于 html2canvas 和 canvas2image 两个第三方类实现截图。

如果打算截取整个页面 可以直接设定

html2canvas(document.body).then(function (canvas) {
        document.body.appendChild(canvas);
      });

如果打算截取可见区域 额外设置一下宽高即可

width: document.documentElement.clientWidth,
height: document.documentElement.clientHeight,
y: document.documentElement.scrollTop


# 25、document.write和innerHTML有什么区别？


document.write() 将需要展示的内容添加到 HTML 文档流中。对于一个已经加载完成的页面，document.write() 会重新绘制整个页面。自然其性能就不是很好。

innerHTML 是替换某个元素中的内容，简单地认为是 <div></div> 标签中间的内容。也即只会影响到所指定的元素。

# 26、使用正则去掉html中标签与标签之间的空格

htmlStr.replace(/>\s+</g, '><')

+ 表示匹配 1 到无穷

# 27、写一个方法把多维数组降维

const arr = [1, 2, [3, 4, [5, 6]]]
arr.flat(Infinity)


let arr = [1, 2, {}, 3, [4, {}, 5], [6, 7, [8, null, 9]]];
//递归
function flat (arr) {
  let ret = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof (Array)) {
      ret = ret.concat(flat(arr[i]))
    }
    else {
      ret.push(arr[i])
    }
  }
  return ret
}
console.log(flat(arr))

# 28、如何终止WebWork？

 work.terminate()

# 29、说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？

编码方法,不是加密方法,前端无法对数据进行加密,只能编码
它们是已经被弃用的方法，不建议使用。

1、如果只是编码字符串，不和URL有半毛钱关系，那么用escape，而且这个方法一般不会用到。
2、如果你需要编码整个URL，然后需要使用这个URL，那么用encodeURI。
3、当你需要编码URL中的参数的时候，那么encodeURIComponent是最好方法。


# 30、能否正确获取本地上传的文件路径？如果可以怎么做？如果不可以解释下为什么？

无法获取，客户端js脚本没有文件访问权限,只能由浏览器代为操作,可以通过BOM-api获取由浏览器转义的文件路径

<input type="file" id="file">

file.addEventListener('change', () => {
  var reader = new FileReader();
  reader.readAsDataURL(file.files[0]);
  reader.onload = function (e) {
    console.log(e.target.result);//也许是base64数据  也许是虚拟路径  取决于浏览器的实现
  }
})

# 31、分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果

+'a' => NaN
banana

考点：+'a' = Number('a')

# 32、如何实现文件的拖动上传？

利用 HTML5 的 drag & drop API 来实现，必须要设置 dragover 事件，不然不会触发 drop 事件

// dragover 事件
dragUpload.addEventListener('dragover', (e) => {
  e.preventDefault();
  // 必须要有 dragover 同时需要 preventDefault，否则不会触发 drop 事件
});

// drop 事件 获取文件
dragUpload.addEventListener('drop', (e) => {
  e.preventDefault();
  // 获取到拖拽进来的文件
  const {dataTransfer:{files = {}} = {}} = e || {};
  // console.log(e.dataTransfer.files);
  console.log('dropped: ', files);
  // 获取到文件后就可以做上传的操作了
});

# 33、你有用过webRTC吗？它有什么运用场景？

WebRTC代表“Web实时通信”。这基本上允许在浏览器中进行语音、视频聊天和P2P共享（实时通信）

用WebRTC来做视频直播

这个场景的原理是什么呢？

一个实现了WebRTC相关协议的客户端。比如Chrome浏览器
架设一个类似MCU系统的服务器
第一步，直播的客户端，比如Chrome浏览器，通过WebRTC相关的媒体API获取图像及声音信源，再用WebRTC中的通信API将图像和声音数据发送到MCU服务器。
第二步，MCU服务器根据需求对图像和声音数据进行必要的处理，比如压缩、混音等。
第三步，需要看直播的用户，通过他们的Chrome浏览器，链接上MCU服务器，并收取服务器转发来的图像和声音流。

# 34、保护js代码的方式有哪些？分别说说他们的原理是什么？

压缩：
通过替换变量名等对代码进行压缩，但是不会改变代码结构。主要目的是压缩体积。


混淆：
降低代码的可读性，可以通过增加无用代码，删除注释缩进，对代码进行转义。

加密：
使用加密插件对代码进行可逆的加密操作，后续可通过使用密钥对密文进行解密。

# 35、JavaScript有几种类型值？能否画出它们的内存图？

你根本不需要去探究 JS 中的变量是保存在堆里还是栈里，非要说那就是全部都是在堆里

# 36、说说你对js包装对象的理解

包装对象是用来处理基础类型数据的对象，使得字符串、布尔值等变量可以直接调用方法，在对字符串、布尔值进行方法调用的时候，js引擎会自动创建一个包装对象，将操作的值作为原始值，这一过程是隐式的。但是数字类型除外，想要调用数字对象的方法必须显示创建一个Number对象，否则报类型错误。 例如 "a".slice(0) 可以，但是 10.toString(2) 不可以，应该写成
new Number(10).toString(2)

# 37、举例说明js关闭当前窗口有哪些方法？

window.close 只能关闭由 window.open 方法打开的页面。最好先执行一下 window.open('', '_self') 后再执行 window.close


# 38、如何实现一个全屏的功能？

// 针对某一元素进行全屏，其他元素都被屏蔽。有点类似聚焦的效果。
document.querySelector(".js-issue-title").requestFullscreen();
// 全屏聚焦document元素
document.documentElement.requestFullscreen();

# 39、JSON.stringify有什么局限性和哪些技巧？

JSON.stringify(undefined) // undefined

JSON.stringify(function sunbai() {})  // undefined

JSON.stringify(Symbol) // undefined

JSON.stringify(NaN) // 'null'

JSON.stringify(Infinity) // 'null'

# 40、原生的字符串操作方法有哪些？请列举并描述其功能

 1、string.split('')字符串转化成数组；
 'sunbai'.split('') => ['s', 'u', 'n', 'b', 'a', 'i']

 2、string.includes(val)包含某个字符串，返回布尔值；

 'sunbai'.includes('s') // true
 'sunbai'.includes('g') // false

 3、string.repeat(num);
 'sunbai'.repeat(2) // 'sunbaisunbai'

 4、String.concat() 连接两个字符串
 'sunbai'.concat('haha') // 'sunbaihaha'


 5、String.substr(startIndex,length) 截取部分字符串，第一个参数是开始index，第二个是截取长度。
 
 6、String.substring(startIndex,endIndex) 截取部分字符串，第一个是开始索引，第二个是结束索引。

 7、String.toUpperCase() String.toLowerCase() 转为大小写
 
 8、String.indexOf(searchString) 找对应的索引

 9、 'sunbai'.slice(3, 5) // ba

 'sunbai'.slice(3, -1) // ba

 10、replace | match

# 41、写一个方法，将字符串中的单词倒转后输出，如：my love -> ym evol

reverse() 是数组使用的方法

# 42、请写出如下代码运行的结果并解释为什么？

```js
 var type = 'images';
    var size = {width: 800, height: 600};
    var format = ['jpg', 'png'];

    function change(type, size, format){
        type = 'video';
        // 同样对 change 内的 size 进行赋值，这里赋的是 size 的引用地址，实际与全局的 size 指向同一个对象
        // 如果这里是size.width = 50,外面的值也就会改
        size = {width: 1024, height: 768};
        // 引用地址赋值，会改原数组
        format.push('map');
    }

    change(type, size, format);

    console.log(type, size, format);
```

我的答案：'video'，{width: 1024, height: 768}，['jpg', 'png'， 'map']

正确答案：'images'， {width: 800, height: 600}，['jpg', 'png']

# 43、请解释下NaN === NaN的结果

false 

任何涉及 NaN 的操作都会返回 NaN；NaN 不等于任何值，包括它自己。 （js高程）

由于NaN 是not a number的缩写

Number('A') //NaN

# 44、[算法]用js实现小写金额转大写的方法

# 45、用js实现页面局部打印和预览原理是什么呢？同时在IE上有什么不同？

todo

# 46、请描述下ajax的请求都有哪些步骤？

1.创建XMLHttpRequest
let xhr=new XMLHttpRequest;
2.连接服务器
xhr.open("get","goods.json",true)
true代表异步，false代表同步。goods.json代表请求的路径
3.向服务器发送请求
xhr.send()
4.接受服务器响应的数据

# 47、说下你对柯里化函数(currying)的理解，它有什么运用场景？

- 1、函数接收多个参数的函数转化为接收单一参数的
- 2、返回一个函数

有什么用？

todo

# 48、【html】说说用原生js实现封装一个选项卡的功能

todo

# 49、写一个洗扑克牌的方法

随机交换
打乱下标

# 50、请描述下函数的执行过程

首先会产生一个函数执行环境，然后js引擎会把这个执行环境放到函数调用栈中。
函数开始执行，根据代码顺序执行，遇到变量赋值时， 给对应的变量赋值。
函数执行完毕后，局部活动对象就会被销毁，内存中仅保存全局作用域。

# 51、自己实现数组的 `map`、`filter`、`find` 方法

- map

Array.prototype.newMap = function(fn, context) {
    let newArr = new Array;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        newArr.push(fn.call(context, this[i], i, this))
    }
    return newArr
}

- find

Array.prototype.newFind = function(fn, context) {
    let str;
    if(typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if(fn.call(context, this[i], i, this)) {str = this[i];break; }
    }
    return str
}

- filter

Array.prototype.newfilter = function (fn, context) {
    let newArr = new Array;
    if (typeof fn !== "function") {
        throw new TypeError(fn + "is not a function");
    }
    var context = arguments[1];
    for (var i = 0; i < this.length; i++) {
        if (fn.call(context, this[i], i, this)) { newArr.push(this[i]) }
    }
    return newArr
}

# 52、什么是词法分析？请描述下js词法分析的过程？

js 在执行前要编译

词法分析在编译过程中做了什么

分析变量声明，分析函数声明，（前两个有提升）分析函数中参数


# 53、 原生Math的方法有哪些？请列举并描述其功能

Math.abs(num) // num绝对值
Math.ceil(num) // num向上取整
Math.floor(num) // num向下取整
Math.max(num1, num2 ...) // 取较大值
Math.min(num1, num2 ...) // 取较小值
Math.pow(num1, num2) // num1的num2次幂
Math.random() // 0-1间伪随机数
Math.sqrt(num) // num的平方根
Math.round(num)//四舍五入


# 54、请举例说明动态操作DOM的方法有哪些？

创建一个元素

createElement()
向元素末尾添加一个子节点

appendChild()
将新的元素插入到指定元素的前面

insertBefore(new,old);
删除一个子节点
removeChild() //接收一个节点类型的；参数是要删除的这个元素；
替换子节点

replaceChild(new,old); //用新的元素替换原有的元素
克隆元素

cloneChild()

html题目：（25）

# 1、你有了解HTML5的地理定位吗？怎么使用？

navigator.geolocation.getCurrentPosition(success, error, options) 

# 2、HTML5中新添加的表单属性有哪些？

新增 form 属性

autocomplete
novalidate


新增 input 属性

新类型：color date email month number range search tel time week

新属性：autocomplete  autofocus list placeholder

# 3、渐进式渲染是什么？

渐进式渲染是做浏览器兼容时，先兼容最低版本，保证基本功能，再在高级浏览器上做优化

用来提高网页性能，比如：图片懒加载

# 4、说说你对浏览器的关键渲染路径的理解 

拿到一个html后，根据尖括号识别标签

dom
cssom（css是阻塞的渲染，如果一点一点渲染，因为后面样式会覆盖前面样式页面就会有一个变化，所以需要）
render tree （dom + cssom形成的一个树）
layout （布局）
print（将layout翻译成像素点）


# 5、你了解HTML5的download属性吗？

自定义下载文件的名称

使用：
<a href="/wordpress/wp-content/themes/default/images/index_logo.gif" download="_5332_">下载</a>

download 属性也可以设置一个值来规定下载文件的名称。所允许的值没有限制，浏览器将自动检测正确的文件扩展名并添加到文件 (.img, .pdf, .txt, .html, 等等)。

# 6、 使用a标签的download属性下载文件会有跨域问题吗？如何解决？

有跨域问题，a标签的 download 属性只对同源文件有效。所以我们要先将url转化为blob格式，然后再下载，
```js
/**
   ** 将图片 url 转换为 blob 格式
   ** @param httpUrl: 图片链接，如 https://cdn.aaa.com/bbb.jpg
   */
  private async urlToBlob(httpUrl) {
    const res: Response = await fetch(httpUrl);
    const blob: Blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    return blobUrl;
  }

  /**
   ** 下载图片到本地
   ** @param blobUrl： blob 格式的图片文件
   ** @param name: 图片名称
   */
  private download(blobUrl, name) {
    // 创建虚拟a标签
    const eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.style.display = 'none';
    eleLink.href = blobUrl;
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
    URL.revokeObjectURL(blobUrl);
  }
  ```

# 7、 HTML5相对于HTML4有哪些优势？

标签更语义
功能更强 - 新增各种表单属性
书写更简洁

# 8、  有用过WebGL吗？说说你对它的理解

webGL（web图形库）是一种 javascript API，用于在任何兼容的web浏览器中做2d或者3d图形，也无需使用插件，可以在h5中使用，

# 9、src、href、link的区别是什么？

src用于替代这个元素，而href用于建立这个标签与外部资源之间的关系。

a => href
img，js => src
<link href="style.css" rel="stylesheet" /> => link


# 10、有用过 HTML5 的 webSQL 和 IndexedDB 吗？说说你对它们的理解

webSQL 和 IndexedDB 都是一种客户端的数据存储方案，webSQL已经废弃。
IndexedDB 的特点是：存储空间大，使用异步存储数据模式，存放键值对型数据，支持数据库事务等，同时还可以存储多种类型数据，包括 js 对象类型。可以用在前端缓存大量数据。

# 11、有使用过HTML5的拖放API吗？说说你对它的理解


图片默认自带拖拽功能，非图片元素设置draggable属性为true即可拖拽。


    ondragstart 拖拽的一瞬间触发
    ondrag 拖拽期间连续触发
    ondragend 拖拽结束触发


$el.addEventListener('dragover',function(e) {
    // 要阻止浏览器默认行为，不然触发不了了下面的drop事件
    e.preventDefault();
})

$el.addEventListener('drop', function (e) {
    console.log("在我里面松开鼠标就会触发");
    var data = e.dataTransfer.getData("box");
    e.target.appendChild(document.getElementsByClassName(data)[0]);
})


    ondragenter 进入目标元素触发（鼠标光标进入）
    ondragover 进入离开目标元素连续触发
    ondragleave 离开目标元素触发
    ondrop 在目标元素上释放鼠标触发


    默认状态下，一个元素不能放在另一个元素上面，需要在ondragover上阻止默认事件。

# 12、什么是html的字符实体？版权符号代码怎么写？

&nbsp;  空格

&trade; 商标™

&copy; 版权©

&reg; 已注册®

# 13、 写出html提供的几种空格实体（5种以上）

&nbsp; 不换行空格，受字体影响明显

&ensp;  半角空格，如16px字体中就是8px

&emsp; 全角空格，如16px字体中就是16px

&thinsp; 窄空格，em之六分之一宽。

&zwnj;

# 14、html直接输入多个空格为什么只能显示一个空格？

该行为由 CSS white-space 控制，其默认值 normal 的表现即为多个空格压缩成一个。


设置为 white-space：pre-wrap，pre等属性值，是可以解决这个问题的

# 15、HTML5如果不写<! DOCTYPE html> ，页面还会正常工作么？


页面添加了<! DOCTYPE html>说明该页面采用了W3C标准，如果不加则页面会根据浏览器自身的解析标准来解析，这可能会导致页面在不同的浏览器呈现出不同的效果。

# 16、请写出唤醒拔打电话、发送邮件、发送短信的例子

<a href="tel:110">拨号</a>
<a href="mailto:sunbai@163.com">发邮件</a>
<a href="sms:110">发短信</a>

# 17、写个例子说明HTML5在移动端如何打开APP？

<a href="zhihu://page/xxx">打开知乎</a>

Android 是利用 deeplink， iOS 是利用 URL Schemes

# 18、怎样禁止表单记住密码自动填充？ 

todo：
https://www.cnblogs.com/chenqingbin/p/11051192.html


# 19、html的a标签属性rel='nofollow'有什么作用？

1.用于meta元标签：
<meta name="robots" content="nofollow" />
告诉爬虫该页面上所有链接都无需追踪。
2.用于a标签：
<a href="login.aspx" rel="nofollow">登录</a>
告诉爬虫该链接无需追踪

# 20、怎么在 IE8 及以下实现 HTML5 的兼容？

html5shiv.js 插件

# 21、video和audio分别支持哪些格式？


    video: MP4（不是只要是MP4格式就一定能播放的。mp4也要看里面的编码，看浏览器的支持情况）、WebM、Ogg
    
    audio: MP3、Wav、Ogg

    移动端是支持 m3u8 的。

# 22、favicon.ico有什么作用？怎么在页面中引用？常用尺寸有哪些？可以修改后缀名吗？

作用：标签页左上角图标
引用：webpack or index.html 中 <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
尺寸： 16x16 32x32 

webpack 怎么打包 favicon ？

如果你是用 html-webpack-plugins 来处理 html的话，这个插件已经提供了 favicon ，你只要写好 favicon 所在的路径就可以了， 如

const htmlPlugin = new HtmlWebpackPlugin({
    favicon: path.resolve(publicDir, './imgs/favicon.ico')
});
pluginsConfig.push(htmlPlugin);

# 23、在a标签上的四个伪类执行顺序是什么？

    link
    visited
    hover
    active

lv hao

# 24、移动web页面如何自动探测电话号码？

<meta name="format-detection" content="telephone=yes">


# 25、HTML5 如何识别语音读出的内容和朗读指定的内容？

Web Speech API  识别语音读出的内容
Speech Synthesis API 朗读指定内容

css题目：（13）

# 1、圣杯布局和双飞翼布局的理解和区别，并用代码实现

两边顶宽，中间自适应的三栏布局

todo


# 2、css3新特性


    border-radius

    box-shadow

    text-shadow


    transform


    transition

    animation

# 3、在页面上隐藏元素的方法有哪些？

占位:

visibility：hidden

opacity: 0

margin-left: -100%

transform: scale(0)


不占位:

display： none
width: 0; height: 0;


仅对块内文本元素

text-indent: -9999px;

font-size: 0;

# 4、 CSS选择器有哪些？哪些属性可以继承？

选择器：id选择器、类选择器、伪类选择器、属性选择器、元素选择器、后代选择器、子选择器、通用兄弟选择器

可被继承的属性：font-、text-、line-height、color等。

# 5、 CSS3新增伪类有哪些并简要描述

伪类：

伪元素：：

:first-child / :last-child 表示子元素结构关系的

:nth-child() / nth-last-child() 用来控制奇数、偶数行的（控制表单奇数、偶数行的样式）

:root html 根元素

:not() 否定选择器，用的比较多

:only-child 只有一个子元素时才会生效

# 6、用css创建一个三角形，并简述原理

      要实现三角形只需将其中几个边background设置为transparent

      width: 0;
      height: 0;
      margin: 100px auto;
      border-top: 50px solid transparent;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-bottom: 50px solid red;

# 7、简述你对BFC规范的理解

例子

# 8、清除浮动的方式有哪些及优缺点？

父元素只包含浮动元素，那么它的高度就会塌缩为零（前提就是你们没有设置高度（height）属性，或者设置了为auto，就会出现这种情况，如果父元素不包含任何的可见背景，这个问题会很难被注意到。

1、外部也设置float，可能需要调整整个页面布局。
2、在外部盒子内最下方添上带clear属性的空盒子 <div style="clear:both;"></div>，引入了冗余元素
3、外盒子 用overflow:hidden，有可能造成溢出元素不可见，影响展示效果。

现在Flex布局，标准文档流以及 定位 已经可以满足大部分的布局需求了。

# 9、简述下你理解的优雅降级和渐进增强

优雅降级：系统化做一个东西，再查漏补缺

渐进增强：先做基础，再迭代更新

# 10、对比下px、em、rem有什么不同？

px绝对单位
em相对自身有一个比例
rem相对html有一个比例

# 11、css常用的布局方式有哪些？

文档流布局: 最基本的布局，就是顺着 html 像流水一样流下来
绝对定位: 利用 position: absolute 进行绝对定位的布局
float 布局: 最初用来解决多栏布局的问题。比如圣杯、双飞燕的布局都可以用 float 来实现
珊格布局: bootstrap 用的布局，把页面分为 24 分，通过 row 和 col 进行布局
flex 布局: css3 的布局可以非常灵活地进行布局和排版
grid 布局: 网格布局

# 12、::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？


在元素前面（::before）和后面（::after）加内容

.demo:after{
  animation: dot 1.6s linear both;
}
@keyframe dot{
  0%{ content: "." }
  33%{ content: ".." }
  66%{ content: "..." }
  100%{ content: "." }
}



    :表示伪类，是一种样式，比如:hover, :active等
    ::表示伪元素，是具体的内容，比如::before是在元素前面插入内容，::after则是在元素后面插入内容，不过需要content配合，并且插入的内容是inline的。
    :before和:after其实还是表示伪元素，在css3中已经修订为::before和::after了，只是为了能兼容IE浏览器，所以也可以表示成:before和:after

# 13、 css的属性content有什么作用呢？有哪些场景可以用到？

content属性与 ::before 及 ::after 伪元素配合使用生成文本内容

使用：

a::after{content: 'sunbai'}

# 14、position:fixed;在ios下无效该怎么办？
https://github.com/haizlin/fe-interview/issues/43

# 15、style标签写在body前和body后的区别是什么？

浏览器在渲染页面时 DOM 和 CSSOM 是并行的，然后两者结合形成 Render Tree 显示页面。

style 写在 body 前不会对 DOM 的渲染进行阻塞；而写在 body 内会对 DOM 渲染进行阻塞。会产生 FOUC（Flash of Unstyled Content) 的现象，既一瞬间的白屏或者样式的突然变化（原因是 Render Tree 重新生成了）。

# 16、请描述margin边界叠加是什么及解决方案

<style>
  .b1 {
    width: 100px;
    height: 100px;
    margin-bottom: 30px;
  }
  // 最终两个 div 的 margin 为 40px，以最大的值为准。
  .b2 {
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
  }
</style>

<div class="b1"></div>
<div class="b2"></div>

所以可以触发 BFC 来解决。

为父元素添加oveflow:hidden

# 17、解释下 CSS sprites的原理和优缺点分别是什么？

优点&解决的问题

    1、hover效果，如果是多个图片，网络正常的情况下首次会闪烁一下。如果是断网情况下，就没图片了。sprites 就很好的解决了这个问题（第一次就加载好了）。
    2、合并了请求数
    3、制作帧动画方便


    1、位置不好控制，有时候容易露底。。比如说3030的按钮，图片只有1212保不齐就漏出其他图片了。
    2、合成时候比较费时（有工具代替）
    3、位置计算费时（有工具代替）
    4、更新一部分的时候，需要重新加载整个图片，缓存失效。


# 18、什么是FOUC？你是如何避免FOUC的？

简单来说就是使用当文档结构表（HTML）先于样式表（CSS）渲染，这时候渲染出来的是没有样式的页面，然后当浏览器解析到样式表的时候，又结合样式表重新渲染了一遍文档，这时候页面就添加了样式，而前后两次的页面变换会出现一瞬间的闪烁。

 原因是样式表的晚于 HTML 加载导致页面重新进行绘制。

解决办法也很简单，就是确保样式表最先渲染即可，比如css样式表添加到head标签中。

# 19、要让Chrome支持小于12px的文字怎么做？

.px12 {
   font-size: 12px;
}
.px9 {
    font-size: 9px;
    display: inline-block;
    -webkit-transform: scale(0.75);        /* 12*0.75=9 */
}
.px6 {
    font-size: 6px;
    display: block;
    -webkit-transform: scale(0.5);        /* 12*0.5=6 */
    float: left;
}

todo:基准线位置


汇总题目：（25）


# 1、说下line-height三种赋值方式有何区别？

div{
  line-height: 24px;
  line-height: 1.5;
  line-height: 1.5em;
  line-height: 150%;
}

line-height 是可以被继承的，因此会影响内部子元素的 line-height

带有单位的 line-height 会被计算成 px 后继承。子元素的 line-height = 父元素的 line-height * font-size （如果是 px 了就直接继承）

而不带单位的 line-height 被继承的是倍数，子元素的 line-height = 子元素的 font-size * 继承的倍数

# 2、说说你对HTML元素的显示优先级的理解

帧元素（frameset) 优先级最高 >>> 表单元素 > 非表单元素，即 input type="radio" 之类的表单控件 > 普通的如 a,div 等元素。

从有窗口和无窗口元素来分，有窗口元素 > 无窗口元素。有窗口元素如 Select 元素、Object 元素。

z-index 属性也可以改变显示优先级，但只对同种类型的元素才有效。


# 3、你对全栈工程师的理解是什么？

首先，我对于全栈工程师的要求很高。

    独立完成页面
    独立完成接口
    超强学习能力

说说，目前我看到的全栈工程师

    会写页面
    会写接口
    广度有，深度没有


# 4、说说你对this的理解

s 中有两个重要概念：作用域和原型链

我个人感觉
作用域对应函数式开发，闭包是主要工具
原型链对应对象式开发，this 是主要工具，把一些操作封装在一个工具包上，然后用 this 来调用

# 5、用CSS绘制一个三角形

.triangle:after{
    content: '';
    border: 35px solid transparent;
    border-bottom-color: lightgreen;
}

# 6、html和html5有什么区别呢？

html一般指的是H5之前的版本

    H5定义html标签是简化了许多
    增加了许多语义化的标签，从而更利于seo
    增加了许多新功能，如canvas、video、SVG


# 7、浏览器是怎样判断元素是否和某个CSS选择器匹配？

先产生一个元素集合，然后从后往前判断；


# 8、Standards模式和Quirks模式有什么区别？
怪异盒模型：元素内容宽度=width-margin2-border2-padding2?

其实我建议这样说
标准盒模型：元素内容宽度=width，元素实际宽度=margin2+border2+padding2+width
怪异盒模型：元素内容宽度=width-border2-padding2，元素实际宽度=margin2+border2+padding2+width=margin2+width

# 9、谈一谈你知道的前端性能优化方案有哪些？

缓存

http缓存 设置好cache-control expires Last-modified；
前端缓存 对于一些页面今天配置直接存储到localStorage中；对于长期不发生改变的代码可以直接通过server-work存储到本地；
优化加载

webpack 开启 tree-shaking 减少代码体积
通过preload prefetch优化加载资源的时间
import('').then()异步加载资源
图片小于30k的图片直接做成base64；
对于首屏的样式可以直接内嵌到html中；
服务端渲染

SSR
对于首页可以直接通过node jade模板引擎输出，其他页面继续使用前端渲染，优化首屏、SEO

# 10、请你解释一个为什么10.toFixed(10)会报错？

之所以会报错，是因为在这里的 . 发生了歧义，它既可以理解为小数点，也可以理解为对方法的调用。

# 11、 使用flex实现三栏布局，两边固定，中间自适应

flex：0 0 auto;
flex: 1 1 auto;

# 12、用一个div模拟textarea的实现

1、可编辑
2、多行文本折行
3、自定义滚动条

  <div class="edit" contenteditable="true">
    这里是可以编辑的内容，配合容器的 overflow ，多行截断，自定义滚动条，简直好用的不要不要的
  </div>

  resize: both;
  overflow:auto;

# 13、对于前端安全，你了解多少？说说你对XSS和CSRF的理解

XSS攻击全称跨站脚本攻击,一般有sql注入，js脚本注入

跨站点请求伪造（Cross-site request forgery） csrf， 例子： 偷信息伪造请求
小明登录银行网站，没有退出，打开了危险网站，危险网站偷偷请求银行接口，伪造是小明在请求。

# 14、写出主流浏览器内核私有属性的css前缀

Chrome：Blink内核   -webkit-
 Safari：WebKit内核       -webkit-
 Firefox ：Gecko内核      -moz-
 IE：Trident内核           -ms-
 Opera：Presto内核         -o-

# 15、HTML与XHTML二者有不同 



    XHTML 标签必须关闭
    XHTML所有标签必须小写
    XHTML标签必须正确嵌套

# 16、如果让你快速使用一门你不熟悉的新技术，你该怎么办？

1、一定先去官网查看官方文档和API，其他别人写的教程无视。
2、下载官方Demo运行学习。
3、自己练习1~2个Demo，涵盖常用的重要的API的使用，实践学习理解，有问题就谷歌。
4、运用到项目中。

# 17、找到字符串中最长的单词，并返回它的长度

会了

# 18、不使用border画出1px高的线，在不同浏览器的标准和怪异模式下都能保持效果一样 

既然是css那么就用css的方法啊！
.box::after{ 
  content: ""; 
  display: block; 
  width: 100px; 
  height: 1px; 
  background-color: black; 
}

# 19、html5哪些标签可以优化SEO?

meta
title
header
footer
section
article
nav

# 20、你知道网页三剑客指的是什么吗？你有用过Dreamwear吗？

三剑客还是指 Dreamweaver，Photoshop，Flash 吧。
大学时候做的网页，甚至是做的外包项目都是 Dreamweaver 做的，当时觉得是神器，现在来看，只能是一种谈资了。

# 21、说说你对eval的理解


eval() 相当于一个小型的js解析器，接受一个字符串，可以把字符串解析成js代码并执行，所以有很有大的安全隐患，并且写进去的代码都是字符串，不利于维护，使用它执行代码性能也会大大折扣，所以正常情况下不建议使用。


eval()接收一字符串，他会执行其中的JS代码
不安全，因为是将字符串解析成JS代码并执行

 var obj = eval("("+json2+")");

# 22、实现单行文本居中和多行文本左对齐并超出显示"..."

https://github.com/haizlin/fe-interview/issues/141

# 23、说说你对cookie和session的理解

由于 http 是无状态的，服务端没法记录客户端的状态。因此 cookie 和 session 本身就是为了记录客户端的状态。

只是 cookie 是存放在客户端而 session 是记录在服务端。cookie 可以在客户端生成也可以由服务器生成传给客户端，通过 name=value 的形式存储数据。

一般 cookie 会记录一个由服务端生成的 token，session 同样会记录这个 token。服务端就可以通过 token 来鉴别身份。

# 24、公钥加密和私钥加密是什么？

私钥加密，也称对称加密，使用一个密钥对内容进行加密和解密，加密算法可以是公开的，但密钥必须保密，常见的私钥加密算法有：DES、AES、RC5

公钥加密，也称非对称加密，使用两个密钥，一个公开密钥用来加密，另一个私有密钥用来解密，基于其特性，可以用作数字签名的功能（如 HTTPS），常见的公钥加密算法有：RSA

# 25、说说你对模块化的理解

代码抽离重用，模块化开发，多人合作。早期的IIFE方式，AMD,CMD，到今天的export/import，node端的commonjs


算法题：

1、
2、

todo: 


vue双向绑定原理






















