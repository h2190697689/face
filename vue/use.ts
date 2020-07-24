// Vue.use实现
/*
* 1.如果插件是对象,必须提供install方法,如果插件是函数,它会被作为install方法,
*    install方法调用时,会将Vue作为参赛传入
* 2.方法需要在调用 new Vue()之前被调用
* 3. 当install方法被同一个插件多次调用,插件只会被安装一次
*/
function initUse(Vue){
	Vue.use = function(plugin：Function|Object){  // plugin: Function | Object
		var  installedPlugins = (this._installedPlugins 
			|| (this._installedPlugins = []));
		if(installedPlugins.indexOf(plugin)> -1){ // 判断插件是否注册
			return this; 
		}
		var args = toArray(arguments, 1);
		args.unshift(this);
		if(typeof plugin.install === "function"){
			plugin.install.apply(plugin, args);
		} else if(typeof plugin === "function"){
			plugin.apply(null, args);
		}
		installedPlugins.push(plugin);
		return this;
	}
}


function toArray(list: any, start?:number):Array<any>{
	start = start || 0;
	let i = list.length - start;
	const ret:Array<any> = new Array(i);
	while(i--){
		ret[i] = list[i+start]
	}
	return ret
}