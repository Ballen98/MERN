const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 2333

app.use(cors())
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// connect MongoDB
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

//Router
// app.use('/exercise', require('./routes/exercise'))
app.use('/users', require('./routes/users'))

app.get('/', (req, res) => {
  res.send('Hello')
})
app.listen(port, () => console.log(`Server is running on port ${port}`))
