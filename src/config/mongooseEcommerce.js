const mongoose = require('mongoose');

class EcommerceDbConnect {

    constructor() {
        this.connection = this.createConnection()
    }

    createConnection() {
        const uri = 'mongodb://localhost:27017/ecommerce'
        const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
        mongoose.connect(uri, options)
            .then(() => { console.log('Conectado a Mongo') },
                err => { err }
            )
    }
}

module.exports = EcommerceDbConnect
