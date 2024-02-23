const express = require('express')

const app = express()

//ROUTES AND MIDDLEWARE
const locationsController = require('./controllers/locations.controller.js')
app.use('/locations', locationsController)

const personsController = require('./controllers/persons.controller.js')
app.use('/people', personsController)

const plansController = require('./controllers/plans.controller.js')
app.use('/plans', plansController)

const machinesController = require('./controllers/machines.controller.js')
app.use('/equipment', machinesController)


// 404 PAGE
app.get('*', (req, res) => {
    res.json({ error: 'Sorry, page not found' })
})

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to Express Fitness')
})

// EXPORT
module.exports = app;