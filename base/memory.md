### 内存

1. 内存溢出
> 程序运行所需内存大于可用内存

- 千万级别的循环
- 递归没有终止条件

2. 内存泄露
> 使用过的内存没有及时回收

- 全局变量是不会被垃圾回收机制回收的


#### 内存泄露原因
1. 全局变量
```
	function leaks(){
		leak = "xxxx";   // 未用var声明，定义在全局变量上
	}
```
2. 闭包
var leaks = (function(){
	var leak = "xxxx";
	return function(){
		console.log(leak);
	}
})()

3. dom中dom被清除,但绑定的事件未清除

4. 定时器没有清除