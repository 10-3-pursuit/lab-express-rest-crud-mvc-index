// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

// ROUTES//locations
const locationsController = require('./controllers/locations.controller');

app.use('/locations', locationsController);

// Routes for plans
const plansController = require('./controllers/plans.controller');

app.use('/plans', plansController);

//ROUTES for persons
const personsController = require('./controllers/persons.controller');

app.use('/persons', personsController);

//machines
const machinesController = require('./controllers/machines.controller');

app.use('/machines', machinesController);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('*', (req, res) => {
    res.send('Page Not Found');
})

// EXPORT
module.exports = app