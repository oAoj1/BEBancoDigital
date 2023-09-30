const express = require('express')
const router = express.Router()
const GastoController = require('../controllers/GastoController.js')

router.get('/gasto', GastoController.lerGastos)
router.post('/gasto', GastoController.criarGastos)
router.get('/gasto/filtrar', GastoController.filtrarGastos)
router.get('/gasto/:id', GastoController.lerGastosID)
router.put('/gasto/:id', GastoController.editarGastos)
router.delete('/gasto/:id', GastoController.excluirGastos)

module.exports = router