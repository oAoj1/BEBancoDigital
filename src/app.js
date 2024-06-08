require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const db = require('./config/dbConnect.js')

const GastoRoute = require('./routes/GastoRoute.js')
const SaldoRoute = require('./routes/SaldoRoute.js')
const MetodoRoute = require('./routes/MetodoRoute.js')
const DepositoRoute = require('./routes/DepositoRoute.js')
const SomasGeraisRoute = require('./routes/SomasGeraisRoute.js')
const SaldoDivididoRoute = require('./routes/SaldoDivididoRoute.js')
const UsuarioRoute = require('./routes/UsuarioRoute.js')
const HistoricoRoute = require('./routes/HistoricosRoute.js')

const port = process.env.PORT

app.use(
    cors(),
    express.json(),
    GastoRoute,
    SaldoRoute,
    MetodoRoute,
    DepositoRoute,
    SomasGeraisRoute,
    SaldoDivididoRoute,
    UsuarioRoute,
    HistoricoRoute
)

app.listen(port, () => {
    console.log(`Server ligado http://localhost:${port}`)
})

app.get('/', (req,res) => {
    res.send('Anotando gastos')
})

db.once('open', () => {
    console.log('MongoDB conectado')
})
 
db.on('error', () => {
    console.log('Erro ao conectar com MongoDB')
})