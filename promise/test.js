const MyPromise = require("./promise.js");

new MyPromise((resolve, reject)=>{
	resolve(123)
}).then((res)=>{
	console.log(res);
	return res + 123
}).then(res=>{
	console.log(res);
})