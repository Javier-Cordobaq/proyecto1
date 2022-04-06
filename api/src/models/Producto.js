const { Schema, model } = require('mongoose')

const Productos = new Schema({
  name: {String, required: true, unique: true},
  price: {
    type: Number,
    default: 0
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Tipos'
  },
  image: String,
  nutricional: String,
  detalle: String,
  date: {
    type: Date,
    default: Date.now
  }
}
)
module.exports = model('Productos', Productos)
