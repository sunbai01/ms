1、eventLoop 异步队列是怎么发现栈清空了的
不会，网上没搜到答案
2、node.js 和浏览器的 eventLoop 有什么不同
不会，网上没搜到答案

3、promise是如何实现的
看侯哥教的
4、函数柯里化有了解吗

将多个参数的函数变为接收一个参数的函数，并且返回接受余下的参数且返回结果的新函数的技术

// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3

有什么用呢？

1、参数复用，如果前面的参数一直是一样的，那么就可以复用

// 正常封装check函数进行字符串正则匹配
function check(reg, txt) {
 	return reg.test(txt)
}

check(/\d+/g, 'test')        //false
check(/[a-z]+/g, 'test')     //true

// 使用柯里化函数进行字符串正则匹配
function curryingCheck(reg) {
	return function(txt) {
	    return reg.test(txt)
	}
}

var hasNumber = curryingCheck(/\d+/g)
var hasLetter = curryingCheck(/[a-z]+/g)

hasNumber('test1')      // true
hasNumber('testtest')   // false
hasLetter('21212')      // false

2、提前确认

判断并初始化api的

var on = (匿名函数)();

3、延迟运行
不会，以后再看

5、npm的扁平化管理（dedupe）
https://www.cnblogs.com/zhongmeizhi/p/10613550.html

6、node.js启服务 客户端和服务端请求有什么不同，怎么实现跨域
不会，网上没搜到答案