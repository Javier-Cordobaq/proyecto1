const { Schema, model } = require('mongoose')

const Productos = new Schema({
  name: String,
  price: {
    type: Number,
    default: 0
  },
  // tipo de producto
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Tipos'
  },
  image: String,
  date: {
    type: Date,
    default: Date.now
  }
}
)
module.exports = model('Productos', Productos)
