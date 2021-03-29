function Person(name, age){
	this.name = name;
	this.age = age;
}

const res = Person.apply({}, ["min",23]);

const person = {
	name: "min",
	age: 23,
	say: function(){
		console.log(this.name)
	}
}

console.log(person.say());