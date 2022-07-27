const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const API_SECRET= 'ec3c1eb4-e22c-4e86-af87-feac42a78113';

var OPTIONS = {
    response: 'Accept',
    withToken: true,
};

app.post('/kueskypay', (req, res) => {
    console.log(req.body)
    
    if(OPTIONS.withToken) {
        res.setHeader('Authorization',`Bearer ${API_SECRET}`)
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