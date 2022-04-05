const express = require('express')
const router = express.Router()
const Usuario = require('../models/Usuario')
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body
    if (name === '' || email === '') {
      res.send('Todos los campos son obligatorios')
    } else {
      const validar = await Usuario.findOne({ email })
      if (validar) {
        res.send('El email ya esta registrado')
      } else {
        const usuario = new Usuario({ name, email })
        usuario.save()
          .then(data => {
            res.json(data)
          })
          .catch(err => {
            res.json(err)
          })
      }
    }
  } catch (err) {
    res.json(err)
  }
}
)

router.get('/', async (req, res) => {
  const allUsers = await Usuario.find()

  if (allUsers.length > 0) {
    res.json(allUsers)
  } else {
    res.json('No hay usuarios')
  }
})

// exportar
module.exports = router
