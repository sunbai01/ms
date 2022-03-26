js题目：（50）

# 1、阻止事件的默认行为有哪些？说说它们之间的区别是什么？

event.stopPropagation  阻止冒泡

event.cancelBubble=true  IE浏览器


阻止默认事件：return false;
使用addEventListener绑定事件时不能用return false
event.preventDefault IE9以下不兼容
event.returnValue = false; 兼容IE

# 2、【算法】请使用原生的js实现斐波那契数列 


# 3、【算法】使用js实现摩斯密码的加密和解密

# 4、请为什么说js是单线程，而不是多线程呢？

因此即便是 HTML5 提出的 Web Worker 也不允许操作 DOM。

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。

# 5、实现异步编程有哪些方式？推荐用哪种？

回调函数: 最传统的异步处理，下一步的操作交给前一步来控制。当要处理的内容较多时，会出现回调地狱。代码会比较难维护和处理。

Generator: 通过迭代器来实现异步操作。

Promise（ES6 新增特性）: 通过 resolve 和 reject 来实现异步操作。

async/await: 在 JavaScript 中为 Generator 的语法糖，在书写上和同步一样，比较直观易懂。但是需要注意的是 await 会阻塞后面的代码。因此当没有关联关系的程序先后执行时，要注意不要让 await 堵塞。

推荐使用async/await配合promise

# 6、说说CORS为何要区分预检请求和简单请求呢？

https://github.com/amandakelake/blog/issues/62

# 7、你知道1和Number(1)的区别是什么吗？

包装对象，访问length时候用

1.length会出错是语法层面的，解释器会默认把这个.号认成为小数点，所以1.length你可以理解为(1.)length，当然语法错误啦。而你写成1..length或(1).length就不会出错了。这里也有解释

无论是1还是Number(1) 本质就是一个东西，其结果都是字面量，在你尝试将字面量当成对象并调用其方法时会自动装箱并以这样的形式调用：new Number(1).length

# 8、如何实现锁定网页、密码解锁的效果？说说你的方法和步骤是什么？

锁定网页：

监听用户鼠标点击/鼠标滑动/鼠标滚动/键盘输入四个事件，一定时间用户未有动作，调起锁定网页页面，如果有就重新计时

密码解锁：


# 9、用js模拟实现微信抢红包的算法，并说明你的思路

其他每个人随机范围为 (0, 20)

# 10、用原生JS封装插件的方式有哪些？

sdk可以看做插件的集合；

```js
;(function (global) { 
  "use strict";
  function MyPlugin(el, options) {
    //some code
  };
  MyPlugin.prototype = {
    //定义方法
    show: function () {
      //some code
    }
 };
  if (typeof module !== 'undefined' && module.exports) {    //兼容CommonJs规范 
    module.exports = MyPlugin;
  } else if (typeof define === 'function') {   //兼容AMD/CMD规范
    define(function () {
      return MyPlugin
    })
  } else {    //注册全局变量，兼容直接使用script标签引入插件
    global.MyPlugin = MyPlugin;
  }
})(this);


```

# 11、举例说明js拖拽用到的事件有哪些？ 

pc:ondragstart/ondrop/ondragover

移动端：touchstart/touchmove/touchend

# 12、举例说明数组的排序方法有哪些？

reverse() 直接颠倒数组中的元素

sort() 自定义排序,

for 循环

冒泡排序

```

function bubbleSort(arr) {
    var i = arr.length,
        j;
    var tempExchangVal;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);
console.log(arrSorted);

```

快速排序

```
const quickSort = (array) => {
    const sort = (arr, left = 0, right = arr.length - 1) => {
        if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
            return
        }
        let i = left
        let j = right
        const baseVal = arr[j] // 取无序数组最后一个数为基准值
        while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
            while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
                i++
            }
            arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
            while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
                j--
            }
            arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
        }
        arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
        sort(arr, left, j - 1) // 将左边的无序数组重复上面的操作
        sort(arr, j + 1, right) // 将右边的无序数组重复上面的操作
    }
    const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
    sort(newArr)
    return newArr
}

console.log(quickSort([6,1,1,3,4]))

```

# 13、在js中attribute和property的区别是什么？


<input id="name" value="justjavac" />

HTMLInputElement
  ↓
HTMLElement
  ↓
Element
  ↓
Node
  ↓
EventTarget
  ↓
Object

attribute 是dom操作特性的api

    Element.hasAttribute(name) – 判断某个特性是否存在
    elem.getAttribute(name) – 获取指定特性的值
    elem.setAttribute(name, value) – 设置指定特性的值
    elem.removeAttribute(name) – 移除指定特性


想给每个 html 元素都添加属性或方法，甚至可以直接修改 Element.prototype

# 14、有些js库习惯在代码开头处添加分号有什么作用呢？除了分号还可以换成别的吗？

js 文件结束 处是 没有 分号的。若几个 js 连在一起时，2个 js 连接处 会发生语法上的混淆。
开头加 ; 用于分隔， 可以避免多文件 压缩 在一起时 引起的 错误。
分号和分号放在一起也没问题，相当于 “空语句”。

如 if (!args) return var a

# 15、说说你对执行上下文的理解

执行上下文相当于当前代码的一个运行环境。
一般执行上下文会以栈的形式在执行栈中存储。
栈顶的执行环境可以访问到整个栈中的变量。(window在最下方，最先入栈)

# 16、写个给图片加水印的方法

# 17、怎样在JavaScript中创建一个worker线程？

var worker = new Worker('a.js');
worker.postMessage('Hello World');
worker.onmessage = function (e) {
  console.log(e.data);
}

var worker = new Worker('./js/worker.js') // 在主线程中执行

# 18、举例说明如何使用WebSQL？

var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
var msg;
 
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
    tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
    msg = '<p>数据表已创建，且插入了两条数据。</p>';
    document.querySelector('#status').innerHTML =  msg;
});
 
db.transaction(function (tx) {
    tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
        var len = results.rows.length, i;
        msg = "<p>查询记录条数: " + len + "</p>";
        document.querySelector('#status').innerHTML +=  msg;
     
        for (i = 0; i < len; i++){
            msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
            document.querySelector('#status').innerHTML +=  msg;
        }
    }, null);
});


# 19、举例说明js如何拖拽排序？

todo

# 20、怎么下载一个zip文件？

1、请求后台 api，后台返回流文件

var a = document.createElement('a');
var url = window.URL.createObjectURL(blob);
var filename = 'xx.txt';
a.href = url;
a.download = filename;
a.click();
window.URL.revokeObjectURL(url); 

2、a标签的 download 属性



# 21、你了解什么是AOP吗？它的作用是什么？举个例子

AOP是面向切面编程，将通用需求从不同的类不同的行为中提取出来很多个类共享一个功能(比如实例中的输入数据检查)，把一些跟核心业务逻辑模块无关的功能抽离出来

https://github.com/haizlin/fe-interview/issues/1277


# 22、如何解决在手机上长时间点击会选中图片？


默认情况下长按是会选中图片的，长时间点击识别为了默认情况下长按，

CSS 禁止选中user-select:none,并不能解决长按选中图片的问题

解决方法：

img {
    pointer-events: none; // 默认为auto
}

pc: mouseover，hover，点击行为：mousedown => mouseup => click
移动端 h5: touchstart，touchmove，touchend ，触摸事件为 touchstart => touchmove => touchend   （触发touchend后，有300ms的延时，原因是判断用户有没有双击的行为，如果没有，触发click）

点击关闭按钮，touchend首先触发tap，弹出层和遮罩就被隐藏了。touchend后继续等待300ms发现没有其他行为了，则继续触发click，由于这时弹出层已经消失，所以当前click事件的target就在底层元素上，于是就alert内容。整个事件触发过程为 touchend -> tap -> click。

解决穿透：1、加元素消失的延时动画

2、加一个透明的元素

反向操作
3、pointer-events: none; 表示它将捕获不到任何点击，而只是让事件穿透到它的下面。代码如下： 

做过移动端H5页面的同学肯定知道，移动端web的事件模型不同于PC页面的事件。

# 23、说说你对ArrayBuffer的理解！它和Array有什么区别？


    ArrayBuffer: 表示通用的、固定长度的原始二进制数据缓冲区。ArrayBuffer 不能直接操作，而是要通过类型数组对象或 DataView 对象来操作
    Array: 是JavaScript数组，可直接修改


# 24、用js实现一个复制粘贴的功能

obj.select();//通过选中对象再执行复制命令
document.execCommand("Copy")

# 25、写一个根据xpath获取元素的方法

function _x(STR_XPATH) {
    var xresult = document.evaluate(STR_XPATH, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}

# 26、ES5和ES6、ES7有什么区别？

ES5

    严格模式
    JSON API
    object API
    Array API

ES6

    class 类
    模块化 import export
    箭头函数
    模板字符串
    Promise
    async/await
    解构赋值
    let和const
    函数参数默认值

ES7

    Array.prototype.includes
    指数运算符**

ES8
1. async/await
2. Object.values()
3. Object.entries()
4. String.prototype.padStart()/String.prototype.padEnd()
5. Object.getOwnPropertyDescriptors()


# 27、清空一个数组的方式有哪些？它们有什么区别？

1、arr.length = 0;
2、arr.splice(0,arr.length);
3、arr = []
4、while (arr1.length > 0) {
  arr1.pop() // 删除数组最后一项
}


# 28、你知道断点续传的原理吗？用js怎么实现？

主要依赖http协议的206返回码。前提条件是通信双方使用http1.1以上协议。
客户端使用请求头Range告知自己需要的数据范围；服务器使用响应头Content-Range说明返回的数据范围和数据长度。

# 29、请说说你对promise的理解

Promise是ES6中对回调的处理方案，用于处理回调过多，形成回调地狱，不直观的问题；
Promise可以链式调用，代码直观易操作,并且有Promise.all, Promise.race等语法糖便于操作


# 30、请用js实现一个promise的方法

https://github.com/haizlin/fe-interview/issues/1335


# 31、说下你对函数的形参与实参的理解

形参声明函数时，设置的参数。
实参函数调用时，代入的参数。

# 32、你知道什么是三元表达式吗？“三元” 表示什么意思？使用三元表达式应该注意些什么问题？

xx ? xx : xx

三元 是 三个操作数

注意不要嵌套

# 33、 js如何把网页加入收藏夹功能？

ie
var title = document.title;
var URL = document.URL;
window.external.addFavorite(url, title);

火狐：
bookmarks

其他不支持

# 34、有什么方案可以提高无限滚动列表的性能？

虚拟列表：一种根据滚动容器元素的可视区域来渲染长列表数据中某一个部分数据的技术。
https://segmentfault.com/a/1190000016734597


# 35、写一个密码生成器，并同时写一个密码强度校验的方法

https://github.com/haizlin/fe-interview/issues/1369

# 36、为什么说js是弱类型语言，它的优缺点分别是什么？



    静态语言：我们把在使用之前就需要确认其变量数据类型的称为静态语言。

    动态语言：我们把在运行过程中需要检查数据类型的语言称为动态语言。

    通常把偷偷进行类型转换的操作成为隐式类型转换：

    支持因此类型转换的语言称为弱类型语言，不支持隐式类型转换的语言称为强类型语言。

    编译型语言：通常都会对源代码进行编译，生成可以执行的二进制代码，执行的是编译后的结果。（C语言，C++、Object-C、swift）

    解释型语言:通常不用对源代码进行编译，一般是通过解释器载入脚本后运行。由于每个语句都是执行的时候才进行解释翻译，这样解释性语言每次执行就要翻译一次，效率相对要低。（JavaScript、Python、Erlang、PHP、Perl、Ruby）

    由此我们知道，JS属于弱类型、动态、解释型语言。

# 37、在js中函数返回多个值有哪些方法？

return 个数组或对象，
return 个函数可以继续传参获得进一步结果

# 38、onload事件和domcontentloaded哪个先执行呢？

DomContentLoaded先执行,它在DOM内容加载完毕,就可以执行,而不必等待img,css加载完成
onload需要所有资源全都加载完成才可以;

# 39、当用户刷新网页时，js的请求有哪些地方会有缓存处理呢？

请求大多会缓存到这几个地方：

    Service Worker
    Memory Cache
    Disk Cache
    Push Cache

1、Service Worker

Service Worker 是运行在浏览器背后的独立线程，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 HTTPS。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们自由控制缓存哪些文件、如何匹配缓存、如何读取缓存，并且缓存是持续性的。

    自由控制缓存文件
    可持续性缓存

2、Memory Cache

Memory Cache 也就是内存中的缓存，主要包含的是当前中页面中已经抓取到的资源，例如页面上已经下载的样式、脚本、图片等。读取内存中的数据肯定比磁盘快，内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

    容量小
    读取快
    缓存时间短

3、Disk Cache

Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache 胜在容量和存储时效性上。
在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Header 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。

    读取慢
    容量大
    缓存时间长

浏览器会把哪些文件丢进内存中？哪些丢进硬盘中？

    对于大文件来说，大概率是不存储在内存中的，存在硬盘中。
    当前系统内存使用率高的话，文件优先存储进硬盘。

4、Push Cache

Push Cache（推送缓存）是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。它只在会话中存在，一旦会话结束就被释放，并且缓存时间也很短暂，在 Chrome 浏览器中只有 5 分钟左右，同时它也并非严格执行 HTTP 头中的缓存指令。Push Cache 在国内能够查到的资料很少，也是因为 HTTP/2 在国内不够普及。

    只在会话中存在
    会话结束后就被释放
    缓存时间短

# 40、你有使用过FileReader吗？说说它有哪些应用场景？

html5 文件API，可以用于文件断点续传

# 41、stopPropagation()和preventDefault()这两个方法有什么区别？

stopPropagation 是阻止事件冒泡，即冒泡事件到当前元素处就终止了，不会继续向上级元素传递。

preventDefault 是阻止默认事件，例如：在 a 标签的 click 事件中执行了该方法，则不会进行默认的链接跳转。

阻止冒泡和阻止默认事件区别

# 42、写一个方法将html页面生成为图片 

html2canvas

# 43、用原生js实现类似getElementsByClassName的方法，不能使用querySelectorAll

function getElementsByClassName(className)
    // 拿到所有元素
    const tags = document.getElementsByTagName('*');
    const tempTags = [];
    for(let i=0, len = tags.length; i< len; i++)
    {
        let tag = tags[i];
        tag.classList.contains(className) && tempTags.push(tag)
    }
    return tempTags;
}

# 44、举例说明atob和btoa的用法

是window的两个对象，btoa （base64）编码

// Define the string
var string = 'Hello World!';

// Encode the String
var encodedString = btoa(string);
console.log(encodedString); // Outputs: "SGVsbG8gV29ybGQh"

// Decode the String
var decodedString = atob(encodedString);
console.log(decodedString); // Outputs: "Hello World!"

# 45、用js实现一个轮播图，并简述有哪些实现的方法

https://github.com/haizlin/fe-interview/issues/1450

# 46、请使用js实现一个省市县级联的效果 

https://github.com/haizlin/fe-interview/issues/1454

# 47、写一个方法找出一段话里面出现频率最多的词

# 48、请介绍下js的数据类型

基本数据类型:
    number、
    string、
    boolean、
    undefined、
    null
    symbol
    
引用数据类型：
    function、
    object、
    array、
    bigint

# 49、ajax的请求状态有哪几种？

readyState：0、1、2、3、4
0：UNINITIALIZED //未初始化
1：LOADING //加载
2：LOADED //加载完成
3：INTERACTIVE //交互
4：COMPLETED //完成

# 50、页面的编码和被请求的资源编码不一致时如何处理？


    get方法 用encodeURIComponent(URIstring) 进行编码处理
    post方法 直接丢给服务器自己处理 无须进行编码处理


# 51、你有用过哪些3D渲染的库？

Three.js

# 52、如何使用js获取当前的url和来源的url？
当前的url: window.location.href
来源的url:document.referrer

# 53、你平时是怎么调试js的？会断点调试吗？断点调试有什么技巧呢？

形成断点有两种方式，一是在代码中写debugger，而是在devTools中的source面板打断点，

# 54、举例说明document.execCommand有哪些用途

其中使用了 document.execCommand('copy')，会复制内容至系统剪切板

# 55、getElementById和querySelector方法的区别是什么？

getElementById 传入的值是dom的id
querySelector 传入的值 #id, .class, tag。。。,且命中第一个元素.

# 56、用原生js获取DOM元素的方法有哪些？

getElementById
getElementByClassName
getElementByTagName
querySelector
querySelectorAll
document.documentElement 获取html
document.body ---获取body

# 57、平时调试用console.log的输出结果可信吗？为什么？


console.log()打印出来的内容并不是一定百分百可信的内容。一般对于基本类型number、string、boolean、null、undefined的输出是可信的。但对于Object等引用类型来说，则就会出现上述异常打印输出。
不展开对象看时，console.log()是按照代码执行顺序，同步地输出了对象当时的快照。所以我们看到的是预期的值。
展开对象时，它其实是重新去内存中读取对象的属性值，此时对象属性已被更改，所以展开对象后，可能看到的不是预期值了。


# 58、js的控制台输出，平时除了用console.log外，你还知道哪些？使用console.log应该注意什么？

debugger;

todo：断点调试不会

# 59、你知道什么是PAJAX吗？它和AJAX有什么区别？它的应用场景有哪些？


1.Pajax是jQuery的一个插件，Pjax即pushState + Ajax，是实现无刷新Ajax加载并解决浏览器前进和后退问题的一个开源实现。
2.pajax结合pushState和ajax技术， 不需要重新加载整个页面就能从服务器加载Html到你当前页面，这个ajax请求会有永久链接、title并支持浏览器的回退/前进按钮。
3.当你点击一个站内的链接的时候， 不是做页面跳转， 而是只是站内页面刷新。 刷新页面的同时， 浏览器地址栏位上面的地址也是会更改， 用浏览器的回退功能也能够回退到上一个页面。

# 60、写个方法判断当前脚本运行在浏览器还是node环境中

const isBrowser = () => typeof window === 'object' && (42, eval)('this') === window;
const isNode = () => typeof global === 'object' && (1337, eval)('this') === global;

# 61、写一个方法检测页面中的所有标签是否正确闭合

可以使用template对该HTML进行编译，然后对比两者是否一致，如果不一致表示有未闭合的标签/不符合规范的语法，被编译器自动修正了。

```js
const areAllTagsClosed = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.innerHTML === html;
}

areAllTagsClosed(`<div><span></div>`);  // false
areAllTagsClosed(`<div><br></div>`);  // true

```

判断两个数组相等，转化为字符串判断

html题目：（50）

# 1、说说你对HTML5的img标签属性srcset和sizes的理解？都有哪些应用场景？

srcset：规定了图片的src候选集;

sizes：规定了图片在不同条件下的尺寸取值，根据尺寸取值从srcset中找到对应的图片src；配合srcset属性才能使用；

    如果没有设置srcset属性，或者没值，那么sizes属性也将不起作用。——MDN

    应用场景：多用于响应式图片或不同像素密度设备的图片适配；

# 2、你有用过HTML5中的datalist标签吗？说说你对它的理解

h5新增标签

id 与 input中的list相对应
<input list="browsers">
  <datalist id="browsers">
    <option value="Internet Explorer">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>

# 3、HTML5的应用程序缓存与浏览器缓存有什么不同？

 - 浏览器缓存针对单个文件, H5离线缓存针对整个应用（所以也叫H5应用程序缓存）
 - H5缓存断网还能用,浏览器缓存断网就用不了
 - H5缓存核心是applicationCache对象（要用service worker替代）,浏览器缓存核心是cache-control

# 4、简述下HTML的快捷键属性是哪个？并举例说明有什么用？

accesskey

<div accesskey="z" onclick="this.style.color = 'red';">快捷键z：变红</div>

设置 accesskey，可以触发元素事件

# 5、你有用过HTML5的Device API吗？说说它都有哪些应用场景？

dial: 拨打电话
beep: 发出蜂鸣声
vibrate: 设备振动
setWakelock: 设置应用是否保持唤醒（屏幕常亮）状态
isWakelock: 获取程序是否一直保持唤醒（屏幕常亮）状态
setVolume: 设置设备的系统音量
getVolume: 获取设备的系统音量

# 6、用HTML5实现手机摇一摇功能你有做过吗？你知道它的原理吗？

todo

# 7、在新窗口打开链接的方法是什么？那怎么设置全站链接都在新窗口打开？

<a href="#" target="_blank"></a>

<head>
    <base target="_blank">
</head>

# 8、a标签下的href="javascript:void(0)"起到了什么作用？说说你对javascript:void(0)的理解？

javascript:是伪协议，表示url的内容通过javascript执行

void(0)的作用是点击链接后不发生任何行为，常用于阻止页面刷新或跳转；。这么做往往是为了保留链接的样式，但不让链接执行实际操作，


当用户点击一个以 javascript: URI 时，它会执行URI中的代码，然后用返回的值替换页面内容，除非返回的值是undefined。void运算符可用于返回undefined。


# 9、iframe的使用场景有哪些？

1：典型系统结构，左侧是功能树，右侧就是一些常见的table或者表单之类的。为了每一个功能，单独分离出来，采用iframe。 
2：ajax上传文件。 
3：加载别的网站内容，例如google广告，网站流量分析。
4： 在上传图片时，不用flash实现无刷新。
5： 跨域访问的时候可以用到iframe，使用iframe请求不同域名下的资源。

# 10、举例说明你对HTML5的ruby标签的理解，都有哪些应用场景？
<section>
  <ruby class="spz">
    <rb>茕</rb>
    <rt>qióng</rt>
    <rb>茕</rb>
    <rt>qióng</rt>
  </ruby>
  <ruby class="spz">
    <rb>踽</rb>
    <rt>jǔ</rt>
    <rb>踽</rb>
    <rt>jǔ</rt>
  </ruby>
</section>

# 11、举例说明如何原样输出HTML代码，不被浏览器解析？

pre，code

pre标签一个常见的应用便是用来保存计算机中的源代码的文本。

# 12、怎么使用HTML5来获取定位？定位不准怎么解决？

纯HTML5 navigator.geolocation 

可以调用 getCurrentPosition() 函数获取用户当前定位位置

# 13、a标签的href和onclick属性同时存在时哪个先触发？

1、应该是onclick属性先触发，判断依据是在onclik中使用preventDefault方法可以阻止a标签的跳转，

2、<a href="javascript:alert(1)" onclick="alert(2)">点一下试试，看谁先触发</a>

# 14、举例说明你对ol和ul标签的区别？它们的运用场景分别是什么呢？

ol是有序列表，ul是无序列表；

# 15、请描述下元素的href和src有什么区别？

1.概念不同
href用于在当前文档和引用资源之间确立联系
src用于将资源替换当前元素

2.解析方式不同
href解析时，会并行下载资源且不会停止当前文档处理  a
src解析时，会暂停当前文档处理  image

# 16、有使用过svg吗？请用svg画一个圆


<svg width="50" height="50">
    <circle cx="25" cy="25" r="10" fill="black" />
</svg>

# 17、使用HTML5需要遵守哪些设计原则？

避免不必要的复杂性

支持已有内容

解决现实的问题

内容模型

平稳退化

# 18、HTML5标准提供了哪些新的API？你有用过哪些？

两个选择器API :

document.querySelector()
document.querySelectAll()

地理定位API :

    getCurrrentPosition()
多媒体API 

<video></video>
<audio></audio>

拖放

<div ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<div draggable="true" ondragstart="drag(event)"></div>

文件

window.requestFileSystem()

本地存储API 

localStorage

sessionStorage

canvas

<canvas id="myCanvas" width="200" height="100">

svg

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
   <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
</svg>


# 19、写出以下几个HTML标签：字体、居中、文字加粗、下标 

<font>  =>
<center> => text-align: center
<b>文字强调：<strong> => font-weight: bold
<sub> => vertical-align:sub
上标<sup>


# 20、Doctype有什么作用？你知道有多少种Doctype文档类型吗？

Doctype：文档类型声明

这个声明的作用是防止浏览器在渲染文档时，切换到我们称为“怪异模式(兼容模式)”的渲染模式。“" 确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。


Strict是不包括展示性和废弃的属性 以及框架集framset
transitional 包括展示性和废弃属性 不包含框架集
framset 在transitional 基础上包括框架集

<!-- !DOCTYPE对大小写不敏感 -->

<-- html5-->
<!DOCTYPE html>
<-- html4--> 
    HTML4.<!-- 01的DOCTYPE有三种：Strict，Transitional和Frameset； -->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" 
"http://www.w3.org/TR/html4/frameset.dtd">


# 21、列举出你最常用的meta标签的写法和作用

<!-- meta：用来描述网页的元信息；诸如字符编码，浏览器引擎编译，文档信息等等 -->

<meta charset="UTF-8">


告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="user-scalable=yes;width=device-width;initial-scale=1">

<meta name="keywords" content="爱学习,爱学习加盟,网页的关键字">

<meta name="description" content="“办学大平台，教学好口碑”。网页的描述信息">

# 22、HTML5的页面可见性（Page Visibility）有哪些应用场景？

document.hidden 来判断页面是否处于可见

比如播放视频的时候，你离开这个页面我就要停止播放。


document.visibilityState属性

产生的原因: 不能触发unload,pageHide事件的时候

    手机端切换到最近任务界面,点击另一个APP,
    手机端直接按home键返回主屏幕;
    PC端最小化,


使用的场景:

    停止与服务器的轮询
    停止页面音视频

属性值（字符串）
hidden：页面彻底不可见。
visible：页面至少一部分可见。

# 23、HTML5怎么为输入框添加语音输入的功能呢？

谷歌草案阶段的一个标签属性，走谷歌服务器
<input type=”text” speech x-webkit-speech />

# 24、说说你对accesskey的理解，举例说明它有什么运用场景？

通过快捷键触发对应元素的绑定事件。

# 25、行内元素、块级元素、空(void)元素分别有哪些？

行内元素不可以设置宽高，不独占一行
块级元素可以设置宽高，独占一行

块级元素：div、ul、li、ol、dd、dt、dl、h1~h6、p
行内元素：a、b、img、span、button、em
空元素（空元素是指自闭合的标签 即元素内没有内容）：img、input、br


# 26、请描述一下cookies、sessionStorage和localStorage的区别？


cookie：存放于浏览器中的数据；常用于会话管理，用户设置，行为跟踪等。在js中可以通过document.cookie来进行设置，获取或删除等操作；不过cookie有许多明显的缺点：
    cookie的大小限制在4KB；
    cookie会伴随http请求一起被发送，会浪费网络带宽
    cookie的正确操作比较困难
webStorage：H5新增的API，数据存放于客户端本地内存中；sessionStorage和localStorage操作一致，而sessionStorage的有效期限为一次session会话（即一个tab页从打开到关闭之间的时间段），localStorage是没有失效时间的（即永久保存，删除需要手动处理）；

# 27、说说HTML中的<html>标签有什么作用？

<html> 元素定义了整个 HTML 文档。

<html> 与 </html> 标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。

html 对应 js的 document.documentElement


# 28、如何在HTML5页面中嵌入音频和视频？

基于<video><audio>两个标签插入，设置src即可


# 29、除了音频和视频，HTML5还支持哪些媒体标签？

<source>：一般用于定义不同的媒体资源，由于各浏览器对视频格式的支持不同，可以通过video/audio内嵌source来链接多种视频格式，实现浏览器兼容

<audio controls>
  <source src="test.mp3" type="audio/mp3" />
  <source src="test.ogg" type="audio/ogg" />
</audio>

<track>： 用于给音频和视频文件添加字幕文件

<video width=”450″ height=”340″ controls>
     <source src=”W3Cschool.mp4″ type=”video/mp4″>
     <source src=”W3Cschool.ogg” type=”video/ogg”>
     <track kind=”subtitles” label=”English” src=”W3Cschool_en.vtt” srclang=”en”></track>
</video>

<canvas>：用于自定义图形，通过css/js自行绘制图像

<canvas width="200px" height="200px" style="border:1px solid black;">

<embed> 可用于显示外嵌的内容：例如媒体对象，插件
<embed height="100" width="100" type="audio/mp3" src="src="test.mp3".mp3" />

<object> 大致同embed，不过h5之前就支持
<object height="100" width="100" data="src="test.mp3".mp3"></object>

# 30、网站的TDK该怎么设置？它有什么作用？

title, description, keywords 这三个常用于网站的seo；

# 31、在默认的情况下，使用h1标签呈现出什么效果？

display: block;
font-size: 2em;
font-weight: bold;

# 32、有好多网站不常用table和iframe这两个元素，知道原因吗？

table布局可是当年很火的方案，现在基本不用了。稍微改动一下table里面的元素，就会造成重绘，会有一定的性能问题。现在的布局方案也很多了，flex，grid等。

iframe：不利于SEO

# 33、什么是svg？说说svg有什么运用场景？

SVG是可缩放的矢量图形，缩放不失真

使用：
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect width="300px" height="100px"  />
</svg>

# 34、HTML如何创建分区响应图？

  <p>
    <img src="./1.png" usemap="#myMap" />
  </p>
  <map name="myMap">
    <area href="http://baidu.com" shape="rect" coords="50,106,220,273" />
    <area href="http://google.com" shape="rect" coords="260,106,430,275" />
    <area href="http://juejin.im" shape="default" />
  </map>

  分区响应图:一张图片,分成多个模块,点击模块可以链接到不同的URL地址

# 35、你知道checkbox有几种状态吗？它们分别用来表示什么？

    checked：选中/未选中状态；
    disabled：禁用/可用状态；
    indeterminate：用于表示复选框组介于全部选中或全部未选中之间的状态；

# 36、在HTML5中如何组合标题？用哪个元素？

<hgroup> 标签用于对网页或区段（section）的标题进行组合

<hgroup>
  <h1><a href="/">标题一</a></h1>
  <h2>标题二</h2>
</hgroup>

# 37、举例说明HTML5的Canvas元素有什么用途？

做页面特效: 粒子效果
画常见的图形: 矩形,圆形
在画布中插入文字,图片

# 38、页面布局中的结构与表现分离，那么什么是结构？什么是表现呢？

结构指的是HTML文件
表现指的是CSS样式
两者分离的意思是指HTML中定义好整个页面的结构，这样可以通过引用不同的样式文件方便的完成网页换肤等操作

行为：JS文件

# 39、怎样去除html标签之间换行产生的空格？

todo

# 40、frame和iframe有什么区别？

frame 不能脱离 frameset 使用，并且不能放在 body 中，否则不能正常显示，而 iframe 则没有这个限制。

# 41、有使用过HTML5的跟踪元素吗？说说你对它的理解

跟踪元素向视频和音频提供字幕和说明文字的方法

<video width="320" height="240" controls>
  <source src="forrest_gump.mp4" type="video/mp4">
  <source src="forrest_gump.ogg" type="video/ogg">
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  <track src="subtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian">
</video>

# 42、说说你对富文本的理解，你有用过哪些富文本编辑器呢？

富文本就是，网页版简易的文本编辑器（类似本地的Word），用于可以像操作Word一样在富文本编辑器中编辑出自己想要的格式，我用过，vue-quill-editor和wangeditor，觉得还是wangeditor更好一点点

# 43、你知道富文本编辑器的实现原理吗？

document.execCommand('bold',false'); 
富文本编辑器基本上都是调用这个指令，完全不需要手动判断选中区域
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)

# 44、请描述下application cache的更新过程？

todo：H5的离线存储，强缓存 & 协商缓存 


# 45、说说form-data、x-www-form-urlencoded、raw、binary的区别是什么？

同

发送请求的方式

异

1.multipart/form-data 其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式，一般用来文件上传。
2.application/x-www-form-urlencoded 是post的默认格式，使用js中URLencode转码方法。
3.raw 可上传任意格式的文本，可以上传text、json、xml、html等各种文本类型。
4.binary 等同于Content-Type:application/octet-stream，只可上传二进制数据。

# 46、使用canvas画出一个矩形

<canvas width="1000" height="500" id="cvs"></canvas>

<script>
document.getElementById('cvs').getContext('2d').fillRect(100, 100, 800, 300)
</script>

# 47、HTML5规范将元素分为哪几个大类？分别说说它们的特点

# 48、举例说明table怎么合并行和列的？


html中

# 49、请说说Canvas和SVG图形的区别是什么？

canvas发生任何变化都需要重新生成，不易修改。
svg可为其中个别节点绑定事件。
canvas有像素的概念，svg没有，不会失真。
canvas是基于js绘制的，svg是基于xml进行定义的，因此svg有节点的概念，可对其中部分节点绑定事件。


# 50、html的button中的reset有什么作用？

需要配合form使用，点击后可以重置当前表单内所有的input为初始值。

<form action="form_action.asp" method="get">
  First name: <input type="text" name="fname" />
  Last name: <input type="text" name="lname" />
  <button type="submit" value="Submit">Submit</button>
  <button type="reset" value="Reset">Reset</button>
</form>

# 51、精灵图和base64如何选择呢？

通常使用雪碧图

精灵图

优点

    将多个图像加载请求合并为一个请求

弊端

    难以维护和更新
    增加内存消耗

base64

优点

    将多个图像加载请求合并为一个CSS文件请求
    轻松更新生成文件

弊端

    base64编码比原始二进制表示大约大25%
    IE6或IE7不支持


css题目：（50）

# 1、说说你对line-height是如何理解的？

行高属性，表示一行是字体的多大倍数，比如line-height: 1, line-height: 1.5就分表表示一行高度是当前字体大小的一倍，或1.5倍

vertical-align: middle;

# 2、说说浏览器解析CSS选择器的过程？

从上到下，从右到左

浏览器CSS匹配不是从左到右进行查找，而是从右到左进行查找。比如div#divBox p span.red{color:red;}，浏览器的查找顺序如下：先查找html中所有 class='red' 的 span 元素，找到后，再查找其父辈元素中是否有 p 元素，再判断 p 的父元素中是否有 id 为 divBox 的 div 元素，如果都存在则匹配上。

浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。


# 3、说说CSS的优先级是如何计算的？

标签名选择器、类选择器和ID选择器

即，针对一个css选择器表达式，遇到一个id就往特指度数值中加100，遇到一个class就往特指度数值中加10，遇到一个element就往特指度数值中加1。

ice 计算公式

!important > 内联样式（1000） > id 选择器（100） > class 选择器（10） > tag（1） > *

# 4、你有用过CSS预处理器吗？喜欢用哪个？原理是什么？

CSS预处理器：Less Sass stylus

AST 抽象语法树，是源代码的抽象语法结构树状表现形式

关于转换和编译的“黑魔法”领域


# 5、在页面中的应该使用奇数还是偶数的字体？为什么呢？

常用偶数号字体,但奇数号字体也没关系,例如 知乎正文使用15px字体,豆瓣电影使用13px字体

UI设计师导出的设计稿一般都是偶数号字体

偶数字号容易和页面其他标签的其他属性形成比例关系

Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，
而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀
疏。

# 6、说说你对z-index的理解

就是说除了弹窗这种布局元素外，其他的文档布局里面，z-index 最好不要超过2，超过了，就说明你的基本功不行。

# 7、rgba()和opacity这两个的透明效果有什么区别呢？

rgba 只对颜色有影响。如果放在 background 上的话，只对背景颜色有影响。不会影响元素中的其他内容以及子元素内容。

opacity 的透明效果是作用整个元素以及其子元素上的。

# 8、请描述css的权重计算规则

    !important>id>class>标签（p）>子代、相邻选择器（ > +）>通配符选择器 *

    权重相同，后面覆盖前面的


# 9、 描述下你所了解的图片格式及使用场景

GIF、PNG、JPG、SVG、WebP


GIF

优点：GIF是动态的；支持无损耗压缩和透明度。

缺点：的详细的图片和写实摄影图像会丢失颜色信息；在大多数情况下，无损耗压缩效果不如 JPEG 格式或 PNG 格式；GIF 支持有限的透明度，没有半透明效果或褪色效果。

适用场景：主要用于比较小的动态图标。

▍PNG

优点：PNG格式图片是无损压缩的图片，能在保证最不失真的情况下尽可能压缩图像文件的大小；图片质量高；色彩表现好；支持透明效果；提供锋利的线条和边缘，所以做出的logo等小图标效果会更好；更好地展示文字、颜色相近的图片。

缺点：占内存大,会导致网页加载速度慢；对于需要高保真的较复杂的图像，PNG虽然能无损压缩，但图片文件较大，不适合应用在Web页面上。

适用场景：主要用于小图标或颜色简单对比强烈的小的背景图。

▍JPG

优点：占用内存小，网页加载速度快。

缺点：JPG格式图片是有损压缩的图片，有损压缩会使原始图片数据质量下降，即JPG会在压缩图片时降低品质。

适用场景：由于这种格式图片对色彩表现比较好，所以适用于色彩丰富的图片。主要用于摄影作品或者大的背景图等。不合适文字比较多的图片。

▍SVG

优点：SVG是矢量图形，不受像素影响，在不同平台上都表现良好；可以通过JS控制实现动画效果。

缺点：DOM比正常的图形慢，而且如果其结点多而杂，就更慢；不能与HTML内容集成。

适用场景：主要用于设计模型的展示等。

▍WebP

优点：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器宽带资源和数据空间。

缺点：相较编码JPEG文件，编码同样质量的WebP文件需要占用更多的计算资源。

适用场景：WebP既支持有损压缩也支持无损压缩。将来可能是JPEG的代替品。

# 10、让网页的字体变得清晰，变细用CSS怎么做？

font-weight：lighter + font-family

-webkit-font-smoothing：antialiased

# 11、说下line-height三种赋值方式有何区别？

div{
  line-height: 24px;
  line-height: 1.5;
  line-height: 1.5em;
  line-height: 150%;
}


# 12、用CSS绘制一个三角形

.triangle {
        width: 0;
        height: 0;
        margin: 100px auto;
        border-top: 50px solid transparent;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 50px solid red;
    }

# 13、浏览器是怎样判断元素是否和某个CSS选择器匹配？

div.ready #wrapper > .bg-red
先把所有元素 class 中有 bg-red 的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的 parent id 不为 #wrapper 则把元素从集合中删去。 再向上，从这个元素的父元素开始向上找，没有找到一个 tagName 为 div 且 class 中有 ready 的元素，就把原来的元素从集合中删去。


从右到左。对应在render 树上是从里向外

# 14、使用flex实现三栏布局，两边固定，中间自适应

<div class="container">
  <section class="left red"></section>
  <section class="middle blue"></section>
  <section class="right red"></section>
</div>

.container {
  width: 100%;
  height: 100%;
  display: flex;
}

.left,
.right {
  flex: 0 0 auto;
  width: 50px;
  height: 100%;
}

.middle {
  flex: 1 1 auto;
  height: 100%;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}


# 15、写出主流浏览器内核私有属性的css前缀

 Chrome：Blink内核   -webkit-
   
   Safari：WebKit内核       -webkit-

     Firefox ：Gecko内核      -moz-

       IE：Trident内核           -ms-

         Opera：Presto内核         -o-


# 16、不使用border画出1px高的线，在不同浏览器的标准和怪异模式下都能保持效果一样

html 中

# 17、实现单行文本居中和多行文本左对齐并超出显示"..."

html 中

# 18、写出你知道的CSS水平和垂直居中的方法

html 中


水平居中：

行内元素

.center {
    text-align: center;
}

块级元素

.center {
   margin: 0 auto;
}

https://xiangshuo.blog.csdn.net/article/details/86539582

# 19、怎么才能让图文不可复制？

-webkit-user-select: none;
-ms-user-select: none;
-moz-user-select: none;
-khtml-user-select: none;
user-select: none;


# 20、怎么让英文单词的首字母大写？

text-transform

- capitalize
这个关键字强制每个单词的首字母转换为大写。

- uppercase
这个关键字强制所有字符被转换为大写。

- lowercase
这个关键字强制所有字符被转换为小写。

- none
这个关键字阻止所有字符的大小写被转换。

- full-width （实验性属性值）
这个关键字强制字符 — 主要是表意字符和拉丁文字 — 书写进一个方形里，并允许它们按照一般的东亚文字（比如中文或日文）对齐。

# 21、重置（初始化）css的作用是什么？

    我理解的，简单讲主要是为了 统一各个浏览器自带的默认样式而诞生的。


# 22、span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

产生空白的原因：元素被当成行内元素排版的时候，元素之间的空白符（空格、回车换行等）都会被浏览器转换成一个空白字符，这个字符的大小受font-size影响

html 中

# 23、你知道的等高布局有多少种？写出来

使用浮动：padding-bottom 9999px margin-bottom -9999px互相抵消，父级清除浮动，即子元素最高的高度就是父盒子最高的高度
使用flex：默认的flex的align配置就是自动填充满父级盒子，设置子元素高度即父元素高度
使用定位：top和bottom都是0，然后撑开父元素的高度；

# 24、说说你对媒体查询的理解 

响应式布局的时候用过媒介查询，media query

# 25、你是怎样抽离样式模块的？

说的是 webpack + extract-text-webpack-plugin插件吧？ 

# 26、你知道全屏滚动的原理是什么吗？它用到了CSS的哪些属性？


    JS 滚动监听事件
    JS 移动端touch监听事件
    函数节流
    DOM操作

    https://github.com/haizlin/fe-interview/issues/182


# 27、假如设计稿使用了非标准的字体，你该如何去实现它？

设计的职责是美观，前端的职责是尽可能还原，设计之所以会使用非标准的字体、甚至侵权的字体是因为不了解技术实现和版权意识。
所以先沟通，告知设计实际的情况，然后在综合考量的情况下应该尽可能去实现，通常采用载入字体和图片化的方式。

# 28、列举CSS优化、提高性能的方法 

    1、压缩CSS
    2、通过link方式加载，而不是@import
    3、复合属性其实分开写，执行效率更高，因为CSS最终也还是要去解析如 margin-left: left;


选择器性能

    尽量少的使用嵌套，可以采用BEM的方式来解决命名冲突
    尽量少甚至是不使用标签选择器，这个性能实在是差，同样的还有*选择器
    利用继承，减少代码量


    慎重使用高性能属性：浮动、定位；
    尽量减少页面重排、重绘；
    css雪碧图
    自定义web字体，尽量少用
    尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等
    使用transform来变换而不是宽高等会造成重绘的属性

# 29、如何实现换肤功能

是通过 less/sass/postcss 等css 预处理器，通过它们自身的变量用法，设置不同变量，生成不同的主题样式，但是这些样式都是会被打包成常量，我们只能在编译之前修改变量，打包出对应的css 文件。

一般的插件在编译 css 时会将变量打包成常量，但是 postcss 有一个插件 postcss-advanced-variables 是支持直接打包为 css 变量的。 这将意味着我们可以仅仅覆盖 css 变量，或者 js 修改变量值都能改变主题色。

postcss-ui-theme（支持 sass 语法， bem 规范命令，resolve 静态资源等强大功能）

# 30、要是position跟display、overflow、float这些特性相互叠加后会怎么样？

1、'display'、'position' 和 'float' 的相互关系；
2、position跟display、overflow、float下的margin collapse。

# 31、怎么使用自定义字体？有什么注意事项？

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

# 32、css3的:nth-child和:nth-of-type的区别是什么？

p:nth-child(n)，匹配所有p标签的父元素的第n个元素，并且这个元素是p标签，如果这个元素不是p标签，那么就不会匹配到
p:nth-of-type(n)，匹配所有p标签的父元素的第n个p标签元素

# 33、什么是视差滚动？如何实现视差滚动的效果？

我的那个例子

# 34、margin和padding使用的场景有哪些？

实现自适应的等比例矩形效果：

div { padding: 50%; }
div { padding: 25% 50%; } //宽高比为 2:1 的矩形效果

# 35、inline、block、inline-block这三个属性值有什么区别？

inline： 行内元素，元素不独占一行，不可以修改宽高
block： 块级元素，元素独占一行，可以修改宽高
inline-block： 行内块级元素，元素不独占一行，并且可以修改宽高

# 36、box-sizing常用的属性有哪些？分别有什么作用？

content-box： 宽度不含 border padding

border-box：宽度包含 border 和 padding

# 37、 你有用过哪些css框架？说说它们的特点

ui库

elementUI，vantUI，自己封装的组件库，css 库越小越原子化

# 38、 用css画一个太阳

？？？

# 39、怎样把一个div居中？怎样把一个浮动元素居中？怎样把绝对定位的div居中？

div居中
margin：0 auto;

浮动元素居中(div居中也可以用)：

margin-left: 50%;
transform: translate(-50%)

绝对定位的div居中：

{ top:0; left:0; bottom:0; right:0; margin: auto; }

# 40、手动写动画最小时间间隔是多少，为什么？

FPS

# 41、说说position的absolute和fixed共同与不同点分别是什么？

同：
都是用来给元素定位的属性，具有定位元素的一切特点（例如脱离文本流,形成独立的渲染区（可以用优化动画性能）、不占据空间等等）；
不同：
fixed的父元素永远是浏览器窗口，不会根据页面滚动而改变位置；absolute的父元素是可以设置的，他会永远跟随父元素的位置的改变而改变。

# 42、举例说明css中颜色的表示方法有几种


    颜色单词: blue / lightblue / skyblue / transparent(透明)
    rgb(0-255, 0-255, 0-255) / rgba(0-255, 0-255, 0-255, 0-1)
    hsl色相: hsl(色调，饱和度，明度) hsla( 色调，饱和度，亮度，不透明度 ) (兼容性)
    十六进制: #000000- #FFFFFF ( #000 - #fff ) ( 0-9 a-f | [A-F] )

# 43、用CSS绘制一个红色的爱心

todo ,和画太阳一起

# 44、元素竖向的百分比设置是相对容器的高度吗？

不是，一般是根据宽度来的，像padding-top,padding-bottom
因为高度百分比的话CSS没办法处理，比如子元素的高度设置为200%，那父元素是不是被撑开了，然后父元素变化了，子元素的200%是不是相对又变化了，所以会造成一个死循环，在CSS里面是没办法处理高度百分比的，高度都是auto。
如果想要实现等比例的盒子模型，可以通过上面的padding-top,padding-bottom属性来实现。


# 45、如何消除transition闪屏？

.css { 
    -webkit-transform-style: preserve-3d; 
    -webkit-backface-visibility: hidden; 
    -webkit-perspective: 1000; 
} 

# 46、说说你对jpg、png、gif的理解，分别在什么场景下使用？有使用过webp吗？

jpg, 色彩复杂图片
png, 色彩简单图片
gif, 动图, 或者色彩极简的icon等
webp, 判断能使用webp的浏览器就是用webp

# 47、请说说*{box-sizing: border-box;}的作用及好处有哪些？

作用: 将padding和border包括在width内,不用去算了，直接根据设计稿写，不用考虑兼容性问题

# 48、你有使用过哪些栅格系统？都有什么区别呢？

bootstrap 12份
element-ui 24份

# 49、你对响应式设计的理解是什么？知道它基本的原理是吗？要想兼容低版本的IE怎么做呢？

理解：在不同系统，不同设备，不同尺寸的界面，有良好的用户体验，舒适的阅读体验，交互体验。

原理：根据不同设备尺寸，浏览器自动调整或通过样式调整，来保证用户体验。

 兼容：Respond.js

# 50、怎么改变选中文本的文字颜色和背景色？

::selection {
  background-color: #222;
  color: white;
}


组合题目：（50）跨域/ 数据类型判断/ 离线存储


# 1、递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值 

let arr = [];

function shuzu(arr) {
  var item = Math.random()
  if(arr.includes(item)) {
      shuzu(arr)
  }
  if( arr.length < 5) {
      arr.push(item)
      shuzu(arr);
  }
  else {
      return arr;
  }
}

const arr = shuzu(arr);

# 2、写一个方法去掉字符串中的空格

string.split(' ').join('')
string.replace(/\s/g, '');

# 3、页面导入样式时，使用link和@import有什么区别？


link 加载时同时加载

@import 等页面加载完成后再加载。

# 4、 CSS3有哪些新增的特性？

border-radius

box-shadow

border-image

background-clip

linear-gradient

word-break

word-wrap

transform 

translate

animation
keyframe

media

# 5、 html的元素有哪些（包含H5）

行内
块级
空白元素

# 6、 去除字符串中最后一个指定的字符

var a = 'sunbai'
b = a.split("")
b.pop()
b.join("")

# 7、在页面上隐藏元素的方法有哪些？

display: none
opcitay: 0
visibility: hidden
 z-index: -999;

margin-left: -100%;
width: 0; height: 0; overflow: hidden;
font-size: 0;

# 8、HTML全局属性(global attribute)有哪些（包含H5）？


    accesskey:设置快捷键
    class:为元素设置类标识
    contenteditable:指定元素内容是否可编辑
    contextmenu:自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
    data-*:为元素增加自定义属性
    dir：设置元素文本方向（默认ltr；rtl）
    draggable:设置元素是否可拖拽
    dropzone:设置元素拖放类型（copy|move|link,H5新属性，主流均不支持）
    hidden:规定元素仍未或不在相关
    id:元素id，文档内唯一
    lang:元素内容的语言
    spellcheck:是否启动拼写和语法检查
    style:行内css样式
    tabindex:设置元素可以获得焦点，通过tab导航
    title:规定元素有关的额外信息
    translate:元素和子孙节点内容是否需要本地化（均不支持）

# 9、写一个方法把下划线命名转成大驼峰命名 

a_c_def  =》 ACDef

遍历字符串，_后面元素变成大写，最后 split('_')

# 10、CSS选择器有哪些？哪些属性可以继承？

选择器

    通配符
    id
    class
    标签
    后代选择器
    子选择器
    兄弟选择器
    属性选择器
    伪类选择器
    伪元素选择器

可以继承的属性

    font-size
    font-weight
    font-style
    font-family
    color


# 11、*HTML5的文件离线储存怎么使用，工作原理是什么？

优点:

没有网络时可以浏览, 加快资源的加载速度, 减少服务器负载

使用:

只需要在页面头部加入,然后创建manifest.appcache文件

https://github.com/haizlin/fe-interview/issues/10


# 12、写一个把字符串大小写切换的方法

function caseConvert(str){
    return str.replace(/([a-z]*)([A-Z]*)/g, (m, s1, s2)=>{
        return `${s1.toUpperCase()}${s2.toLowerCase()}`
    })
}
caseConvert('AsA33322A2aa') //aSa33322a2AA

# 13、CSS3新增伪类有哪些并简要描述

CSS3 中规定伪类使用一个 : 来表示；伪元素则使用 :: 来表示。

first-child / :last-child 表示子元素结构关系的
:nth-child() / nth-last-child() 用来控制奇数、偶数行的（控制表单奇数、偶数行的样式）
:first-of-type / :last-of-type 表示一组兄弟元素中其类型的第一个元素 MDN
:nth-of-type() / :nth-last-of-type() 这个选择器匹配那些在相同兄弟节点中的位置与模式 an+b 匹配的相同元素` MDN
:root html 根元素
:not() 否定选择器，用的比较多
:only-child 只有一个子元素时才会生效
:empty 选择连空格都没有的元素

# 14、简述超链接target属性的取值和作用

_self: 在当前窗口打开页面
_blank: 在新窗口打开页面

最好添加 rel="noopener norefferrer" 属性，防止打开的新窗口对原窗口进行篡改。防止 window.opener API 的恶意行为。

# 15、写一个去除制表符和换行符的方法 


/**
 * \f  匹配换页字符。
 * \n  匹配换行字符。
 * \r  匹配回车符字符。
 * \t  匹配制表字符。
 * \v  匹配垂直制表符。
 * @param str
 * @returns {void | string}
 */
const removeEmpty = (str) => str.replace(/[\t\n\v\r\f]/g, "");

console.log(removeEmpty(`|
  
   
|`))


# 16、用css创建一个三角形，并简述原理 


  width: 0;
  height: 0;
  margin: 100px auto;
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;

# 17、label都有哪些作用？并举相应的例子说明

input与label互相关联的机制

<label for="username">username</label>
<input id="username" name="username" />

# 18、统计某一字符或字符串在另一个字符串中出现的次数 

function repeat(str,parentStr){
    return parentStr.split(str).length - 1
}

# 19、 简述你对BFC规范的理解

高度塌陷：子元素设置 float了
解决：1、父元素 overflow：hidden 2、父元素也设置 float

上下margin重叠

其中一个div套一个div，设置overflow：hidden


# 20、 iframe框架都有哪些优缺点？

好：
可以实现异步刷新，单个 iframe 刷新不影响整体窗口的刷新

可以实现跨域，每个 iframe 的源都可以不相同

多页面应用时，对于共同的 header, footer 可以使用 iframe 加载，拆分代码（导航栏的应用）

不好：

每一个 iframe 都对应着一个页面，也就意味着多余的 css, js 文件的载入，会增加请求的开销

如果 iframe 内还有滚动条，会严重影响用户体验

window.onload 事件会在所有 iframe 加载完成后才触发，因此会造成页面阻塞


# 21、写一个加密字符串的方法

<!-- 1、btoa base64加密方法 -->

<!-- 2、String.fromCharCode(s.charCodeAt()） -->

<!--  利用 base64, 浏览器环境自带 btoa / atob 方法
 Node.js 需要引入相关库 -->
const str = "abcdefg";

console.log(btoa(str));
console.log(atob(btoa(str)));

<!-- 凯撒密码 -->
const encodeCaesar = ({str = "", padding = 3}) =>
  !str
    ? str
    : str
        .split("")
        .map((s) => String.fromCharCode(s.charCodeAt() + padding))
        .join("");

const decodeCaesar = ({str = "", padding = 3}) =>
  !str
    ? str
    : str
        .split("")
        .map((s) => String.fromCharCode(s.charCodeAt() - padding))
        .join("");

console.log(encodeCaesar({str: "hello world"}));
console.log(decodeCaesar({str: "khoor#zruog"}));

# 22、清除浮动的方式有哪些及优缺点？

什么是盒子塌陷？
外部盒子本应该包裹住内部的浮动盒子，结果却没有。

解决方式：

1、父元素也整上 float
2、<div style="clear:both;"></div>
3、用overflow:hidden清除浮动


# 23、简述下html5的离线储存原理，同时说明如何使用？

todo:
https://github.com/haizlin/fe-interview/issues/22

# 24、写一个判断数据类型的方法

todo:
function type (obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');
}

console.log(type([]))  //"Array"
console.log(type(1))  //"Number"

# 25、简述下你理解的优雅降级和渐进增强

总结了一下前面老哥的回答。

渐进增强和优雅降级这两个概念是在 CSS3 出现之后火起来的。由于低级浏览器不支持 CSS3，但是 CSS3 特效太优秀不忍放弃，所以在高级浏览器中使用 CSS3，而在低级浏览器只保证最基本的功能。
优雅降级

先不考虑兼容，优先最新版本浏览器效果，之后再逐渐兼容低版本浏览器。
渐进增强

考虑兼容，以较低（多）浏览器效果为主，之后再逐渐增加对新版本浏览器的支持，以内容为主。也是多数公司所采用的方法。

# 26、 浏览器内多个标签页之间的通信方式有哪些？

todo:
https://xv700.gitee.io/message-communication-for-web/
跨域:
webSocket
postMessage

非跨域:
worker: SharedWorker: SharedWorker可以被多个window共用，所以可以用来跨页面传输数据，但必须保证这些标签页都是同源的(相同的协议，主机和端口号)

localStorage
Cookies


# 27、简要描述下什么是回调函数并写一个例子出来

回调函数就是指函数在初始定义的时候先不执行，等满足一定条件以后再拿出来执行。如下：
setTimeout(() => { console.log('在本轮任务最后执行!') }, 0);

主要用于异步操作 例如网络请求 防止页面同步代码阻塞导致渲染线程停止

xxx.addEventerlisten('click', function() {
  
});

let promise = new Promise((resolve, reject) => {
    resolve(xx)
})
    .then((xx) => {
      
    })

# 28、对比下px、em、rem有什么不同？

px 绝对像素值
em 相对于自身的一个百分比
rem 相对于根元素的比例

1em = 当前元素的字体大小，1rem = 当前html元素的字体大小

0.5em 当前元素字体一半大小

关于em，存在两种情况：

用于font-size属性时，是该元素继承的font-size缩放因子，也就是相对于父元素的font-size大小；
用于计算盒模型大小时，不是基于继承的font-size，而是基于元素自身计算的font-size

# 29、viewport常见设置都有哪些？

width：device-width 设置 layout viewport 的宽度
height：device-height 设置 layout viewport 的高度

initial-scale 设置页面的初始缩放值
minimum-scale 允许用户的最小缩放值
maximum-scale 允许用户的最大缩放值
user-scalable 0/1 是否允许用户进行缩放

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
/>

# 30、简要描述下JS有哪些内置的对象

本地对象 内置对象 宿主对象

本地对象：
Object、Array、Date、RegExp、Function、Boolean、Number、String

内置对象：

Global和Math，ECMAScript5中增添了JSON

宿主对象：

浏览器对象有很多，如Window和Document等。
所有的DOM和BOM对象都属于宿主对象

https://segmentfault.com/a/1190000011467723

# 31、css常用的布局方式有哪些？

文档流布局
flex
绝对定位布局
float 布局: 圣杯、双飞燕的布局
珊格布局： 
grid 布局：display: grid;

# 32、你对标签语义化的理解是什么？

正确的标签做正确的事

h5中新增的一些标签article footer nav header main，利于seo

有利于浏览器识别

# 33、网页应用从服务器主动推送到客户端有那些方式？

websocket

WebSocket 是一种在单个 TCP 连接上进行全双工通信的协议

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

EventSource（SSE）

EventSource 接口是 Web 内容与服务器发送的事件的接口。一个 EventSource 实例打开一个持久连接 HTTP 服务器，它发送事件的 text/event-stream 格式。连接保持打开状态，直到通过调用关闭 EventSource.close()。

与 WebSockets 不同，服务器发送的事件是单向的。也就是说，数据消息是从服务器到客户端（例如用户的 Web 浏览器）沿一个方向传递的

Web Push
就是用户订阅了一个站点的 Web Push 服务后，即使用户关闭了浏览器，一旦站点主动发送推送消息，用户都能收到，只要你的电脑是开着的。这是目前谷歌和苹果在 Chrome 和 Safari 上都力推的一种全新推送服务，Firefox 最近也加入了这个阵营。



# 34、写一个获取当前url查询字符串中的参数的方法

1、
function params() {
  const search = window.location.search;
  // 去掉 ？
  search = search.substr(1, search.length);
  const res = {};
  if (!search) return res;
  search.split('&').map(item => {
    const [key, value] = item.split('=');
    res[key] = decodeURIComponent(value);
  });
  return res;
}

2、
function urlParam(){
    const param = {};
    location.search.replace(/([^&=?]+)=([^&]+)/g,(m,$1,$2)=> param[$1] = $2);
    return param;
}

# 35、说说你对css盒子模型的理解

怪异盒模型：
  border-sizing：content
标准盒模型：
  border-sizing：border

# 36、常见的浏览器内核都有哪些？并介绍下你对内核的理解

浏览器内核：浏览器核心的部分，即 渲染引擎，负责对网页语法的解释 并渲染（显示）网页。


Trident （IE内核）
Gecko （FireFox内核）
Webkit （Safari内核，Chrome内核原型）
Blink （Chrome(28及往后版本)、Opera(15及往后版本)和Yandex）

# 37、http都有哪些状态码？

    200成功
    3xx换种方式  不在这了,重定向(301 )
    4xx前端问题   未找到资源
    5xx后端问题   服务器异常



# 38、说说你对javascript的作用域的理解

es5: 全局作用域和函数作用域
es6: 块级作用域

execution context

scopechain  // 作用域链
this // 不用说
variable object // 分配变量的

# 39、::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？

元素前后插入文字或者图片内容的

content: 'prefix'
content: url(http://www.example.com/test.html) 

# 40、html5中的form怎么关闭自动完成？

在部分浏览器上，foucs输入框可以把之前输入过的值自动填入，如果不想自动填入，可以关掉它；

设置form的autocomplete属性为off， 默认是"on" 开启状态

# 41、你最喜欢用哪些编辑器？喜欢它的理由是什么？

必须VS Code，集成git，强大的组件库，用起来爱不释手

# 42、什么是闭包？优缺点分别是什么？

一个作用域访问另一个作用域的变量

因此需要注意内存的使用，并且防止内存泄露的问题。

# 43、position:fixed;在ios下无效该怎么办？

https://github.com/haizlin/fe-interview/issues/43

# 44、为什么HTML5只需要写`<!DOCTYPE HTML>`就可以？

因为 HTML5 与 HTML4 基于的基准不同。HTML4 基于 SGML 因此需要除了 DOCTYPE 外还需要引入 DTD 来告诉浏览器用什么标准进行渲染。DTD 还分为标准模式、严格模式。如果什么都不写，就完全让浏览器自我发挥，会变成怪异模式。

HTML5 不基于 SGML，因此后面就不要跟 DTD，但是需要 DOCTYPE 来规范浏览器的渲染行为。

注：SGML 是通用标记语言的集合。其中有 HTML、XML，因此需要用 DTD 来指定使用那种规范。

# 45、对于加班你是怎么看的？

加班就像借钱，救急不救穷

保证身体健康为主

有意义且有效率的加班

给加班费

# 46、写一个数组去重的方法（支持多维数组）

function flat(arr, target) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      flat(item, target)
    } else {
      target.push(item)
    }
  })
}



# 47、style标签写在body前和body后的区别是什么？

浏览器在渲染页面时 DOM 和 CSSOM 是并行的，
前: 会跟HTML同时渲染
后：浏览器会先渲染HTML，再渲染CSS，形成 FOUC ，既一瞬间的白屏或者样式的突然变化

# 48、title与h1的区别、b与strong的区别、i与em的区别？

title与h1的区别

    定义：
    title是网站标题，一个页面只能有一个
    h1是文章主题

    作用：
    title概括网站信息，可以直接告诉搜索引擎和用户这 个网站是关于什么主题和内容的，是显示在网页Tab栏里的；
    h1突出文章主题，面对用户，更突出其视觉效果，指向 页面主体信息，是显示在网页中的。

    注意：
    如果title为空，但是页面存在h1,b,strong标签，搜索引擎会默认页面title为h1内的内容，所以 得出结论h1是在没有外界干扰下除title以外第二个能强调页面主旨的标记，在一个页面中应该使用且只使用一次h1标记。

b与strong的区别

    定义：
    b(bold)是实体标签，用来给文字加粗
    strong是逻辑标签，作用是加强字符语气

    区别：
    b标签只是加粗的样式，没有实际含义，常用来表达无强调或着中意味的粗体文字
    strong表示标签内字符重要，用以强调，其默认格式是加粗，但是可以通过css添加样式，使用别的样式强调

    建议：为了符合css3的规范语义化，b应尽量少用而改用strong

i与em的区别



    定义：
    i(italic)是实体标签，用来使字符倾斜
    em(emphasis)是逻辑标签，作用是强调文本内容

    区别：
    i标签只是斜体的样式，没有实际含义，常用来表达无强调或着重意味的斜体，比如生物学名、术语、外来语；
    em表示标签内字符重要，用以强调，其默认格式是斜体，但是可以通过CSS添加样式。

    建议：为了符合CSS3的规 范，i应尽量少用而改用em

    tootip:
    物理元素是告诉浏览器我应该以何种格式显示文字，逻辑元素告诉浏览器这些文字有怎么样的重要性。
    对于搜索引擎来说em和strong比i和b要重视的多。


# 49、你在的公司有没有做代码审查（CodeReview）？如果有是怎么做的？如果没有你觉得应该怎么做才更好？

- 有独立的代码审查部门，定期发送邮件给相关人员，里面有本部门全部项目的代码质量统计，在代码过差时依次向上级发通知
- 依据每个组内风格，有的组在每次合并生产环境都会review
- 总的来说代码审查是好事，但如果出现咸鱼池塘以及产品流程不规范导致迭代需求过多而不合理，会造成很多困扰，自身也可能流于形式，一定要结合实际情况来看

# 50、返回到顶部的方法有哪些？把其中一个方法出来

1、document.documentElement.scrollTop = 0;
2、点击元素 加 window.location.href += '#'
3、window.scrollTo(0,0)
