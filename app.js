// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = express()

const locationsController = require('./controllers/locations.controller.js')
app.use('/locations', locationsController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// EXPORT
module.exports = app