const server = require('./src/app.js')
const mongoose = require('mongoose')
require('dotenv').config()
// Sincronizar todos los modelos a la vez
const uri = process.env.MONGO_URI

const db = mongoose.connection

/* app.use(express.static(__dirname + '../client/build/'))
 */// Luego le decimos a express que sirva todo eso desde el home
/* app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/', 'index.html'))
})
 */
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
server.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
})
db.once('open', _ => {
  console.log('Mongo Online')
})
db.on('error', err => {
  console.log('Error de conexión', err)
}
)

/* app.use(express.static(__dirname + "../client/build/"));
//Luego le decimos a express que sirva todo eso desde el home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/", "index.html"))
}); */
