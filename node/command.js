#!/usr/bin/env node
const { exec } = require("child_process");



exec("node ./fs.js",()=>{
    console.log("success");
    process.exit(1);
})
