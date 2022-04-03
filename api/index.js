const server = require('./src/app.js')
const mongoose = require('mongoose')
// Sincronizar todos los modelos a la vez
const uri = 'mongodb+srv://alvarovega:z6O8Wcqzx93gB0iL@proyecto1.ou6cw.mongodb.net/test'

const db = mongoose.connection

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
server.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001')
})
db.once('open', _ => {
  console.log('Conectado a la base de datos', uri)
})
db.on('error', err => {
  console.log('Error de conexión', err)
}
)