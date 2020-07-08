const sequelize = require('./connection');

async function getUser(obj) {
    const { usuario, contrasenia} = obj;
    const userFound = await sequelize.query(
        `SELECT * FROM usuarios WHERE usuario = '${usuario}' AND contrasenia = '${contrasenia}'`,
        {type : sequelize.QueryTypes.SELECT});
    return userFound 
    ? userFound[0]
    : null;
}

async function createUser(obj) {
    const { usuario, contrasenia } = obj;
    const userCreated = await sequelize.query(
        `INSERT INTO usuarios (usuario, contrasenia) VALUES ('${usuario}', '${contrasenia}')`
    )
    return userCreated;
}

module.exports = {getUser, createUser};