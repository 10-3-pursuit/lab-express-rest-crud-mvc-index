// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

// ROUTES//locations
const locationsController = require('./controllers/locations.controller');

app.use('/locations', locationsController);

//machines
const machinesController = require('./controllers/machines.controller');

app.use('/machines', machinesController);

app.get('/', (req, res) => {
    res.send('Hello World')
});

// EXPORT
module.exports = app