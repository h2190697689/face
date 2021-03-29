const person = {};

Object.defineProperty(person, "name", {
	value: "true",
	configurable: false,
	enumerable: false,
	writable: true
})

Object.defineProperty(person, "name", {
	value: "min123",
	writable: false
})

console.log(person);


async function  say(){ 
	const name = await new Error();  
	console.log(name) 
}