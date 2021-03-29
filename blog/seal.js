const obj = { name: "min" };
Object.defineProperty(obj, "age", {
	value: 23  // writable默认为false
})

const sealObj = Object.seal(obj);
sealObj.say = "hello";  // 

