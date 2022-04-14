const express = require('express')
const router = express.Router()
const { validationResult, body } = require('express-validator')
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')
async function verifyErrors (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
  return false
}
async function searchUser (req, res) {
  const { email, password } = req.body
  try {
    const userDB = await Usuario.findOne({
      email: email
    })
    if (!userDB) {
      return res.status(400).send('false')
    } else {
      const validPassword = await bcrypt.compare(password, userDB.password)
      if (!validPassword) {
        return res.status(400).send('false')
      } else {
        return res.send('true')
      }
    }
  } catch (error) {
    res.send(error.message)
  }
}

router.post(
  '/',
  body('email').isEmail().normalizeEmail().withMessage('Email invalid'),
  body('password').isLength({ min: 5 }).withMessage('Password requerido'),
  verifyErrors,
  searchUser
)

router.post('/createadmin', async (req, res) => {
  try {
    const { email, password } = req.body
    const validar = await Usuario.findOne({
      email: 'admin@rangersnacks.com'
    })
    if (!validar === null) {
      return res.status(400).send('El usuario ya existe')
    } else {
      const creado = await Usuario.create({
        name: 'admin',
        email: email,
        password: await bcrypt.hash(password, 10)
      })
      await creado.save()

      return res.send('Usuario creado')
    }
  } catch (error) {
    return res.status(400).send('Error')
  }
})

module.exports = router
