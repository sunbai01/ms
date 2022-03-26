

- promise 的使用：

(new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(111)
    },1000)
}))

.then(function(res) {
  console.log('res', res);
  return (new Promise(resolve => {
      setTimeout(function() {
        resolve(222)
    },2000)
  }))
})
.then(res => {
  console.log('res', res);
})

pending\fulfilled\rejected

- 手写一个promise

```js
(function(global) {
  function Promise(processer) {

      this.status = 'pending';

      processer(
        res => {
          console.log('promise', this);
          this._resolve(res);
        },
        () => {
          this.status = 'rejected';
        }
      );
  }

  Promise.prototype = {

    constructor: Promise,

    taskCallback: function(value, processer, next) {
      var preResult = onFullfiled(this.currentValue);
      this.nextResolve(preResult);
    },
    // then 也传进来一个方法
    then: function(onFullfiled) {
      this.onFullfiled = onFullfiled;

      var nextResolve = null;
      var nextReject = null;
      this.next = new Promise((resolve, reject) => {
        nextResolve = resolve;
        nextReject = reject
      });

      if (this.status === 'fullfilled') {
          this.taskCallback();
      }
      return this.next;
    },

    _resolve: function _resolve(res) {
        this.status = 'fullfilled';
        this.currentValue = res;
        if (this.onFullfiled) {
          this.onFullfiled(this.currentValue);
        }
    }
  }
  global.Promise = Promise;
})(window);

```




