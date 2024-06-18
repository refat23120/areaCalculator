const express = require("express");
var bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/circle',(req,res)=>{
    res.sendFile(__dirname+'/circle.html');
});

app.get('/triangle',(req,res)=>{
    res.sendFile(__dirname+'/triangle.html');
});

app.post('/circle',(req,res)=>{
    const Radius = req.body.radius;
    const Area = Math.PI*Radius*Radius ;
    res.send(`area of circle is ${Area}`);
});

app.post('/triangle',(req,res)=>{
    const Base = req.body.base;
    const Height = req.body.height;

    const Area = 0.5*Base*Height ;
    res.send(`area of triangle is ${Area}`);
});

app.listen(3000,()=>{
    console.log('server is running in port 3000');
})