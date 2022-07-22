const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

var API_RESPONSE = 'accept';

app.post('/kueskypay', (req, res) => {
    console.log(req.body)
    res.setHeader('Authorization','Bearer 8a682242-3707-43c6-bc34-a784cf9af735')
    res.send({
        "status": API_RESPONSE
    })
});

app.get('/kueskypay', (req, res) => {
    console.log(req.body);
    res.send({
        data: "GET RESPONSE"
    })
});

app.get('/api-response', (req, res) => {
    res.send(API_RESPONSE);
});

app.post('/api-response', (req, res) => {
    API_RESPONSE = req.body.value;
    res.send("SUCCESS")
});

app.listen(port, () => {
    console.log(`API started at port: ${port}`)
});