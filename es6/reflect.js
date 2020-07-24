var obj = {
    name: "min",
    _age: 22,
    get age(){
        return this._age;
    },
    set age(val){
        if(val<0 || val>100){
            throw new Error("年龄有问题")
        }
        this._age = val
    }
}
obj.age = 100
console.log(obj.age)