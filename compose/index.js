/**
* @author hejiamin
* @desc redux和koa中间件
**/

/* redux */
function reduxCompose(...func){
	if(func.length === 0){
		return args => args
	}
	if(func.length === 1){
		return func[0]
	}
	return func.reduce((now,item)=> (...args)=>now(item(...args)))
}

/* koa 使用promise实现await */
function koaCompose(middlewares){
	return function(ctx){
		function dispatch(i) {
	        // 获取当前中间件
            const fn = middlewareList[i]
            try {
                return Promise.resolve(
	                // 通过 i + 1 获取下一个中间件，传递给 next 参数
                    fn(ctx, dispatch.bind(null, i + 1))
                )
            } catch (err) {
                return Promise.reject(err)
            }
        }
        // 开始派发第一个中间件
        return dispatch(0)
	}
}


/*
* @detail
* 1. redux 主要使用reduce , koa主要使用递归
* 2. redux 侧重对action的处理, koa侧重中间件本身
*/