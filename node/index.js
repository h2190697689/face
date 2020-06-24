const fs = require("fs");

// const inputStream = fs.createReadStream("./min.txt");

// const outputStream = fs.createWriteStream("./copy.txt");


// inputStream.pipe(outputStream);

var a = fs.readFileSync("./min.txt");
console.log(a);
fs.writeFileSync("./hello.txt", a)