const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendfile('mindex.html')
})
app.get('/concant',(req,res)=>{
    res.sendfile('index.html')
})
app.listen(3000,()=>{
    console.log('Localhost:3000');
})