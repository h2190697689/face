var a = 1;
var obj = {
	a: 2,
	getA: ()=>this.a,
	getB: function(){
		return ()=>this.a
	},
	getC: function(){
		return this.a;
	}
}

obj.getA();
obj.getB();