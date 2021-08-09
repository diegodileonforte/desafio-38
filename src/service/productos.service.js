const { addPersistenceProducto, findAllPersistenceProducto, deletePersistenceProducto, updatePersistenceProducto, findByIDPersistenceProducto } = require('../db_persistence/productosPersistence.js');
const logger = require('../config/winston.js');

async function addServiceProducto(data) {
    try {
        const dataToDb = {
            title: data.title,
            price: data.price,
            thumbnail: data.thumbnail
        };
        addPersistenceProducto(dataToDb);
    } catch (error) {
        logger.error.error(error);
    }
}

async function findAllServiceProducto() {
    try {
        const prodInDb = await findAllPersistenceProducto();
        return prodInDb;
    } catch (error) {
        logger.error.error(error);
    }
}
async function findByIDServiceProducto(_id) {
    try {
        const prodById = await findByIDPersistenceProducto(_id);
        return prodById;
    } catch (error) {
        logger.error.error(error);
    }
}

async function deleteServiceProducto(_id) {
    try {
        const prodToDel = await deletePersistenceProducto(_id);
        return prodToDel;
    } catch (error) {
        logger.error.error(error);
    }
}

async function updateServiceProducto(_id, data) {
    try {
        const prodUpdated = await updatePersistenceProducto(_id, data);
        return prodUpdated;
    } catch (error) {
        logger.error.error(error);
    }
}

module.exports = {
    addServiceProducto,
    findAllServiceProducto,
    deleteServiceProducto,
    updateServiceProducto,
    findByIDServiceProducto
}