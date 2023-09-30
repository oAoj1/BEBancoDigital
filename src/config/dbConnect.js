const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://joao:123@cluster0.uciigzh.mongodb.net/lista-gastos')

let db = mongoose.connection

module.exports = db