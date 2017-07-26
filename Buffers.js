buf = new Buffer(256);
len = buf.write("TTis is a test buffer package. 1245");
var json = buf.toJSON(buf);

console.log("Octets written : "+  len);
// console.log(json);

buff = new  Buffer('500');
buff1 = new  Buffer('500');
buff2 = new Buffer(6);

buff2.copy(buff1);

console.log(buff2.toString());

console.log('This is 1st Buffer : '+ buff);
console.log('This is 2st Buffer : '+ buff1);

if (buff.compare(buff1) == 0){
    console.log('1st and 2nd Buffer value same.');
}
else{
        console.log('Buffer value not Match');
    }