/**
* @des 13种拦截操作，与Reflect对应
*/

var a = 1;
var person = {}
var proxy = new Proxy(global, {
    get: function(target, propKey, receiver){
        if(propKey === "a"){
            return a++
        } 
        return target[propKey]
    },
    set: function(target, propKey, value, receiver){
        target[propKey] = value
    }
})

proxy.name = "jfld";
console.log(name);
// console.log(proxy.a===1)
// console.log(proxy.a)

if(proxy.a===1 && proxy.a===2 && proxy.a===3){
    console.log("hello")
}
