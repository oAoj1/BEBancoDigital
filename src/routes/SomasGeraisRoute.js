const express = require('express')
const router = express.Router()
const SomasGeraisController = require('../controllers/SomasGeraisController.js')

router.get('/somasgerais', SomasGeraisController.lerSomasGerais)

module.exports = router