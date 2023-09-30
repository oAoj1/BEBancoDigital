const express = require('express')
const router = express.Router()
const MetodoController = require('../controllers/MetodoController.js')

router.get('/metodo', MetodoController.lerMetodo)
router.post('/metodo', MetodoController.criarMetodo)
router.put('/metodo/:id', MetodoController.editarMetodo)
router.get('/metodo/:id', MetodoController.lerMetodoID)

module.exports = router