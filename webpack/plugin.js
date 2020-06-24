class MinWebpackPlugin{
	constructor(options){
		this.options = options
	}


	apply(compiler){
		compiler.hooks.emit.tap("MinWebpackPlugin",(compilation,callback)=>{
			callback();
		})
	}
}