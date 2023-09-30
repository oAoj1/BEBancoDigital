const mongoose = require('mongoose')

const metodoSchema = new mongoose.Schema({
    id:String,
    gastoFundamental:{type: Number, require},
    gastoPessoal:{type: Number, require},
    reservaInvestimento:{type: Number, require}
})

const metodos = mongoose.model('metodos', metodoSchema)

module.exports = metodos