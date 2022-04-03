const express = require('express')
const router = express.Router()
const Productos = require('../models/Producto')

router.post('/', async (req, res) => {
  const { name, type, price } = req.body
  const usuario = new Productos({ name, type, price })
  
  usuario.save()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
}
)

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
