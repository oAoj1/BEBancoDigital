const express = require('express')
const router = express.Router()
const HistoricoController = require('../controllers/HistoricoController.js')

router.get('/historicogastos',HistoricoController.lerHistoricoGastos)
router.get('/historicodepositos',HistoricoController.lerHistoricoDepositos)

module.exports = router