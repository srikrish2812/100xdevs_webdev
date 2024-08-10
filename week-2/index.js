// 1. I/O tasks 
// assignment  - try to create a promisified version of setimeout, fetch, fs.readfile

function sum(n){
   let sum = 0;
   for(let i=0;i<=n;i++){
    sum+=i
   }
   return sum;
}

console.log(sum(5));