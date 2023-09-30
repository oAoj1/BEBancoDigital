const express = require('express')
const router = express.Router()
const DepositoController = require('../controllers/DepositoController.js')

router.get('/deposito', DepositoController.lerDepositos)
router.post('/deposito', DepositoController.criarDeposito)
router.get('/deposito/:id', DepositoController.lerDepositosID)
router.put('/deposito/:id', DepositoController.editarDeposito)
router.delete('/deposito/:id', DepositoController.deletarDeposito)

module.exports = router