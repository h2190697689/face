Function.prototype.myBind = function (content) {
    const args = Array.prototype.slice.call(arguments, 1);
    const func = this;
    const bindFunc = function () {
        console.log(args.concat([...arguments]));
        func.apply(content, args.concat([...arguments]))
    };
    bindFunc.prototype = Object.create(func.prototype);
    return bindFunc
};


function say(word, place,num1,num2) {
    console.log(this.name + word + place+ num1 +num2);
}

const newSay = say.myBind({name: "min"}, "hello", "world");

newSay(22,33);