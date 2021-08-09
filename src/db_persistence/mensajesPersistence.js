const MensajeModel = require('../models/mensajeSchema.js');
const EcommerceDbConnect = require('../config/mongooseEcommerce.js');
const logger = require('../config/winston.js');

class MensajePersistence {

    constructor() {
        this.cxn = new EcommerceDbConnect();
    }

    async addMsgPersistence(mensaje) {
        console.log(mensaje);
        try {
            const newMsg = await MensajeModel.create(mensaje);
            return newMsg;
        } catch (error) {
            logger.error.error(error);
        }
    }

    async findAllMsgPersistence() {
        try {
            const mensajes = await MensajeModel.find();
            return mensajes;
        } catch (error) {
            logger.error.error(error);
        }
    }

    async normalizedDataPersistence() {
        try {
            const mensajes = await MensajeModel.find();
            return mensajes;
        } catch (error) {
            logger.error.error(error);
        }
    }
}

module.exports = MensajePersistence;