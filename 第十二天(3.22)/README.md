html（50）

# 1、websocket握手成功会返回一个干什么状态吗？是200吗？

WebSocket protocol 是HTML5一种新的协议。它实现了浏览器与服务器全双工通信(full-duplex)。在握手阶段借用http协议传输，建立连接后采用TCP协议传输。

101状态码：切换协议 请求者已要求服务器切换协议，服务器已确认并准备切换

握手阶段websocket利用http进行传输，握手成功后，返回状态码101 告知浏览器，服务器已确认并准备切换协议

js题目（50）

# 1、实现一个函数sum, 满足以下需求:
sum() == 0
sum(1)(2)(3)() == 6
sum(3)(4)() == 7
sum(v1)(v2)...(vn)() == v1+v2+...+vn

function sum() {
	var args = arguments;
    var res = 0;
    for(var i = 0; i < arguments.length; i++) {
        res+=args[i];
    }
	if (arguments.length == 1) {
        res += arguments[0];
        console.log('res', res);
    	return sum;
	}
    return res;
}

console.log(sum(1)(2)(3)());

有bug，待想

# 2、写一个方法，实现树的路径查询[代码]

https://github.com/haizlin/fe-interview/issues/2805

# 3、给定特定的字符串，写个方法判断是否以元字母结尾

    (str)=>/[aeiou]$/i.test(str)

# 4、


css（50）

# 1、用css3实现伪3D的文字效果

text-shadow 颜色、偏移量、模糊半径，颜色、偏移量、模糊半径

# 2、css如何让height:100%起作用？

普通元素：当前元素的包含块的高度是明确的即有效，当前元素的包含块高度也是百分比，就再往上找

绝对定位（absolute）元素的高度百分比计算是往上找直到找到一个非static的元素，就以这个元素作为高度计算依据，如果没找到就是html的高度作为计算依据，body默认没有高

html的高度百分比也是相对浏览器窗口高度

# 3、css的height:100%和height:inherit有什么区别？

在 absolute ，height:100%对应的是上一个relative的元素

height: inherit依然是他的父级元素

# 4、如何解决html设置height：100%无效的问题？

在外层包一个给定高度的div
height：100vh

# 5、用css画出中间一个大圆，四周有12个小圆环绕并和大圆是同心

todo

# 6、用css画出两个大圆相交，可以在各自圆及相交部分输入文字

todo

# 7、用css画出一个圆圈，里面有个对号

todo

# 8、用css画出一个圆圈，里面有个叉号（不能用英文字母x）

todo

# 9、CSS content属性特殊字符有哪些？

https://blog.csdn.net/zx562602419/article/details/81020342

# 10、使用css画个鸡蛋

todo

# 11、使用css画一根燃烧中的蜡烛

todo

# 12、写出在不固定宽高的元素在固定高度的情况下水平垂直居中的方法

flex布局；还有就是可以用定位也可以实现等等；
flex：父div：｛display：flex； justify-content: center;align-items: center;｝；
定位方法，相对定位在通过偏移元素实现水平垂直居中等等，我常用就是这两种，使用的时候注意兼容性

.parent{ 
    position: relative;
}

.child{ 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translateX(-50%) translateY(-50%);
}

---------------------------------------------------

.parent{
    position: relative;
}

.child{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    width:100px;
    height:100px;
    margin:auto; 
}

# 13、一个项目中有很多无用的css代码，怎么找到并清除这些无用的代码？

1.使用浏览器插件
2.使用PurifyCSS
3.chrome浏览器 F12审查元素的Audits，手动删

# 14、你们团队中css的class命名采用的是什么方式呢？下划线还是横线还是驼峰？

形式 .a .a-b

不用驼峰和_，因为这两样都需要 shift 辅助输入, 驼峰越多，按下shift 键的次数就越多。

# 15、举例说明CSS特性检测的方式有哪些？

原生的 @supports 的性能肯定是最好的，而且无需引入外部 javascript ，首推这个，但是无奈兼容问题，目前来看不是最好的选择。


Modernizr 功能强大，兼容性好，但是需要引入外部 javascript，多一个 http 请求，如果只是进行几个特性检测，有点杀鸡用牛刀的感觉。
针对需要的特性检测，使用 javascript 实现一个简单的函数，再把上面用到的方法封装一下：

/**
    用于简单的 CSS 特性检测
    @param [String] property 需要检测的 CSS 属性名
    @param [String] value 样式的具体属性值
    @return [Boolean] 是否通过检查
*/

    (function(property, value) {
        // 用于测试的元素，隐藏在页面上
        var ele = document.createElement('div');
        // 只有一个参数的情况
        if (arguments.length === 1) {
            if (property in ele.style) {
                return true;
            }
            // 两个参数的情况
        }
        else if (arguments.length === 2) {
            ele.style[property] = value;
            if(ele.style[property]) {
                return true;
            }
        }
        ele = null;
        return false;
    })("font-size",'10px');

# 16、如何使用css给一个正方形添加一条对角斜线？

   background:linear-gradient(45deg,transparent 49.5%,deeppink 49.5%,deeppink 50.5%,transparent 50.5%);




















