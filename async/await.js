
async function say(){
	console.log(0);
	const a = await Error("min Error")
	console.log(a);
}
say().then((res)=> {console.log(res);}).catch((e)=> {console.log(e)});
console.log(2);

let res;
while(middles.length){
	const middle = middle.shift();
	res = res.then(()=> middle())
}