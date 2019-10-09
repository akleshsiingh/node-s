const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res,next)=>{
    res.json({status: true,msg: 'hello world'});
});

app.get('/test', (req,res,next)=>{
    res.json({status: true,msg: 'Test api called'});
});

app.listen(port,(e)=>{
    if(e){
        return console.error(e);
    }
    console.log(`Connected successfully`)
});