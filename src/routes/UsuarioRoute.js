const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController.js')

router.get('/usuarios',UsuarioController.lerUsuarios)
router.get('/usuarios/:id',UsuarioController.lerUsuariosID)
router.delete('/usuarios/:id',UsuarioController.deletarUsuarios)

module.exports = router