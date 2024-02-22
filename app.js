// Dependencies
const express = require('express');

// Config
const app = express();

// locations
const locationsController = require('./controllers/locations.controller.js') // importing
app.use('/locations', locationsController) // mounting controller to path

// Routes
app.get('/',(req, res) => {
    res.json({'message':'Hello, world!'});
})

// Export
module.exports = app;