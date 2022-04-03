const { Schema, model } = require('mongoose')

const Usuario = new Schema({
  name: String,
  email: String,
  date: {
    type: Date,
    default: Date.now
  }
}
)
module.exports = model('Usuario', Usuario)
