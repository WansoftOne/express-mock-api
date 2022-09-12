const express = require('express');
const bodyParser = require('body-parser');
var sha256 = require('js-sha256');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const API_SECRET= 'ec3c1eb4-e22c-4e86-af87-feac42a78113';
const API_KEY= 'da812b07-12bf-4bed-8a54-7ec692fe9114';

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

app.get('/jwt', (req, res) => {
    const iat = Date.now() / 1000;
    const exp = iat + 300;
    
    const jti = sha256(`${API_SECRET}:${iat}`);
    
    
    var jwt = require('jsonwebtoken');
    const payload = {
        public_key: API_KEY,
        iat,
        exp,
        jti
    } 
    var token = jwt.sign(payload, API_SECRET, { algorithm: 'HS256' });

    res.send(token)
});

app.listen(port, () => {
    console.log(`API started at port: ${port}`)
});
