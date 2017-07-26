var fs = require('fs');

//Asyn Method
fs.readFile('input.txt',function(err,data){
    if (err){
        return console.log( err.message);
    }
    console.log('Async method Call : '+ data);

});

// Sync Method
var data = fs.readFileSync('input.txt');
console.log('Synch Method Call'+ data);

console.log('program completed');
