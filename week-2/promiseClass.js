// promise class gives u a promise that it will return u something in the future
// setTimeout promises that it runs the function after delay ms.
// Promises are a syntactically superior way of writing callback
const fs = require("fs");



// let p = setTimeoutPromisified(3000);
// console.log(p);



// create the promisifies version of fs.readFile, fs.writeFile, 

function readTheFile(sendValue){
    
    fs.readFile('a.txt', 'utf-8', function(err,data) {
        sendValue(data);
    })
}


function readFile(fileName){
    return new Promise(readTheFile);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback);