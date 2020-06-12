Function.prototype.apply = function(obj) {
    const arg = Array.prototype.slice.call(arguments, 1);
    obj.fn = this;
    obj.fn(...arg);
    delete obj.fn;
}