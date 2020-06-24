var list = [1,2,3,4,5];
var son = {name: "min",age: 12};

let person = {
    name: "hejiamin"
}

Object.defineProperty(person,"list",{
    set: function(newValue){
        console.log("setting");
        list = newValue;
    },
    get: function(){
        return list
    }
})

Object.defineProperty(person,"son",{
    set: function(newValue){
        console.log("son");
        son = newValue;
    },
    get: function(){
        return son
    }
})

// person.son.height = "175";
// console.log(son);




person.list.push(6);
console.log(list);
console.log(person.list);