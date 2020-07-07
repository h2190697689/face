/*
** 构造继承+原型继承
*/

function Super(name,age){
	this.name = name;
	this.age = age;
}

function Child(name,age,height){
	Super.call(this,name,age);
	this.height = height;
}
Child.prototype = Object.create(Super.prototype,{
	constructor: {
		value: Child
	}
})
