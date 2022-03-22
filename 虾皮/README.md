# meta标签要写在哪里？ 
head 标签内

https://www.php.cn/div-tutorial-417816.html


1、<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">

name 属性 可选：keywords/description

content 属性值

2、<meta http-equiv="content-Type" content="text/html;charset=utf-8"> 
http-equiv属性是旧的HTML，不推荐

<meta charset='utf-8'>

charset 告诉浏览器页面代码是用 xxx 编码方式；

# position 和 relative

relative 相对他正常位置进行定位

position 相对于 static 定位以外的第一个父元素进行定位

# 用闭包生成一个随机ID

function ifId() {
    var n = Math.random();
	return function() {
		return n++;
	}
}

var cat_id = ifId();
cat_id();

# 跨域（不会）

# call apply bind，如何实现一个bind

三者都是用来改变this指向的，只不过bind需要自执行；

自执行的话返回的就是一个函数，函数需要绑一下this给传入的对象

Function.protoType.myBind = function (context) {
	var self = this;
	return function() {
		return self.apply(context,arguments)
	}
}

# Function.prototype.__proto__指向什么

实例的__proto__指向构造函数的 prototype
构造函数的__proto__ 指向 Object.prototype
Object.prototype的__proto__指向 null

# 箭头函数和普通函数有什么区别

写法不一样
this指向不一样，箭头函数的this会捕获其所在的上下文的this值
普通函数的this指向是动态的，看怎么定义他，有时候指向window，有时候指向调用



