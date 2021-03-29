// var b = 10;
// (function b(){
// 	b= 20;
// 	console.log(b);
// 	console.log(window.b)
// })()

// var a = 10;
// (function(){
// 	console.log(a);  // undefined
// 	a = 5;
// 	console.log(window.a);  // 10
// 	var a = 20;
// 	console.log(a);  // 20
// })()

// var obj = {
// 	"2": 3,
// 	"3": 4,
// 	length: 2,
// 	splice: Array.prototype.splice,
// 	push: Array.prototype.push,
// }
// obj.push(1);   
// obj.push(2);
// console.log(obj); //[undefined, undefined, 1, 2]

// var a = {n: 1};
// var b = a;
// a.x = a = {n: 2};
// console.log(a.x);  // {n: 2}
// console.log(b.x);   // 


Promise.resolve(2).then(res=> res + 1).finally(res=> {console.log(res)});
Promise.resolve(23).then(res=> {console.log(res); return "end"}).finally(res=> {console.log(res)});