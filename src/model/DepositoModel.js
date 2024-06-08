const mongoose = require('mongoose')

const depositoSchema = new mongoose.Schema({
    id:String,
    valor:{type: Number, require},
    data:{type: String, require}
})

const depositos = mongoose.model('depositos', depositoSchema)

module.exports = depositos