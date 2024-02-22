// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

//Get controllers here
const locationsController = require('./controllers/locations.controller.js')
const machinesController = require('./controllers/machines.controller.js')
const personsController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')

//Middleware
app.use('/locations', locationsController)
app.use('/equipment', machinesController)
app.use('/people', personsController)
app.use('/plans', plansController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World')
})

// 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Sorry, no page found!' })
})

module.exports = app