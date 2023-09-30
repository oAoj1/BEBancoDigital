const mongoose = require('mongoose')

const somasGeraisSchema = new mongoose.Schema({
    id:String,
    gastosSomados:{type:Number, require},
    depositosSomados:{type:Number, require},
    fundamentalSomado:{type:Number, require},
    pessoalSomado:{type:Number, require},
    reservaInvestimentoSomado:{type:Number, require}
})

const somasGerais = mongoose.model('somasGerais', somasGeraisSchema)

module.exports = somasGerais