var http = require('http')
http.createServer((req,res)=>{
    if(req.url== '/home'){
        res.write("<h1> Welcome to Home page</h1>")
    }
    else if(req.url== '/about'){
        res.write("<h1> Welcome to About page</h1>")
    }
   else {
        res.write("<h1> Welcome to Main page</h1>")
    }
    res.end()
}).listen(3000)
console.log("Server started on http://127.0.0.1:3000")