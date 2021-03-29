// const p5 = Promise.reject("fjd");
// const p6 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve("123")
// 	},10)
// })

// Promise.race([p5,p6]).then(res=>{
// 	console.log(res)
// }).catch((e)=>{console.log(e)})


// const p5 = Promise.reject("1");
// const p6 = Promise.reject("2");
// const p7 = Promise.reject("3");
// Promise.all([p5,p6,p7]).then(res=> {
// 	console.log(res)
// }).catch((e)=>{
// 	console.log(e)
// })


// setTimeout(()=>{
// 	Promise.resolve(1).then(res=> {console.log(res)})
// })
// setTimeout(()=>{
// 	console.log(3)
// })