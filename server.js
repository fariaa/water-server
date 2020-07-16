const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {

    const { email, pwd } = req.body;

    if (email === 'fariaa@hotmail.com' && pwd === 'admin') {
        const response = { msg: "user authorized", token: "jljaljljlajljlamlasifgkgl32323565" };
        res.json(response);
    }
    res.status(401).json({ msg: "user not authorized" })
})

app.get('/', (req, res) => {
    const response = { msg: 'sucesso' };
    res.json(response);
})


app.listen(PORT, function () {
    console.log(`servidor conectado port ${PORT}`)
});
