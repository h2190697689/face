// var a = {
//     value: 1,
//     valueOf: function(){
//         return this.value++
//     }
// }
// if(a== 1 && a==2 && a==3){
//     console.log("hello")
// }


var b = 1;
Object.defineProperty(global, "a", {  // window环境window，node环境global
    get: function(){
        return b++
    },
    configurable: false,
    enumerable: true
})
if(a=== 1 && a===2 && a===3){
    console.log("hello")
}

