const { Schema, model } = require('mongoose')

const Productos = new Schema({
  name: String,
  price: {
    type: Number,
    default: 0
  },
  type: String,
  date: {
    type: Date,
    default: Date.now
  }
}
)
module.exports = model('Productos', Productos)
