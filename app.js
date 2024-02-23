// DEPENDENCIES
const express = require('express')


// CONFIGURATION
const app = express()

const locationsController = require('./controllers/locations.controller.js')
app.use('/locations', locationsController);

const peopleController = require('./controllers/people.controller.js')
app.use('/people',peopleController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// EXPORT
module.exports = app