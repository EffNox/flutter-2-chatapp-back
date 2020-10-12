const { connect, pluralize } = require('mongoose')
require('dotenv').config()

const dbCon = async () => {
    try {
        pluralize(null)
        await connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log('DB ONLINE');
    } catch (er) {
        console.log(er);
        throw new Error('ERROR al inicializar la BD');
    }
}
module.exports = { dbCon }
