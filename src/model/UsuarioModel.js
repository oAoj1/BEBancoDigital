const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    id:{type:String,require},
    nome:{type:String,require},
    email:{type:String,require},
    senha:{type:String,require}
})

const usuarios = mongoose.model('usuarios',usuarioSchema)

module.exports = usuarios