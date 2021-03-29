let loaded = false;
const onVisibilityChange = ()=>{
	if(document.visibilityState === "hidden"){
		if(loaded){
			return false
		}
		Promise.all[
			import("./async.js"),
			import(/* webpackChunkName: "bar-module" */ './name.js'),
			import(/* webpackPrefetch: true */, "./age.js")
		].then([]){
			loaded = true
		}
	}
}

document.addEventListener("visibilitychange", onVisibilityChange, false)