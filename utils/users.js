const {Router} = require('express');
const router = Router();
const validateUser = require('./auth');

router.post('/login', async (req, res) => {
    const userLogin = req.body;
    const resolution = await validateUser(userLogin)
    if(!resolution){
        res.status(400).send('Usuario y/o contraseña incorrectos')
    } else {
    res.status(200).send(`Bienvenido ${resolution}!`);
    }
})

router.post('/register', (req, res) => {
    const newUser = req.body;
    const created = createUser(newUser);
    created
    .then(id => {
    res.status(201).send(`Usuario ${id} creado!`);
    console.log(id);
})
    .catch(err => console.log(err))
})
module.exports = router;