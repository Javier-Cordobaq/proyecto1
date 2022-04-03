const express = require('express')
const router = express.Router()
const Tipos = require('../models/Tipos')

router.post('/', async (req, res) => {
  const { name } = req.body
  try {
    const tipo = new Tipos({ name })
    await tipo.save()
    res.json({ message: 'Tipo guardado' })
  } catch (err) {
    res.json('No se pudo guardar el tipo')
  }
}
)

router.get('/', async (req, res) => {
  try {
    const allTipos = await Tipos.find()
    if (allTipos.length > 0) {
      res.json(allTipos)
    } else {
      res.json({ message: 'No hay tipos' })
    }
  } catch (err) {
    res.json('No se pudo guardar el tipo')
  }
}
)

module.exports = router
