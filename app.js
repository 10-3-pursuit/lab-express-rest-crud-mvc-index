// Dependencies
const express = require('express');

// Config
const app = express();

// locations
const locationsController = require('./controllers/locations.controller.js') // importing
app.use('/locations', locationsController); // mounting controller to path

// machines
const machinesController = require('./controllers/machines.controller.js');
app.use('/equipment', machinesController);

// persons
const personsController = require('./controllers/persons.controller.js');
app.use('/persons', personsController);

// plans
const plansController = require('./controllers/plans.controller.js');
app.use('/plans', plansController);

// Routes
app.get('/',(req, res) => {
    res.json({ 'message':'Hello, world!' });
});

// 404 page
app.get('*', (req, res) => {
    res
    .status(404)
    .json({ error: 'Sorry, page not found' })
});

// Export
module.exports = app;