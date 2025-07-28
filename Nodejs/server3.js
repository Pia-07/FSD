var http  = require('http')
var fs = require('fs')
http.createServer((req,res)=>
{
    //Read Data from File
    fs.readFile("demo.html","utf-8",function(err,data){
        res.end(data)
    })
}).listen(4000)
console.log("Serever started http://127.0.0.1:4000")