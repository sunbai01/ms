// console.log('test');

// 防抖
定义：设置一个时间段内，如果在这个时间段用户有新的行为，则重新计时，没有则响应用户行为；
举个例子：input框出搜索结果

var debounce(fn, delay) {
	var timer = null;
	return function() {
		clearTimeOut(timer);
		timer = setTimeOut(() => {
			fn.apply(this, arguments);
		}， delay ? delay : 300)
	}
}

debonce(fn, delay);

// 节流
定义：用户一段时间内请求多次的时候，只响应最后一次的请求

var throttle = (fn, delay) => {
	var startTime = 0;
	return function(){
		var endTime = Data.now();
		if(endTime - startTime > delay) {
			fn.apply(this, arguments);
			var startTime = endTime;
		}
	}
}

throttle(fn, delay);



