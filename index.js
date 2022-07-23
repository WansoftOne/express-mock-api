const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const TOKEN = '8a682242-3707-43c6-bc34-a784cf9af735';
var OPTIONS = {
    response: 'Accept',
    withToken: true,
};

app.post('/kueskypay', (req, res) => {
    console.log(req.body)
    
    if(OPTIONS.withToken) {
        res.setHeader('Authorization',`Bearer ${TOKEN}`)
    }
    res.set('Content-Type', 'application/json');
    const data = {
        "status": OPTIONS.response
    }
    return res.json(data)
});

app.get('/kueskypay', (req, res) => {
    console.log(req.body);
    res.send({
        data: "GET RESPONSE"
    })
});

app.get('/options', (req, res) => {
    res.send(OPTIONS);
});

app.post('/options', (req, res) => {
    OPTIONS = {
        ...OPTIONS,
        ...req.body
    }
    
    res.send({
        status: 'SUCCESS',
        options: OPTIONS
    });
});

app.listen(port, () => {
    console.log(`API started at port: ${port}`)
});