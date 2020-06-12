### react生命周期

#### getDerivedStateFromProps
- 静态函数,函数体内不能访问this, 是纯函数,输出完全由输入决定
- (老实做一个运算就行，别在这里搞什么别的动作)

#### getSnapshotBeforeUpdate
- render之后执行,dom元素还没更新,可获取DOM信息，
  计算得到一个snapshot,作为componentDidUpdate的第三个参数传入