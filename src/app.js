const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sendError = require('@helper/sendError');
const rateLimit = require('@middleware/rateLimit');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(sendError);
app.use(...rateLimit);
app.use('/', routes);

module.exports = app;

