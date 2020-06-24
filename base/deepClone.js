function deepClone(obj){
    let arr = Array.isArray(obj)?[]:{};
    for(var i in obj){
        arr[i] = typeof obj[i]==="object"?deepClone(obj[i]):obj[i]
    }
    return arr
}