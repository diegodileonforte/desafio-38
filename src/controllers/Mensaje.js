const { addMsgService, findAllMsgService, normalizedDataService } = require('../service/mensajes.service.js');
const logger = require('../config/winston.js');

class Mensaje {

    async addMsg(req, res) {
        try {
            if (!req) {
                return res.status(404).json({ mensaje: 'Error al agregar un producto' })
            };
            const data = await { ...req };
            await addMsgService(data);
        } catch (error) {
            logger.error.error(error);
        }
    }

    async findAllMsg(req, res) {
        try {
            let { id, mensajes } = await findAllMsgService();
            console.log(id)
            console.log(mensajes)

            return res.status(200).json({ id, mensajes });
        } catch (error) {
            logger.error.error(error);
        }
    }

    async normalizedData(req, res) {
        try {
            let normalizedData = await normalizedDataService();
            console.log(normalizedData)
            res.send(normalizedData);
        } catch (error) {
            logger.error.error(error);
        }
    }
}

module.exports = Mensaje;