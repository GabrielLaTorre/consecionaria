const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./utils/users');
const cars = require('./utils/cars');

app.use(bodyParser.json());
app.use('/users', users);
app.use('/cars', cars);


app.listen(3000, () => {
    console.log('Servidor funcionando!');
})