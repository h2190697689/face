/* 使用  */

// new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		resolve(1)
// 	})
// }).then((res)=>{
// 	console.log(res);
// 	return new Promise((resolve,reject)=>{
// 		resolve("return promise");
// 	})
// }, (err)=>{
// 	console.log(err)
// }).then((res)=>{
// 	console.log("last",res);
// 	return "hejiamin";
// }).catch((err)=>{
// 	console.log(err)
// })



// 状态定义
var PENDING = "pending";
var FULFILLED = "fulfilled";
var REJECTED = "rejected";
function MyPromise(constructor){
	this.status = PENDING;
	this.value = undefined;
	this.fulfillList = [];
	this.rejectedList = [];
	var that = this;
	// 内部resolve方法
	var resolveFn = function(result){
		if(that.status !== PENDING) return;
		setTimeout(()=>{   // 让then先执行
			that.status = FULFILLED;
			that.value = result;
			console.log(that.fulfillList);
			that.fulfillList.forEach((fn)=>{
				typeof fn === "function" && fn(that.value);
			})
		})
	}

	var rejectFn = function(err){
		if(that.status !== PENDING) return;
		setTimeout(()=>{   // 让then先执行
			that.status = REJECTED;
			that.value = err;
			that.rejectedList.forEach((fn)=>{
				typeof fn === "function" && fn(that.value);
			})
		})
	}

	this.then = function(resolveCallBack, rejectCallBack){
		return new MyPromise((resolve,reject)=>{
			this.fulfillList.push(()=>{
				var x = resolveCallBack();
				console.log(x);
				x instanceof MyPromise ? x.then(resolve, reject): resolve(x);
			});
			this.rejectedList.push(()=>{
				var x = rejectCallBack();
				x instanceof MyPromise ? x.then(resolve, reject): resolve(x);
			});		
		})
		// that.fulfillList.push(resolveCallBack);
		// that.rejectedList.push(rejectCallBack);
	}
	try{
		constructor(resolveFn, rejectFn);
	}catch(err){
		rejectFn(err)
	}
}


module.exports = MyPromise;