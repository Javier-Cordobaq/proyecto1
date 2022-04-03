const express = require('express')
const router = express.Router()
const Productos = require('../models/Producto')
const Tipos = require('../models/Tipos')

router.post('/', async (req, res) => {
  try {
    const { name, type, price, image } = req.body

    if (name === '' || type === '') {
      res.json({ message: 'Todos los campos son obligatorios' })
    } else {
      const valdar = await Productos.findOne({ name })
      if (valdar) {
        res.send( message: 'El producto ya existe' )
      } else {
        const tipo = await Tipos.findById(type)
        const usuario = new Productos({
          name,
          type: tipo._id,
          price,
          image
        })
        usuario.save()
          .then(data => {
            res.send('Producto guardado')
          })
          .catch(err => {
            res.send(err)
          })
      }
    }
  } catch (err) {
    res.json(err)
  }
})

router.get('/', async (req, res) => {
  const allProducts = await Productos.find()

  if (allProducts.length > 0) {
    res.json(allProducts)
  } else {
    res.json({ message: 'No hay productos' })
  }
})

// exportar
module.exports = router
