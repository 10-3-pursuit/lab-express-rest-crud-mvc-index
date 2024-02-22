const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller.js')

// MIDDLEWARE FOR CONTROLLERS
app.use('/api/locations', locationsController)

// ROUTES
app.get('/', (req, res) => {
    res.send('"Hello, world!"')
  })

  

  module.exports = app