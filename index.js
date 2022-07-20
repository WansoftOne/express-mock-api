const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 80;

app.post('/kueskypay', (req, res) => {
    console.log(req.body);
    res.send({
        data: "JEJE"
    })
});

app.listen(port, () => {
    console.log(`API started at port: ${port}`)
});