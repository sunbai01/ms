- promise 的使用：

(new Promise(
    (resolve, reject) => {
      setTimeout(function() {
          resolve(111)
      },1000)
    }
))

.then(function(res) {
  console.log('res', res);
  return (new Promise(resolve => {
      setTimeout(function() {
        resolve(222)
    },2000)
  }))
})
// 这个then会跟着新的 promise 走，而不是旧的 promise
// then 接受一个参数。也是一个function
.then(res => {
  console.log('res', res);
})

pending\fulfilled\rejected

- 手写一个promise

// 这个processor在new promise的时候就会执行
// promise 是怎么实现异步的呢

```js
(function(global){
  function Promise(processor) {
      this.status = 'pending';
      processor(
          res => {
            console.log('promise', this)
            this._resolve(res);
          },
          () => {
            this.status = 'rejected';
          }
      );
  }
  // then 和 resolve 谁先的问题
  Promise.protoType = {
      constructor: Promise,

      _taskCallback: function(value, processor, next) {
        var preResult = processor(value);
        // 如果then里返回传的是一个 promise ，这里触发 then
        if(preResult instanceof Promise) {
            preResult.then(res => {
              next._resolve(res);
            })

            preResult.catch(res => {
              next._reject(res);
            })
            return;
        }
        return next._resolve(preResult);
    }

    then: function(onFullfilled){
      this.onFullfilled = onFullfilled;
      // 一个promise 两个then， 链式调用
      this.next = new Promise((resolve, reject)=> {});

      if (this.status === 'fullfilled') {
        this._taskCallback(
          this.currentValue,
          this.onFullfilled,
          this.next
        )
      }
      // 每个 then 返回一个新 promise，相当于一个递归的过程
      return this.next;
    },

    _resolve: function _resolve(res) {
        this.status = 'fullfilled';
        this.currentValue = res;
        if(this.onFullfilled) {
          this._taskCallback(
            this.currentValue,
            this.onFullfilled,
            this.next
          );
        }
    }
  }

  global.Promise = Promise;
})(window);
```




