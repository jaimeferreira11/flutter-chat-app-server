const mongoose = require('mongoose');

const dbConnection = async () => {
    try {

        console.log('Init BD');


        await mongoose.connect(process.env.DB_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB online');


    } catch (error) {
        console.log(error);
        throw new Error('Error de conexion a la base de datos');

    }
}

module.exports = {
    dbConnection
}