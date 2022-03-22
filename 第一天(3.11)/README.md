// 每天需要刷 200 道题。50 html;50 css;50 js;50 汇总题目；每天3道算法题

# 1、在js中箭头函数如何获取参数？

我的答案：

var sunbai = (arg) => {
	console.log('arg', arg)
}

sunbai(); // undefined

正确答案：


var sunbai = (...arg) => {
	console.log('arg', arg)
}

sunbai(1,2,3); // [1, 2, 3]

* 知识点：...放在赋值那一侧称为扩展（spread）运算符，放在被赋值的那一侧（以上）称为剩余（rest）运算符


普通函数收集参数的方式：arguments，这种方式箭头函数用不了

function func1(a, b) {
  console.log(arguments); // 他是个类数组对象
}

func1(1, 2);

# 2、在js中对箭头函数使用new会怎么样？

会报 typeError 错误
因为 箭头函数是没有prototype属性的，实例的_proto_ （[[Prototype]]）本来要指到构造函数的 prototype 上的，但现在没地方指了。

# 3、new做了什么

1、新开辟一个内存，创建一个对象
2、将新对象的__proto__赋值为构造函数的原型prototype
3、将this绑定到这个新对象上
4、如果构造函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象，否则返回构造函数返回的对象

# 4、*vue是怎样依赖收集的

# 5、js中变量回收机制是什么

1、全局变量不会被回收
2、不被引用的局部变量（闭包）会被回收

虽然有这种机制，但代码写的不好还是会造成内存泄露，比如：
全局变量重名问题，使用严格模式

闭包引起的内存泄露

## 什么是闭包？
函数（本质上是一个对象）内部能访问函数外部的变量，闭包和return没有任何关系

function outer() {
	let a = 1
	function inner() {
		console.log(a);
	}
	inner()
}

outer();

# 6、js数组中不会改变原有数组的方法有哪些？

forEach() 只循环
some() 入参：数组中每一项 return + 条件 出参：布尔
filter()  入参：数组中每一项 return + 条件 出参：符合条件的数组
slice() 1,2 开始结束下标 [)
concat() 原.concat(新)
*map() 
*reduce()

# 7、请说说在js中Object.seal的作用

封闭一个对象，将对象的属性标记为不可配置，阻止对象属性添加和删除

# 8、js的作用域有哪些？

末定义直接赋值的变量自动声明为拥有全局作用域

es5：全局作用域、函数作用域

没有块级作用域带来的问题:（这个例子很好，一定要记住）
var i = 1;
function outer() {
    console.log(i);
    if(true) {
    	var i = 7;
	}
}
outer();
console.log(i)
// 输出：undefined 1 本意是想输出：1，1

es6：新增块级作用域
let i 只在if这个区域内可访问，其他输出 no defined

# 9、js函数调用方式有哪些？

func()
func.apply();
func.call();

# 10、数组扁平化（算法）

遍历数组arr，若arr[i]为数组则递归遍历，直至arr[i]不为数组然后与之前的结果concat。

这是我写的一个小算法

let testArray = [1,[2,3,[4,5]]]
function bianping(arr) {
    let sunbai = [];
    // flatten的polyfill
    function bianli(arr){
        for(var i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])) {
                bianli(arr[i])
            }
            else {
                console.log('arr[i]', arr[i]);
                sunbai.push(arr[i]);
            }
        }
        
    }
    bianli(arr);
    return sunbai;
}
var res = bianping(testArray);
console.log(res);   


# 11、 script所在的位置会影响首屏显示时间吗？

会， script所在的位置会影响首屏显示时间

# 12、*跨域







