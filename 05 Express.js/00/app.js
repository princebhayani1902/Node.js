const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next(); //Allows the request to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log("In the middleware 02");
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input> <button type="submit">Add product</button></form>');
});

app.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

// app.use((req,res,next)=>{
//     console.log("In the middleware 23");
//     res.send('<h1>Hello from express !</h1>');
// });

app.listen(3000,()=>{
    console.log('App is running');
});