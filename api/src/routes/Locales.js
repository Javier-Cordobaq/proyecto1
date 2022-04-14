const express = require('express')
const router = express.Router()
const { validationResult, body } = require('express-validator')
const Locales = require('../models/Locales')
async function verifyErrors (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
  return false
}
async function createLocal (req, res) {
  try {
    const { name, img, address } = req.body
    const validar = await Locales.findOne({
      name: name
    })
    if (!validar === null) {
      return res.status(400).send('El local ya existe')
    } else {
      const creado = await Locales.create({
        name: name,
        img: img,
        address: address
      })
      await creado.save()

      return res.send('Local creado')
    }
  } catch (error) {
    return res.status(400).send('Error')
  }
}
// TRAER TODOS LOS LOCALES
async function getLocales (req, res) {
  try {
    const locales = await Locales.find()
    return res.json({
      locales
    })
  } catch (error) {
    return res.status(400).send('Error')
  }
}

// eliminar local
async function deleteLocal (req, res) {
  try {
    const { name } = req.body
    const local = await Locales.findOneAndDelete({
      name: name
    })
    if (!local) {
      return res.status(400).send('El local no existe')
    } else {
      return res.send('Local eliminado')
    }
  } catch (error) {
    return res.status(400).send('Error')
  }
}

router.post(
  '/crear-local',
  body('name').isString().not(),
  body('img').isString().not(),
  body('address').isString().not(),
  verifyErrors,
  createLocal
)

router.get('/', getLocales)
router.post('/borrar-local', deleteLocal)

module.exports = router
