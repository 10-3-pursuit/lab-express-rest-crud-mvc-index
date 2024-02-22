const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller.js')

const equipmentController = require('./controllers/machines.controller.js')

const peopleController = require('./controllers/persons.controller.js')

// MIDDLEWARE FOR CONTROLLERS
app.use('/locations', locationsController)
app.use('/equipment', equipmentController)
app.use('/people', peopleController)

// ROUTES
app.get('/', (req, res) => {
    res.send('"Hello, world!"')
  })

  // 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Page not found' })
})


  

  module.exports = app