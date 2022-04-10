let a = {
    value: 1
}

function getValue(name, age) {
    console.log('name', name);
    console.log('age', age);
    console.log(this.value)

}

getValue.call(a, 'sunbai', 27)
getValue.apply(a, ['sunbai', 27])
getValue.bind(a, ['sunbai', 27])(); // bind 实现柯理化

// call
// call 做的事情，将函数的this指向想指的obj
// 先说第一步改变this怎么实现，其实很简单，只要将方法fn添加成对象obj的属性不就好了

// 定义在Function的原型上
Function.prototype = myCall = (context) => {

    let args = [], res
    // 少了循环这一项
    for (let i = 1, l = arguments.length; i < l; i++) {
        args.push(arguments[i])
      }
    // 1. 通过context.fn = this来完成 将function作为obj的属性这一步
    context.fn = this;
    // 2. 让obj调用这个函数
    res = context.fn(...args);
    // 3. 调用完删除这个属性
    delete  context.fn
    return res
}

// apply

同上

// bind
Function.prototype.myBind = function(context) {
    // if (typeof this !== 'function') {
    //     throw new TypeError('Error')
    // }

    var _this = this;
    // 把参数采集成数组形式，并去掉第一项数据
    var args = [...arguments].slice(1);
    return function F() {
        // if(this instanceof F) {
        //     return new _this(...args, ...arguments)
        // }
        return _this.apply(context, args.concat(...arguments));
    }
}


//函数柯里化
function fn(x, y) {
    return function (y) {
        console.log(x + y);
    };
};
var fn_ = fn(1);
fn_(1); //2

fn(1)(1) //2


// 防抖

function debounce(fn, delay=300) {
    let timer = null;
    return function() {
        //  如果用户再创建的话，就先把之前的清除掉
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn && fn.apply(this, arguments)
        }, delay)
    }
}

debounce();

// 节流

function throttle(fn) {
    let flag = true;
    return function() {
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, delay)
    }
}

throttle();

