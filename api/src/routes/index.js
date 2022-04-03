const { Router } = require('express')
const usuarios = require('./Usuarios')
const productos = require('./Productos')
const tipos = require('./Tipos')
const router = Router()
router.use('/Usuarios', usuarios)
router.use('/Productos', productos)
router.use('/Tipos', tipos)
module.exports = router
