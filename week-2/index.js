// 1. I/O tasks 
// assignment  - try to create a promisified version of setimeout, fetch, fs.readfile


import { readFile, readFileSync } from "fs";



// const contentsA = fs.readFileSync("a.txt", 'utf-8');
// console.log(contentsA);

// const contentsB = fs.readFileSync("b.txt", 'utf-8');
// console.log(contentsB);
console.log("Done! 1");
function print(err, data){
    console.log(data);
}

// readFile calls the callback function print only after it has read the text 
readFile("a.txt", 'utf-8', print) // asynchronously

readFile("b.txt", 'utf-8', print) // asynchronously

console.log("Done! 2");

// write a promise today