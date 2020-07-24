### react视图三层架构
1. 虚拟dom: 调用createElement生成虚拟dom,描述结构和逻辑
2. 内部组件层：负责组件更新, ReactDOM.render、 setState、 forceUpdate,控制渲染,在合适的时机执行组件中生命周期钩子
3. 底层渲染层：真实的渲染,使用元素节点,文本节点


### fiber主要在第二层进行操作
- fiber节点拥有return,child,sibling三个属性,分别对应父节点,第一个孩子,右边兄弟

### 更新逻辑分成两个阶段：1. 将虚拟DOM转换成Fiber, Fiber转换成组件实例或真实DOM（不插入DOM树，插入DOM树会reflow）。Fiber转换成后两者明显会耗时，需要计算还剩下多少时间。并且转换实例需要调用一些钩子，如componentWillMount, 如果是重复利用已有的实例，这时就是调用componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate,这时也会耗时