const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routs
const authRoute = require('./route/authRoute')
const productRoute = require('./route/productRoute')
const userRoute = require('./route/userRoute')

app.use(authRoute);
app.use(productRoute);
app.use(userRoute);

app.get('/', (req, res) => {
    const response = { msg: 'sucesso' };
    res.json(response);
})

app.listen(PORT, function () {
    console.log(`servidor conectado port ${PORT}`)
});
