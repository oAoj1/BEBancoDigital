const express = require('express')
const router = express.Router()
const SaldoDivididoController = require('../controllers/SaldoDivididoController.js')

router.get('/saldodividido', SaldoDivididoController.lerSaldoDividido)

module.exports = router