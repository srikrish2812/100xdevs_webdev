// promise class gives u a promise that it will return u something in the future
// setTimeout promises that it runs the function after delay ms.
// Promises are a syntactically superior way of writing callback

import {readFile} from "fs"

function setTimeoutPromisified(ms){
    return new Promise((resolve)=> setTimeout(resolve, ms));
}


function callback(){
    console.log("sometime has passed");
}

let p = setTimeoutPromisified(3000);
console.log(p);

function random(){

}

let q = new Promise(random);
console.log(q);

// create the promisifies version of fs.readFile, fs.writeFile, 
