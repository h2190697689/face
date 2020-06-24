const { getOptions } = require("loader-untils");

export default function(source,map){
	const options = getOptions(this);
	return source.replace("hello","min")
}
