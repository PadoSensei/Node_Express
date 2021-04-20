const express = require('express')
const app = express()
const logger = require('./logger')
const  auth = require('./auth')
const morgan = require('morgan')

// req => middleware => res

app.use(morgan('tiny'))

app.get('/', [logger, auth], (req, res) => {
  
  res.send('Home')
})

app.get('/about', (req, res) => {
  console.log(req.user)
  res.send('About')
})


app.listen(5000, () => {
  console.log('Server running on 5000')
})