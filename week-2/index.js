// 1. I/O tasks 
// assignment  - try to create a promisified version of setimeout, fetch, fs.readfile

const { log } = require("console");
const fs = require("fs");

// const contentsA = fs.readFileSync("a.txt", 'utf-8');
// console.log(contentsA);

// const contentsB = fs.readFileSync("b.txt", 'utf-8');
// console.log(contentsB);
console.log("Done! 1");
function print(err, data){
    console.log(data);
}


fs.readFile("a.txt", 'utf-8', print) // asynchronously

fs.readFile("b.txt", 'utf-8', print) // asynchronously

console.log("Done! 2");