/**
 * @author hejiamin
 * @param {中间件列表} middlewares 
 * @des 中间件机制核心
 */
function compose(middlewares){
    return function(ctx){
        function dispatch (index){
            const fn = middlewares[index];
            fn && fn(ctx, dispatch.bind(null, inex+1))
        }
        return dispatch(0)
    }
}