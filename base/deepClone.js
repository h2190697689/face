function deepClone(obj){
    let arr = Array.isArray(obj)?[]:{};
    for(var i in obj){
        arr[i] = typeof obj[i]==="object"?deepClone(obj[i]):obj[i]
    }
    return arr
}


// 由于typeof 使用时,构造类型默认为对象 (new String,  new Boolean)
function judgeType(value){
	var str = Object.prototype.toString.call(value);
	return str.split(" ")[1];
}