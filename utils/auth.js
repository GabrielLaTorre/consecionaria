const {getUser} = require('../db/q_users');
const jwt = require('jsonwebtoken');
const jwtSignature = 'Consecionaria2020';

function authenticateUser(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const tokenVerify = jwt.verify(token, jwtSignature);
        if(tokenVerify) {
            req.usuario = tokenVerify;
            return next();
        }
    } catch (error) {
        res.status(403).send('Error al validar usuario');
    }
}

async function validateUser(user) {
    const validated = await getUser(user);
    if(!validated) {
        return [null];
    }
    const username = validated.usuario;
    const token = jwt.sign({
        username
    }, jwtSignature);  
    return [username, token];
}

module.exports = {validateUser, authenticateUser};