const logger = require('../config/winston.js');
const ProductoModel = require('../models/productoSchema.js');

async function addPersistenceProducto(dataToDb) {
    try {
        await ProductoModel.create(dataToDb);
    } catch (error) {
        logger.error.error(error);
    }
}

async function findAllPersistenceProducto() {
    try {
        const prodInDb = await ProductoModel.find({});
        return prodInDb;
    } catch (error) {
        logger.error.error(error);
    }
}

async function findByIDPersistenceProducto(_id) {
    try {
        const prodById = await ProductoModel.findOne({ _id });
        return prodById;
    } catch (error) {
        logger.error.error(error);
    }
}

async function deletePersistenceProducto(_id) {
    try {
        const prodToDel = await ProductoModel.deleteOne({ _id });
        return prodToDel;
    } catch (error) {
        logger.error.error(error);
    }
}

async function updatePersistenceProducto(_id, data) {
    try {
        const prodUpdated = await ProductoModel.updateOne({ _id }, data, { new: true });
        return prodUpdated;
    } catch (error) {
        logger.error.error(error);
    }
}

module.exports = {
    addPersistenceProducto,
    findAllPersistenceProducto,
    deletePersistenceProducto,
    updatePersistenceProducto,
    findByIDPersistenceProducto
}