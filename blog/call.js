/**
 * @desc 手动实现call
 **/
// Function.prototype.myCall = function(content, ...args){
//     console.log(args);
//     content = content || window;
//     content.fn = this;
//     const res = content.fn(...args);
//     delete content.fn;
//     return res;
// };

Function.prototype.myCall = function (context) {
    context = context || window;
    context.fn = this;
    let args = [];
    for(let i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    let result = eval('context.fn(' + args +')');
    delete context.fn;
    return result;
};

function say(word, place) {
    console.log(this.name + word + place);
}

say.myCall({name: "min"}, "hello", "world");

