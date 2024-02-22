// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()


// Locations
const locationsController = require('./controllers/locations.controller.js')

app.use('/locations', locationsController)

// Machines
const machinesController = require('./controllers/machines.controller.js')

app.use('/equipment', machinesController)

// Persons
const personsController = require('./controllers/persons.controller.js')

app.use('/people', personsController)

// Plans
const plansController = require('./controllers/plans.controller.js')

app.use('/plans', plansController)

// ROUTES
app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Sorry, page not found' })
})

// EXPORT
module.exports = app