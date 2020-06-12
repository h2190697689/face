Function.prototype.bind = function(obj){
    const arg = Array.prototype.slice.call(arguments, 1);
    const content = this;
    const bound = function(){
        const newArg = arg.concat(Array.prototype.slice.call(arguments));
        content.apply(obj, newArg);
    }
    bound.prototype = Object.create(content.prototype);
    return bound;
}