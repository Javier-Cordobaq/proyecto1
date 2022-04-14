const { Schema, model } = require('mongoose')
const Locales = new Schema({
  name: String,
  address: String,
  img: {
    type: String
  }
}
)
module.exports = model('Locales', Locales)
