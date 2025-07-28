const express = require('express')
const app  = express()
const port = 3000

app.use(express.static('public'))
app.use(express.urlencoded())

app.get('/' , (req,res)=>{
    res.send('Hello world!')
})

app.get('/home' , (req,res)=>{
    res.sendFile(__dirname + '/home.html')
})

app.get('/about' , (req,res)=>{
    res.sendFile(__dirname + '/about.html')
})

app.get('/contact' , (req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})
// http://localhost:3000/product/1/delete

app.get('/product/:id/:id1',(req,res)=>{
    var id = req.params.id
    var id1 = req.params.id1
    res.send("Params Value is" + id+ id1)
})
app.get('/cake',(req,res)=>{
    res.sendFile("Hello <b>Cake!</b>")
})
//http://localhost:3000/search?q=cake&price=100
app.get('/search/' , (req,res)=>{
    var id = req.query.q
    var id1 = req.query.price
    res.send("Query Value is " + id + id1)
})
app.get('/sum',(req,res)=>{
    res.sendFile(__dirname + '/sum.html')
}) 

app.get('/sum',(req,res)=>{
    res.sendFile(__dirname + '/sum.html')
}) 

app.set('views',__dirname+'/view')
app.set('view engine','ejs')

app.get('/homepage',(req,res)=>{
    res.render('home',{mya:'Pia'})
})

app.post('marksheet',(req,res)=>
{
    res.render('marksheet')
})

app.post('/marksheetprocess',(req,res)=>{
    console.log(req.body)
    var sub1 = req.body.text1
    var sub2 = req.body.text2
    var c = parseInt(sub1) + parseInt(sub2)
    res.render('ans',{mya:sub1,myb:sub2,myc:c})

})

app.get('/sumprocess',(req,res)=>{
    var a = req.query.text1
    var b = req.query.text2
    var c = parseInt(a) + parseInt(b)
    res.send(`The sum is ${c}`)
}) 


app.get('/cake/ahmedabad',(req,res)=>{
    res.sendFile("Hello <b>Nadiad!</b>")
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
