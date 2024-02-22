// Dependencies
const express = require('express');

// Config
const app = express();

// locations
const locationsController = require('./controllers/locations.controller.js') // importing
app.use('/locations', locationsController); // mounting controller to path

// machines
const machinesController = require('./controllers/machines.controller.js');
app.use('/machines', machinesController);

// persons
const personsController = require('./controllers/persons.controller.js');
app.use('/persons', personsController);

// plans
const plansController = require('./controllers/plans.controller.js');
app.use('/plans', plansController);

// Routes
app.get('/',(req, res) => {
    res.json({ 'message':'Hello, world!' });
})

// Export
module.exports = app;