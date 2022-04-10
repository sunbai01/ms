Eventloop事件模型

浏览器是我们进程运行的宿主，一个进程对应多个线程，网页中我们引入的一个js就是一个线程
线程又可以细分为任务，同步任务，异步任务（setTimeOut，ajax等）
js从上到下执行的时候碰到异步任务就将其通过event table注册，推到异步队列中执行结果，等主任务执行完毕后，通过事件或者回调的形式将执行结果推回到主任务中，这就是一个loop过程

* addEventListener

不常用，大概知道是个xxx，也很少遇到一个元素绑定多个事件的情况，冒泡/委托

git rebase 和 git merge 的区别

git rebase 的意思是变基，我的理解是相当于把别人新master的commit拉下来，将本次提交补在最后，这个过程该就解决冲突解决冲突，不解决冲突就直接合并


git merge 是说我们两人同时基于 master 1，2，3版本拉了分支，如果同事先push并合并，那么他的commit纪录会顺序合入在master上，我虽然后合并，commit纪录会插入history中，形成的merge commit纪录一般会追加在最后，就是一个正常时间线的展示，不会修改commit的提交时间线，其实一般这个commit纪录先后时间不太重要，建议用rebase


git cherry-pick

一般后面跟  <commitHash>，用于多个提交的时候，只给master合其中一个提交


发布-订阅者模式

拿公众号来举例，公众号是一个发布者，关注了公众号的用户是订阅者，公众号发布了文章后，肯定不是一一通知给我们，而是先通知给调度中心，由他来统一下发。

class eventEmiter() {
	constructor()  {
		this.subs = Object.create(null);
	}

	<!-- 订阅接收 -->
	$on(eventType, handler) {
		this.subs[eventType] = this.subs[eventType] || [];
		this.subs[eventType].push(handler);
	}

    <!-- 发出 -->
	$emit(eventType) {
		this.subs[eventType].forEach(handler => {
			handler();
		})
	}

}

观察者模式（observer）
没有调度中心

小程序架构

cli项目

动效
withComponentLazyLoad 组件懒加载，公共组件

@keyframes
opacity
transform
动效主要用于dom的跟随

hooks

useEffect： 组件重新加载时使用
useMemo： 组件依赖的数据变更，视图才重新渲染




fiber：diff算法 + 链表
webpack
装饰器
栈的数据结构
手写一个promise
双向绑定
babel怎么做的这个事情？ AST


定时器的重置：
function debounce(fn, delay) {
	let timer
	return function(...args) {
		if(timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, args), delay)
		})
	}
}

function debounce(fn, delay) {
  let timer
  return function(...args) {
    if (timer) clearTimeout(timer)
    // 使用箭头函数来处理this问题
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}