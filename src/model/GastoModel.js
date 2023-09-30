const mongoose = require('mongoose')

const gastoSchema = new mongoose.Schema({
    id:String,
    nome:{type: String, require},
    valor:{type: Number, require},
    classificacao:{type:String, require},
    data:{type: String, require},
    tipo:{type: String, require}
})

const gastos = mongoose.model('gastos', gastoSchema)

module.exports = gastos