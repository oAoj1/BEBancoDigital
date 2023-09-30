const mongoose = require('mongoose')

const saldoDivididoSchema = new mongoose.Schema({
    id:String,
    saldoFundamental:{type:Number, require},
    saldoPessoal:{type:Number, require},
    saldoReservaInvestimento:{type:Number, require}
})

const saldoDivididos = mongoose.model('saldoDivididos', saldoDivididoSchema)

module.exports = saldoDivididos