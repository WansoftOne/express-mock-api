const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post('/kueskypay', (req, res) => {
    console.log(req.body);
    res.send({
        data: "POST RESPONSE"
    })
});

app.get('/kueskypay', (req, res) => {
    console.log(req.body);
    res.send({
        data: "GET RESPONSE"
    })
});

app.listen(port, () => {
    console.log(`API started at port: ${port}`)
});