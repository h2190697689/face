/** 
** 字符串运算优先toString();
** 数值运算优先valueOf();
*/

var a = {
	value: 1,
	valueOf: function(){
		return "hejiamin"
	},
	toString: function(){
		return "name"
	}
}

console.log(a === "hejiamin")
