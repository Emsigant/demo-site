const mongoose = require('mongoose')
const DB_URL = process.argv.indexOf('DEV') >=0 ? 'mongodb://116.62.126.60:27017/demo':'mongodb://localhost:27017/demo'
async function initmongoose() {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true })
        console.log(`success to connect ${DB_URL}`)
    } catch (err) {
        throw new Error(`fail to connect ${DB_URL}`)
    }
    return mongoose
}
initmongoose()

module.exports = mongoose