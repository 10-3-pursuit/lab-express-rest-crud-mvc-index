// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World')
})

// Import controllers
const locationsController = require('./controllers/locations.controller.js');
const peopleController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller.js');
const equipmentController = require('./controllers/machines.controller.js');

// Use controllers
app.use('/locations', locationsController);
app.use('/people', peopleController);
app.use('/plans', plansController);
app.use('/equipment', equipmentController);

// 404 errors
app.use((req, res) => {
  res.status(404).json({ message: 'Sorry, no page found!' });
});


// EXPORT
module.exports = app