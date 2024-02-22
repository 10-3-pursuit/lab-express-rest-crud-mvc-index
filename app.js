// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

//import the controller in order to the tell the application to use the specific resource's controller
const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const personsController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')

//MIDDLEWARE FOR CONTROLLERS
//i want to use the controlers routes with this base url
app.use('/locations', locationsController)
app.use('/machines', machinesController)
app.use('/persons', personsController)
app.use('/plans', plansController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Sorry, no page found!' })
})

// EXPORT
module.exports = app