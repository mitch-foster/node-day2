const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = 3001;


app.use(bodyParser.json());
/**********************MIDDLEWARE EXAMPLE***********************/
app.use((req, res, next)=>{
    console.log(req.url);
    next();
})

app.get('/api/test', (req, res)=>{
    res.status(200).send('Awesome page test1');
})

app.get('/api/test2', (req, res)=>{
    res.status(200).send('Awesome page test2');
})



app.listen(port, ()=>{console.log(`I'm all ears on port ${port}.`)})