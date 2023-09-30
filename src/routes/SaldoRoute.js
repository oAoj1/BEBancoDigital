const express = require('express')
const router = express.Router()
const SaldoController = require('../controllers/SaldoController.js')

router.get('/saldo', SaldoController.lerSaldo)
router.post('/saldo/debitando/:id', SaldoController.debitandoSaldo)
router.get('/saldo/depositando', SaldoController.depositandoSaldo)
router.post('/saldo', SaldoController.criarSaldo)
router.put('/saldo/:id', SaldoController.editarSaldo)
router.get('/saldo/:id', SaldoController.lerSaldoID)

module.exports = router