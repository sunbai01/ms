js题目：（50）

# 1、深度克隆对象的方法有哪些，并把你认为最好的写出来

浅拷贝： newArr=[...oldArr]

deep clone

原生：JSON.parse(JSON.stringify(obj1)

递归：todo

# 2、写出几种创建对象的方式，并说说他们的区别是什么？

1、直接创建
var obj = {};
var obj = new Object();
2、工厂模式
3、构造函数模式
4、构造函数 + 原型
5、var obj = obj.create(person);
传入原型对象，输出一个新对象

# 3、写一个使两个整数进行交换的方法（不能使用临时变量）

let a = 1, b= 2

es6:

[a,b]=[b,a]

es5:

a = b+a;
b = a-b;
a = a-b;

# 4、请说说你对事件冒泡机制的理解？

事件流依次为 捕获阶段 目标阶段 冒泡阶段

使用：给父元素绑定事件，用e.target知道是哪个子元素触发这个事件

场景：移入li标签颜色改变

# 5、你对事件循环有了解吗？说说看！

引擎（引擎去关注有没有异步任务了）一遍又一遍检查那些挂起来的异步任务是否满足进入主线程的条件。这种循环检查的机制，就叫做事件循环机制。

# 6、写个还剩下多少天过年的倒计时

const day =  Math.floor((new Date('2019-12-31 23:59:59:999') - new Date()) / 864e5) // 210

# 7、请写出一个函数求出N的阶乘（即N!）

const getN = function (n,sum =1) {
   if(typeof n !=='number'){
       return '请输入数字类型'
   }
   if(n === 0){
       return sum;
   }else{
       sum = sum * n;
       return getN( --n ,sum);
   }
}

# 8、proimise 如何取消

？？？

# 9、csrf 攻击是怎样攻击的？ 如何防御 

防御：
1、get、post、delete 分开，避免用get修改数据
2、避免让第三方站点访问cookie
3、对 referrer 进行验证
4、token
5、阻止第三方请求

# 10、如何捕获 setTimeout 异常

1、try catch
2、promise

# 11、fetch 和 ajax 区别

fetch 直接返回 promise，是对ajax做了一层promise的封装；
ajax是基于 XMLHttpRequest 分别执行成功和失败的回调。

# 12、字符串相连有哪些方式？哪种最好？为什么？

var a = 'aaaa',
var b = 'bbbb'

1、直接相连
var c = a + b;

2、concat
var res = a.concat(b)

3、模板字符串（es6专属）
`${a}${b}`

4、转化为数组然后join

arr.push(a)
arr.push(b)
arr.join("")

模板字符串最好，简单，方便，但兼容性不好;

# 13、什么是事件委托？它有什么好处？能简单的写一个例子吗？

事件委托就是利用了事件冒泡原理，如上所说

事件代理 = 事件冒泡

# 14、document的load 和ready有什么区别？

1、解析html
2、加载样式表和外部脚本
3、解析并执行脚本
4、构建html dom结构 （onReady：dom加载完成）
5、加载图片等外部文件
6、页面加载完毕 （onload：资源加载完成）

# 15、写一个函数找出给定数组中的最大差值

思路：先排序再减

```js

var arr = [1, 2 , 3 , 99]
function cha(arr) {
  var haha = Math.max(...arr) - Math.min(...arr)
  
  return haha;
}

cha(arr);
```

# 16、写出4个使用this的典型例子

// obj
var name= "windows"
var obj = {
  name： "obj",
  foo: function() {
      console.log(this.name)
  }
}
obj.foo();

// window
var name= "windows"
var obj = {
  name: "obj",
  foo: function() {
      console.log(this.name);
  }
}
var res = obj.foo;
res();

// window

var name= "windows"

foo: function() {
    console.log(this.name);
}

foo()

# 17、JSONP的原理是什么？解决什么问题？

动态插入script标签，执行callback回调函数，将回调函数中的参数输出

解决跨域：

1、创建script元素，请求对应路径

2、将回调函数挂载全局

3、将script元素挂在页面上

4、script中的代码会执行window上的回调，并传递响应值

5、script执行完后移除

```js
function JSONP(url, params, callback) {
    const script = document.createElement("script");
    script.src = url + parseObjToParams({...params, callback: "jsonpCallback"});
    document.body.appendChild(script);
    window.jsonpCallback = callback;
    script.onload = () => {
        document.body.removeChild(script)
    }
}

JSONP("http://localhost:3019/asd", {name: "vijay"}, (data) => {
    console.log(data);
});

//server
app.use("/asd", (req, res, next) => {
    res.jsonp({ user: 'tobi' })
});
```

# 18、写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同

<!-- 初步理解：这题考函数式编程 -->

<!-- 我的答案 -->
function sum(x) {
    let num = x;
    return function (y) {
        return num + y
    }
}

sum(x)(y)

<!-- 标准答案 -->

<!-- 函数柯理化 函数 + 闭包 + reduce：首次参数是0-->
function sum1(x, y, z) {
  return x + y + z
}
function sum2() {
  var args = arguments
  return function () {
    var arr = []
    arr.push(...args, ...arguments)
    return arr.reduce((total, item) => total += item, 0)
  }
}
console.log(sum1(6, 9, 14)) //29
console.log(sum2(6)(9, 14)) //29

<!-- reduce 接收一个函数和首次参数，常用于做sum -->

# 19、请说下你对__proto__和prototype的理解

只有构造函数才有prototype，prototype上存放共用的方法和属性
对象上只有__proto__属性，__proto__是指向该对象构造函数的原型属性（即prototype）
Parent.prototype.__proto__ === Object.prototype


# 20、请实现一个flattenDeep函数，把多维数组扁平化

1、判断 isArray() 
2、是的话递归

# 21、写一个方法获取图片的原始宽高

function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var image = new Image();

        image.onload = function() {
            var obj = {
                w: image.naturalWidth,
                h: image.naturalHeight
            }
            resolve(obj);
        };

        image.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}

# 22、有用过HTML5的WebWork吗？它主要解决了什么问题？

没用过，不过看过概念，主要解决了单线程的问题 由于js执行环境是单线程 所以当处理cpu密集型问题（html中一个script标签中一个执行十万次的js）时就没办法了 这时候就可以使用webwork开启一个子线程进行处理



# 23、举例子说明javascript的变量声明提升和函数声明提升

var getName = function(){
  console.log(4)
}

function getName() {
  console.log(5)
}

getName() // 4 函数声明优先级高于var声明,  故 4 覆盖了 5，输出4

# 24、如何让(a==1 && a==2 && a==3)的值为true，把"=="换成"==="后还能为true吗？

<!-- let a
!(a==1 && a==2 && a==3) -->


const a = { value : 0 };
a.valueOf = function() {
    return this.value += 1;
};

console.log(a==1 && a==2 && a==3); //true

== 将a转化为基本类型的时候，会触发，宽松模式

而 === 的严格模式不会转化，会直接比，这时候重新定义defineProperty即可

var value = 0;
Object.defineProperty(window, 'a', {
    get: function() {
        return this.value += 1;
    }
});

console.log(a===1 && a===2 && a===3) // true

# 25、说说你对数据类型转换的理解是什么？类型转换的方法有哪些？

显示转化：Boolean，Number，String，parseInt，parseFloat，toString，JSON.stringify
隐式转换：运算符号, 流程控制（if,while）

# 26、请解释下什么是cookie隔离？为什么要隔离？如何隔离？

todo。理解不了：https://github.com/haizlin/fe-interview/issues/405

# 27、举例子说说你对js隐式类型转换的理解

宽松模式会发生隐式转换

console.log(1+"1"); // 11
console.log(1 + true); // 2


# 27、formData主要是用来做什么的？它的操作方法有哪些？

用于后端参数处理为multipart/form-data的情况下， 利用 FormData 对象，可以通过 JavaScript 键值对来模拟一系列表单控件
??? 
现在通常用于上传文件 （XMLHttpRequest的 send() 方法来异步提交表单。）

# 27、说说你对base64的理解，它的使用场景有哪些？

1、上传图片时，先将图片转化为base64然后上传

2、对于小质量的图片 我们可以转化为base64 在页面展示

3、url 通过base64加密

# 28、Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？

1.  GET请求会将参数跟在URL后进行传递，也就是会在url中显示

     2.  GET请求有数据长度限制，一般在2000个字符，而POST没有。

     3. GET方式请求的数据会被浏览器缓存起来，POST没有

     4.  GET在某些情况下会有安全问题，POST没有。

     5. 在客户端使用get请求时,服务器端使用Request.QueryString来获取参数

     6. get请求参数会在url中显示，容易被他人窃取，post在请求体中，不会被窃取



    1. POST请求是作为HTTP消息的实体内容发送给WEB服务器。

     2. 客户端使用post请求时,服务器端使用Request.Form来获取参数。 

     3. post一般用于修改服务器上的资源，对所发送的信息没有限制。
     4. post比get更加安全

     5. post需要设置请求头

# 29、说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法

var obj1={
    value: 'a'
}
var obj2 = obj1;
obj2.value='b';
console.log(obj1);//{ value: 'b' }

因为上面的问题，所以需要深拷贝

var obj1={
    value: 'a'
}
var obj2 = Object.assign({},obj1);
obj2.value='b';
console.log(obj1);//{ value: 'a' }

但上面的浅拷贝方法不适合对象套对象，如下

var obj1={
    value: 'a',
    obj3:{
        value2: 'c'
    }
}
var obj2 = Object.assign({},obj1);
obj2.obj3.value2='b';
console.log(obj1);//{ value: 'a', obj3:{ value2: 'b' } }

所以需要用深拷贝，原生方法：JSON.parse(JSON.stringify(obj))

```js

var obj={
    name: 'znl',
    age: 18,
    friend:{
        name: 'borys',
        age: 20
    },
    arr:[1,2,[3,4]]
}

function copy(obj){
    var type=Object.prototype.toString.call(obj);
    if(!(type == '[object Array]' || type == '[object Object]')){
        return 'Type Error!';
    }
    return JSON.parse(JSON.stringify(obj));
}

var obj2= copy(obj);
console.log(obj.friend === obj2.friend)//false
console.log(obj.arr === obj2.arr)//false

```

<!-- todo 补充非原生深拷贝方法 -->

# 30、写一个字符串重复的repeat函数

```
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

# 31、移动端点击事件为什么会有延迟？有哪些方法可以解决？

判断用户是不是双击

禁止缩放、设置默认视口宽度为设备宽度、设置css touch-action:none、fastclick.js

# 32、写一个方法随机生成指定位数的字符串


function getRandomString (length) {
  let str = Math.random().toString(36).substr(2)
  if (str.length >= length) {
    return str.substr(0, length)
  }
    str += getRandomString(length - str.length)
    return str
}

# 33、说说instanceof和typeof的实现原理并自己模拟实现一个instanceof

https://github.com/haizlin/fe-interview/issues/528

# 34、请快速答出此题的答案并解释：var x, y = 1; x + y = ?

x // => undefined
y // => 1
x + y // => undefined + 1 => NaN

Number(undefined) => NaN

# 35、举例说明数组和对象的迭代方法分别有哪些？


Array

    for...in 
    for-of

Object

    用for-of遍历类数组对象


# 36、请编写一个对象obj满足 obj=='a' && obj=='b' && obj=='c'

valueOf


# 37、举例说明什么是IIFEs？它有什么好处？

形成一个函数作用域，不污染全局变量

# 38、举例说明什么是IIFEs？它有什么好处？

写法：
(function(){
     var name = 'shaw';
})()

es5：在let、const块级作用域未出来时，我们常常会写出这样的代码

for (var i=0;i<10;i++) {
     (function(i){
          setTimeout(function(){
               console.log(i);
          }, 100*i);
     })(i)
}

# 39、举例说明什么是decodeURI()和encodeURI()是什么？

eg: encodeURI('http://example.com/端点?键=值') => 
'http://example.com/%E7%AB%AF%E7%82%B9?%E9%94%AE=%E5%80%BC'

decodeURI() 解码

# 40、在js中怎么捕获异常？写出来看看？应该在哪些场景下采用呢？

try {
    ...
    throw ...
    ...
} catch (err) {
    console.log(err)
} finally {
   表示不管是否出现错误，都会执行这个内部的代码。
}

 js提供了 try...catch结构，对错误进行收集，并让程序继续向下执行。

 认为可能报错的地方时都可以使用try...catch结构；比如：开发小程序，同步获取用户手机信息时，判断浏览器是否支持XMLHttpRequest对象时等

# 41、【算法】用js实现一个九九乘法口诀表

todo

# 42、举例说明js如何实现继承？

```js
function Foo(bar) { this.bar = bar }
Foo.prototype.baz = 'test'
let qux = new Foo('hello')
qux.bar // => 对象本身的属性：'hello'
qux.baz // => 对象原型链上 Foo 的原型属性：'test'
// qux 的原型链：(qux ->) Foo.prototype -> Object.prototype

```

原型继承

Foo2.prototype = new Foo() // 将 Foo2 的原型链指向 Foo， Foo 来自上一个例子

var arr = [1,2,3 ];
console.log(arr.toString());//1,2,3
数组的构造函数是Array();

改写toString方法：
Array.prototype.toString = function(){ 
   return 'Hello world' 
}


1.通过构造函数实现继承：

function Parent1 () {
  this.name= '111';
}
function Child1 () {
  Parent1.call(this);
  this.type='222';
} 

2.通过原型对象进行继承：

function Parent2 () {
  this.name= '111';
}
function Child2 () {
  this.type='222';
} 
Child2.prototype = new Parent2();

3.组合方法进行继承：

function Parent5 () {
  this.name= '111';
}
function Child5 () {
  Parent5.call(this);
  this.type='222';
} 
Child5.prototype = Object.create(Parent5.prototype);
Child5.prototype.constructor = Child5;

# 43、请描述你对浏览器同源策略的理解

todo

# 44、js延迟加载的方式有哪些？

让JS最后加载
动态创建DOM方式
defer 属性
async 属性

下面两种办法比较low：
使用jQuery的getScript方法
使用setTimeout延迟方法


# 45、把Script标签放在页面最底部的</body>之前和之后有什么区别？浏览器会如何解析它们？

HTML 2.0起放在“body标签闭合之后”就是不合标准的。之所以但是浏览器却不会报错，是因为如果在“body标签闭合之后”后再出现script或任何元素的开始标签，都是parse error，浏览器会忽略之前的，即视作仍旧在body内。所以实际效果和写在“body标签闭合之前”之前是没有区别的。所以要么放head标签里，要么放 </body> 之前。

放在dom之前拿不到dom，除非是写在window.onload里面，如果有报错，还会页面白屏或者渲染一半 || 放在最后，dom渲染完了，报错的话可能不能响应用户行为 || 重开一个线程同步运行

# 46、请写一个sleep（暂停）函数

todo

# 47、js异步加载有哪些方案？

首先要弄明白浏览器做了什么

1、解析html
2、加载样式表 和 js
3、解析并执行js
4、构建html dom结构
5、加载图片等外部引入资源
6、完毕


1.将script标签放在body结束标签之前（也就是放在最后）; 把2、3 放在 5 后面

<html>
<head></head>
<body>
 .....
<script type="text/javascript" src='...'></script>
</body>
</html>

这种方案会先加载dom树，然后再加载js脚本

2、在onload方法中给dom树动态添加script标签

<html>
<head></head>
<body onload="() => {
  var element = document.creatElement('script');
  element.type = 'text/javascript';
  element.src = '...';
  var headTag = document.getElementsByTagName('head')[0];
  headTag.insertBefore(element, headTag.firstChild);
}">
.....
</body>
</html>

这种方案也是先加载dom树，然后触发onload方法添加script标签加载js脚本

3.使用defer属性: 这种方案会并行加载dom树和下载js脚本，js脚本下载后会等dom树解析完再执行

<html>
<head>
    <script defer type='text/javascript'></script>
</head>
<body >.....</body>
</html>

4、使用async属性

<html>
<head>
    <script async type='text/javascript'></script>
</head>
<body >.....</body>
</html>

这种方案也会并行加载dom树和下载js脚本，js脚本下载完后立刻并行执行


# 48、写个方法随机打乱一个数组

思路：

// 随机交换
function shuffle(arr) {
    arr.forEach((_, idx) => {
        const targetIdx = Math.floor(Math.random() * arr.length)
        ;[arr[idx], arr[targetIdx]] = [arr[targetIdx], arr[idx]]
    })
    return arr
}

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// => [6, 4, 1, 8, 5, 2, 10, 9, 3, 7] or else

打乱下标有点慢了

# 49、请描述下null和undefined的区别是什么？这两者分别运用在什么场景？

null 是“空值”，表示某个对象/资源并不存在；undefined 是指一个属性或变量还未赋值。
当一个变量本该存储一个对象，或一个函数应该返回一个对象，但这个对象却并不存在时，使用 null 来表示这种情况；
当一个属性或变量没有赋值，又或是一个函数没有返回值（如 C++ 里的 void），则它是 undefined；但通常我们不会将一个变量主动地赋为 undefined。

null == undefined // true

null === undefined // false

Boolean(null) // false

Boolean(undefined) // false

Number(undefined) // NAN

Number(null) // 0

# 50、解释下为什么{} + [] === 0为true？

{} + [] === 0
+[] === 0
0 === 0
true


html题目：（20）

# 1、说说你对HTML元素的显示优先级的理解

帧元素（frameset）的优先级最高，表单元素比非表单元素的优先级要高。
表单元素包括：文本输入框，密码输入框，单选框，复选框，文本输入域，列表框等等；
非表单元素包括：连接（a），div,table,span等。

# 2、 html和html5有什么区别呢？

1.HTML5 只需要写<!doctype html>就行了
2.新增与语义化标签【header、footer、section、article等】
3.canvas替代Flash、video、SVG

# 3、Standards模式和Quirks模式有什么区别？

标准：宽度为自己本身

怪异：宽度 = 自己 + padding + border，不加margin


* { box-sizing: border-box; } 为标准；content-box为怪异

# 4、用一个div模拟textarea的实现

多行截断

自定义滚动条


<!DOCTYPE html>
<html>
<head>
    <title>用一个div模拟textarea的实现</title>
</head>
<style>
.edit{
    width: 300px;
    height: 200px;
    padding: 5px;
    border: solid 1px #ccc;
    resize: both;
    overflow:auto;
}
</style>
<body>
    <h3>用一个div模拟textarea的实现</h3>
      <div class="edit" contenteditable="true">
        这里是可以编辑的内容，配合容器的 overflow ，多行截断，自定义滚动条，简直好用的不要不要的。
    </div>
</body>
</html>


# 5、HTML与XHTML二者有不同

XHTML 的规范更加严格。XHTML 元素必须被正确地嵌套。

    标签必须闭合 <div></div>, <img />
    标签名和属性名必须小写

# 6、html5哪些标签可以优化SEO?

优化 SEO 应该是可以给爬虫有比较明确的含义的标签。尽可能地不要使用 div 到底。

    meta: meta 标签中的 keywords 和 description
    h1-h6
    nav
    section
    article
    footer
    header

# 7、说说你对cookie和session的理解

只是 cookie 是存放在客户端而 session 是记录在服务端。cookie 可以在客户端生成也可以由服务器生成传给客户端

一般 cookie 会记录一个由服务端生成的 token，session 同样会记录这个 token。服务端就可以通过 token 来鉴别身份。

# 8、title与h1、b与strong、i与em的区别分别是什么？

todo

# 9、html5都有哪些新的特性？移除了哪些元素？

新增特性

    canvas
    svg
    video
    drag & drop
    localStorage/sessionStorage
    语义化标签: header/nav/section/article/footer
    input 类型: date/datetime/email/range

移除元素

    applet
    big
    font
    frame/frameset

# 10、webSocket怎么做兼容处理？

todo

# 11、如何让元素固定在页面底部？有哪些比较好的实践？

position:fixed;

# 12、说说video标签中预加载视频用到的属性是什么？

preload

# 13、页面中怎么嵌入Flash？有哪些方法？写出来

<object width="550" height="400">
  <param name="movie" value="somefilename.swf">
  <embed src="somefilename.swf" width="550" height="400"></embed>
</object>

# 14、HTML5如何使用音频和视频？

video和audio标签

# 15、说说你对WEB标准和W3C的理解与认识？


我理解的就是：

html是名词--表现
css是形容词--结构
javascript是动词--行为

W3C对web标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点

1.对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对SEO很有帮助）

标签字母要小写
标签要闭合
标签不允许随意嵌套
2.对于css和js来说

尽量使用外链css样式表和js脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。
样式尽量少用行间样式表，使结构与表现分离，标签的id和class等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版

这里顺便解释下什么是web标签语义化，即用正确的标签做正确的事情。

# 16、说说你对target="_blank"的理解？有啥安全性问题？如何防范？

新开标签页 

问题：如果你的网站上有一个使用了 target="_blank" 的 a 标签链接，一旦用户点击了这个链接打开了新的标签页，如果这个标签页跳转的网站内存在的恶意代码，那么你原本页面的网站可能会被转到一个假的页面。也就是说，当用户回到原本的页面时，他看到的可能就是已经被替换过的钓鱼页面了。


一个用户点击了这个链接在一个新的标签页打开这个新的网站。这个网站可以根据用户跳转新页面的 HTTP 请求中的 header 里的 Referer 字段来确定这个用户的来源。

结合跨域的看
https://github.com/haizlin/fe-interview/issues/185

# 17、Ajax与Flash的优缺点分别是什么？

Ajax 只是一套异步发网络请求然后更新页面的实践方案，Flash 是一个浏览器插件，但提供的是相对完整的运行时平台。Flash 被移动端抛弃了，连亲娘都不要它了，9102年了都。


# 18、Form表单是怎么上传文件的？你了解它的原理吗？

简单来说就是把文件转化成字节流，然后使用http进行传输，后端接受后在把二进制转化成原先的文件格式。

当一个表单包含<input type="file">时，表单的enctype必须指定为multipart/form-data（表明表单需要上传二进制数据），method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。multiple="multiple"说明可以同时上传多个文件

<form action="http://localhost:3001/api/tools/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="fileToUpload">
    <button type="submit">Submit</button>
</form>

# 19、From表单提交时为什么会刷新页面？怎么预防刷新？


因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。


不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互。另一个偏方是使用 iframe 作为 form 的 target，不过 JS 处理方面不如让浏览器别管自己全手动发请求来得简单

# 20、web workers有用过吗？能帮我们解决哪些问题？

提供协程能力，如果有一个比较密集的计算任务，可以放到另一个进程中处理，等处理好了再把结果传回主程，这样主要进程就不会阻塞，页面可以正常渲染和响应

web workers的作用就是为 JavaScript 创造多线程环境

Web Worker 有以下几个使用注意点：

1、始终运行，比较耗费资源

2、需要与主脚本同源

3、也无法使用document、window、parent这些DOM对象

4、通信联系： 不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

5、脚本限制：Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

6、文件限制：无法读取本地文件

http://www.ruanyifeng.com/blog/2018/07/web-worker.html


css题目：（5）


# 1、如何自定义radio按钮的样式

todo

# 2、说下你对background-size的理解，它有什么运用场景？

设置背景图的大小

# 3、css怎样使每个字符宽度一样？

无解

# 4、移动页面底部工具条有3个图标，如何平分？在设置边框后最后一个图标掉下去了怎么办？

1、获取设备宽度
2、flex 平分
3、box-sizing 设置为 border

# 5、请问background-attachmentn属性有什么用途？

background-attachment:scroll(默认)/fixed;设置背景图像是否随着文档滚动


周级综合题目：（20）

# 1、对比下px、em、rem有什么不同？

px: 绝对固定的值，无论页面放大或者缩小都不会改变。
1em = 当前元素的字体大小，1rem = 当前html元素的字体大小


# 2、说说你对arguments的理解，它是数组吗？

arguments是一个对象。

js不能像java一样实现重载，arguments对象可以模拟重载。

js中每个函数都会有arguments这个实例，它引用着函数的实参，可以用数组下标的方式"[]"引用arguments的元素。arguments.length为函数实参个数，arguments.callee引用函数自身。

arguments他的特性和使用方法

特性：

1.arguments对象和Function是分不开的。

2.因为arguments这个对象不能显式创建。

3.arguments对象只有函数开始时才可用。

使用方法：

虽然arguments对象并不是一个数组，但是访问单个参数的方式与访问数组元素的方式相同

例如：

arguments[0],arguments[1]...


# 3、怎样修改chrome记住密码后自动填充表单的黄色背景？

nput:-webkit-autofill {
  -webkit-box-shadow: 0 0 3px 100px #eee inset; //改变填充背景色
}

# 4、说说你对影子(Shadow)DOM的了解

shadow Dom是html给出的一个用来封装的虚拟DOM与普通的DOM不相同，他更像伪类元素，去修饰DOM，或者说，他是一个DOM的HTML组件，常见标签为video等媒体标签（这些已经封装好的标签，有对应样式）。


# 5、在浏览器中输入url到页面显示出来的过程发生了什么？

DNS解析得到ip，通过ip向服务器发起tcp链接，发送请求，服务器返回数据，浏览器解析渲染显示，关闭连接。

# 6、解释下这段代码的意思！

[].forEach.call($$("*"), function(a){ 
  a.style.outline = "1px solid #" + (~~(Math.random()*(1<<24))).toString(16) 
})

$$('*') => document.querySelectorAll('*') 

~~a => parseInt(a)
1<<24 => 对二进数1小数点右移24位

(parseInt(Math.random()*(1<<24)).toString(16)) => 获得了一个位于0-16777216之间的随机整数，也就是随机颜色，再使用toString(16)将它转化为十六进制数。


[].forEach.call(
        document.querySelectorAll('*'),
        function(a){
            a.style.outline="1px solid #" + 
            (parseInt(Math.random()*(1<<24)).toString(16))
        }
    )


# 7、rgba()和opacity这两个的透明效果有什么区别呢？

rgba 只对颜色有影响。如果放在 background 上的话，只对背景颜色有影响。不会影响元素中的其他内容以及子元素内容。

opacity 的透明效果是作用整个元素以及其子元素上的。

# 8、说说你对<meta>标签的理解

https://github.com/haizlin/fe-interview/issues/98

# 9、在工作中能让你最有成就感的是什么？并介绍下你最得意的作品吧

目前的工作主要是基础库维护和编写、UI组件制作、一个基于Vue的框架的维护。主要偏向基础设施而非业务编写。
使我最有成就感的是：这些基础设施被同事使用并称赞的时候。就像自己的儿子考上了清华北大一样的。

# 10、写一个获取数组的最大值、最小值的方法

js原生：

Math.max.apply(Array,[25,62,91,78,34,62]) //  91
Math.min.apply(Array,[27,64,90,78,34,62]) // 27

// 利用 reduce 冒泡排序
const getMax =  arr =>  arr.reduce((acc, val) => acc = acc < val ? val : acc)
getMax([25, 62, 91, 78, 34, 62]) // 91

# 11、请描述css的权重计算规则


    !important>id>class>标签>子代、相邻选择器>通配符选择器


# 12、 解释下CRLF是什么？

    CRLF 是carriagereturnlinefeed的缩写。中文意思是回车换行。

CR 回车 \r
LF 换行 \n

# 13、写一个方法判断字符串是否为回文字符串

会了，记住 reverse 是反转数组的

# 14、描述下你所了解的图片格式及使用场景



▍PNG：主要用于小图标或颜色简单对比强烈的小的背景图。

JPG： 于这种格式图片对色彩表现比较好，所以适用于色彩丰富的图片。主要用于摄影作品或者大的背景图等。不合适文字比较多的图片。

WebP： WebP既支持有损压缩也支持无损压缩。将来可能是JPEG的代替品

# 15、 对于有压力时，你是怎么抗压的？

现代人有点压力的正常的，我觉得抗压也是每一个成年人都要掌握的。
或者说排解压力比较准确吧，每个人都不一样，这里我就分享自己的解压方式吧。
解压方式：

    听歌，压力大的时候在网易云上听会自己喜欢的歌。
    运动，如果有时间就去运动吧，有时间就去打球、跑步，运动完之后一天的压力和疲惫都会减轻了很多。
    找朋友倾诉，记住要找知心朋友，尽量不要找家人，不要让家人担心。

其实我觉得最重要的一点是：提高自己的能力，让那些对你有压力的事情变得简单，你自然就不会有压力的。

# 16、写一个方法把0和1互转（0置1，1置0）

~x + 2

# 17、让网页的字体变得清晰，变细用CSS怎么做？



    font-weight + font-family
    font-weight 来控制粗细还是需要看对应的字体有没有对应的变种字体。因此这就和 font-family 相关。

    -webkit-font-smoothing
    这个属性是 Chrome 的抗锯齿属性。加上后会显得细一些，但是只针对 webkit 内核的浏览器才有效。


# 18、DOM和BOM有什么区别？

浏览器和文档

# 19、你在上一家公司工作流程是怎么样的，如何与其他人协作的？是怎样跨部门合作的？

前端开发工作流程：

项目描述

产品或功能研讨阶段

UI设计阶段

开发阶段

软件测试阶段

软件发布阶段

# 20、造成内存泄漏的操作有哪些？

递归，循环引用，闭包


算法题:

1、给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2

示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1

示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

示例 4:

输入: nums = [1,3,5,6], target = 0
输出: 0

示例 5:

输入: nums = [1], target = 0
输出: 0

二分法，时间复杂度是O(logn)
indexOf + filter index

var searchInsert = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1, ans = n;
    while (left <= right) {
        let mid = ((right - left) >> 1) + left;
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};


2、给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

示例 2：

输入：nums = [1]
输出：1

示例 3：

输入：nums = [5,4,-1,7,8]
输出：23

var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};


todo: 

vue双向绑定原理




































