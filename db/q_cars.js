const sequelize = require('./connection');

async function createCar(obj){
    try {
        const { modelo, marca, km, precio, anio, color, patente } = obj;
        const created = await sequelize.query(
            `INSERT INTO autos (modelo, marca, km, precio, anio, color, patente) VALUES ('${modelo}', '${marca}', ${km}, ${precio}, ${anio}, '${color}', '${patente}')`);
        return created
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = createCar;