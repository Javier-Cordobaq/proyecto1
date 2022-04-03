const { Schema, model } = require('mongoose')

const Tipos = new Schema({
  name: {
    type: String,
    required: true
  }
}
)
module.exports = model('Tipos', Tipos)
