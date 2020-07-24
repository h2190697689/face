const http = require("http");

const server = http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url ==="/data"){
        res.write(JSON.stringify({name:"min",age: 21}))
    } else{
        res.write("hello")
    }
    res.end()
})
server.listen(3003,()=>{
    console.log("server is running on port 3003")
})