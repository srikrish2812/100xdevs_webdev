const fs = require("fs");

function firstFunc(resolve){
    fs.readFile('a.txt', 'utf-8', function(err, data){
        data = data.trim();
        resolve(data);
    })
}

function cleanFile(firstFunc){
    return new Promise(firstFunc)
}

function cb(contents){
    console.log(contents);
}

cleanFile(firstFunc).then(cb);