var http = require('http')

var a = 10
var b = 200
var c = a+b
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("Hello Node JS")
    res.write("<b><br> I am B tag </b>")
    res.write( `<br/> A Value is ${a} <br/> B value is ${b} <br/> Sum is ${c}`)
    res.end("<br>Bye")
}).listen(3001)
console.log("Server Started on http://127.0.0.1:3001")
