/*  防止对象属性重复  */

/* 基本使用与遍历，对象属性 */
let s = Symbol();

let s1 = Symbol("foo");   // 中间字符串为描述
s1.description  // "foo"


let a = {
	age: 21
}

a[s1]= "name";

for(let i in a){
	console.log(i);
}

console.log(Object.keys(a)); // 取非Symbol 属性
console.log(Object.getOwnPropertyNames(a));  // 取非Symbol 属性
console.log(Object.getOwnPropertySymbols(a))  // 只取 Symbol 属性
console.log(Reflect.ownKeys(a))



/* 同一 Symbol */ 
// Symbol.for 有则使用，无则创建并将其注册在全局
let s1 = Symbol.for("foo");   
let s2 = Symbol.for("foo");
s1 === s2;
// Symbol.keyFor   返回已登记的Symbol类型的key
Symbol.keyFor(s1);   // "foo"
