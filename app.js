const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller.js')

const machinesController = require('./controllers/machines.controller.js')

// MIDDLEWARE FOR CONTROLLERS
app.use('/locations', locationsController)
app.use('/equipment', machinesController)

// ROUTES
app.get('/', (req, res) => {
    res.send('"Hello, world!"')
  })

  // 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Page not found' })
})


  

  module.exports = app