### problem

#### app
1. wx.navigateBack 不会重新触发onLoad 事件
2. 问题点击,页面跳转，连续点击会出问题

#### react
1. 苹果手机图片旋转
2. 大量数据加载，递归调用
3. select中下拉数据过大，数据卡顿
- 虚拟列表, 加载了一万条数据，但显示出来的只有10条，
  只渲染那10条,其他数据暂时不渲染,等滚动到该位置再进行渲染,
  当前react-window , react-virtualized都能实现                                                                                    
                                                                                 