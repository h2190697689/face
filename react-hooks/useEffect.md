## useEffect

### 模拟componentDidMount、componentDidUpdate、componentWillUnmount
1. 第二个参数不传
- 每次更新都会执行,先执行return内容，再执行内部内容

2. 第二个参数传空数组
- 只执行componentDidMount(内部内容)和componentWillUnmount(return 函数内容) 

3. 第二个参数为非空数组
- 每次render都会执行，先执行return内容，再执行内部内容


* 首次加载时,上面情况都只执行内部内容
class 

### useLayoutEffect对比
1. useEffect: render结束后,执行callback函数,不阻塞浏览器绘制(一般进行两次回流、重绘)
2. useLayoutEffect: render结束后,执行callback函数,
浏览器绘制之前执行完成，阻塞浏览器绘制。(一般在其中进行一下dom操作,否则可能会出现闪屏问题)

3. useLayoutEffect和平常写的ClassComponent的'componentDidMount'和'componentDidUpdate'同时执行。
4. useEffect会在本次更新完成后，也就是第1点的方法执行完成后，在开启一次任务调度，在下次任务调度中执行useEffect