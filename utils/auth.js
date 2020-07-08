const {getUser, createUser} = require('../db/q_users');

async function validateUser(user) {
    const validated = await getUser(user);
    if(!validated) {
        return null;
    }
    return validated.usuario
}

module.exports = validateUser;