// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = express()

const locationsController = require('./controllers/locations.controller.js')
app.use('/locations', locationsController);

const peopleController = require('./controllers/people.controller.js')
app.use('/people',peopleController);

const plansController = require('./controllers/plans.controller.js')
app.use('/plans', plansController);

const machinesController = require('./controllers/machines.controller.js')
app.use('/equipment', machinesController);

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// EXPORT
module.exports = app