const { Router } = require('express');
const router = Router();
const createCar = require('../db/q_cars');

router.post('/', (req, res) => {
    const newCar = req.body;
    const created = createCar(newCar)
    .then(id => {
        res.status(201).send(`Auto con id ${id}, creado!`);
    })
    .catch(err => console.log(err))
})

module.exports = router;