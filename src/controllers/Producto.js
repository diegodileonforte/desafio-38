const { addServiceProducto, findAllServiceProducto, deleteServiceProducto, updateServiceProducto, findByIDServiceProducto } = require('../service/productos.service.js');
const logger = require('../config/winston.js');

class Producto {

    async add(req, res) {
        try {
            if (!req) {return res.status(404).json({ mensaje: 'Error al agregar un producto' })};
            const data = { ... await req.producto};
            addServiceProducto(data);
        } catch (error) {
            logger.error.error(error);
        }
    }

    async findAll(req, res) {
        try {
            const prodInDb = await findAllServiceProducto();
            return res.status(200).json(prodInDb);
        } catch (error) {
            logger.error.error(error);
        }
    }

    async findByID(req, res) {
        const _id = req.params.id;
        try {
            if (_id === "") {
                return res.status(404).json({ mensaje: 'Producto no encontrado', error });
            }
            const prodById = await findByIDServiceProducto(_id);
            if (!prodById) { return res.status(404).json({ mensaje: 'No se encontró el producto' }) }
            return res.status(200).json(prodById);
        } catch (error) {
            logger.error.error(error);
        }
    }

    async deleteProd(req, res) {
        const _id = req.params.id;
        try {
            if (_id === "") {
                return res.status(404).json({ mensaje: 'Producto no encontrado' });
            }
            const prodToDel = await deleteServiceProducto(_id);
            if (!prodToDel) { return res.status(404).json({ mensaje: 'Producto no encontrado' }); }
            return res.status(200).json({ mensaje: 'Producto eliminado con exito' });
        } catch (error) {
            logger.error.error(error);
        }
    }

    async update(req, res) {
        const _id = req.params.id;
        const data = { ...req.body };
        try {
            const prodUpdated = await updateServiceProducto(_id, data);
            return res.status(200).json({ prodUpdated, mensaje: 'Producto actualizado' });
        } catch (error) {
            logger.error.error(error);
        }
    }
}

module.exports = Producto