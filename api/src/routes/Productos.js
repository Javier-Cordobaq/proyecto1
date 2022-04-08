const express = require('express')
const router = express.Router()
const Productos = require('../models/Producto')
const Tipos = require('../models/Tipos')

router.post('/', async (req, res) => {
  try {
    const { name, type, price, image, nutricional, detalle } = req.body

    if (name === '' || type === '') {
      res.json({ message: 'Todos los campos son obligatorios' })
    } else {
      const valdar = await Productos.findOne({ name })
      if (valdar) {
        res.send('El producto ya existe')
      } else {
        const tipo = await Tipos.findById(type)
        const usuario = new Productos({
          name,
          type: tipo._id,
          price,
          image,
          nutricional,
          detalle
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
  const allProducts = await Productos.find().populate('type', { name: 1 })

  if (allProducts.length > 0) {
    res.json(allProducts)
  } else {
    res.send('No hay productos')
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const allProducts = await Productos.findById(id)
    if (allProducts) {
      res.status(200).json(allProducts)
    } else {
      res.send('No hay productos')
    }
  } catch (err) {
    res.status(500).send(err)
  }
})

// exportar
module.exports = router
