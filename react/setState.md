### setState API

#### 关键
1. setState可能是异步的，不会立刻改变React组件中state的值
2. setState通过引发一次组件的更新过程来引发重新绘制
3. 多次setState调用会合并

#### state值改变
1. 下一次render函数调用或者下一次shouldComponentUpdate返回false时，setState才会真正改变state中值


#### setState调用,newState存入pending队列, 是否处于batch update , 是将组件存于dirtyComponents(异步),  否将遍历所有dirtyComponents,调用updateComponent,更新pending state of props