// Function.prototype.myApply = function (content, args) {
//     content = content || window;
//     content.fn = this;
//     const res = content.fn(...args);
//     delete content.fn;
//     return res;
// };


Function.prototype.myApply = function (content, arr=[]) {
    content = content || window;
    content.fn = this;
    var args = [];
    for(var i=0; i<arr.length; i++){
        args.push("arr["+i+"]")
    }
    var res = eval("content.fn("+args+")");
    delete content.fn;
    return res;
};

function say(word, place) {
    console.log(this.name + word + place);
}

say.myApply({name: "min"}, ["hello", "world"]);

