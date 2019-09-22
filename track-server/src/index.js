const express = require('express')
const mongoose = require('mongoose')
const app = express()

const mongoUri = 'mongodb+srv://admin:ska37589@cluster0-2siig.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
})
mongoose.connection.on('connected', () => {
  console.log('Connected on mongo instance')
})
mongoose.connection.on('error', (err) => {
  console.error('Error connectiong to mongo', err)
})

app.get('/', (req, res) => {
  res.send('Hi there!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
