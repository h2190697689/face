Function.prototype.call = function(obj){
    const arg = Array.prototype.slice.call(arguments, 1, 2);
    obj.func = this;
    obj.func(...arg);
    delete obj.func
}