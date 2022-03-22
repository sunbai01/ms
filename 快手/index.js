function Foo() {
    this.a = 1;
    return {
        a: 4,
        b: 5
    }
    // 这个return了有什么区别吗
}

Foo.prototype.a = 5
Foo.prototype.b = 6
Foo.prototype.c = 7

var o = new Foo();

console.log(o.a);
console.log(o.b);
console.log(o.c);

// 4，5，undefined

// 如果不return 输出1，6，7 

o.c 这里我不懂