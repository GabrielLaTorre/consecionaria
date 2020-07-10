const {Router} = require('express');
const router = Router();
const {validateUser} = require('./auth');
const {createUser} = require('../db/q_users');

router.post('/login', async (req, res) => {
    const userLogin = req.body;
    const [username, token] = await validateUser(userLogin)
    if(!username){
        res.status(400).send('Usuario y/o contraseña incorrectos')
    } else {
    res.status(200).send(`Bienvenido ${username}!
    tu token es : ${token}`);
    }
})

router.post('/register', async (req, res) => {
    try {
        const newUser = req.body;
        const [created] = await createUser(newUser);
        res.status(201).send(`Usuario con id: ${created}, creado!`);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;