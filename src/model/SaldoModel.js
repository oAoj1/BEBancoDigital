const mongoose = require('mongoose')

let saldoSchema = new mongoose.Schema({
    id:String,
    saldo:{type: Number, require}
})

let saldos = mongoose.model('saldos', saldoSchema)

module.exports = saldos