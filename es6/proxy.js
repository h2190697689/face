var proxy = new Proxy({}, {
    get: function(target, propKey){
        return 36
    }
})

console.log(proxy.time);
console.log(proxy.name);
console.log(proxy.name);