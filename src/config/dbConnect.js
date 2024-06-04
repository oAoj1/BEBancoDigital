require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECTION)

let db = mongoose.connection

module.exports = db