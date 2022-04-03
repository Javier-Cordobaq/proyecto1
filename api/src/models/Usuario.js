const { Schema, model } = require('mongoose')

const Ventas = new Schema({
  name: String,
  email: String,
  date: {
    type: Date,
    default: Date
  }
}
)
module.exports = model('Ventas', Ventas)
