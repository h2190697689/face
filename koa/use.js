class LikeKoa2{
    constructor(){
        this.middlewareList = []
    }

    // 核心方法
    use(fn){
        this.middlewareList.push(fn);
        return this;  // 链式操作
    }

    // 将 req res 组合成为 ctx
    createContext(req, res) {
        // 简单模拟 koa 的 ctx ，不管细节了
        const ctx = {
            req,
            res
        }
        return ctx
    }

    // 处理中间件的 http 请求
    handleRequest(ctx, middleWare) {
        // 这个 middleWare 就是 compose 函数返回的 fn
        // 执行 middleWare(ctx) 其实就是执行中间件函数，然后再用 Promise.resolve 封装并返回
        return middleWare(ctx)
    }

    // http.createServer回调函数
    callback(){
        const fn = compose(this.middlewareList);
        return (req,res)=>{
            const ctx = this.createContext(req,res);
            return this.handleRequest(ctx,fn)
        }
    }

    listen(...args){
        const server = http.createServer(this.callback());
        return server.listen(...args);
    }
}


function compose(middlewares){
	return function(){
		return dispatch(0);
		function dispatch(i){
			let fn=middlewares[i];
			if(!fn){
				return Promise.resolve();
			}
			return Promise.resolve(fn(function next(){
				return dispatch(i+1);
			}))
		}
	}
}

function koaCompose(middlewares){
    return function (ctx) {
        function dispatch(i) {
            const fn = middlewareList[i]
            try {
                return Promise.resolve(
                    fn(ctx, dispatch.bind(null, i + 1))
                )
            } catch (err) {
                return Promise.reject(err)
            }
        }
        return dispatch(0)
    }
}