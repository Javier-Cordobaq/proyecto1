const { Router } = require('express')
const Usuario = require('../models/Usuario')
const usuarios = require('./Usuarios')
const productos = require('./Productos')
const router = Router()
router.use('/Usuarios', usuarios)
router.use('/Productos', productos)

module.exports = router
