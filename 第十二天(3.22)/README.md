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