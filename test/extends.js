function Super(){
	this.getName = function(){
		console.log(this.name)
	}
}
function Child(name){
	this.name = name;
}
Child.prototype = new Super();  // 这里可以传构造参数
// Child.prototype.constructor = Child;
var child = new Child("min");
console.log(child instanceof Super); // true
console.log(child instanceof Child); // true
console.log(child.constructor);  // Child