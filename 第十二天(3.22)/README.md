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