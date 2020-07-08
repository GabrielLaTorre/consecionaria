const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./utils/users');

app.use(bodyParser.json());
app.use('/users', users);


app.listen(3000, () => {
    console.log('Servidor funcionando!');
})