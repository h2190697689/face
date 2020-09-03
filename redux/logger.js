const logger = ({getState}) => {
    // 第二层，利用了函数(currying)柯理化将计算/运行延迟，请让我用更多的注释来帮我们理清思路...
    // 还是先列出上文的例子比较直观【手动滑稽】：)
    // 例：compose(f, g, h)返回(...args) => f(g(h(...args))). 
    // 关联上文：dispatch = compose(...chain)(store.dispatch) 代入例子 ((dispatch) => f(g(h(dispatch))(store.dispatch)
    // 可以看到清晰看到，中间件被自右向左执行，store.dispatch作为参数被传入给最先执行（最右侧）的中间件
    // 中间件的第二层被执行，返回一个'接受action作为参数的函数'，这个函数作为调用下一个（自己左侧）的中间件，依次执行至最左侧，最终返回的同样是一个'接受action的函数'
    // 最终我们调用的dispatch实际上就是这个被最终返回的函数
    // '我们的真实流程是 dispatch(包装过的) => 中间件1 => 中间件2 => dispatch(store提供的) => 中间件2 => 中间件1 => 赋值(如果有返回的话)'
    // 果然还是没有解释清楚，请抛开我的注释，多看几遍代码
    return next => action => {
        console.log('action', action)
        console.log('pre state', getState())
        //next实质就是下一个（右侧）中间件返回的闭包函数/当前中间件如果是最后一个或者唯一的，那么next就是store提供的dispatch
        //next(action)函数调用栈继续往下走，也就是调用下一个（右侧）中间件，nextVal会接受返回的结果
        const nextVal = next(action)
        console.log('next state', getState())
        //将结果返回给上一个中间件（左侧）或者是开发者（第一个中间件的情况下）
        return nextVal
    }
}
