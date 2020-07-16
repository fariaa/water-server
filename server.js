const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {

    console.log(req.body)

    const response = { status: 'sucesso', resultado: 10 };
    res.json(response);
})

app.get('/', (req, res) => {
    const response = { msg: 'sucesso' };
    res.json(response);
})


app.listen(3000, function () {
    console.log('servidor conectado port 3000')
});
